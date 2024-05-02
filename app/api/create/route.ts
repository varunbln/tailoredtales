import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
const { GoogleGenerativeAI } = require("@google/generative-ai");
import { sql } from "@vercel/postgres";
import OpenAI from "openai";
import fs from "fs";
import path from "path";
import { put } from "@vercel/blob";
const sharp = require("sharp");
import fetch from "node-fetch";

export const maxDuration = 300;

const storePodcastEpisodesDeclaration = {
  name: "storePodcastEpisodes",
  parameters: {
    type: "OBJECT",
    description:
      "Store the podcast episodes when given a list of episodes with a title and description.",
    properties: {
      episodes: {
        type: "ARRAY",
        description:
          "The list of episodes, each having a title and a description.",
        properties: {
          title: {
            type: "STRING",
            description: "The title of the episode.",
          },
          description: {
            type: "STRING",
            description: "The description of the episode.",
          },
        },
      },
    },
    required: ["episodes"],
  },
};

const storePodcastEpisodeScriptsDeclaration = {
  name: "storePodcastEpisodeScripts",
  parameters: {
    type: "OBJECT",
    description:
      "Store the podcast episode scripts when given a list of episode numbers and scripts.",
    properties: {
      episodes: {
        type: "ARRAY",
        description: "The list of episodes, each having a number and a script.",
        properties: {
          title: {
            type: "NUMBER",
            description: "The number of the episode.",
          },
          script: {
            type: "STRING",
            description: "The script of the episode.",
          },
        },
      },
    },
    required: ["episodes"],
  },
};

async function generatePodcastEpisodes(
  title: string,
  description: string,
  style: string,
  language: string,
  number_of_episodes: number
) {
  const podcast_details = `The podcast is called ${title}. The description is as follows: ${description}. The style of the podcast is ${style}. The podcast episode titles and descriptions should be in ${language}.`;

  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({
    model: "gemini-pro",
    tools: { functionDeclarations: [storePodcastEpisodesDeclaration] },
  });
  const chat = model.startChat();

  const prompt =
    `Create a list of ${number_of_episodes} podcast episodes with titles and descriptions for the podcast described below.
   The episodes should be broken down in such a way that they cover all the content asked for in the podcast
   description across the course of the episodes. The episodes should be cohesive in structure and have a story-like
   flow. The episode titles should sound interesting and engaging but not too long.
   The description of the episode should contain the main points that the episode covers in a concise manner.
   After you're done, store the list of episodes by passing them into the tool storePodcastEpisodes.
   The podcast details are as follows: ` + podcast_details;

  console.log(prompt);

  const result = await chat.sendMessage(prompt);
  console.log("%j", result);

  const call = result.response.functionCalls()[0];
  if (call === null) return null;

  return call.args.episodes;
}

async function generateEpisodeScript(
  podcast_title: string,
  title: string,
  description: string,
  style: string,
  language: string,
  avg_duration: string,
  episode_number: number,
  prev_episode_description: string
) {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({
    model: "gemini-1.0-pro-latest",
    generationConfig: {
      maxOutputTokens: 4000,
    },
  });
  const chat = model.startChat();

  const prompt =
    `You are a podcast script generating AI. The script should be in a conversational tone.
  Give a 1-2 line gist of what the previous episode talked about and then continue with the introduction to this episode.
  The introduction should give a brief overview of what the episode will cover. After the introduction, continue with the main content
  of the episode. The main content of the episode should cover the points in the episodes description. Elaborate
  on each point, and structure it in a cohesive, story-like manner. The episode script should be long and informative.
  The script should be engaging, interesting and in the style of the podcast. Do not use any additional formatting in the episode script. Just output the raw script itself, as it will be read
  out by a text-to-speech bot. Do not use any section breaks, it should be a continuous, free flowing script. 
  At the end of the script, include a short outro and ask them to listen to the next episode for more. The script should be in
  the language that the user requests.` +
    `Create a script for episode ${episode_number} of the podcast ${podcast_title}. The episodes title is ${title}.
  The previous episodes' description is as follows: ${prev_episode_description}.
    This episode should cover the following content: ${description}. The style of 
    the podcast is ${style}. The episode script should be in ${language}. `;

  console.log(prompt);

  const result = await chat.sendMessage(prompt);
  console.log("%j", result);
  if (result.response === null) return null;
  if (result.response.candidates === null) return null;
  return result.response.candidates[0].content.parts[0].text;
}

async function generatePodcastSubtitle(
  title: string,
  description: string,
  style: string,
  language: string
) {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({
    model: "gemini-pro",
  });
  const chat = model.startChat();

  const prompt = `Create a subtitle for the podcast titled: ${title} with the description: ${description}.
  The style of the podcast is ${style}. The podcast should be in ${language}. The subtitle should be engaging and interesting.
  The subtitle should be exactly 1-3 sentences long. Output nothing but the subtitle itself.`;

  const result = await chat.sendMessage(prompt);
  console.log("%j", result);
  if (result.response === null) return null;
  if (result.response.candidates === null) return null;
  return result.response.candidates[0].content.parts[0].text;
}

