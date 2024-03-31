"use client";

import { GradientButton } from "./ui/GradientButton";
import Link from "next/link";

export default function Hero() {
    return (
        <main className="flex flex-1 w-full flex-col items-center justify-center text-center">
            <div className="text-3xl md:text-5xl font-bold text-white text-center max-w-prose">
                Where Every Podcast Is a Personal Journey
            </div>
            <div className="font-extralight text-base md:text-xl text-neutral-200 py-4 max-w-prose my-4">
                TailoredTales - Dive into a universe of learning tailored just
                for you. Discover, grow, and satisfy your curiosity with
                podcasts crafted on your interests
            </div>
            <GradientButton
                containerClassName="rounded-full"
                as="button"
                className="bg-black text-white flex items-center space-x-2"
            >
                <Link
                    className="rounded-xl cursor-pointer font-medium px-2 py-1"
                    href="/register"
                >
                    Get Started
                </Link>
            </GradientButton>
        </main>
    );
}
