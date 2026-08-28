"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Cpu, Workflow, CheckCircle2, ShieldCheck, Sparkles, Terminal } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import Reveal from "./Reveal";

export default function Experience() {
  const exp = portfolioData.experience[0];

  return (
    <section
      id="experience"
      className="relative py-28 md:py-36 px-4 sm:px-8 md:px-12 bg-[#0C0C0C] border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-4">
          <Reveal>
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-mustard">
              <span className="w-2 h-2 rounded-full bg-mustard" />
              <span>// 04. EXPERIENCE & INTERNSHIP</span>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end justify-between">
            <Reveal className="lg:col-span-8">
              <h2 className="text-section-title font-extrabold text-white tracking-tight leading-[1.08]">
                Learning in real systems.
              </h2>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-4">
              <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                Applied enterprise cloud administration, AI orchestration, and
                automated service delivery workflows.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Experience Timeline / Case Study Card */}
        <Reveal delay={0.15}>
          <div className="relative rounded-3xl bg-[#141414] border border-white/10 p-6 sm:p-10 md:p-12 overflow-hidden shadow-xl">
            {/* Ambient Background Accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-mustard/5 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
              {/* Left Column: Role, Company, Period */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mustard/10 border border-mustard/30 text-mustard font-mono text-xs uppercase tracking-widest">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>{exp.type}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight pt-2">
                    {exp.company}
                  </h3>

                  <div className="text-base font-semibold text-mustard font-mono">
                    {exp.role}
                  </div>

                  <div className="text-xs font-mono text-white/50 flex items-center gap-3 pt-1">
                    <span>{exp.period}</span>
                    <span>•</span>
                    <span>{exp.location}</span>
                  </div>
                </div>

                <p className="text-sm text-white/70 leading-relaxed">
                  {exp.description}
                </p>

                {/* Gained Skills Tags */}
                <div className="space-y-2 pt-2">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-white/40">
                    CORE COMPETENCIES & MODULES
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.skillsGained.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-white/90"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Detailed Highlights */}
              <div className="lg:col-span-7 space-y-4 bg-[#181818] border border-white/10 rounded-2xl p-6 sm:p-8">
                <div className="text-xs font-mono uppercase tracking-widest text-mustard flex items-center gap-2">
                  <Workflow className="w-4 h-4" />
                  <span>KEY RESPONSIBILITIES & LEARNING OUTCOMES</span>
                </div>

                <div className="space-y-3 pt-2">
                  {exp.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-mustard/30 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-mustard shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
