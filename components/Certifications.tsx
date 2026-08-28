"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, CheckCircle, ShieldCheck, Sparkles, Cloud, Database, Network } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import Reveal from "./Reveal";

const CERT_ICONS: Record<string, React.ReactNode> = {
  Coursera: <Award className="w-5 h-5 text-mustard" />,
  NVIDIA: <Sparkles className="w-5 h-5 text-[#76B900]" />,
  Deloitte: <Database className="w-5 h-5 text-[#86BC25]" />,
  "HP LIFE": <ShieldCheck className="w-5 h-5 text-[#0096D6]" />,
  "TCS iON": <Sparkles className="w-5 h-5 text-[#FFB800]" />,
  AWS: <Cloud className="w-5 h-5 text-[#FF9900]" />,
  NPTEL: <Network className="w-5 h-5 text-mustard" />,
};

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative py-28 md:py-36 px-4 sm:px-8 md:px-12 bg-[#0A0A0A]"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-4">
          <Reveal>
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-mustard">
              <span className="w-2 h-2 rounded-full bg-mustard" />
              <span>// 05. CREDENTIALS & INDUSTRY VERIFICATIONS</span>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end justify-between">
            <Reveal className="lg:col-span-8">
              <h2 className="text-section-title font-extrabold text-white tracking-tight leading-[1.08]">
                Continuous Learning.
              </h2>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-4">
              <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                Industry-recognized programs completed across Cloud, Generative AI,
                Data Analytics, and Computer Networks.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {portfolioData.certifications.map((cert, idx) => (
            <Reveal key={cert.title + cert.issuer} delay={idx * 0.05}>
              <div
                tabIndex={0}
                className="group relative h-full p-6 rounded-2xl bg-[#121212] border border-white/10 hover:border-mustard/50 hover:bg-[#161510] transition-all duration-300 flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mustard shadow-md"
              >
                {/* Accent Top Bar */}
                <div className="absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-mustard/0 to-transparent group-hover:via-mustard transition-all duration-300" />

                <div className="space-y-4">
                  {/* Top Bar: Issuer and Icon */}
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono font-bold uppercase tracking-wider text-white/80 group-hover:text-mustard group-hover:border-mustard/30 transition-colors">
                      {cert.issuer}
                    </span>

                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                      {CERT_ICONS[cert.issuer] || <Award className="w-4 h-4 text-mustard" />}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-white tracking-tight leading-snug group-hover:text-mustard transition-colors">
                    {cert.title}
                  </h3>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-white/50 border border-white/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Verification Status */}
                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-white/40">
                  <span className="text-mustard/70">{cert.category}</span>
                  <span className="flex items-center gap-1 text-emerald-400">
                    <CheckCircle className="w-3 h-3" />
                    Verified
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
