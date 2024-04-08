import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer>
            <div className="flex-col pb-20 lg:flex ">
                <div className="lg:flex lg:flex-row lg:justify-between">
                    <div>
                        <div className="flex justify-start items-center">
                            <Image
                                alt="app logo"
                                src="/logo.png"
                                width={2000}
                                height={2000}
                                className="w-16 h-16"
                            />
                            <h1 className="sm:text-2xl text-xl font-bold ml-2 tracking-tight text-white">
                                TailoredTales
                            </h1>
                        </div>
                        <p className="font-inter mt-4 max-w-[350px] text-base text-left font-light text-zinc-200">
                            Imagine a world where every podcast feels like it
                            was made just for you. Where your interests, no
                            matter how niche or broad, are met with content that
                            educates, entertains, and enlightens.
                        </p>
                        <div className="mb-8 mt-6 flex flex-row">
                            <a
                                href="https://twitter.com/varunbln"
                                className="text-white transition hover:text-zinc-100"
                            >
                                <svg
                                    className="fill-current"
                                    width="25"
                                    height="25"
                                    viewBox="0 0 25 25"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M23.9883 7.58391L21.0426 10.5297C20.4545 17.354 14.6994 22.6565 7.81089 22.6565C6.39249 22.6565 5.22357 22.4316 4.33651 21.9881C3.62063 21.6301 3.32738 21.246 3.25461 21.1367C3.18933 21.0388 3.14702 20.9274 3.13083 20.8108C3.11464 20.6943 3.12499 20.5755 3.16112 20.4635C3.19724 20.3515 3.2582 20.2491 3.33945 20.164C3.42069 20.0789 3.52012 20.0132 3.63031 19.9718C3.65544 19.9624 5.95923 19.0775 7.44821 17.3929C6.52206 16.7334 5.70694 15.9305 5.0335 15.0145C3.69483 13.1977 2.27901 10.0427 3.13598 5.32923C3.16148 5.18895 3.22489 5.05833 3.31932 4.95152C3.41376 4.8447 3.53562 4.76577 3.67171 4.72326C3.8078 4.68075 3.95293 4.67629 4.09137 4.71037C4.22981 4.74445 4.35629 4.81575 4.4571 4.91657C4.49153 4.9509 7.74246 8.15592 11.7166 9.19118L11.7171 8.59361C11.7256 7.34276 12.2303 6.14644 13.1204 5.26759C14.0105 4.38874 15.2132 3.89929 16.4641 3.90682C17.2766 3.91808 18.0724 4.1399 18.7737 4.55063C19.4749 4.96136 20.0576 5.54694 20.4649 6.25019L23.4359 6.25024C23.5904 6.25024 23.7414 6.29606 23.8699 6.3819C23.9984 6.46774 24.0985 6.58975 24.1577 6.73251C24.2168 6.87526 24.2323 7.03234 24.2021 7.18389C24.172 7.33543 24.0976 7.47464 23.9883 7.58391Z"></path>
                                </svg>
                            </a>
                            <a
                                href="https://github.com/varun-balani"
                                className="text-white transition hover:text-zinc-100 ml-4"
                            >
                                <svg
                                    className="fill-current"
                                    width="25"
                                    height="25"
                                    viewBox="0 0 25 25"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />{" "}
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="flex grow flex-row flex-wrap text-left lg:mx-10 lg:flex-nowrap lg:justify-center">
                        <div className="my-5 mr-8 flex max-w-[200px] grow basis-[100px] flex-col space-y-5 lg:mx-10">
                            <h2 className="font-inter font-medium text-white">
                                SUPPORT
                            </h2>
                            <a
                                href="#pricing"
                                className="font-inter font-light text-zinc-200"
                            >
                                Pricing
                            </a>
                            <a
                                href="/"
                                className="font-inter font-light text-zinc-200"
                            >
                                Guides
                            </a>
                            <a
                                href="#faq"
                                className="font-inter font-light text-zinc-200"
                            >
                                FAQ
                            </a>
                        </div>
                        <div className="my-5 mr-8 flex max-w-[200px] grow basis-[100px] flex-col space-y-5 lg:mx-10">
                            <h2 className="font-inter font-medium text-white">
                                COMPANY
                            </h2>
                            <a
                                href=""
                                className="font-inter font-light text-zinc-200"
                            >
                                About
                            </a>
                            <a
                                href="/"
                                className="font-inter font-light text-zinc-200"
                            >
                                Blog
                            </a>
                        </div>
                    </div>
                    <div className="mt-10 flex flex-col lg:">
                        <div className="mb-4 flex flex-row items-center">
                            <svg
                                className="flex-none"
                                width="36"
                                height="36"
                                viewBox="0 0 36 36"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle
                                    cx="18"
                                    cy="18"
                                    r="18"
                                    fill="black"
                                ></circle>
                                <path
                                    d="M26.6211 14.45C25.5711 9.83 21.5411 7.75 18.0011 7.75C18.0011 7.75 18.0011 7.75 17.9911 7.75C14.4611 7.75 10.4211 9.82 9.37107 14.44C8.20107 19.6 11.3611 23.97 14.2211 26.72C15.2811 27.74 16.6411 28.25 18.0011 28.25C19.3611 28.25 20.7211 27.74 21.7711 26.72C24.6311 23.97 27.7911 19.61 26.6211 14.45ZM18.0011 19.46C16.2611 19.46 14.8511 18.05 14.8511 16.31C14.8511 14.57 16.2611 13.16 18.0011 13.16C19.7411 13.16 21.1511 14.57 21.1511 16.31C21.1511 18.05 19.7411 19.46 18.0011 19.46Z"
                                    fill="white"
                                ></path>
                            </svg>
                            <p className="font-inter ml-4 text-white">Earth</p>
                        </div>
                        <div className="mb-4 flex flex-row items-center">
                            <svg
                                width="36"
                                height="36"
                                viewBox="0 0 36 36"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle
                                    cx="18"
                                    cy="18"
                                    r="18"
                                    fill="black"
                                ></circle>
                                <path
                                    d="M23 9.5H13C10 9.5 8 11 8 14.5V21.5C8 25 10 26.5 13 26.5H23C26 26.5 28 25 28 21.5V14.5C28 11 26 9.5 23 9.5ZM23.47 15.59L20.34 18.09C19.68 18.62 18.84 18.88 18 18.88C17.16 18.88 16.31 18.62 15.66 18.09L12.53 15.59C12.21 15.33 12.16 14.85 12.41 14.53C12.67 14.21 13.14 14.15 13.46 14.41L16.59 16.91C17.35 17.52 18.64 17.52 19.4 16.91L22.53 14.41C22.85 14.15 23.33 14.2 23.58 14.53C23.84 14.85 23.79 15.33 23.47 15.59Z"
                                    fill="white"
                                ></path>
                            </svg>
                            <p className="font-inter ml-4 text-white">
                                varunprahladbalani@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mx-auto my-6 w-full border border-white lg:my-12"></div>
                <div>
                    <p className="font-inter text-center text-sm text-zinc-200 lg:">
                        © Copyright 2024. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
