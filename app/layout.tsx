import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TailoredTales",
  description:
    "Imagine a world where every podcast feels like it was made just for you. Where your interests, no matter how niche or broad, are met with content that educates, entertains, and enlightens",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" className="bg-zinc-950">
        {/* <script
          type="module"
          defer
          src="https://cdn.jsdelivr.net/npm/ldrs/dist/auto/spiral.js"
        ></script> */}
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
