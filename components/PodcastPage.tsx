import { sql } from "@vercel/postgres";
import Navbar from "./Navbar";
import PodcastEpisodes from "./PodcastEpisodes";

export default async function PodcastPage({
  podcast_id,
}: {
  podcast_id: string;
}) {
  let podcast_data;
  let episode_data;

  try {
    podcast_data =
      await sql`SELECT * FROM podcasts WHERE podcast_id = ${podcast_id}`;
    episode_data =
      await sql`SELECT episode_id, podcast_id, title, description, episode_number, url FROM episodes WHERE podcast_id = ${podcast_id} ORDER BY episode_number ASC`;
  } catch (e: any) {
    console.error(e);
    return <div>Failed to load podcast details</div>;
  }

  const { rows } = podcast_data;
  const podcast = rows[0];

  const { rows: episode_rows } = episode_data;
  const episodes = episode_rows;

  console.log(podcast, episodes);
  return (
    <div className="h-screen w-screen flex flex-col justify-start items-center">
      <Navbar />
      <div className="h-full w-full flex flex-col justify-start items-center bg-[rgb(12, 12, 13)] border-t border-zinc-800 p-8">
        <div className="w-full flex md:flex-row flex-col justify-start items-center">
          <img
            alt="Podcast cover"
            className="h-[200px] w-[200px] object-cover"
            src={podcast.cover}
          />
          <div className="flex flex-col ml-4 mt-4 md:mt-0">
            <h1 className="text-zinc-100 text-3xl md:text-5xl font-bold mb-2">
              {podcast.title}
            </h1>
            <p className="text-zinc-400">{podcast.subtitle}</p>
          </div>
        </div>
        <br />
        <PodcastEpisodes episodes={episodes} />
      </div>
    </div>
  );
}
