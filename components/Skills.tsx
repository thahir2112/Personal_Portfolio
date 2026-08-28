"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Database,
  BarChart3,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
  Search,
  CheckCircle,
  GitBranch,
  Laptop,
} from "lucide-react";
import { portfolioData, SkillItem } from "@/data/portfolio";
import Reveal from "./Reveal";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  { id: "all", label: "All Technologies" },
  { id: "programming", label: "Programming" },
  { id: "data", label: "Data & DBs" },
  { id: "analytics", label: "Analytics & BI" },
  { id: "tools", label: "Platforms & Tools" },
  { id: "knowledge", label: "Knowledge Areas" },
];

const SKILL_ICON_MAP: Record<string, React.ReactNode> = {
  Java: <Code2 className="w-5 h-5 text-mustard" />,
  Python: <Terminal className="w-5 h-5 text-mustard" />,
  SQL: <Database className="w-5 h-5 text-mustard" />,
  Pandas: <Layers className="w-5 h-5 text-mustard" />,
  BigQuery: <Database className="w-5 h-5 text-mustard" />,
  "Power BI": <BarChart3 className="w-5 h-5 text-mustard" />,
  Tableau: <BarChart3 className="w-5 h-5 text-mustard" />,
  Git: <GitBranch className="w-5 h-5 text-mustard" />,
  GitHub: <GitBranch className="w-5 h-5 text-mustard" />,
  "VS Code": <Laptop className="w-5 h-5 text-mustard" />,
  Linux: <Terminal className="w-5 h-5 text-mustard" />,
  Windows: <Laptop className="w-5 h-5 text-mustard" />,
  ServiceNow: <Cpu className="w-5 h-5 text-mustard" />,
  "ETL Pipelines": <Layers className="w-5 h-5 text-mustard" />,
  "Data Validation": <CheckCircle className="w-5 h-5 text-mustard" />,
  "Cloud Data Warehousing": <Database className="w-5 h-5 text-mustard" />,
  "Workflow Automation": <Cpu className="w-5 h-5 text-mustard" />,
  ITSM: <Cpu className="w-5 h-5 text-mustard" />,
  "AI Prompt Engineering Basics": <Sparkles className="w-5 h-5 text-mustard" />,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSkills = portfolioData.skills.filter((skill) => {
    const matchesCategory =
      activeCategory === "all" || skill.category === activeCategory;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section
      id="skills"
      className="relative py-28 md:py-36 px-4 sm:px-8 md:px-12 bg-[#0C0C0C] border-t border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="space-y-4">
          <Reveal>
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-mustard">
              <span className="w-2 h-2 rounded-full bg-mustard" />
              <span>// 02. TECHNICAL TOOLCHAIN</span>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end justify-between">
            <Reveal className="lg:col-span-7">
              <h2 className="text-section-title font-extrabold text-white tracking-tight leading-[1.08]">
                Tools I build with.
              </h2>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-5">
              <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                Backend logic that stays understandable. Data workflows that stay
                reliable. Interfaces and systems designed to keep improving.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pt-4 border-b border-white/10 pb-6">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    "px-3.5 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all duration-300 border",
                    isActive
                      ? "bg-mustard text-black font-bold border-mustard shadow-[0_0_15px_rgba(245,197,24,0.3)]"
                      : "bg-white/5 text-white/60 hover:text-white border-white/10 hover:border-white/20"
                  )}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills or concepts..."
              className="w-full pl-9 pr-4 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-white placeholder-white/40 focus:border-mustard focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="group relative p-5 sm:p-6 rounded-xl bg-[#141414] border border-white/10 hover:border-mustard/50 hover:bg-[#181712] transition-all duration-300 flex flex-col justify-between"
              >
                {/* Subtle Left Accent Line */}
                <div className="absolute left-0 top-3 bottom-3 w-[2px] bg-gradient-to-b from-transparent via-mustard/30 group-hover:via-mustard to-transparent transition-all duration-300" />

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-mustard/40 group-hover:bg-mustard/10 transition-colors">
                      {SKILL_ICON_MAP[skill.name] || (
                        <Code2 className="w-5 h-5 text-mustard" />
                      )}
                    </div>

                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 px-2 py-0.5 rounded bg-white/5">
                      {skill.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white tracking-tight group-hover:text-mustard transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-xs text-white/60 leading-relaxed pt-1">
                      {skill.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-white/40">
                  <span>SYSTEM // ACTIVE</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-mustard opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 text-white/40 font-mono text-xs">
            No matching skills found for “{searchQuery}”.
          </div>
        )}
      </div>
    </section>
  );
}
