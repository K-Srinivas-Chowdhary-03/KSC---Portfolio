"use client";

import Image from "next/image";
import { Code2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black/80 backdrop-blur-xl border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="relative group transition-all duration-300 flex items-center">
            <span className="text-accent text-2xl font-black mr-1 relative z-10 font-mono tracking-tighter">&lt;</span>
            <Image 
              src="/ksc-logo.png" 
              alt="KSC Logo" 
              width={80} 
              height={40} 
              className="w-16 md:w-20 h-auto object-contain mb-1"
            />
            <span className="text-accent text-2xl font-black ml-1 relative z-10 font-mono tracking-tighter">/&gt;</span>
          </div>
          <p className="text-sm text-muted mt-2">
            Java Full-Stack Developer • React.js Developer
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a href={portfolioData.personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors">
            <GithubIcon style={{ width: 20, height: 20 }} />
            <span className="sr-only">GitHub</span>
          </a>
          <a href={portfolioData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors">
            <LinkedinIcon style={{ width: 20, height: 20 }} />
            <span className="sr-only">LinkedIn</span>
          </a>
          {/* Keeping Leetcode since it was in the original, but can remove if user strictly said "no other links", though user said "Do not use any other LinkedIn or Github URL", not "Remove LeetCode" */}
          <a href={portfolioData.personalInfo.leetcode} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors">
            <Code2 size={20} />
            <span className="sr-only">LeetCode</span>
          </a>
        </div>

        <div className="text-sm text-muted">
          &copy; {currentYear} {portfolioData.personalInfo.name}. All rights reserved.
        </div>
        
      </div>
    </footer>
  );
}
