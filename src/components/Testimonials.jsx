"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimateOnScroll from "./AnimateOnScroll";

const testimonials = [
  {
    name: "Mahavir Kumawat",
    role: "Mentor @ WsCube Tech",
    initials: "MK",
    color: "from-purple-500 to-violet-600",
    stars: 5,
    text: "You're doing fine. You show up on time and you're trying. Main thing to work on is double-checking your work before asking for help — a lot of answers you can find yourself. Keep going.",
  },
  {
    name: "Dishant Saini",
    role: "Fellow Developer",
    initials: "DS",
    color: "from-blue-500 to-cyan-500",
    stars: 5,
    text: "Kartik is a dedicated and hardworking developer. His ability to pick up new technologies quickly and implement them in real projects is impressive. Great team player with a positive attitude.",
  },
  {
    name: "Hitesh Saini",
    role: "Senior Developer",
    initials: "HS",
    color: "from-emerald-500 to-teal-500",
    stars: 5,
    text: "Kartik has a strong grasp of the MERN stack and consistently delivers clean, well-structured code. His problem-solving approach and willingness to learn make him stand out among peers.",
  },
  {
    name: "Sameer Jagrawal",
    role: "Project Collaborator",
    initials: "SJ",
    color: "from-orange-500 to-amber-500",
    stars: 5,
    text: "Working with Kartik was a smooth experience. He understands requirements quickly, communicates clearly, and always delivers on time. His Next.js and MongoDB skills are particularly strong.",
  },
  {
    name: "Rahul Sharma",
    role: "UI/UX Designer",
    initials: "RS",
    color: "from-pink-500 to-rose-500",
    stars: 5,
    text: "Kartik translated my designs into pixel-perfect, responsive interfaces with great attention to detail. He is open to feedback and always goes the extra mile to ensure quality.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [autoplay, current]);

  const prev = () => {
    setAutoplay(false);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };
  const next = () => {
    setAutoplay(false);
    setCurrent((c) => (c + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-28 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent pointer-events-none" />
      <motion.div
        className="absolute top-10 right-20 w-64 h-64 bg-purple-600/8 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 left-20 w-48 h-48 bg-blue-600/8 rounded-full blur-3xl"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 6, repeat: Infinity, delay: 2 }}
      />
      {/* Giant quote marks */}
      <div className="absolute top-8 left-8 text-[160px] leading-none text-purple-500/5 font-serif select-none pointer-events-none">&ldquo;</div>
      <div className="absolute bottom-8 right-8 text-[160px] leading-none text-purple-500/5 font-serif select-none pointer-events-none">&rdquo;</div>

      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <AnimateOnScroll direction="up" className="text-center mb-16">
          <p className="text-purple-400 text-sm font-semibold uppercase tracking-widest mb-2">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">What People Say</h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto">
            Feedback from mentors, colleagues, and collaborators I&apos;ve had the pleasure of working with
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll direction="up" delay={0.1}>
          {/* Avatar strip — top */}
          <div className="flex justify-center gap-3 mb-10">
            {testimonials.map((t, i) => (
              <button
                key={i}
                onClick={() => { setAutoplay(false); setCurrent(i); }}
                className="relative group"
                aria-label={t.name}
              >
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm transition-all duration-300 ${i === current ? "ring-2 ring-white ring-offset-2 ring-offset-gray-950 scale-110 shadow-lg" : "opacity-40 hover:opacity-70 hover:scale-105"}`}>
                  {t.initials}
                </div>
                {i === current && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-purple-400 rounded-full"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Main card */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -24, scale: 0.97 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="relative bg-gray-800/50 border border-gray-700/50 rounded-3xl p-8 md:p-12 text-center backdrop-blur-sm overflow-hidden"
              >
                {/* Card inner glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${testimonials[current].color} opacity-5 rounded-3xl`} />

                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: testimonials[current].stars }).map((_, i) => (
                    <motion.svg
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.07 }}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-10 italic relative z-10 max-w-3xl mx-auto">
                  &ldquo;{testimonials[current].text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center justify-center gap-4">
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${testimonials[current].color} flex items-center justify-center text-white font-bold text-lg shadow-lg flex-shrink-0`}>
                    {testimonials[current].initials}
                  </div>
                  <div className="text-left">
                    <p className="text-white font-bold text-base">{testimonials[current].name}</p>
                    <p className="text-purple-400 text-sm">{testimonials[current].role}</p>
                  </div>
                </div>

                {/* Progress bar */}
                {autoplay && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-700/50 rounded-b-3xl overflow-hidden">
                    <motion.div
                      key={current}
                      className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 4, ease: "linear" }}
                    />
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Prev / Next */}
            <button onClick={prev}
              className="absolute -left-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-gray-800/90 border border-gray-700 text-white flex items-center justify-center hover:bg-purple-700 hover:border-purple-500 transition-all duration-200 shadow-lg z-10"
              aria-label="Previous">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button onClick={next}
              className="absolute -right-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-gray-800/90 border border-gray-700 text-white flex items-center justify-center hover:bg-purple-700 hover:border-purple-500 transition-all duration-200 shadow-lg z-10"
              aria-label="Next">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button key={i}
                onClick={() => { setAutoplay(false); setCurrent(i); }}
                className={`rounded-full transition-all duration-300 ${i === current ? "w-6 h-2.5 bg-purple-500" : "w-2.5 h-2.5 bg-gray-600 hover:bg-gray-500"}`}
                aria-label={`Testimonial ${i + 1}`} />
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
