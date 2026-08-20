import { Mail } from "lucide-react";
import Reveal from "./Reveal";
import { profile } from "@/lib/data";

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-28 md:px-10">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <span className="text-sm font-medium uppercase tracking-widest text-accent">
            Contact
          </span>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Let&apos;s build something.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted">
            Open to internships, collaborations, and conversations about
            fintech, trading systems, and software engineering.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-colors hover:bg-accent sm:w-auto"
            >
              <Mail size={18} />
              {profile.email}
            </a>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent sm:w-auto"
            >
              <LinkedinIcon size={18} />
              {profile.linkedin}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
