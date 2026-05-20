"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import AnimateOnScroll from "./AnimateOnScroll";

/* ── Slide rows with per-skill hover colors ── */
const row1 = [
  { name: "React.js",      icon: "⚛️", color: "hover:border-blue-400/60 hover:bg-blue-900/20 hover:text-blue-300"       },
  { name: "Next.js",       icon: "▲",  color: "hover:border-white/40 hover:bg-white/5 hover:text-white"                 },
  { name: "JavaScript",    icon: "🟨", color: "hover:border-yellow-400/60 hover:bg-yellow-900/20 hover:text-yellow-300" },
  { name: "HTML5",         icon: "🔶", color: "hover:border-orange-400/60 hover:bg-orange-900/20 hover:text-orange-300" },
  { name: "CSS3",          icon: "🔷", color: "hover:border-blue-400/60 hover:bg-blue-900/20 hover:text-blue-300"       },
  { name: "Tailwind CSS",  icon: "💨", color: "hover:border-cyan-400/60 hover:bg-cyan-900/20 hover:text-cyan-300"       },
  { name: "Redux Toolkit", icon: "🔀", color: "hover:border-purple-400/60 hover:bg-purple-900/20 hover:text-purple-300" },
  { name: "TypeScript",    icon: "🔵", color: "hover:border-blue-400/60 hover:bg-blue-900/20 hover:text-blue-300"       },
];

const row2 = [
  { name: "Node.js",    icon: "🟢", color: "hover:border-green-400/60 hover:bg-green-900/20 hover:text-green-300"     },
  { name: "Express.js", icon: "⚡", color: "hover:border-yellow-400/60 hover:bg-yellow-900/20 hover:text-yellow-300" },
  { name: "MongoDB",    icon: "🍃", color: "hover:border-green-400/60 hover:bg-green-900/20 hover:text-green-300"     },
  { name: "REST API",   icon: "🔗", color: "hover:border-purple-400/60 hover:bg-purple-900/20 hover:text-purple-300" },
  { name: "JWT Auth",   icon: "🔐", color: "hover:border-red-400/60 hover:bg-red-900/20 hover:text-red-300"           },
  { name: "Git",        icon: "🔀", color: "hover:border-orange-400/60 hover:bg-orange-900/20 hover:text-orange-300" },
  { name: "GitHub",     icon: "🐙", color: "hover:border-white/40 hover:bg-white/5 hover:text-white"                 },
  { name: "Postman",    icon: "📮", color: "hover:border-orange-400/60 hover:bg-orange-900/20 hover:text-orange-300" },
];

/* ── Stack tabs data ── */
const stackData = {
  Frontend: [
    { name: "React.js",      icon: "⚛️", level: 85 },
    { name: "Next.js",       icon: "▲",  level: 80 },
    { name: "JavaScript",    icon: "🟨", level: 88 },
    { name: "HTML5",         icon: "🔶", level: 95 },
    { name: "CSS3",          icon: "🔷", level: 90 },
    { name: "Tailwind CSS",  icon: "💨", level: 85 },
    { name: "Redux Toolkit", icon: "🔀", level: 75 },
  ],
  Backend: [
    { name: "Node.js",    icon: "🟢", level: 80 },
    { name: "Express.js", icon: "⚡", level: 78 },
    { name: "REST API",   icon: "🔗", level: 82 },
    { name: "JWT Auth",   icon: "🔐", level: 75 },
  ],
  Database: [
    { name: "MongoDB",  icon: "🍃", level: 80 },
    { name: "Mongoose", icon: "🗄️", level: 78 },
  ],
  Tools: [
    { name: "Git",     icon: "🔀", level: 82 },
    { name: "GitHub",  icon: "🐙", level: 85 },
    { name: "Postman", icon: "📮", level: 80 },
    { name: "VS Code", icon: "💻", level: 90 },
  ],
};

const tabMeta = {
  Frontend: { icon: "🎨", bar: "from-blue-500 to-cyan-400",    active: "bg-blue-600",    ring: "ring-blue-500/30"    },
  Backend:  { icon: "⚙️", bar: "from-green-500 to-teal-400",   active: "bg-green-600",   ring: "ring-green-500/30"   },
  Database: { icon: "🗄️", bar: "from-emerald-500 to-green-400",active: "bg-emerald-600", ring: "ring-emerald-500/30" },
  Tools:    { icon: "🛠️", bar: "from-orange-500 to-yellow-400",active: "bg-orange-600",  ring: "ring-orange-500/30"  },
};

