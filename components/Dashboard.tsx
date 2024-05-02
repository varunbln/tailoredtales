import { sql } from "@vercel/postgres";
import PodcastCard from "./ui/PodcastCard";

export default async function Dashboard() {
  let data;

  try {
    data = await sql`SELECT * FROM podcasts`;
  } catch (e: any) {
    console.error(e);
    return <div>Failed to load podcasts</div>;
  }

  const { rows } = data;

  return (
    <div>
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
