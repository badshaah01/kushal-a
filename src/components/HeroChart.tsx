"use client";

import { motion } from "framer-motion";

const LINE_PATH =
  "M0,206 L70,176 L130,192 L200,120 L270,148 L340,84 L410,116 L480,52 L550,74 L600,40";
const AREA_PATH = `${LINE_PATH} L600,240 L0,240 Z`;

export default function HeroChart() {
  return (
    <div className="relative w-full">
      <svg
        viewBox="0 0 600 240"
        fill="none"
        className="w-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="heroAreaFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.28" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
        </defs>

        <motion.path
          d={AREA_PATH}
          fill="url(#heroAreaFill)"
          stroke="none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.9 }}
        />

        <motion.path
          d={LINE_PATH}
          stroke="var(--accent)"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.circle
          cx={600}
          cy={40}
          r={6}
          fill="var(--accent)"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 1.85 }}
        />
      </svg>
    </div>
  );
}
