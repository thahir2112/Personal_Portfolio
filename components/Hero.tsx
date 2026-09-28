"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Database,
  BarChart3,
  Terminal,
  Cpu,
  Layers,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import ParallaxPortrait from "./ParallaxPortrait";
import MagneticButton from "./MagneticButton";

const SKILL_ICONS: Record<string, React.ReactNode> = {
  Java: <Code2 className="w-3.5 h-3.5 text-mustard" />,
  Python: <Terminal className="w-3.5 h-3.5 text-mustard" />,
  SQL: <Database className="w-3.5 h-3.5 text-mustard" />,
  Pandas: <Layers className="w-3.5 h-3.5 text-mustard" />,
  BigQuery: <Database className="w-3.5 h-3.5 text-mustard" />,
  "Power BI": <BarChart3 className="w-3.5 h-3.5 text-mustard" />,
  Tableau: <BarChart3 className="w-3.5 h-3.5 text-mustard" />,
  Git: <Code2 className="w-3.5 h-3.5 text-mustard" />,
  Linux: <Terminal className="w-3.5 h-3.5 text-mustard" />,
  ServiceNow: <Cpu className="w-3.5 h-3.5 text-mustard" />,
};

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const giantNameX = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const giantNameOpacity = useTransform(scrollYProgress, [0, 0.8], [0.14, 0.04]);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative w-full bg-[#0A0A0A] flex flex-col pt-24 pb-6 sm:pb-8 overflow-hidden"
    >
      {/* Dynamic Warm Hero Background Lighting Layer */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 right-1/4 w-[55vw] h-[55vw] rounded-full bg-gradient-to-br from-[#C9BFA8]/25 via-[#8A8168]/15 to-transparent blur-[140px] mix-blend-screen" />
        <div className="absolute bottom-1/4 left-10 w-[40vw] h-[40vw] rounded-full bg-[#1A1508] blur-[100px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/50 to-[#0A0A0A]" />
      </div>

      {/* Giant Background Typography: "THAHIR" */}
      <motion.div
        style={{
          x: shouldReduceMotion ? 0 : giantNameX,
          opacity: shouldReduceMotion ? 0.14 : giantNameOpacity,
        }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <span className="font-extrabold text-giant text-mustard tracking-tighter uppercase whitespace-nowrap leading-none filter blur-[0.5px] scale-110 sm:scale-100">
          {portfolioData.displayName}
        </span>
      </motion.div>

      {/* Subtle Editorial Grid Lines */}
      <div
        aria-hidden="true"
        className="absolute inset-0 editorial-grid opacity-40 pointer-events-none"
      />

      {/* Main Content Container */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 flex flex-col space-y-6 sm:space-y-7">
        {/* Top Label & Status */}
        <div className="flex items-center justify-between pt-1 sm:pt-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-mustard/30 bg-[#121212]/80 backdrop-blur-md text-[11px] font-mono uppercase tracking-widest text-white/90">
            <span className="w-2 h-2 rounded-full bg-mustard animate-ping" />
            <span>Available for Technical Opportunities</span>
          </div>

          <div className="hidden lg:flex items-center gap-4 text-xs font-mono text-white/40">
            <span>LOCATION // {portfolioData.location.toUpperCase()}</span>
            <span>•</span>
            <span className="text-mustard font-semibold">2023–2027 CSE</span>
          </div>
        </div>

        {/* Central Grid: Left Copy & Right Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headlines, CTAs, Skills */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-5">
            {/* Name & Role Header */}
            <div className="space-y-1 sm:space-y-1.5">
              <div>
                <span className="text-xl sm:text-2xl md:text-3xl font-extrabold font-mono tracking-wider uppercase text-mustard">
                  {portfolioData.name}
                </span>
              </div>

              <div>
                <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-white/80 font-medium">
                  Full Stack Developer
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-hero-headline font-extrabold text-white tracking-tighter leading-[1.02]">
              Full Stack, <br />
              <span className="bg-gradient-to-r from-white via-white/90 to-mustard bg-clip-text text-transparent">
                Built Differently.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-white/70 max-w-xl font-normal leading-relaxed">
              {portfolioData.heroBio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <MagneticButton strength={0.3}>
                <a
                  href="#projects"
                  onClick={(e) => handleScrollTo(e, "#projects")}
                  className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-xs font-mono uppercase tracking-widest font-bold text-black bg-mustard hover:bg-mustard-light transition-all duration-300 shadow-[0_0_30px_rgba(245,197,24,0.35)] hover:shadow-[0_0_40px_rgba(245,197,24,0.6)]"
                >
                  <span>Explore My Work</span>
                  <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </a>
              </MagneticButton>

              <MagneticButton strength={0.2}>
                <a
                  href="#contact"
                  onClick={(e) => handleScrollTo(e, "#contact")}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-mono uppercase tracking-widest font-medium text-white border border-white/20 hover:border-mustard hover:text-mustard bg-white/5 hover:bg-mustard/10 backdrop-blur-sm transition-all duration-300"
                >
                  <span>Get In Touch</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </MagneticButton>
            </div>

            {/* Skill Tag Pills */}
            <div className="pt-1">
              <div className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-2">
                // CORE TOOLCHAIN & PLATFORMS
              </div>
              <div className="flex flex-wrap gap-2 max-w-xl">
                {portfolioData.heroSkillPills.map((skill) => (
                  <div
                    key={skill}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-white/10 bg-[#121212]/90 hover:border-mustard/60 hover:bg-[#1A1810] text-[11px] font-mono text-white/80 transition-colors"
                  >
                    {SKILL_ICONS[skill] || <Code2 className="w-3 h-3 text-mustard" />}
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Parallax Portrait Layer */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <ParallaxPortrait
              imageSrc={portfolioData.portraitPath}
              alt="Mohamed Thahir S - Full Stack Developer"
              className="w-full"
            />
          </div>
        </div>

        {/* Scroll Down Indicator Bridge */}
        <div className="flex justify-center pt-2 pb-0">
          <a
            href="#about"
            onClick={(e) => handleScrollTo(e, "#about")}
            className="group inline-flex flex-col items-center gap-1 text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-white/50 hover:text-mustard transition-colors cursor-pointer"
          >
            <span>Scroll To Explore</span>
            <motion.div
              animate={{ y: [0, 3, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            >
              <ArrowDown className="w-3.5 h-3.5 text-mustard group-hover:translate-y-0.5 transition-transform" />
            </motion.div>
          </a>
        </div>

        {/* Bottom Floating Stats Strip (Resume-Accurate) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-2 border-t border-white/10">
          {portfolioData.stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="card-glow rounded-xl p-3 sm:p-4 bg-[#121212]/80 backdrop-blur-md border border-white/10 flex flex-col justify-between hover:border-mustard/40 transition-colors"
            >
              <div className="flex items-center justify-between text-white/40 mb-1">
                <span className="text-[10px] font-mono uppercase tracking-wider">
                  0{idx + 1} //
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-mustard/60" />
              </div>
              <div className="text-xl sm:text-2xl font-bold font-mono text-mustard tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-white/90 pt-0.5">
                {stat.label}
              </div>
              <div className="text-[10px] font-mono text-white/50 truncate pt-0.5">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
