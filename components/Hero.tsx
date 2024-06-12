"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 md:px-0 sm:mt-64 mt-40">
      <div className="text-3xl md:text-5xl font-bold text-white text-center max-w-prose">
        Where Every Podcast Is a Personal Journey
      </div>
      <div className="font-light text-base md:text-xl text-neutral-200 py-4 max-w-prose my-4">
        TailoredTales - Dive into a universe of learning tailored just for you.
        Discover, grow, and satisfy your curiosity with podcasts crafted on your
        interests
      </div>
      <button className="rounded-xl inline-flex h-12 animate-shimmer items-center justify-center border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <Link className="rounded-xl cursor-pointer font-medium" href="/sign-up">
          Get Started
        </Link>
      </button>
    </main>
  );
}
