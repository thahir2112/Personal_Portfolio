"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart3,
  TrendingUp,
  Database,
  Layers,
  ArrowUpRight,
  Sparkles,
  ExternalLink,
  Code2,
  CheckCircle2,
  Lock,
  Workflow,
  Info,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import Reveal from "./Reveal";
import MagneticButton from "./MagneticButton";

export default function Projects() {
  const [activeTab, setActiveTab] = useState<"overview" | "architecture" | "metrics">("overview");
  const [showModal, setShowModal] = useState(false);

  const project = portfolioData.projects[0];

  return (
    <section id="projects" className="relative py-28 md:py-36 px-4 sm:px-8 md:px-12 bg-[#0A0A0A]">
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[45rem] h-[25rem] bg-mustard/5 blur-[160px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-4">
          <Reveal>
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-mustard">
              <span className="w-2 h-2 rounded-full bg-mustard" />
              <span>// 03. FEATURED ENGINEERING & ANALYTICS</span>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end justify-between">
            <Reveal className="lg:col-span-8">
              <h2 className="text-section-title font-extrabold text-white tracking-tight leading-[1.08]">
                Selected Work.
              </h2>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-4">
              <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                End-to-end data pipeline engineering and executive intelligence
                dashboards built for real-world analytical performance.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Primary Featured Project Card */}
        <Reveal delay={0.15}>
          <div className="relative rounded-3xl bg-gradient-to-b from-[#161616] to-[#0E0E0E] border border-white/10 hover:border-mustard/40 transition-all duration-500 overflow-hidden shadow-2xl">
            {/* Top Accent Light */}
            <div className="h-1 bg-gradient-to-r from-transparent via-mustard to-transparent" />

            <div className="p-6 sm:p-10 md:p-12 space-y-10">
              {/* Card Meta Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mustard/10 border border-mustard/30 text-mustard font-mono text-xs uppercase tracking-wider mb-3">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{project.status}</span>
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {project.title}
                  </h3>
                </div>

                {/* View Project Action (with Modal / Coming Soon Handler) */}
                <div className="flex items-center gap-3">
                  <MagneticButton strength={0.2}>
                    <button
                      onClick={() => setShowModal(true)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-mustard hover:text-black text-white font-mono text-xs uppercase tracking-widest font-semibold border border-white/20 hover:border-mustard transition-all duration-300 shadow-md"
                    >
                      <span>Project Specs</span>
                      <Info className="w-3.5 h-3.5" />
                    </button>
                  </MagneticButton>
                </div>
              </div>

              {/* Interactive Preview Tabs */}
              <div className="flex items-center gap-2 border-b border-white/5 pb-3">
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`px-4 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-colors ${
                    activeTab === "overview"
                      ? "bg-mustard text-black font-bold"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  Overview & KPIs
                </button>
                <button
                  onClick={() => setActiveTab("architecture")}
                  className={`px-4 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-colors ${
                    activeTab === "architecture"
                      ? "bg-mustard text-black font-bold"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  ETL Pipeline Architecture
                </button>
              </div>

              {/* Tab Contents */}
              {activeTab === "overview" ? (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Left Project Summary */}
                  <div className="lg:col-span-6 space-y-6">
                    <p className="text-base text-white/80 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Detailed Highlights */}
                    <div className="space-y-2.5 pt-2">
                      <div className="text-xs font-mono text-mustard uppercase tracking-widest">
                        // CORE IMPLEMENTATION DETAILS
                      </div>
                      {project.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/70">
                          <CheckCircle2 className="w-4 h-4 text-mustard shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="pt-4">
                      <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-2">
                        TECHNOLOGY STACK
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-md bg-[#1F1F1F] border border-white/10 text-xs font-mono font-medium text-white/90"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: Dashboard Mockup Widget */}
                  <div className="lg:col-span-6">
                    <div className="rounded-2xl bg-[#111111] border border-white/15 p-5 shadow-2xl space-y-4 relative overflow-hidden">
                      {/* Top Window Bar */}
                      <div className="flex items-center justify-between border-b border-white/10 pb-3">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                          <span className="text-[11px] font-mono text-white/40 ml-2">
                            analytics_bi_dashboard.sql
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-mustard uppercase">
                          LIVE REVENUE STREAM
                        </span>
                      </div>

                      {/* Mockup Dashboard KPI Widgets */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        <div className="p-3 rounded-lg bg-[#181818] border border-white/5 space-y-1">
                          <div className="text-[10px] font-mono text-white/40 uppercase">
                            Revenue Growth
                          </div>
                          <div className="text-lg font-bold text-mustard flex items-center gap-1 font-mono">
                            +24.8% <TrendingUp className="w-3.5 h-3.5" />
                          </div>
                        </div>
                        <div className="p-3 rounded-lg bg-[#181818] border border-white/5 space-y-1">
                          <div className="text-[10px] font-mono text-white/40 uppercase">
                            ETL Success Rate
                          </div>
                          <div className="text-lg font-bold text-white font-mono">
                            99.9%
                          </div>
                        </div>
                        <div className="p-3 rounded-lg bg-[#181818] border border-white/5 space-y-1 col-span-2 sm:col-span-1">
                          <div className="text-[10px] font-mono text-white/40 uppercase">
                            Cloud Warehouse
                          </div>
                          <div className="text-lg font-bold text-mustard font-mono">
                            BigQuery
                          </div>
                        </div>
                      </div>

                      {/* Simulated Chart Bars */}
                      <div className="p-4 rounded-xl bg-[#161616] border border-white/5 space-y-3">
                        <div className="flex items-center justify-between text-xs font-mono text-white/60">
                          <span>Monthly Category Performance</span>
                          <span className="text-mustard">Top Product Trends</span>
                        </div>

                        {/* Chart Bars */}
                        <div className="flex items-end justify-between h-28 gap-2 pt-2">
                          {[40, 65, 50, 85, 70, 95, 80, 100].map((h, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                              <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: `${h}%` }}
                                transition={{ duration: 0.8, delay: i * 0.05 }}
                                className={`w-full rounded-t-sm transition-all ${
                                  i === 5 || i === 7
                                    ? "bg-mustard shadow-[0_0_12px_rgba(245,197,24,0.5)]"
                                    : "bg-white/20 hover:bg-white/40"
                                }`}
                              />
                              <span className="text-[9px] font-mono text-white/30">
                                W{i + 1}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Footer Note */}
                      <div className="flex items-center justify-between text-[11px] font-mono text-white/40 pt-1">
                        <span>Power BI / Tableau Sync</span>
                        <span className="text-emerald-400 font-semibold flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Validated
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* Architecture View */
                <div className="p-6 sm:p-8 rounded-2xl bg-[#111111] border border-white/10 space-y-6">
                  <div className="text-xs font-mono uppercase tracking-widest text-mustard">
                    // END-TO-END DATAFLOW PIPELINE
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-4 rounded-xl bg-[#181818] border border-white/5 space-y-2">
                      <div className="text-xs font-mono text-mustard font-bold">01. INGESTION</div>
                      <h4 className="text-sm font-bold text-white">Raw Data Simulation</h4>
                      <p className="text-xs text-white/60">
                        Synthetic e-commerce transaction logs generated and formatted in Python.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#181818] border border-white/5 space-y-2">
                      <div className="text-xs font-mono text-mustard font-bold">02. TRANSFORMATION</div>
                      <h4 className="text-sm font-bold text-white">Pandas & SQL Validation</h4>
                      <p className="text-xs text-white/60">
                        Cleaning, missing value handling, schema validation, and normalization.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#181818] border border-white/5 space-y-2">
                      <div className="text-xs font-mono text-mustard font-bold">03. WAREHOUSING</div>
                      <h4 className="text-sm font-bold text-white">BigQuery Staging</h4>
                      <p className="text-xs text-white/60">
                        Idempotent batch loading with staging tables to prevent duplicate records.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#181818] border border-white/5 space-y-2">
                      <div className="text-xs font-mono text-mustard font-bold">04. VISUALIZATION</div>
                      <h4 className="text-sm font-bold text-white">Power BI & Tableau</h4>
                      <p className="text-xs text-white/60">
                        Interactive executive dashboards highlighting revenue, customer cohorts, and KPIs.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </div>

      {/* Project Details Modal / Specs dialog */}
      <AnimatePresence>
        {showModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full bg-[#141414] border border-mustard/40 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-mustard">
                    PROJECT ARCHITECTURE //
                  </span>
                  <h4 className="text-lg font-bold text-white">
                    {project.title}
                  </h4>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-white/40 hover:text-white text-xs font-mono p-1"
                >
                  [ESC]
                </button>
              </div>

              <div className="space-y-4 text-xs text-white/70 leading-relaxed">
                <p>
                  This project was built as an end-to-end data analytics and ETL demonstration simulating real-world e-commerce sales dynamics.
                </p>
                <div className="p-3.5 rounded-lg bg-mustard/10 border border-mustard/20 text-mustard font-mono text-xs">
                  <strong>Notice:</strong> As this project is part of a local analytical portfolio suite, public GitHub / live dashboard URLs can be configured via <code className="bg-black/40 px-1 py-0.5 rounded">data/portfolio.ts</code>.
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-5 py-2 rounded-lg bg-mustard text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-mustard-light transition-colors"
                >
                  Close Specs
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