export async function POST(request: Request) {
  const body = await request.json();
  const { userId } = auth();

  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const {
    title,
    description,
    style,
    language,
    number_of_episodes,
    avg_duration,
  } = body;

  let podcast_id;
  try {
    const { rows } =
      await sql`INSERT INTO Podcasts (user_id, title) VALUES (${userId}, ${title}) RETURNING podcast_id;`;
    console.log(rows);
    podcast_id = rows[0].podcast_id;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
  console.log(podcast_id);

  const subtitle = await generatePodcastSubtitle(
    title,
    description,
    style,
    language
  );
  await sql`UPDATE Podcasts SET subtitle = ${subtitle} WHERE podcast_id = ${podcast_id}`;

  const openai = new OpenAI({});
  openai.chat.completions
    .create({
      messages: [
        {
          role: "system",
          content: `You are a helpful assistant who generates dalle prompts for podcast covers.
          You should create a prompt that generates simplistic, minimalistic covers based on the podcast details given.
          Don't include any text in the image at all. Output only the prompt and nothing else.
          `,
        },
        {
          role: "user",
          content: `The podcast is titled: ${title} with the description: ${description}`,
        },
      ],
      model: "gpt-4-turbo",
    })
    .then((response) => {
      let prompt = `a minimalistic podcast cover image for a podcast titled: ${title}
    with the description: ${description}. Don't include any text in the image at all. The image should be
    minimalistic and simple.
    `;
      if (response.choices[0].message.content !== null) {
        prompt = response.choices[0].message.content;
      }
      console.log(prompt);
      openai.images
        .generate({
          model: "dall-e-3",
          prompt: prompt,
          n: 1,
          size: "1024x1024",
          response_format: "url",
        })
        .then((response) => {
          const img_url = response.data[0].url;
          if (img_url === null || img_url === undefined) return;
          fetch(img_url)
            .then((res: any) => res.arrayBuffer())
            .then((buffer: any) => {
              return sharp(buffer).png().toBuffer();
            })
            .then((pngBuffer: any) => {
              put(`podcast_covers/${podcast_id}.png`, pngBuffer, {
                access: "public",
              })
                .then((response) => {
                  sql`UPDATE Podcasts SET cover = ${response.url} WHERE podcast_id = ${podcast_id}`;
                })
                .catch((err) =>
                  console.error("Error uploading the image:", err)
                );
            })
            .catch((err: any) =>
              console.error("Error fetching or processing the image:", err)
            );
        });
    });

  const episodes = await generatePodcastEpisodes(
    title,
    description,
    style,
    language,
    number_of_episodes
  );
  console.log(episodes);
  if (episodes === null) {
    return new NextResponse("Error generating episodes", { status: 500 });
  }

  let episode_ids = [];
  for (const [i, episode] of episodes.entries()) {
    const { rows } = await sql`
    INSERT INTO Episodes (podcast_id, title, description, episode_number)
    VALUES (${podcast_id}, ${episode.title}, ${episode.description}, ${i + 1})
    RETURNING episode_id;
  `;
    episode_ids.push(rows[0].episode_id);
  }
  console.log(episode_ids);
  let episode_index = 0;
  for (const episode_id of episode_ids) {
    const script = await generateEpisodeScript(
      title,
      episodes[episode_index].title,
      episodes[episode_index].description,
      style,
      language,
      avg_duration,
      episode_index + 1,
      episode_index === 0
        ? "There is no previous episode as this is the first episode of the podcast. Instead, welcome users to the podcast " +
            title
        : episodes[episode_index - 1].description
    );
    console.log(script);
    await sql`UPDATE Episodes SET script = ${script} WHERE episode_id = ${episode_id}`;

    const speechFile = path.resolve(`./${podcast_id}_${episode_index}.mp3`);
    openai.audio.speech
      .create({
        model: "tts-1",
        voice: "alloy",
        input: script,
      })
      .then(async (response) => {
        const buffer = Buffer.from(await response.arrayBuffer());
        await fs.promises.writeFile(speechFile, buffer);
        const mp3Content = await fs.promises.readFile(speechFile);
        const { url } = await put(
          `podcasts/${podcast_id}_${episode_index}.mp3`,
          mp3Content,
          { access: "public" }
        );
        console.log("\n" + url + "\n");
        await sql`UPDATE Episodes SET url = ${url} WHERE episode_id = ${episode_id}`;
      });
    episode_index++;
    if (script === null) {
      return new NextResponse("Error generating script", { status: 500 });
    }
  }
  return NextResponse.json({
    message: "Successfully generated podcast",
    status: 200,
  });
}
