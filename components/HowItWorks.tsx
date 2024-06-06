export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="flex flex-col justify-center items-center mt-96"
    >
      <h1 className="text-white mx-auto text-3xl font-bold tracking-normal md:text-5xl">
        How it works
      </h1>
      <p className="text-md text-neutral-400 my-8">
        All it takes to create a podcast is to choose a title, give a brief
        description of what you want it to be about and configure the settings
        to your liking!
      </p>
      <img
        className="rounded-md"
        src="/Create_Podcast.png"
        height={400}
        width={800}
      ></img>
    </section>
  );
}
