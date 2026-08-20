"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import FloatingShapes from "./FloatingShapes";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import { projects, type ProjectItem } from "@/lib/data";

function ProjectCard({
  project,
  index,
  total,
  progress,
}: {
  project: ProjectItem;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = index / total;
  const targetScale = 1 - (total - index) * 0.05;
  const scale = useTransform(progress, [start, 1], [1, targetScale]);

  return (
    <div
      style={{ top: `calc(6rem + ${index * 24}px)` }}
      className="sticky flex h-screen items-center justify-center px-6 md:px-10"
    >
      <motion.div style={{ scale }} className="w-full max-w-3xl origin-top">
        <TiltCard
          maxTilt={7}
          className="rounded-3xl border border-white/60 bg-white/50 p-8 backdrop-blur-xl md:p-12"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="rounded-full bg-accent-soft px-4 py-1.5 text-sm font-medium text-accent">
              {project.period}
            </span>
            <span className="text-sm font-medium text-muted">
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
          </div>

          <h3 className="mt-6 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {project.title}
          </h3>

          <ul className="mt-6 space-y-3">
            {project.description.map((line) => (
              <li
                key={line}
                className="flex gap-3 text-base leading-relaxed text-foreground/80"
              >
                <ArrowUpRight size={16} className="mt-1 shrink-0 text-accent" />
                {line}
              </li>
            ))}
          </ul>
        </TiltCard>
      </motion.div>
    </div>
  );
}

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="projects" className="relative px-6 pt-24 md:px-10">
      <FloatingShapes />

      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="text-sm font-medium uppercase tracking-widest text-accent">
            Projects
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            What I&apos;ve built
          </h2>
        </Reveal>
      </div>

      <div
        ref={containerRef}
        className="relative mt-4"
        style={{ height: `${projects.length * 100}vh` }}
      >
        {projects.map((project, i) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={i}
            total={projects.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
