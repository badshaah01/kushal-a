"use client";

import { motion } from "framer-motion";

export default function FloatingShapes() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <motion.div
        className="absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full bg-accent/20 blur-3xl"
        animate={{ x: [0, 40, -10, 0], y: [0, -25, 20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/4 -right-32 h-[380px] w-[380px] rounded-full bg-amber-200/25 blur-3xl"
        animate={{ x: [0, -30, 15, 0], y: [0, 25, -15, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-20 left-1/4 h-[320px] w-[320px] rounded-full bg-accent/15 blur-3xl"
        animate={{ x: [0, 25, -20, 0], y: [0, -15, 10, 0] }}
        transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
