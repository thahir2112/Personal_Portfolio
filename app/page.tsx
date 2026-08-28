import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-white selection:bg-mustard selection:text-black overflow-x-hidden">
      {/* Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Fixed Dynamic Blur Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* Pinned Scroll-Driven Hero */}
        <Hero />

        {/* About & Philosophy */}
        <About />

        {/* Technical Toolchain & Skills */}
        <Skills />

        {/* Featured Projects Showcase */}
        <Projects />

        {/* Internship Experience */}
        <Experience />

        {/* Certifications & Industry Verifications */}
        <Certifications />

        {/* Contact & Collaboration */}
        <Contact />
      </main>

      {/* Minimal Editorial Footer */}
      <Footer />
    </div>
  );
}
