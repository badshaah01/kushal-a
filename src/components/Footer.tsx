import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-muted sm:flex-row">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Built with Next.js &amp; Framer Motion</span>
      </div>
    </footer>
  );
}
