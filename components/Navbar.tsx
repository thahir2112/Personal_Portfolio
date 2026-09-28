"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import MagneticButton from "./MagneticButton";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Active section spy
      const sections = NAV_LINKS.map((link) => link.href.replace("#", ""));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 px-4 sm:px-8 md:px-12",
          isScrolled
            ? "bg-[#0A0A0A]/85 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.8)] py-3.5"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Wordmark */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="group flex flex-col justify-center focus-visible:outline-none"
            aria-label="Mohamed Thahir S Portfolio Home"
          >
            <span className="font-bold text-sm sm:text-base tracking-wide text-white group-hover:text-mustard transition-colors leading-tight">
              Mohamed Thahir S
            </span>
            <span className="text-[10px] sm:text-[11px] font-mono font-medium text-white/50 tracking-widest uppercase group-hover:text-mustard/90 transition-colors flex items-center gap-1.5 pt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-mustard" />
              CSE
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 bg-[#121212]/70 border border-white/10 backdrop-blur-md rounded-full px-4 py-1.5 shadow-inner"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={cn(
                    "relative px-3.5 py-1.5 text-xs uppercase tracking-widest font-mono font-medium transition-all duration-300 rounded-full",
                    isActive
                      ? "text-black font-semibold"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-mustard rounded-full shadow-[0_0_15px_rgba(245,197,24,0.5)] -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <MagneticButton strength={0.2}>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="group relative inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-mono uppercase tracking-widest font-semibold text-black bg-mustard hover:bg-mustard-light transition-all shadow-[0_0_20px_rgba(245,197,24,0.3)] hover:shadow-[0_0_25px_rgba(245,197,24,0.5)]"
              >
                <span>Let’s Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </MagneticButton>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            className="md:hidden p-2 rounded-lg border border-white/15 bg-white/5 text-white/80 hover:text-mustard hover:border-mustard transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-2xl pt-24 px-6 pb-10 flex flex-col justify-between md:hidden border-b border-white/10"
          >
            <div className="flex flex-col gap-3">
              <div className="text-[10px] font-mono uppercase tracking-widest text-mustard mb-2">
                // NAVIGATION
              </div>
              {NAV_LINKS.map((link, idx) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                    className={cn(
                      "text-xl font-bold tracking-tight py-2.5 px-3 rounded-lg flex items-center justify-between border-b border-white/5",
                      isActive
                        ? "text-mustard bg-mustard/10 font-extrabold"
                        : "text-white/80 hover:text-white"
                    )}
                  >
                    <span>{link.name}</span>
                    <span className="text-xs font-mono text-white/40">0{idx + 1}</span>
                  </motion.a>
                );
              })}
            </div>

            <div className="pt-6 border-t border-white/10 space-y-3">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="w-full py-3 rounded-xl bg-mustard text-black font-bold font-mono text-center text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(245,197,24,0.3)]"
              >
                <span>Let’s Talk</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${portfolioData.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-xs font-mono text-white/50 hover:text-mustard transition-colors"
              >
                {portfolioData.email}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
