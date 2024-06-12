import Image from "next/image";
import Link from "next/link";

export default function Features() {
  return (
    <section
      id="features"
      className="flex flex-col justify-center items-center md:mt-80 mt-56"
    >
      <h1 className="text-white mx-auto text-3xl font-bold tracking-normal md:text-5xl">
        Features
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center px-5 pt-16 pb-10 md:px-10 gap-8">
        <div className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900 flex flex-col justify-center items-center border-2 border-[#cdcdcd">
          <Image
            src={`/learn-anything.webp`}
            alt="learn anything, anytime, anywhere"
            height="400"
            width="400"
            className="object-contain"
          />
          <p className="text-base sm:text-xl mt-4 mb-2 text-neutral-200 self-start">
            Learn Anything, Anytime
          </p>
          <p className="text-sm text-neutral-400">
            Whether it&apos;s the mysteries of outer space, the intricacies of
            human history, or the art of baking the perfect pizza dough, if it
            piques your interest, we&apos;re here to learn and explore it
            together.
          </p>
          <button className="rounded-xl mt-4 inline-flex h-12 animate-shimmer items-center justify-center border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <Link
              className="rounded-xl cursor-pointer font-medium"
              href="/sign-up"
            >
              Get Started
            </Link>
          </button>
        </div>
        <div className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900 flex flex-col justify-center items-center border-2 border-[#cdcdcd">
          <Image
            src={`/personalized-paths.webp`}
            alt="personalized learning paths"
            height="400"
            width="400"
            className="object-contain"
          />
          <p className="text-base sm:text-xl mt-4 mb-2 text-neutral-200 self-start">
            Personalized Learning Paths
          </p>
          <p className="text-sm text-neutral-400">
            TailoredTales uses advanced AI to understand your interests and
            curate podcast episodes that align with your curiosity and learning
            goals, creating a personalized learning journey.
          </p>
          <button className="rounded-xl mt-4 inline-flex h-12 animate-shimmer items-center justify-center border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <Link
              className="rounded-xl cursor-pointer font-medium"
              href="/sign-up"
            >
              Get Started
            </Link>
          </button>
        </div>
        <div className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900 flex flex-col justify-center items-center border-2 border-[#cdcdcd">
          <Image
            src={`/customizable-settings.png`}
            alt="customizable audio settings"
            height="400"
            width="400"
            className="object-contain"
          />
          <p className="text-base sm:text-xl mt-4 mb-2 text-neutral-200 self-start">
            Customizable Settings
          </p>
          <p className="text-sm text-neutral-400">
            Tailor your audio experience with customizable settings such as
            several different voice options, playback speed and more, fitting
            the app&apos;s functionality to your personal lifestyle.
          </p>
          <button className="rounded-xl mt-4 inline-flex h-12 animate-shimmer items-center justify-center border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <Link
              className="rounded-xl cursor-pointer font-medium"
              href="/sign-up"
            >
              Get Started
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}
