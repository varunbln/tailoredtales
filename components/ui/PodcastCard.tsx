"use client";

import React from "react";
import { CardContent, Card } from "@/components/ui/card";
import { redirect } from "next/navigation";

export default function PodcastCard({
  podcast_title,
  podcast_image,
}: {
  podcast_title: string;
  podcast_image: string;
}) {
  return (
    <Card
      className="relative h-[200px] w-[200px] overflow-hidden"
      onClick={() => redirect("google.com")}
    >
      <img
        alt="Card background"
        className="absolute inset-0 h-full w-full object-cover"
        src={"data:image/png;base64," + podcast_image}
        height="400"
        style={{
          aspectRatio: "800/400",
          objectFit: "cover",
        }}
        width="800"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      <CardContent className="relative z-10 flex h-full flex-col justify-end gap-2 p-6 text-white">
        <h3 className="text-2xl font-bold tracking-tight">{podcast_title}</h3>
      </CardContent>
    </Card>
  );
}