/* ── Skill pill component ── */
function SkillPill({ icon, name, color }) {
  return (
    <div className={`group flex items-center gap-2.5 bg-gray-800/70 border border-gray-700/60 rounded-full px-5 py-2.5 mx-2.5 whitespace-nowrap transition-all duration-200 cursor-default select-none ${color}`}>
      <span className="text-xl group-hover:scale-110 transition-transform duration-200">{icon}</span>
      <span className="text-gray-300 text-sm font-medium transition-colors duration-200">{name}</span>
    </div>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState("Frontend");
  const skills = stackData[activeTab];
  const meta = tabMeta[activeTab];

  return (
    <section id="skills" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll direction="up" className="text-center mb-16">
          <p className="text-purple-400 text-sm font-semibold uppercase tracking-widest mb-2">Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">My Tech Stack</h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto">
            Technologies I work with to build modern full-stack applications
          </p>
        </AnimateOnScroll>
      </div>

      {/* ── Row 1 — left scroll ── */}
      <div className="mb-3 overflow-hidden skills-fade">
        <div className="skills-track-left">
          {[...row1, ...row1].map((s, i) => (
            <SkillPill key={i} icon={s.icon} name={s.name} color={s.color} />
          ))}
        </div>
      </div>

      {/* ── Row 2 — right scroll ── */}
      <div className="mb-16 overflow-hidden skills-fade">
        <div className="skills-track-right">
          {[...row2, ...row2].map((s, i) => (
            <SkillPill key={i} icon={s.icon} name={s.name} color={s.color} />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* ── Stack Tabs ── */}
        <AnimateOnScroll direction="up" delay={0.1}>
          <div className="bg-gray-800/40 border border-gray-700/50 rounded-2xl p-8 mb-10">
            <h3 className="text-white font-bold text-xl mb-6 text-center">Skills by Stack</h3>

            {/* Tab buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {Object.keys(stackData).map((tab) => {
                const m = tabMeta[tab];
                const isActive = activeTab === tab;
                return (
                  <button key={tab} onClick={() => setActiveTab(tab)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ring-2 ${
                      isActive
                        ? `${m.active} text-white shadow-lg scale-105 ${m.ring}`
                        : "bg-gray-700/60 text-gray-400 hover:bg-gray-700 hover:text-white ring-transparent"
                    }`}>
                    <span>{m.icon}</span>
                    {tab}
                    <span className={`text-xs px-1.5 py-0.5 rounded-full ${isActive ? "bg-white/20" : "bg-gray-600"}`}>
                      {stackData[tab].length}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Skills grid */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {skills.map((skill, i) => (
                <motion.div key={skill.name}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.06 }}
                  className="bg-gray-700/30 border border-gray-700/40 rounded-xl p-4 hover:border-purple-500/40 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-200">{skill.icon}</span>
                    <div className="flex-1 flex justify-between items-center">
                      <span className="text-white font-medium text-sm">{skill.name}</span>
                      <span className="text-gray-400 text-xs font-mono">{skill.level}%</span>
                    </div>
                  </div>
                  {/* Animated bar */}
                  <div className="w-full bg-gray-700/60 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className={`h-2 rounded-full bg-gradient-to-r ${meta.bar} relative`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.9, delay: i * 0.06, ease: "easeOut" }}
                    >
                      {/* Shimmer */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse rounded-full" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </AnimateOnScroll>

        {/* ── MERN Stack ── */}
        <AnimateOnScroll direction="up" delay={0.2}>
          <div className="bg-gray-800/40 border border-gray-700/50 rounded-2xl p-8">
            <h3 className="text-white font-bold text-xl text-center mb-8">MERN Stack Expertise</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {[
                { letter: "M", name: "MongoDB",    role: "NoSQL Database",      color: "text-green-400",  bg: "bg-green-400/8",  border: "border-green-400/20",  glow: "hover:shadow-green-500/20"  },
                { letter: "E", name: "Express.js", role: "Backend Framework",   color: "text-yellow-400", bg: "bg-yellow-400/8", border: "border-yellow-400/20", glow: "hover:shadow-yellow-500/20" },
                { letter: "R", name: "React.js",   role: "Frontend Library",    color: "text-blue-400",   bg: "bg-blue-400/8",   border: "border-blue-400/20",   glow: "hover:shadow-blue-500/20"   },
                { letter: "N", name: "Node.js",    role: "Runtime Environment", color: "text-green-500",  bg: "bg-green-500/8",  border: "border-green-500/20",  glow: "hover:shadow-green-500/20"  },
              ].map((item, i) => (
                <motion.div key={item.letter}
                  className={`text-center p-6 rounded-2xl border ${item.border} ${item.bg} hover:scale-105 hover:shadow-xl ${item.glow} transition-all duration-300 cursor-default`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className={`text-5xl font-black ${item.color} mb-2 drop-shadow-lg`}>{item.letter}</div>
                  <div className="text-white font-semibold text-sm">{item.name}</div>
                  <div className="text-gray-400 text-xs mt-0.5">{item.role}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
