"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Compass, Sparkles, Languages, CheckCircle2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="relative pt-6 pb-20 md:pt-8 md:pb-28 px-4 sm:px-8 md:px-12 bg-[#0A0A0A] overflow-hidden">
      {/* Background Decorative Glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 -left-32 w-96 h-96 rounded-full bg-mustard/5 blur-[120px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 right-0 w-[30rem] h-[30rem] rounded-full bg-[#1A1508] blur-[150px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
        {/* Section Header */}
        <div className="space-y-4">
          <Reveal>
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-mustard">
              <span className="w-2 h-2 rounded-full bg-mustard" />
              <span>// 01. ABOUT & PHILOSOPHY</span>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <Reveal className="lg:col-span-8">
              <h2 className="text-section-title font-extrabold text-white tracking-tight leading-[1.08]">
                {portfolioData.aboutHeadline}
              </h2>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-4">
              <p className="text-sm sm:text-base text-white/70 leading-relaxed pt-2">
                {portfolioData.aboutBio}
              </p>
            </Reveal>
          </div>
        </div>

        {/* Identity & Career Objective Banner */}
        <Reveal delay={0.15}>
          <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#121212]/95 via-[#16140E]/80 to-[#121212]/95 border border-mustard/30 backdrop-blur-xl shadow-xl space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-mustard/30 bg-mustard/10 text-mustard text-xs font-mono uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Career Objective // Identity & Philosophy</span>
              </div>
              <div className="text-xs font-mono text-white/50">
                <span>{portfolioData.name.toUpperCase()}</span>
                <span className="mx-2">—</span>
                <span className="text-mustard">{portfolioData.location.toUpperCase()}</span>
              </div>
            </div>

            <p className="text-base sm:text-xl md:text-2xl font-bold text-white/95 tracking-tight leading-relaxed italic">
              “{portfolioData.careerObjective}”
            </p>
          </div>
        </Reveal>

        {/* Animated Editorial Divider Motif */}
        <div className="relative w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent">
          <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-[#0A0A0A] text-[10px] font-mono text-mustard uppercase tracking-widest">
            CORE PRINCIPLES
          </div>
        </div>

        {/* Three Editorial Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioData.principles.map((principle, idx) => (
            <Reveal key={principle.title} delay={idx * 0.1}>
              <div className="group relative h-full p-8 rounded-2xl bg-[#121212]/90 border border-white/10 hover:border-mustard/40 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-lg">
                {/* Accent Top Border Bar */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-mustard/0 to-transparent group-hover:via-mustard transition-all duration-500" />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold font-mono text-mustard/80 group-hover:text-mustard transition-colors">
                      {principle.number}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-mustard transition-colors" />
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-mustard transition-colors">
                    {principle.title}
                  </h3>

                  <p className="text-sm text-white/60 leading-relaxed">
                    {principle.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-2 text-[11px] font-mono text-white/40 uppercase tracking-widest">
                  <span>DISCIPLINE</span>
                  <span>//</span>
                  <span className="text-white/70">EXECUTION</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Education & Academic Rigor */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-6">
          {/* Left Column: Education Info */}
          <div className="lg:col-span-8 space-y-6">
            <Reveal>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/60">
                <GraduationCap className="w-4 h-4 text-mustard" />
                <span>ACADEMIC FOUNDATION</span>
              </div>
            </Reveal>

            <div className="space-y-4">
              {portfolioData.education.map((edu, idx) => (
                <Reveal key={edu.degree} delay={idx * 0.1}>
                  <div className="card-glow p-6 sm:p-8 rounded-2xl bg-[#121212]/80 border border-white/10 relative overflow-hidden">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                      <div>
                        <span className="text-xs font-mono text-mustard uppercase tracking-wider font-semibold">
                          {edu.period}
                        </span>
                        <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight mt-1">
                          {edu.degree}
                        </h4>
                        <p className="text-sm text-white/70">
                          {edu.institution}, {edu.location}
                        </p>
                      </div>

                      <div className="sm:text-right self-start sm:self-center px-3.5 py-1.5 rounded-lg bg-mustard/10 border border-mustard/30 text-mustard font-mono font-bold text-sm">
                        {edu.gradeType}: {edu.grade}
                      </div>
                    </div>

                    <div className="space-y-1.5 pt-2 border-t border-white/5">
                      {edu.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-white/60">
                          <span className="text-mustard mt-0.5">•</span>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right Column: Spoken Languages & Highlights */}
          <div className="lg:col-span-4 space-y-6">
            <Reveal delay={0.2}>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/60">
                <Languages className="w-4 h-4 text-mustard" />
                <span>LANGUAGES & COMMUNICATION</span>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="p-6 rounded-2xl bg-[#121212]/80 border border-white/10 space-y-6">
                <div className="space-y-3">
                  <div className="text-xs font-mono uppercase text-white/50 tracking-wider">
                    Proficient In
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {portfolioData.languages.map((lang) => (
                      <span
                        key={lang}
                        className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono font-semibold text-white flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-mustard" />
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 space-y-2 text-xs text-white/60 leading-relaxed">
                  <p>
                    Effective cross-functional communication and documentation skills for collaborative software engineering and analytical reporting.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
