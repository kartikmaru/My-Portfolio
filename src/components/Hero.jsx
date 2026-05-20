"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const roles = [
  "MERN Stack Developer",
  "Next.js Developer",
  "Full Stack Developer",
  "React Developer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated blobs */}
      <motion.div
        className="absolute top-20 left-10 w-80 h-80 bg-purple-700/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-blue-700/15 rounded-full blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.28, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-violet-600/8 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col-reverse lg:flex-row items-center gap-12 w-full">
        {/* Left */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-purple-900/40 border border-purple-500/30 text-purple-300 text-sm px-4 py-1.5 rounded-full mb-6"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Available for Work
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight"
          >
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Kartik Maru
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-6 h-8"
          >
            I&apos;m a{" "}
            <span className="text-purple-400 font-semibold">
              {displayed}
              <span className="animate-pulse">|</span>
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 text-base md:text-lg max-w-xl mb-8 leading-relaxed mx-auto lg:mx-0"
          >
            Passionate MERN Stack Developer with 9+ months of hands-on practice building
            scalable, high-performance web applications. I turn ideas into reality with
            clean code and modern technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
          >
            <a href="#projects"
              className="bg-purple-600 hover:bg-purple-700 text-white px-7 py-3 rounded-full font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
              View My Work
            </a>
            <a href="#contact"
              className="border border-purple-500 text-purple-300 hover:bg-purple-900/30 px-7 py-3 rounded-full font-medium transition-all duration-200 hover:scale-105">
              Get In Touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex gap-4 justify-center lg:justify-start"
          >
            {[
              { href: "https://github.com/", label: "GitHub", icon: <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />, fill: true },
              { href: "https://linkedin.com/", label: "LinkedIn", icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />, fill: true },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500 hover:bg-purple-900/30 transition-all duration-200"
                aria-label={s.label}>
                <svg className="w-5 h-5" fill={s.fill ? "currentColor" : "none"} stroke={s.fill ? undefined : "currentColor"} viewBox="0 0 24 24">
                  {s.icon}
                </svg>
              </a>
            ))}
            <a href="mailto:kartik@example.com"
              className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500 hover:bg-purple-900/30 transition-all duration-200"
              aria-label="Email">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Right: Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-shrink-0 relative"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Outer glow ring */}
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-violet-600 p-[3px] shadow-2xl shadow-purple-500/30">
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">
                  <img
                    src="/kartik.PNG"
                    alt="Kartik Maru"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
              {/* Rotating glow ring */}
              <motion.div
                className="absolute inset-[-4px] rounded-full border-2 border-dashed border-purple-500/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              />
              {/* Outer soft glow */}
              <div className="absolute inset-0 rounded-full bg-purple-500/10 blur-xl -z-10" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute -bottom-4 -left-4 bg-gray-800/90 backdrop-blur border border-gray-700 rounded-xl px-4 py-2 text-center shadow-xl"
          >
            <div className="text-2xl font-bold text-purple-400">9+</div>
            <div className="text-xs text-gray-400">Months Practice</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
            className="absolute -top-4 -right-4 bg-gray-800/90 backdrop-blur border border-gray-700 rounded-xl px-4 py-2 text-center shadow-xl"
          >
            <div className="text-2xl font-bold text-blue-400">10+</div>
            <div className="text-xs text-gray-400">Projects</div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500 text-xs animate-bounce">
        <span>Scroll Down</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
