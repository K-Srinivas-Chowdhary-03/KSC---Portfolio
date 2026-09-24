"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { useState, useEffect } from "react";

const identities = ["Kamma", "Srinivasulu", "Web Developer", "Java Developer", "Freelancer"];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % identities.length);
    }, 3000); // 1.5s visible, plus some transition time
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 overflow-hidden relative">
      {/* Background styling elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[150px] -z-10 animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[150px] -z-10 animate-pulse" style={{ animationDuration: '5s' }} />
      
      {/* Subtle floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {[
          { x: 10, y: 20, d: 7 },
          { x: 85, y: 15, d: 9 },
          { x: 50, y: 80, d: 6 },
          { x: 20, y: 70, d: 8 },
          { x: 75, y: 60, d: 5 },
        ].map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent/40 rounded-full"
            initial={{
              x: `${p.x}vw`,
              y: `${p.y}vh`,
            }}
            animate={{
              y: [null, `calc(${p.y}vh - 100px)`],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: p.d,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6 relative"
        >
          {/* Subtle ambient red glow behind text */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-accent/5 blur-[100px] -z-10" />

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm w-fit">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_8px_rgba(229,9,20,0.8)]" />
            <span className="text-xs font-mono text-muted">Available for work</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground flex flex-col items-start min-h-[140px] md:min-h-[160px] justify-center">
            <span className="mb-2">Hi, I&apos;m</span>
            <div className="relative w-full h-[1.2em]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentIndex}
                  className="text-accent absolute left-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {identities[currentIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </h1>
          
          <h2 className="text-xl md:text-2xl font-medium text-muted mt-2">
            {portfolioData.personalInfo.role}
          </h2>
          
          <p className="text-muted/80 max-w-lg leading-relaxed text-lg">
            {portfolioData.personalInfo.shortIntro}
          </p>
          
          <div className="flex flex-wrap items-center gap-4 mt-4 relative z-20">
            <Link
              href="#projects"
              className="px-6 py-3 bg-accent/90 hover:bg-accent text-white font-semibold rounded-md transition-all flex items-center gap-2 group shadow-[0_0_15px_rgba(229,9,20,0.3)] hover:shadow-[0_0_25px_rgba(229,9,20,0.5)] border border-accent/50"
            >
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="/resume.pdf"
              download="Kamma-Srinivasulu-Resume.pdf"
              className="px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 hover:bg-white/10 text-foreground font-semibold rounded-md transition-all"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Visual Element */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative group z-10"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-transparent rounded-xl blur-xl opacity-50 group-hover:opacity-100 transition duration-1000" />
          <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-[0_0_40px_rgba(229,9,20,0.1)] group-hover:shadow-[0_0_50px_rgba(229,9,20,0.2)] transition-shadow duration-700">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
              <div className="w-3 h-3 rounded-full bg-accent/80 border border-accent hover:bg-accent transition-colors cursor-pointer" />
              <div className="w-3 h-3 rounded-full bg-white/20 border border-white/30 hover:bg-white/40 transition-colors cursor-pointer" />
              <div className="w-3 h-3 rounded-full bg-white/20 border border-white/30 hover:bg-white/40 transition-colors cursor-pointer" />
              <div className="ml-2 flex items-center gap-2 text-xs text-muted font-mono">
                <Terminal size={14} /> index.js
              </div>
            </div>
            
            {/* Terminal Body */}
            <div className="p-6 font-mono text-sm md:text-base leading-relaxed overflow-x-auto">
              <pre className="text-muted">
                <code className="text-foreground/80">
                  <span className="text-accent">const</span> developer = {"{\n"}
                  {"  "}name: <span className="text-white">"{portfolioData.personalInfo.name}"</span>,{"\n"}
                  {"  "}role: <span className="text-white">"Full-Stack Developer"</span>,{"\n"}
                  {"  "}stack: [<span className="text-white">"Java"</span>, <span className="text-white">"React.js"</span>, <span className="text-white">"Node.js"</span>, <span className="text-white">"MongoDB"</span>],{"\n"}
                  {"  "}passion: <span className="text-white">"Building Web Applications"</span>{"\n"}
                  {"}"};
                </code>
              </pre>
              <div className="mt-4 flex items-center gap-2 text-accent font-mono animate-pulse">
                <span>&gt;</span>
                <span className="w-2 h-4 bg-accent inline-block shadow-[0_0_8px_rgba(229,9,20,0.8)]" />
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
