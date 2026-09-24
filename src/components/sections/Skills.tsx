"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  // Filter out Highlights as it's used differently
  const skillCategories = Object.entries(portfolioData.skills).filter(
    ([category]) => category !== "Highlights"
  );

  return (
    <section id="skills" className="py-24 bg-card relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Technical Arsenal<span className="text-accent">.</span>
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            A curated list of technologies I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map(([category, skills], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:border-accent/30 hover:bg-white/5 transition-all group relative overflow-hidden shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2 relative z-10">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                {category}
              </h3>
              
              <motion.ul 
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-col gap-3 relative z-10"
              >
                {skills.map((skill) => (
                  <motion.li 
                    key={skill}
                    variants={item}
                    className="text-muted flex items-center gap-3 group/skill hover:text-foreground transition-colors"
                  >
                    <span className="text-accent/50 group-hover/skill:text-accent transition-colors">▹</span>
                    {skill}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
