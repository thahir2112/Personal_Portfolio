"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  FileText,
  Copy,
  Check,
  ArrowUpRight,
  Sparkles,
  ExternalLink,
  Code2,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import Reveal from "./Reveal";
import MagneticButton from "./MagneticButton";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [resumeStatus, setResumeStatus] = useState<string | null>(null);

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${portfolioData.email}`;

  const handleCopy = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  const handleDownloadResume = (e: React.MouseEvent) => {
    // Check if resume file exists or trigger download
    fetch(portfolioData.resumePath, { method: "HEAD" })
      .then((res) => {
        if (res.ok) {
          window.open(portfolioData.resumePath, "_blank");
        } else {
          setResumeStatus("Resume file will be ready once added to /public folder.");
          setTimeout(() => setResumeStatus(null), 4000);
        }
      })
      .catch(() => {
        setResumeStatus("Resume file will be ready once added to /public folder.");
        setTimeout(() => setResumeStatus(null), 4000);
      });
  };

  return (
    <section
      id="contact"
      className="relative py-28 md:py-40 px-4 sm:px-8 md:px-12 bg-[#0A0A0A] overflow-hidden border-t border-white/10"
    >
      {/* Giant Faint "THAHIR" Background Typography */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none -z-10 overflow-hidden"
      >
        <span className="font-extrabold text-giant text-white/[0.03] tracking-tighter uppercase whitespace-nowrap leading-none scale-125">
          {portfolioData.displayName}
        </span>
      </div>

      {/* Warm Ambient Glow */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[50rem] h-[20rem] bg-gradient-to-t from-mustard/10 to-transparent blur-[140px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-mustard/10 border border-mustard/30 text-xs font-mono uppercase tracking-widest text-mustard">
              <Sparkles className="w-3.5 h-3.5" />
              <span>// 06. CONTACT & COLLABORATION</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-section-title font-extrabold text-white tracking-tight leading-[1.05]">
              Let’s build something different.
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-base sm:text-lg text-white/70 leading-relaxed">
              Open to learning opportunities, full-stack projects, analytics work,
              and meaningful technical collaborations.
            </p>
          </Reveal>
        </div>

        {/* Action Buttons */}
        <Reveal delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <MagneticButton strength={0.3}>
              <a
                href={gmailUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full text-xs font-mono uppercase tracking-widest font-bold text-black bg-mustard hover:bg-mustard-light transition-all duration-300 shadow-[0_0_30px_rgba(245,197,24,0.35)] hover:shadow-[0_0_40px_rgba(245,197,24,0.6)]"
              >
                <Mail className="w-4 h-4" />
                <span>Get In Touch</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </MagneticButton>

            <MagneticButton strength={0.2}>
              <button
                onClick={handleDownloadResume}
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full text-xs font-mono uppercase tracking-widest font-medium text-white border border-white/20 hover:border-mustard hover:text-mustard bg-white/5 hover:bg-mustard/10 backdrop-blur-sm transition-all duration-300 shadow-md"
              >
                <FileText className="w-4 h-4 text-mustard" />
                <span>Download Resume</span>
              </button>
            </MagneticButton>
          </div>
        </Reveal>

        {/* Status Toast */}
        <AnimatePresence>
          {resumeStatus && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="text-center"
            >
              <span className="inline-block px-4 py-2 rounded-lg bg-[#181818] border border-mustard/40 text-xs font-mono text-mustard">
                {resumeStatus}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-6">
          {/* Email Card */}
          <Reveal delay={0.25}>
            <div
              onClick={() => window.open(gmailUrl, "_blank", "noopener,noreferrer")}
              className="p-6 rounded-2xl bg-[#121212] border border-white/10 space-y-3 relative group hover:border-mustard/40 transition-colors cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-lg bg-mustard/10 flex items-center justify-center text-mustard group-hover:bg-mustard group-hover:text-black transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCopy(portfolioData.email, "email");
                  }}
                  className="p-1.5 px-2 rounded-md bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-mono"
                  aria-label="Copy email address"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-mustard" />
                      <span className="text-mustard text-[10px]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-[10px] text-white/40 group-hover:text-white/70">Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-white/40">
                  DIRECT EMAIL
                </div>
                <a
                  href={gmailUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-sm font-semibold text-white group-hover:text-mustard transition-colors break-all inline-flex items-center gap-1.5"
                >
                  <span>{portfolioData.email}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-mustard" />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Phone Card */}
          <Reveal delay={0.3}>
            <div className="p-6 rounded-2xl bg-[#121212] border border-white/10 space-y-3 relative group hover:border-mustard/40 transition-colors">
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-lg bg-mustard/10 flex items-center justify-center text-mustard">
                  <Phone className="w-4 h-4" />
                </div>
                <button
                  onClick={() => handleCopy(portfolioData.phone, "phone")}
                  className="p-1.5 rounded bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-colors"
                  aria-label="Copy phone number"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-mustard" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-white/40">
                  PHONE CONTACT
                </div>
                <a
                  href={`tel:${portfolioData.phone}`}
                  className="text-sm font-semibold text-white group-hover:text-mustard transition-colors font-mono"
                >
                  {portfolioData.phone}
                </a>
              </div>
            </div>
          </Reveal>

          {/* Location Card */}
          <Reveal delay={0.35}>
            <div className="p-6 rounded-2xl bg-[#121212] border border-white/10 space-y-3 relative group hover:border-mustard/40 transition-colors">
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-lg bg-mustard/10 flex items-center justify-center text-mustard">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  IST (UTC+5:30)
                </span>
              </div>

              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-white/40">
                  BASE LOCATION
                </div>
                <div className="text-sm font-semibold text-white">
                  {portfolioData.location}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Social Profiles Bar */}
        <Reveal delay={0.4}>
          <div className="p-6 rounded-2xl bg-[#141414] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
            <div className="text-xs font-mono text-white/60">
              // CONNECTED DEVELOPER PROFILES
            </div>

            <div className="flex items-center gap-3">
              {/* 
                TODO: Replace these placeholder profile links with your actual URLs 
                in /data/portfolio.ts
              */}
              <a
                href={portfolioData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-mustard hover:text-mustard text-xs font-mono text-white transition-colors flex items-center gap-1.5"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>

              <a
                href={portfolioData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-mustard hover:text-mustard text-xs font-mono text-white transition-colors flex items-center gap-1.5"
              >
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>

              <a
                href={portfolioData.socialLinks.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-mustard hover:text-mustard text-xs font-mono text-white transition-colors flex items-center gap-1.5"
              >
                <span>LeetCode</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
