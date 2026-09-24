"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { portfolioData } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-transparent relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-mono text-accent">Get In Touch</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
            Let&apos;s Build Something Together
          </h2>
          <p className="text-xl text-muted">
            {portfolioData.personalInfo.name}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-black/40 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />
          
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Email */}
            <a 
              href={`mailto:${portfolioData.personalInfo.email}`} 
              className="flex flex-col items-center justify-center gap-4 p-8 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/50 rounded-2xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-black/50 border border-white/10 rounded-full flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-colors">
                <Mail size={24} />
              </div>
              <div className="text-center">
                <div className="text-sm text-muted mb-1">Email</div>
                <div className="font-medium text-foreground group-hover:text-accent transition-colors">{portfolioData.personalInfo.email}</div>
              </div>
            </a>

            {/* Phone */}
            <a 
              href={`tel:${portfolioData.personalInfo.phone}`} 
              className="flex flex-col items-center justify-center gap-4 p-8 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/50 rounded-2xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-black/50 border border-white/10 rounded-full flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-colors">
                <Phone size={24} />
              </div>
              <div className="text-center">
                <div className="text-sm text-muted mb-1">Phone</div>
                <div className="font-medium text-foreground group-hover:text-accent transition-colors">{portfolioData.personalInfo.phone}</div>
              </div>
            </a>

            {/* LinkedIn */}
            <a 
              href={portfolioData.personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col items-center justify-center gap-4 p-8 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/50 rounded-2xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-black/50 border border-white/10 rounded-full flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-colors">
                <LinkedinIcon style={{ width: 24, height: 24 }} />
              </div>
              <div className="text-center">
                <div className="text-sm text-muted mb-1">Network</div>
                <div className="font-medium text-foreground group-hover:text-accent transition-colors">My LinkedIn</div>
              </div>
            </a>

            {/* GitHub */}
            <a 
              href={portfolioData.personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col items-center justify-center gap-4 p-8 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/50 rounded-2xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-black/50 border border-white/10 rounded-full flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-colors">
                <GithubIcon style={{ width: 24, height: 24 }} />
              </div>
              <div className="text-center">
                <div className="text-sm text-muted mb-1">Code</div>
                <div className="font-medium text-foreground group-hover:text-accent transition-colors">My GitHub</div>
              </div>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
