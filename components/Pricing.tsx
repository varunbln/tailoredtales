"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Pricing() {
    const [isMonthly, setIsMonthly] = useState(true);
    const pricing = {
        monthly: {
            free: "$0",
            pro: "$4.99",
            ultimate: "$19.99",
        },
        annually: {
            free: "$0",
            pro: "$49.99",
            ultimate: "$199.99",
        },
    };

    const changePlan = (plan: string) => () => {
        if (plan === "monthly") {
            setIsMonthly(true);
            document.getElementById("monthly-btn")?.classList.add("text-white");
            document
                .getElementById("monthly-btn")
                ?.classList.remove("text-zinc-300");
            document
                .getElementById("annually-btn")
                ?.classList.add("text-zinc-300");
            document
                .getElementById("annually-btn")
                ?.classList.remove("text-white");
        } else {
            setIsMonthly(false);
            document
                .getElementById("monthly-btn")
                ?.classList.add("text-zinc-300");
            document
                .getElementById("monthly-btn")
                ?.classList.remove("text-white");
            document
                .getElementById("annually-btn")
                ?.classList.add("text-white");
            document
                .getElementById("annually-btn")
                ?.classList.remove("text-zinc-300");
        }
    };

    return (
        <section id="pricing" className="text-white">
            <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
                <div className="mx-auto mb-8 max-w-3xl text-center md:mb-12">
                    <h2 className="text-3xl font-bold md:text-5xl">
                        Available Plans
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-sm text-zinc-300 md:text-base">
                        Choose from our dynamic pricing plans, crafted to fit
                        individuals of different listening behaviours and
                        preferences. Get started with TailoredTales today!
                    </p>
                </div>
                <div className="relative mx-auto mb-8 flex w-fit cursor-pointer flex-row rounded-xl border md:mb-8">
                    <button
                        className="relative z-[5] px-10 py-4"
                        onClick={changePlan("monthly")}
                    >
                        <p
                            id="monthly-btn"
                            className="text-sm font-semibold text-white sm:text-base"
                        >
                            Monthly
                        </p>
                    </button>
                    <button
                        className="relative z-[5] px-10 py-4"
                        onClick={changePlan("annually")}
                    >
                        <p
                            id="annually-btn"
                            className="text-sm font-semibold text-zinc-300 sm:text-base"
                        >
                            Annually
                        </p>
                    </button>
                    {isMonthly ? (
                        <div className="absolute left-2 top-[6px] z-0 h-4/5 w-[45%] rounded-md bg-zinc-950"></div>
                    ) : (
                        <div className="absolute left-[52%] top-[6px] z-0 h-4/5 w-[45%] rounded-md bg-zinc-950"></div>
                    )}
                </div>
                <div className="border w-max m-auto rounded-2xl py-1 px-4 text-slate-400 text-sm mb-5 transition duration-300 ease-in-out">
                    <span className="font-semibold animate-text-rainbow bg-gradient-to-r text-zinc-100 bg-clip-text text-transparent">
                        Get 2 months free
                    </span>{" "}
                    when you sign up for an annual plan
                </div>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-4">
                    <div className="mx-auto max-w-md items-start rounded-md border-2 border-[#cdcdcd] p-8">
                        <div className="mb-4 w-fit rounded-[5px] bg-black px-4 py-1.5">
                            <p className="text-sm font-bold text-white">FREE</p>
                        </div>
                        <p className="mb-6 text-sm font-light text-zinc-300 sm:text-base md:mb-10">
                            Start your journey with TailoredTales Free Plan.
                            Enjoy up to 8 hours of personalized podcast
                            listening every month, perfect for casual learners
                            and explorers. Dive into a world of knowledge today,
                            absolutely free.
                        </p>
                        <h2 className="mb-5 text-3xl font-bold md:mb-6 md:text-5xl">
                            {isMonthly
                                ? pricing.monthly.free
                                : pricing.annually.free}
                            <span className="text-sm font-light sm:text-sm">
                                {isMonthly ? "/month" : "/year"}
                            </span>
                        </h2>
                        <button className="rounded-xl inline-flex h-12 animate-shimmer items-center justify-center border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            <Link
                                className="rounded-xl cursor-pointer font-medium"
                                href="/sign-up"
                            >
                                Get Started
                            </Link>
                        </button>
                        <div className="mt-2 flex flex-row items-center">
                            <div className="mr-2 flex w-4 flex-row items-center">
                                <Image
                                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a84be6cf60_check-mark.svg"
                                    alt=""
                                    width="100"
                                    height="100"
                                    className="mr-2 inline-block w-4 invert"
                                />
                            </div>
                            <p className="text-sm sm:text-base">
                                8 listening hours per month
                            </p>
                        </div>
                        <div className="mt-2 flex flex-row items-center">
                            <div className="mr-2 flex w-4 flex-row items-center">
                                <Image
                                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a84be6cf60_check-mark.svg"
                                    alt=""
                                    width="100"
                                    height="100"
                                    className="mr-2 inline-block w-4 invert"
                                />
                            </div>
                            <p className="text-sm sm:text-base">
                                Access to only default voice
                            </p>
                        </div>
                        <div className="mt-2 flex flex-row items-center">
                            <div className="mr-2 flex w-4 flex-row items-center">
                                <Image
                                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a84be6cf60_check-mark.svg"
                                    alt=""
                                    width="100"
                                    height="100"
                                    className="mr-2 inline-block w-4 invert"
                                />
                            </div>
                            <p className="text-sm sm:text-base">
                                Higher waiting time
                            </p>
                        </div>
                        <div className="mt-2 flex flex-row items-center">
                            <div className="mr-2 flex w-4 flex-row items-center">
                                <Image
                                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a84be6cf60_check-mark.svg"
                                    alt=""
                                    width="100"
                                    height="100"
                                    className="mr-2 inline-block w-4 invert"
                                />
                            </div>
                            <p className="text-sm sm:text-base">
                                No pitch/tone/speed calibration
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto max-w-md items-start rounded-md border-2 border-[#cdcdcd] p-8">
                        <div className="mb-4 w-fit rounded-[5px] bg-black px-4 py-1.5">
                            <p className="text-sm font-bold text-white">PRO</p>
                        </div>
                        <p className="mb-6 text-sm font-light text-zinc-300 sm:text-base md:mb-10">
                            Take your curiosity further with TailoredTales Pro
                            Plan. Gain access to 50 hours of podcast listening
                            per month, ensuring you never run out of stories and
                            explore any topic that piques your interest.
                        </p>
                        <h2 className="mb-5 text-3xl font-bold md:mb-6 md:text-5xl">
                            {isMonthly
                                ? pricing.monthly.pro
                                : pricing.annually.pro}
                            <span className="text-sm font-light sm:text-sm">
                                {isMonthly ? "/month" : "/year"}
                            </span>
                        </h2>
                        <button className="rounded-xl inline-flex h-12 animate-shimmer items-center justify-center border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            <Link
                                className="rounded-xl cursor-pointer font-medium"
                                href="/sign-up"
                            >
                                Get Started
                            </Link>
                        </button>
                        <div className="mt-2 flex flex-row items-center">
                            <div className="mr-2 flex w-4 flex-row items-center">
                                <Image
                                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a84be6cf60_check-mark.svg"
                                    alt=""
                                    width="100"
                                    height="100"
                                    className="mr-2 inline-block w-4 invert"
                                />
                            </div>
                            <p className="text-sm sm:text-base">
                                50 listening hours per month
                            </p>
                        </div>
                        <div className="mt-2 flex flex-row items-center">
                            <div className="mr-2 flex w-4 flex-row items-center">
                                <Image
                                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a84be6cf60_check-mark.svg"
                                    alt=""
                                    width="100"
                                    height="100"
                                    className="mr-2 inline-block w-4 invert"
                                />
                            </div>
                            <p className="text-sm sm:text-base">
                                Access to all AI voices
                            </p>
                        </div>
                        <div className="mt-2 flex flex-row">
                            <div className="mr-2 flex w-4">
                                <Image
                                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a84be6cf60_check-mark.svg"
                                    alt=""
                                    width="100"
                                    height="100"
                                    className="mr-2 inline-block w-4 invert"
                                />
                            </div>
                            <p className="text-sm sm:text-base">
                                No waiting time
                            </p>
                        </div>
                        <div className="mt-2 flex flex-row">
                            <div className="mr-2 flex w-4">
                                <Image
                                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a84be6cf60_check-mark.svg"
                                    alt=""
                                    width="100"
                                    height="100"
                                    className="mr-2 inline-block w-4 invert"
                                />
                            </div>
                            <p className="text-sm sm:text-base">
                                Access to pitch/tone/speed calibration
                            </p>
                        </div>
                        <div className="mt-2 flex flex-row">
                            <div className="mr-2 flex w-4">
                                <Image
                                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a84be6cf60_check-mark.svg"
                                    alt=""
                                    width="100"
                                    height="100"
                                    className="mr-2 inline-block w-4 invert"
                                />
                            </div>
                            <p className="text-sm sm:text-base">
                                Offline Listening
                            </p>
                        </div>
                        <div className="mt-2 flex flex-row">
                            <div className="mr-2 flex w-4">
                                <Image
                                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a84be6cf60_check-mark.svg"
                                    alt=""
                                    width="100"
                                    height="100"
                                    className="mr-2 inline-block w-4 invert"
                                />
                            </div>
                            <p className="text-sm sm:text-base">
                                Fast Customer Support
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto max-w-md items-start rounded-md border-2 border-[#cdcdcd] p-8">
                        <div className="mb-4 w-fit rounded-[5px] bg-black px-4 py-1.5">
                            <p className="text-sm font-bold text-white">
                                ULTIMATE
                            </p>
                        </div>
                        <p className="mb-6 text-sm font-light text-zinc-300 sm:text-base md:mb-10">
                            Unleash the full potential of your learning with
                            TailoredTales Ultimate Plan. With unlimited
                            listening hours, your exploration knows no bounds.
                            Elevate your podcast experience to the ultimate
                            level!
                        </p>
                        <h2 className="mb-5 text-3xl font-bold md:mb-6 md:text-5xl">
                            {isMonthly
                                ? pricing.monthly.ultimate
                                : pricing.annually.ultimate}
                            <span className="text-sm font-light sm:text-sm">
                                {isMonthly ? "/month" : "/year"}
                            </span>
                        </h2>
                        <button className="rounded-xl inline-flex h-12 animate-shimmer items-center justify-center border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            <Link
                                className="rounded-xl cursor-pointer font-medium"
                                href="/sign-up"
                            >
                                Get Started
                            </Link>
                        </button>
                        <div className="mt-2 flex flex-row items-center">
                            <div className="mr-2 flex w-4 flex-row items-center">
                                <Image
                                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a84be6cf60_check-mark.svg"
                                    alt=""
                                    width="100"
                                    height="100"
                                    className="mr-2 inline-block w-4 invert"
                                />
                            </div>
                            <p className="text-sm sm:text-base">
                                Unlimited listening hours per month
                            </p>
                        </div>
                        <div className="mt-2 flex flex-row items-center">
                            <div className="mr-2 flex w-4 flex-row items-center">
                                <Image
                                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a84be6cf60_check-mark.svg"
                                    alt=""
                                    width="100"
                                    height="100"
                                    className="mr-2 inline-block w-4 invert"
                                />
                            </div>
                            <p className="text-sm sm:text-base">
                                Access to all AI voices
                            </p>
                        </div>
                        <div className="mt-2 flex flex-row">
                            <div className="mr-2 flex w-4">
                                <Image
                                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a84be6cf60_check-mark.svg"
                                    alt=""
                                    width="100"
                                    height="100"
                                    className="mr-2 inline-block w-4 invert"
                                />
                            </div>
                            <p className="text-sm sm:text-base">
                                No waiting time
                            </p>
                        </div>
                        <div className="mt-2 flex flex-row">
                            <div className="mr-2 flex w-4">
                                <Image
                                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a84be6cf60_check-mark.svg"
                                    alt=""
                                    width="100"
                                    height="100"
                                    className="mr-2 inline-block w-4 invert"
                                />
                            </div>
                            <p className="text-sm sm:text-base">
                                Access to pitch/tone/speed calibration
                            </p>
                        </div>
                        <div className="mt-2 flex flex-row">
                            <div className="mr-2 flex w-4">
                                <Image
                                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a84be6cf60_check-mark.svg"
                                    alt=""
                                    width="100"
                                    height="100"
                                    className="mr-2 inline-block w-4 invert"
                                />
                            </div>
                            <p className="text-sm sm:text-base">
                                Offline Listening
                            </p>
                        </div>
                        <div className="mt-2 flex flex-row">
                            <div className="mr-2 flex w-4">
                                <Image
                                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a84be6cf60_check-mark.svg"
                                    alt=""
                                    width="100"
                                    height="100"
                                    className="mr-2 inline-block w-4 invert"
                                />
                            </div>
                            <p className="text-sm sm:text-base">
                                Fast Customer Support
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
