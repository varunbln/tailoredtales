"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AudioPlayer from "react-h5-audio-player";
import { useState } from "react";
import Waveform from "./ui/Waveform";
import "react-h5-audio-player/lib/styles.css";

export default function PodcastEpisodes({ episodes }: { episodes: any[] }) {
  const [currentEpisode, setCurrentEpisode] = useState(
    episodes[0].episode_number
  );

  const [episode, setEpisode] = useState(episodes[0].url);
  function handleClick(url: string, episode_number: number) {
    setCurrentEpisode(episode_number);
    setEpisode(url);
    console.log(episode_number);
  }

  return (
    <div className="flex flex-col justify-start items-center w-full h-full">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Episode</TableHead>
            <TableHead>Episode Title</TableHead>
            <TableHead>Episode Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {episodes.map((episode_data) => (
            <TableRow
              key={episode_data.episode_id}
              onClick={() =>
                handleClick(episode_data.url, episode_data.episode_number)
              }
            >
              <TableCell className="font-medium">
                {currentEpisode === episode_data.episode_number ? (
                  <Waveform />
                ) : (
                  episode_data.episode_number
                )}
              </TableCell>
              <TableCell className="hover:underline cursor-pointer">
                {episode_data.title.replace("Episode ", "")}
              </TableCell>
              <TableCell>{episode_data.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <br />
      <AudioPlayer
        autoPlay
        src={episode}
        onPlay={(e) => console.log("onPlay")}
        autoPlayAfterSrcChange={true}
        className="w-full"
        layout="stacked-reverse"
      />
    </div>
  );
}
