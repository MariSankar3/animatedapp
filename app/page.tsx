"use client";

import { useState } from "react";
import Image from "next/image";
import ThreeDImageRing from "./components/ThreeDImageRing";

export default function Home() {
  const [videoReady, setVideoReady] = useState(false);

  const imageUrls = [
    "https://images.pexels.com/photos/1704120/pexels-photo-1704120.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/912110/pexels-photo-912110.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/114979/pexels-photo-114979.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/698808/pexels-photo-698808.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/2449540/pexels-photo-2449540.jpeg?auto=compress&cs=tinysrgb&w=1200",
  ];

  return (
    <div className="relative min-h-screen w-full bg-[#121212] overflow-x-hidden font-sans">

      {/* ================= POSTER OVERLAY ================= */}
   

      {/* ================= DARK OVERLAY ================= */}
      <div className="fixed inset-0 z-20 bg-black/40" />

      {/* ================= PAGE CONTENT ================= */}
      <main className="relative z-30 flex min-h-screen w-full flex-col items-center justify-between">

        {/* ===== HERO / CAROUSEL ===== */}
        <section className="relative h-[600px] w-full overflow-hidden mb-24">
          <ThreeDImageRing images={imageUrls} />
        </section>

        {/* ===== LOGO ===== */}
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />

        {/* ===== TEXT ===== */}
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-white">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-200">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates"
              className="font-medium text-white underline"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn"
              className="font-medium text-white underline"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>

        {/* ===== BUTTONS ===== */}
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-5 text-black transition hover:bg-zinc-200 md:w-[158px]"
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/vercel.svg"
              alt="Vercel"
              width={16}
              height={16}
            />
            Deploy Now
          </a>

          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-white/40 px-5 text-white transition hover:bg-white/10 md:w-[158px]"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>

        {/* ===== LONG SCROLL CONTENT ===== */}
        <section className="mt-32 space-y-24 px-6 max-w-3xl text-white">

          <div className="space-y-6">
            <h2 className="text-4xl font-bold">
              Smooth Scrolling Test Section
            </h2>
            <p className="text-lg text-zinc-200">
              This section exists purely to test scroll smoothness, inertia,
              acceleration, and deceleration behavior.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-semibold">
              Performance Factors
            </h2>
            <ul className="list-disc space-y-3 pl-6 text-zinc-200">
              <li>Heavy images without lazy loading</li>
              <li>Large DOM trees</li>
              <li>Unnecessary re-renders</li>
              <li>Expensive scroll listeners</li>
            </ul>
          </div>

          <div className="space-y-6 pb-32">
            <h2 className="text-3xl font-semibold">
              Final Scroll Stress Test
            </h2>
            <p className="text-lg text-zinc-200">
              Keep scrolling. Rapid flicks, slow drags, direction changes —
              everything should remain smooth.
            </p>
          </div>

        </section>
      </main>
    </div>
  );
}
