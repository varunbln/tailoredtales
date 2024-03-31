"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Link from "next/link";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <AuroraBackground>
            <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="relative flex flex-col gap-4 items-center justify-center px-4 w-full"
            >
                <div className="flex flex-col items-center justify-center min-h-screen w-full">
                    <Header />
                    <Hero />
                </div>
            </motion.div>
        </AuroraBackground>
    );
}
