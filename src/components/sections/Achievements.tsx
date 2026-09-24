"use client";

import { motion } from "framer-motion";
import { Award, Code2, Trophy } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-background relative border-t border-border/50 overflow-hidden">
      {/* Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Code. Solve. Build. Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-foreground via-muted to-foreground mb-4">
            CODE. SOLVE. BUILD.
          </h2>
          <div className="flex justify-center gap-4 mt-8">
            <a href={portfolioData.personalInfo.github} target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-border hover:border-accent text-foreground hover:text-accent font-medium rounded-md transition-colors flex items-center gap-2">
              <Code2 size={18} /> GitHub Profile
            </a>
            <a href={portfolioData.personalInfo.leetcode} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-card border border-border hover:border-accent text-foreground hover:text-accent font-medium rounded-md transition-colors flex items-center gap-2">
              <Trophy size={18} /> LeetCode Stats
            </a>
          </div>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {portfolioData.achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-black/40 backdrop-blur-xl border ${achievement.prominent ? 'border-accent/50 shadow-[0_0_30px_rgba(229,9,20,0.15)]' : 'border-white/10'} p-8 rounded-3xl hover:-translate-y-2 hover:bg-white/5 transition-all duration-300 overflow-hidden group`}
            >
              {achievement.prominent && (
                <div className="absolute -right-4 -top-4 text-9xl font-black text-accent/10 group-hover:text-accent/20 transition-colors pointer-events-none select-none">
                  {achievement.rank}
                </div>
              )}
              
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${achievement.prominent ? 'bg-accent text-white' : 'bg-background border border-border text-muted'}`}>
                  {achievement.prominent ? <Trophy size={24} /> : <Award size={24} />}
                </div>
                
                <h3 className={`text-2xl font-bold mb-2 ${achievement.prominent ? 'text-accent' : 'text-foreground'}`}>
                  {achievement.title}
                </h3>
                <h4 className="text-lg font-medium text-muted mb-4">{achievement.subtitle}</h4>
                
                {achievement.prize && (
                  <div className="inline-block px-3 py-1 bg-accent/10 border border-accent/20 text-accent text-sm font-bold rounded-md mb-4">
                    Prize: {achievement.prize}
                  </div>
                )}
                
                <p className="text-muted/80 leading-relaxed mb-4">
                  {achievement.description}
                </p>
                
                {achievement.project && (
                  <div className="mt-4 pt-4 border-t border-border/50 text-sm">
                    <span className="text-muted">Project:</span> <span className="text-foreground font-medium">{achievement.project}</span>
                    <br />
                    <span className="text-muted">Role:</span> <span className="text-foreground font-medium">{achievement.role}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
