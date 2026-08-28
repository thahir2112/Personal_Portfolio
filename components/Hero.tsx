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
  Sparkles,
  Award,
  BookOpen,
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
    offset: ["start start", "end end"],
  });

  // Scroll Transforms across the 3 Storytelling Beats
  const giantNameX = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "-8%", "-16%"]);
  const giantNameOpacity = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0.15, 0.18, 0.12, 0.05]);
  const heroContentOpacity = useTransform(scrollYProgress, [0, 0.35, 0.6], [1, 0.85, 0]);
  const heroContentY = useTransform(scrollYProgress, [0, 0.6], [0, -60]);
  const bioBeatOpacity = useTransform(scrollYProgress, [0.35, 0.55, 0.85], [0, 1, 0]);
  const bioBeatY = useTransform(scrollYProgress, [0.35, 0.55, 0.85], [40, 0, -40]);
  const warmBgOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 0.2, 0]);

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
      className="relative w-full h-[280vh] md:h-[300vh] bg-[#0A0A0A]"
    >
      {/* Sticky Viewport Stage */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Dynamic Warm Hero Background Lighting Layer */}
        <motion.div
          style={{ opacity: shouldReduceMotion ? 0.3 : warmBgOpacity }}
          className="absolute inset-0 pointer-events-none -z-10"
        >
          {/* Warm Taupe to Charcoal Radial Lighting */}
          <div className="absolute top-0 right-1/4 w-[55vw] h-[55vw] rounded-full bg-gradient-to-br from-[#C9BFA8]/25 via-[#8A8168]/15 to-transparent blur-[140px] mix-blend-screen" />
          <div className="absolute bottom-1/4 left-10 w-[40vw] h-[40vw] rounded-full bg-[#1A1508] blur-[100px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/50 to-[#0A0A0A]" />
        </motion.div>

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

        {/* Main Stage Content (Beat 1 & Interactive Foregrounds) */}
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 pt-20 pb-12 h-full flex flex-col justify-between">
          {/* Top Label & Status */}
          <div className="flex items-center justify-between pt-2 sm:pt-4">
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto">
            {/* Left Column: Headlines, CTAs, Skills */}
            <motion.div
              style={{
                opacity: shouldReduceMotion ? 1 : heroContentOpacity,
                y: shouldReduceMotion ? 0 : heroContentY,
              }}
              className="lg:col-span-7 flex flex-col justify-center text-left space-y-6"
            >
              {/* Name & Role Header */}
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2.5">
                  <span className="h-px w-8 bg-mustard" />
                  <span className="text-sm sm:text-base md:text-lg font-bold font-mono tracking-widest uppercase text-mustard">
                    {portfolioData.name}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-white/70 font-medium">
                    {portfolioData.tagline}
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
              <div className="flex flex-wrap items-center gap-4 pt-2">
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
              <div className="pt-2">
                <div className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-2.5">
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
            </motion.div>

            {/* Right Column: Parallax Portrait Layer */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
              <ParallaxPortrait
                imageSrc={portfolioData.portraitPath}
                alt="Mohamed Thahir S - Full Stack Developer"
                className="w-full"
              />
            </div>
          </div>

          {/* Bottom Floating Stats Strip (Resume-Accurate) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-4 border-t border-white/10">
            {portfolioData.stats.map((stat, idx) => (
              <div
                key={stat.label}
                className="card-glow rounded-xl p-3 sm:p-4 bg-[#121212]/80 backdrop-blur-md border border-white/10 flex flex-col justify-between"
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

        {/* Scroll Storytelling Beat 2 & 3: Floating Narrative Callout */}
        <motion.div
          style={{
            opacity: shouldReduceMotion ? 0 : bioBeatOpacity,
            y: shouldReduceMotion ? 0 : bioBeatY,
          }}
          className="absolute inset-0 pointer-events-none flex items-center justify-center p-6 -z-5"
        >
          <div className="max-w-3xl w-full p-8 md:p-12 rounded-2xl bg-[#0D0D0D]/95 border border-mustard/30 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.9)] text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-mustard/30 bg-mustard/10 text-mustard text-xs font-mono uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Identity & Philosophy</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              “{portfolioData.careerObjective}”
            </h2>

            <div className="flex items-center justify-center gap-4 text-xs font-mono text-white/50 pt-2">
              <span>MOHAMED THAHIR S</span>
              <span>—</span>
              <span className="text-mustard">COIMBATORE, INDIA</span>
            </div>
          </div>
        </motion.div>

        {/* Subtle Scroll Down Indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[10px] font-mono uppercase tracking-widest text-white/40 pointer-events-none">
          <span>Scroll To Explore</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <ArrowDown className="w-3.5 h-3.5 text-mustard" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
