"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-background relative border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        
        {/* Experience Column */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              Experience<span className="text-accent">.</span>
            </h2>
          </motion.div>

          <div className="relative border-l border-border/50 ml-3 md:ml-4 space-y-12">
            {portfolioData.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-12 group"
              >
                {/* Timeline Indicator */}
                <div className="absolute -left-1.5 md:-left-2 top-2 w-3 h-3 md:w-4 md:h-4 rounded-full bg-background border-2 border-accent group-hover:bg-accent transition-colors shadow-[0_0_10px_rgba(229,9,20,0.5)]" />
                
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                  <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                  <span className="text-sm font-mono text-accent bg-accent/10 backdrop-blur-sm px-3 py-1 rounded-full w-fit border border-accent/20">
                    {exp.period}
                  </span>
                </div>
                
                <h4 className="text-lg text-muted mb-4 font-medium">{exp.company}</h4>
                
                <ul className="flex flex-col gap-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-muted/80 flex items-start gap-3">
                      <span className="text-accent mt-1.5 shrink-0 text-[10px]">■</span>
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Column */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              Education<span className="text-accent">.</span>
            </h2>
          </motion.div>

          <div className="relative border-l border-border/50 ml-3 md:ml-4 space-y-12">
            {portfolioData.education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-12 group"
              >
                {/* Timeline Indicator */}
                <div className="absolute -left-1.5 md:-left-2 top-2 w-3 h-3 md:w-4 md:h-4 rounded-full bg-background border-2 border-muted group-hover:border-accent transition-colors" />
                
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                  <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                  <span className="text-sm font-mono text-muted bg-white/5 backdrop-blur-sm px-3 py-1 rounded-full w-fit border border-white/10">
                    {edu.period}
                  </span>
                </div>
                
                <h4 className="text-lg text-muted mb-2">{edu.institution}</h4>
                
                <div className="text-foreground font-medium flex items-center gap-2">
                  CGPA: <span className="text-accent">{edu.cgpa}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
