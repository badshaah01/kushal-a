import Reveal from "./Reveal";
import { achievements, profile } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="px-6 py-24 md:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="text-sm font-medium uppercase tracking-widest text-accent">
            About
          </span>
        </Reveal>

        <div className="mt-4 grid gap-12 lg:grid-cols-5">
          <Reveal delay={0.1} className="lg:col-span-3">
            <p className="text-2xl leading-relaxed text-foreground sm:text-3xl">
              {profile.about}
            </p>
          </Reveal>

          <Reveal delay={0.2} className="lg:col-span-2">
            <div className="rounded-2xl border border-border bg-accent-soft/60 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">
                Achievements
              </h3>
              <ul className="mt-4 space-y-4">
                {achievements.map((item) => (
                  <li key={item} className="flex gap-3 text-base text-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
