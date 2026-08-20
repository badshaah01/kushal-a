import { Briefcase, MapPin } from "lucide-react";
import Reveal from "./Reveal";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24 md:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="text-sm font-medium uppercase tracking-widest text-accent">
            Experience
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Where I&apos;ve worked
          </h2>
        </Reveal>

        <div className="mt-14 space-y-6">
          {experience.map((item, i) => (
            <Reveal key={item.role + item.org} delay={i * 0.1}>
              <div className="grid gap-4 rounded-2xl border border-border bg-white/50 p-7 transition-colors hover:border-accent/50 sm:grid-cols-[1fr_auto] sm:items-start">
                <div>
                  <div className="flex items-center gap-2 text-accent">
                    <Briefcase size={16} />
                    <span className="text-sm font-medium">{item.type}</span>
                  </div>
                  <h3 className="mt-2 text-xl font-semibold text-foreground">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-base text-muted">{item.org}</p>

                  {item.bullets && (
                    <ul className="mt-4 space-y-2">
                      {item.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex gap-3 text-sm leading-relaxed text-foreground/80"
                        >
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="flex flex-col gap-1 text-sm text-muted sm:items-end sm:text-right">
                  <span className="font-medium text-foreground">
                    {item.period}
                  </span>
                  <span className="flex items-center gap-1.5 sm:justify-end">
                    <MapPin size={14} />
                    {item.location}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
