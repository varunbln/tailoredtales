"use client";

import React from "react";
import { CardContent, Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";

export default function PodcastCard({
  podcast_id,
  podcast_title,
  podcast_image,
}: {
  podcast_id: number;
  podcast_title: string;
  podcast_image: string;
}) {
  const router = useRouter();
  return (
    <Card
      className="relative h-[250px] w-[250px] overflow-scroll cursor-pointer"
      onClick={() => router.push("/podcast/" + podcast_id)}
    >
      <img
        alt="Card background"
        className="absolute inset-0 h-full w-full object-cover"
        src={podcast_image}
        height="400"
        style={{
          aspectRatio: "800/400",
          objectFit: "cover",
        }}
        width="800"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      <CardContent className="relative z-10 flex h-full flex-col justify-end gap-2 p-6 text-white">
        <h3 className="md:text-2xl text-lg font-bold tracking-tight">
          {podcast_title}
        </h3>
      </CardContent>
    </Card>
  );
}
