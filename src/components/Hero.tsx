"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Mail } from "lucide-react";
import FloatingShapes from "./FloatingShapes";
import HeroChart from "./HeroChart";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-28 pb-16 md:px-10"
    >
      <FloatingShapes />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative mb-6 inline-block"
          >
            <div className="absolute inset-0 -z-10 scale-110 rounded-full bg-accent/35 blur-2xl" />
            <div className="h-32 w-32 overflow-hidden rounded-full border border-white/80 shadow-[0_18px_40px_-12px_rgba(61,122,92,0.45)] sm:h-40 sm:w-40 lg:h-48 lg:w-48">
              <Image
                src="/kushal-photo.jpeg"
                alt="Kushal A"
                width={192}
                height={192}
                priority
                quality={95}
                sizes="(max-width: 640px) 128px, (max-width: 1024px) 160px, 192px"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mb-5 inline-flex items-center rounded-full border border-border bg-accent-soft px-4 py-1.5 text-sm font-medium text-accent"
          >
            {profile.tagline}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            {profile.about}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-accent"
            >
              <Mail size={16} />
              Get in touch
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              View projects
              <ArrowDown size={16} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl border border-border bg-white/60 p-6 shadow-sm"
        >
          <div className="mb-4 flex items-center justify-between text-xs font-medium text-muted">
            <span>Growth Trajectory</span>
            <span className="text-accent">+ On Track</span>
          </div>
          <HeroChart />
        </motion.div>
      </div>
    </section>
  );
}
