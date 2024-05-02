"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

export default function Navbar() {
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
          className="mr-4 rounded-xl cursor-pointer font-medium px-4 py-3 "
          href="/#faq"
        >
          FAQ
        </Link>
        <Link
          className="mr-4 rounded-xl cursor-pointer font-medium px-4 py-3 "
          href="/dashboard"
        >
          Dashboard
        </Link>
        <Link className="rounded-xl cursor-pointer font-medium" href="/create">
          <button className="mr-4 rounded-xl inline-flex h-12 animate-shimmer items-center justify-center border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-8 font-medium text-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            Create
          </button>
        </Link>
        <SignedIn>
          <UserButton />
        </SignedIn>
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
              <Link className="font-medium " href="/#faq">
                FAQ
              </Link>
              <Link className="font-medium " href="/dashboard">
                Dashboard
              </Link>
              <Link className="rounded-xl font-bold " href="/create">
                Create
              </Link>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </div>
        )}
      </Transition>
    </header>
  );
}
