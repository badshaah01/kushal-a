"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, type MouseEvent, type ReactNode } from "react";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
};

const SPRING = { stiffness: 300, damping: 30, mass: 0.6 };

export default function TiltCard({
  children,
  className,
  maxTilt = 8,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const rotateX = useSpring(
    useTransform(py, [0, 1], [maxTilt, -maxTilt]),
    SPRING
  );
  const rotateY = useSpring(
    useTransform(px, [0, 1], [-maxTilt, maxTilt]),
    SPRING
  );
  const shadowX = useSpring(useTransform(px, [0, 1], [-16, 16]), SPRING);
  const shadowY = useSpring(useTransform(py, [0, 1], [-10, 18]), SPRING);
  const boxShadow = useMotionTemplate`${shadowX}px ${shadowY}px 40px -12px rgba(26, 26, 24, 0.28)`;

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  }

  function handleMouseLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <div style={{ perspective: 1200 }}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, boxShadow, transformStyle: "preserve-3d" }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}
