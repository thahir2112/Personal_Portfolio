"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[3px] z-[100] bg-transparent pointer-events-none"
    >
      <motion.div
        className="h-full bg-gradient-to-r from-mustard via-mustard-amber to-mustard origin-left shadow-[0_0_12px_rgba(245,197,24,0.6)]"
        style={{ scaleX }}
      />
    </div>
  );
}
