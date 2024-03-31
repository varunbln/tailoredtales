"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { GradientButton } from "./ui/GradientButton";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="flex-col md:flex md:flex-row justify-between items-center w-full mt-2 pb-2 sm:px-4 px-2 text-white">
            <div className="flex justify-between items-center">
                <Link
                    href="/"
                    className="ml-4 md:ml-4 flex items-center justify-center"
                >
                    <Image
                        alt="app logo"
                        src="/logo.png"
                        width={2000}
                        height={2000}
                        className="w-16 h-16"
                    />
                    <h1 className="sm:text-2xl text-xl font-bold tracking-tight">
                        TailoredTales
                    </h1>
                </Link>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden mr-4"
                    aria-controls="navbar-default"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    {!isOpen ? (
                        <svg
                            className="block h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    ) : (
                        <svg
                            className="block h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    )}
                </button>
            </div>
            <div className="md:justify-end md:items-center hidden w-full md:flex">
                <Link
                    className="mr-2 rounded-xl cursor-pointer font-medium px-4 py-3 "
                    href="/#howitworks"
                >
                    How it works
                </Link>
                <Link
                    className="mr-2 rounded-xl cursor-pointer font-medium px-4 py-3 "
                    href="/#features"
                >
                    Benefits
                </Link>
                <Link
                    className="mr-4 rounded-xl cursor-pointer font-medium px-4 py-3 "
                    href="/#pricing"
                >
                    Pricing
                </Link>
                <Link
                    className="mr-4 rounded-xl cursor-pointer font-medium px-4 py-3 "
                    href="/#faq"
                >
                    FAQ
                </Link>
                <GradientButton
                    containerClassName="rounded-full"
                    as="button"
                    className="text-white flex items-center space-x-2"
                >
                    <Link
                        className="rounded-xl cursor-pointer font-medium px-2 py-1"
                        href="/register"
                    >
                        Get Started
                    </Link>
                </GradientButton>
            </div>
            <Transition
                show={isOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                {(ref) => (
                    <div className="md:hidden" id="mobile-menu">
                        <div
                            ref={ref}
                            className="px-6 pt-2 pb-3 space-y-4 sm:px-3 flex-col flex text-xl "
                        >
                            <Link
                                className="text-slate-600 font-medium "
                                href="/#howitworks"
                            >
                                How it works
                            </Link>
                            <Link
                                className="text-slate-600 font-medium "
                                href="/#features"
                            >
                                Benefits
                            </Link>
                            <Link
                                className="text-slate-600 font-medium "
                                href="/#pricing"
                            >
                                Pricing
                            </Link>
                            <Link
                                className="rounded-xl text-black font-bold "
                                href="/register"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                )}
            </Transition>
        </header>
    );
}
