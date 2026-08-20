import { GraduationCap } from "lucide-react";
import Reveal from "./Reveal";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="px-6 py-24 md:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="text-sm font-medium uppercase tracking-widest text-accent">
            Education
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Academic background
          </h2>
        </Reveal>

        <div className="mt-14 space-y-0">
          {education.map((item, i) => (
            <Reveal key={item.degree} delay={i * 0.1}>
              <div className="flex flex-col gap-4 border-t border-border py-7 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                    <GraduationCap size={20} />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.degree}
                    </h3>
                    <p className="mt-1 text-base text-muted">{item.school}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 pl-[3.75rem] sm:pl-0 sm:text-right">
                  <span className="text-sm font-medium text-muted">
                    {item.period}
                  </span>
                  <span className="rounded-full bg-accent-soft px-3 py-1 text-sm font-semibold text-accent">
                    {item.score}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
}
