"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Link from "next/link";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { motion } from "framer-motion";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

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
                className="relative flex flex-col gap-4 items-center justify-center md:px-4 w-full h-full"
            >
                <div className="flex flex-col items-center justify-center min-h-screen w-full h-full">
                    <Header />
                    <Hero />
                    <HowItWorks />
                    <Features />
                    <Pricing />
                    <FAQ />
                    <Footer />
                </div>
            </motion.div>
        </AuroraBackground>
    );
}
