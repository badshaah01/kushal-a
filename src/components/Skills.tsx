import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24 md:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="text-sm font-medium uppercase tracking-widest text-accent">
            Skills
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Tools &amp; capabilities
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.label} delay={i * 0.1}>
              <TiltCard
                maxTilt={6}
                className="h-full rounded-2xl border border-white/60 bg-white/50 p-7 backdrop-blur-xl"
              >
                <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">
                  {group.label}
                </h3>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border bg-background px-3.5 py-1.5 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
