import PodcastPage from "@/components/PodcastPage";
import PodcastPagePlaceholder from "@/components/PodcastPagePlaceholder";
import { Suspense } from "react";

export default function Page({ params }: { params: { slug: string } }) {
  const podcast_id = params.slug;
  return (
    <Suspense fallback={<PodcastPagePlaceholder />}>
      <PodcastPage podcast_id={podcast_id} />
    </Suspense>
  );
}
