"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";
import projects from "@/data/projects";

const VISIBLE = 3;

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(null);
  const maxIndex = Math.max(0, projects.length - VISIBLE);

  const prev = () => setCurrent((c) => Math.max(c - 1, 0));
  const next = () => setCurrent((c) => Math.min(c + 1, maxIndex));

  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      {/* bg blobs */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/8 to-transparent pointer-events-none" />
      <motion.div className="absolute top-20 -left-20 w-80 h-80 bg-purple-600/8 rounded-full blur-3xl"
        animate={{ x: [0, 50, 0] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="absolute bottom-20 -right-20 w-80 h-80 bg-blue-600/8 rounded-full blur-3xl"
        animate={{ x: [0, -50, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* ── Header ── */}
        <AnimateOnScroll direction="up" className="text-center mb-16">
          <p className="text-purple-400 text-sm font-semibold uppercase tracking-widest mb-2">Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">My Work</h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto">
            Real-world projects built with modern technologies — from frontend UIs to full-stack MERN applications
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-10 mt-10">
            {[["10+", "Projects Built", "🚀"], ["9+", "Months Practice", "⏱️"], ["5+", "Technologies", "🛠️"]].map(([num, label, icon]) => (
              <div key={label} className="text-center group">
                <div className="text-3xl mb-1">{icon}</div>
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">{num}</div>
                <div className="text-gray-500 text-xs uppercase tracking-wider">{label}</div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        {/* ── Slider ── */}
        <AnimateOnScroll direction="up" delay={0.1}>
          <div className="relative px-2">
            {/* overflow-x-hidden + overflow-y-visible = no clipping on hover lift */}
            <div className="overflow-x-hidden overflow-y-visible py-6">
              <motion.div
                className="flex gap-6"
                animate={{ x: `calc(-${current} * (100% / ${VISIBLE} + 8px))` }}
                transition={{ type: "spring", stiffness: 260, damping: 26 }}
              >
                {projects.map((project, i) => (
                  <motion.div
                    key={project.title}
                    onHoverStart={() => setHovered(i)}
                    onHoverEnd={() => setHovered(null)}
                    className={`group flex-shrink-0 w-[calc((100%-32px)/3)] rounded-2xl border transition-all duration-300 flex flex-col overflow-hidden backdrop-blur-sm cursor-pointer
                      ${hovered === i
                        ? "border-purple-500/60 -translate-y-3 shadow-2xl bg-gray-800/80"
                        : "border-gray-700/50 bg-gray-800/50 hover:border-purple-500/40"
                      } ${project.glow}`}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (i % VISIBLE) * 0.1 }}
                  >
                    {/* ── Image / Banner ── */}
                    <div className="relative h-48 flex-shrink-0 overflow-hidden">
                      {project.image ? (
                        <>
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                          {/* Dark overlay — lifts on hover */}
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent transition-opacity duration-300 group-hover:opacity-70" />
                          {/* Colored tint on hover */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                        </>
                      ) : (
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}>
                          <div className="absolute inset-0 opacity-10"
                            style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <motion.span className="text-7xl drop-shadow-2xl"
                              animate={hovered === i ? { scale: 1.15, rotate: 8 } : { scale: 1, rotate: 0 }}
                              transition={{ type: "spring", stiffness: 300 }}>
                              {project.emoji}
                            </motion.span>
                          </div>
                        </div>
                      )}

                      {/* Badge */}
                      <div className={`absolute top-3 left-3 text-xs px-2.5 py-1 rounded-full border font-semibold backdrop-blur-md ${project.badgeColor}`}>
                        {project.badge}
                      </div>

                      {/* Quick action buttons — appear on hover */}
                      <AnimatePresence>
                        {hovered === i && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute bottom-3 right-3 flex gap-2"
                          >
                            <a href={project.github} target="_blank" rel="noopener noreferrer"
                              className="w-8 h-8 rounded-full bg-gray-900/80 backdrop-blur border border-gray-600 flex items-center justify-center text-gray-300 hover:text-white hover:border-purple-400 transition-all duration-200"
                              onClick={(e) => e.stopPropagation()} aria-label="GitHub">
                              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                              </svg>
                            </a>
                        <a href={project.live} target="_blank" rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full bg-purple-600/90 backdrop-blur border border-purple-500 flex items-center justify-center text-white hover:bg-purple-500 transition-all duration-200"
                          onClick={(e) => e.stopPropagation()} aria-label="Live Demo">
                              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* ── Card Body ── */}
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="text-white font-bold text-base mb-2 group-hover:text-purple-300 transition-colors duration-200 leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">{project.desc}</p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tags.slice(0, 4).map((tag) => (
                          <span key={tag} className="bg-gray-700/50 text-gray-300 text-xs px-2.5 py-1 rounded-full border border-gray-600/40 group-hover:border-purple-500/30 group-hover:text-purple-200 transition-colors duration-200">
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 4 && (
                          <span className="bg-gray-700/50 text-gray-500 text-xs px-2.5 py-1 rounded-full border border-gray-600/40">
                            +{project.tags.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Buttons */}
                      <div className="flex gap-2.5">
                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                          className="flex-1 text-center border border-gray-600/60 text-gray-300 hover:border-purple-500 hover:text-purple-300 hover:bg-purple-900/20 py-2 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center justify-center gap-1.5">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                          </svg>
                          Code
                        </a>
                        {project.live && project.live !== "#" ? (
                          <a href={project.live} target="_blank" rel="noopener noreferrer"
                            className="flex-1 text-center bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white py-2 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center justify-center gap-1.5 shadow-md shadow-purple-500/20">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            Live Demo
                          </a>
                        ) : (
                          <span className="flex-1 text-center bg-gray-700/40 text-gray-500 py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 cursor-not-allowed border border-gray-700/40">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                            </svg>
                            Coming Soon
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Prev */}
            <button onClick={prev} disabled={current === 0}
              className="absolute -left-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-gray-800/90 backdrop-blur-sm border border-gray-700 text-white flex items-center justify-center hover:bg-purple-700 hover:border-purple-500 disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-200 z-10 shadow-xl"
              aria-label="Previous">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            {/* Next */}
            <button onClick={next} disabled={current === maxIndex}
              className="absolute -right-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-gray-800/90 backdrop-blur-sm border border-gray-700 text-white flex items-center justify-center hover:bg-purple-700 hover:border-purple-500 disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-200 z-10 shadow-xl"
              aria-label="Next">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300 ${i === current ? "w-8 h-2.5 bg-gradient-to-r from-purple-500 to-blue-500 shadow-sm shadow-purple-500/40" : "w-2.5 h-2.5 bg-gray-600 hover:bg-gray-500"}`}
                aria-label={`Slide ${i + 1}`} />
            ))}
          </div>

          {/* Slide counter */}
          <p className="text-center text-gray-600 text-xs mt-3">
            {current + 1} – {Math.min(current + VISIBLE, projects.length)} of {projects.length} projects
          </p>
        </AnimateOnScroll>

        {/* GitHub CTA */}
        <AnimateOnScroll direction="up" delay={0.2} className="text-center mt-14">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-gray-800/60 border border-gray-700/60 hover:border-purple-500/60 text-gray-300 hover:text-white px-8 py-3.5 rounded-full font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/15 group">
            <svg className="w-4 h-4 group-hover:rotate-12 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View All Projects on GitHub
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
