"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { User, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface ParallaxPortraitProps {
  imageSrc: string;
  alt: string;
  className?: string;
}

export default function ParallaxPortrait({
  imageSrc,
  alt,
  className,
}: ParallaxPortraitProps) {
  const [imageError, setImageError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Subtle 2.5D tilt constraint (-6 to +6 degrees)
    const rotateY = (x / (rect.width / 2)) * 6;
    const rotateX = -(y / (rect.height / 2)) * 6;

    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn("relative flex items-center justify-center select-none", className)}
      style={{ perspective: 1000 }}
    >
      {/* Warm Ambient Rim Glow Behind Portrait */}
      <div
        aria-hidden="true"
        className="absolute -inset-4 md:-inset-10 rounded-full bg-gradient-to-tr from-mustard/20 via-warm-dark/30 to-mustard-amber/15 blur-3xl opacity-70 pointer-events-none transition-opacity duration-700 group-hover:opacity-100"
      />

      {/* Main Layer with Tilt */}
      <motion.div
        animate={
          shouldReduceMotion
            ? { rotateX: 0, rotateY: 0 }
            : { rotateX: tilt.rotateX, rotateY: tilt.rotateY }
        }
        transition={{ type: "spring", stiffness: 120, damping: 18, mass: 0.1 }}
        className="relative w-full max-w-[280px] sm:max-w-[330px] md:max-w-[360px] lg:max-w-[380px] aspect-[4/5] rounded-2xl border border-white/10 bg-gradient-to-b from-[#1C1A14]/80 via-[#121212]/90 to-[#0A0A0A] p-2 sm:p-3 shadow-2xl backdrop-blur-md overflow-hidden"
      >
        {/* Editorial Frame Accents */}
        <div className="absolute top-3 left-3 text-[10px] uppercase font-mono tracking-widest text-mustard/80 z-20 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-mustard animate-pulse" />
          <span>MTS // PORTRAIT</span>
        </div>

        <div className="absolute bottom-3 right-3 text-[10px] uppercase font-mono tracking-widest text-white/40 z-20">
          COIMBATORE // IND
        </div>

        {/* Inner Image Container */}
        <div className="relative w-full h-full rounded-xl overflow-hidden bg-gradient-to-b from-[#22201A] to-[#0D0D0D] flex items-center justify-center">
          {!imageError ? (
            /* 
              TODO: To insert your own portrait photo:
              1. Add your image at /public/images/thahir-portrait.png
              2. It will automatically replace this silhouette.
            */
            <Image
              src={imageSrc}
              alt={alt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 440px"
              className="object-cover object-top filter contrast-[1.04] brightness-[0.98] hover:scale-[1.03] transition-all duration-700"
              onError={() => setImageError(true)}
            />
          ) : (
            /* Graceful Editorial Fallback Silhouette */
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-[#1F1B12] via-[#14120C] to-[#0A0A0A] relative group">
              {/* Geometric Silhouette Artwork */}
              <div className="relative mb-6">
                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full border border-mustard/30 bg-gradient-to-b from-mustard/15 to-transparent flex items-center justify-center shadow-inner">
                  <User className="w-14 h-14 sm:w-18 sm:h-18 text-mustard/60 stroke-[1.2]" />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-mustard/20 border border-mustard/40 p-2 rounded-full backdrop-blur-sm">
                  <Sparkles className="w-4 h-4 text-mustard" />
                </div>
              </div>

              <div className="space-y-1 z-10">
                <div className="text-xs font-mono uppercase tracking-widest text-mustard">
                  Editorial Silhouette
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Mohamed Thahir S
                </h3>
                <p className="text-xs text-white/50 max-w-[220px] mx-auto pt-1 font-mono">
                  Place portrait at <code className="text-mustard/90">/images/thahir-portrait.png</code>
                </p>
              </div>

              {/* Editorial grid lines inside fallback */}
              <div className="absolute inset-0 border border-white/5 m-3 rounded-lg pointer-events-none" />
              <div className="absolute top-1/2 left-0 right-0 h-px bg-white/5 pointer-events-none" />
            </div>
          )}

          {/* Warm Bottom Vignette for seamless text blending */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80 pointer-events-none" />
          <div className="absolute inset-0 border border-mustard/10 rounded-xl pointer-events-none" />
        </div>
      </motion.div>
    </div>
  );
}
