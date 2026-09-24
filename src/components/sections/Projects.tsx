"use client";

import { motion } from "framer-motion";
import { ExternalLink, Monitor } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { portfolioData } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-transparent relative">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Featured Work<span className="text-accent">.</span>
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            A showcase of my recent full-stack applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-br from-accent/20 to-transparent rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition duration-700" />
              
              <div className="relative h-full flex flex-col bg-black/40 backdrop-blur-xl border border-white/10 group-hover:border-accent/50 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                
                {/* Browser Mockup */}
                <div className="w-full border-b border-white/10 bg-black/60 relative overflow-hidden">
                  <div className="bg-white/5 px-4 py-3 flex items-center gap-2 backdrop-blur-md">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-white/20" />
                      <div className="w-3 h-3 rounded-full bg-white/20" />
                      <div className="w-3 h-3 rounded-full bg-white/20" />
                    </div>
                    <div className="mx-auto bg-black/50 text-muted/50 text-[10px] sm:text-xs px-8 sm:px-16 py-1 rounded-md border border-white/5 flex items-center gap-2 font-mono truncate max-w-[60%]">
                      <Monitor size={12} className="shrink-0" /> {new URL(project.liveUrl).hostname}
                    </div>
                  </div>
                  
                  {/* Mockup Body - interactive abstract representation */}
                  <div className="aspect-video bg-black relative flex items-center justify-center p-8 text-center overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] group-hover:scale-105 transition-transform duration-700" />
                    
                    {/* Abstract shapes for visual interest */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-colors duration-700" />
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors duration-700" />
                    
                    <h3 className="text-2xl md:text-3xl font-black text-white/10 group-hover:text-white/20 z-10 tracking-tighter transition-colors duration-500">
                      {project.title.toUpperCase()}
                    </h3>
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="text-accent text-xs font-mono mb-3 flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-accent" /> Featured Project
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8 text-xs font-mono text-muted">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-accent/10 hover:bg-accent text-accent hover:text-white border border-accent/20 hover:border-accent font-semibold py-2.5 rounded-lg transition-all duration-300 group/btn"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </a>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-foreground border border-white/10 hover:border-white/20 p-2.5 rounded-lg transition-all duration-300"
                        title="View Source Code"
                      >
                        <GithubIcon style={{ width: 20, height: 20 }} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
