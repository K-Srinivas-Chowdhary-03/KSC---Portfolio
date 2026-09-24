"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-24 bg-background relative border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            About Me<span className="text-accent">.</span>
          </h2>
          <div className="w-20 h-1 bg-accent mt-4 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-6 text-muted/90 leading-relaxed text-lg"
          >
            <p>
              I am currently a Java Full-Stack Development Trainee at Dhee Coding Lab, Bangalore. 
              My journey in software engineering is driven by a deep interest in building real-world 
              web applications and solving complex programming problems.
            </p>
            <p>
              I specialize in bridging the gap between robust backend architectures and highly 
              interactive frontend interfaces. My approach focuses on clean code, scalability, 
              and delivering seamless user experiences.
            </p>
            <div className="pt-4 flex flex-wrap gap-2">
              {portfolioData.skills.Highlights.map((highlight, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 border border-border rounded-full text-sm font-medium hover:border-accent hover:text-accent transition-colors"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
          >
            {portfolioData.stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl flex flex-col justify-center items-start hover:border-accent/50 hover:bg-white/10 transition-colors group"
              >
                <div className="text-3xl md:text-4xl font-bold text-accent group-hover:scale-105 transition-transform origin-left">
                  {stat.value}
                </div>
                <div className="text-sm text-muted mt-2 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
