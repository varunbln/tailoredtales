export default function Page({ params }: { params: { slug: string } }) {
  const podcast_id = params.slug;
  return <PodcastPage podcast_id={podcast_id} />;
}
