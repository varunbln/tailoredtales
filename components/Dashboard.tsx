import { sql } from "@vercel/postgres";
import PodcastCard from "./ui/PodcastCard";

export default async function Dashboard({ user_id }: { user_id: string }) {
  let data;

  try {
    data = await sql`SELECT * FROM podcasts WHERE user_id=${user_id}`;
  } catch (e: any) {
    console.error(e);
    return <div>Failed to load podcasts</div>;
  }

  const { rows } = data;

  return (
    <div className="w-full md:h-full flex flex-col justify-center items-center gap-4 md:px-[10%] md:grid md:grid-rows-3 md:grid-cols-4 md:gap-16 ">
      {rows.map((row: any) => {
        return (
          <PodcastCard
            key={row.podcast_id}
            podcast_id={row.podcast_id}
            podcast_title={row.title}
            podcast_image={row.cover}
          />
        );
      })}
    </div>
  );
}
