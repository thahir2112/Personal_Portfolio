"use client";

import React from "react";
import { ArrowUp, Heart } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 px-4 sm:px-8 md:px-12 bg-[#080808] border-t border-white/5 text-white/60 text-xs font-mono">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Monogram & Copyright */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-bold text-mustard">
            {portfolioData.monogram}
          </div>
          <div>
            <span className="text-white font-semibold">{portfolioData.name}</span>
            <span className="text-white/40 ml-2">© {currentYear} // ALL RIGHTS RESERVED</span>
          </div>
        </div>

        {/* Center Tagline with Mustard Accent Divider */}
        <div className="flex items-center gap-3 text-white/50">
          <span className="w-6 h-[1px] bg-mustard/60" />
          <span>Built with curiosity & precision.</span>
          <span className="w-6 h-[1px] bg-mustard/60" />
        </div>

        {/* Right Scroll To Top */}
        <div className="flex items-center gap-4">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 hover:text-mustard transition-colors border border-white/10"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
