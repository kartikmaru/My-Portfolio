import AnimateOnScroll from "./AnimateOnScroll";

const educationData = [
  {
    icon: "🎓",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Modi Institute of Management and Technology",
    year: "Completed",
    grade: "Graduate",
    desc: "Completed BCA with strong foundations in programming, data structures, web development, and modern software engineering practices.",
    tags: ["Web Development", "Programming", "DBMS", "Networking"],
    gradient: "from-purple-500 to-violet-600",
    glow: "shadow-purple-500/20",
    iconBg: "bg-purple-500/15 border-purple-500/30",
    badgeBg: "bg-purple-900/40 text-purple-300 border-purple-500/30",
    number: "01",
  },
  {
    icon: "📚",
    degree: "Higher Secondary (12th)",
    institution: "Swami Vivekanand Sr. Sec. School",
    year: "Completed",
    grade: "78%",
    desc: "Completed higher secondary education with a strong academic foundation and consistent performance across all subjects.",
    tags: ["Science", "Mathematics", "English", "Hindi"],
    gradient: "from-blue-500 to-cyan-500",
    glow: "shadow-blue-500/20",
    iconBg: "bg-blue-500/15 border-blue-500/30",
    badgeBg: "bg-blue-900/40 text-blue-300 border-blue-500/30",
    number: "02",
  },
  {
    icon: "🏫",
    degree: "Secondary (10th)",
    institution: "Swami Vivekanand Sr. Sec. School",
    year: "Completed",
    grade: "70%",
    desc: "Completed secondary education with a solid academic base across core subjects with consistent performance.",
    tags: ["Mathematics", "Science", "English", "Hindi"],
    gradient: "from-cyan-500 to-teal-500",
    glow: "shadow-cyan-500/20",
    iconBg: "bg-cyan-500/15 border-cyan-500/30",
    badgeBg: "bg-cyan-900/40 text-cyan-300 border-cyan-500/30",
    number: "03",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/8 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <AnimateOnScroll direction="up" className="text-center mb-20">
          <p className="text-purple-400 text-sm font-semibold uppercase tracking-widest mb-2">Education</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">My Academic Journey</h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto">
            Academic background combined with 9+ months of dedicated self-learning in web development
          </p>
        </AnimateOnScroll>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px hidden md:block overflow-hidden">
            <div className="h-full w-full bg-gradient-to-b from-purple-500/0 via-purple-500/60 to-purple-500/0" />
          </div>

          <div className="flex flex-col gap-16">
            {educationData.map((edu, i) => (
              <AnimateOnScroll
                key={i}
                direction={i % 2 === 0 ? "right" : "left"}
                delay={i * 0.15}
              >
                <div className={`relative flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8 md:gap-0`}>

                  {/* Timeline node — center */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-1">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${edu.gradient} flex items-center justify-center text-2xl shadow-xl ${edu.glow} shadow-lg border border-white/10`}>
                      {edu.icon}
                    </div>
                    <div className="text-gray-600 text-xs font-mono">{edu.number}</div>
                  </div>

                  {/* Card */}
                  <div className={`w-full md:w-[46%] ${i % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}>
                    <div className={`group relative bg-gray-800/50 border border-gray-700/50 rounded-2xl p-7 hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:${edu.glow} backdrop-blur-sm overflow-hidden`}>

                      {/* Top gradient bar */}
                      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${edu.gradient} rounded-t-2xl`} />

                      {/* Background number watermark */}
                      <div className="absolute top-4 right-5 text-7xl font-black text-white/3 select-none pointer-events-none leading-none">
                        {edu.number}
                      </div>

                      {/* Header row */}
                      <div className="flex items-start gap-4 mb-4">
                        {/* Icon — mobile only */}
                        <div className={`md:hidden w-12 h-12 rounded-xl bg-gradient-to-br ${edu.gradient} flex items-center justify-center text-xl flex-shrink-0 shadow-lg`}>
                          {edu.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <span className={`text-xs px-2.5 py-0.5 rounded-full border font-medium ${edu.badgeBg}`}>
                              {edu.grade}
                            </span>
                            <span className="text-gray-500 text-xs">{edu.year}</span>
                          </div>
                          <h3 className="text-white font-bold text-lg leading-snug group-hover:text-purple-200 transition-colors duration-200">
                            {edu.degree}
                          </h3>
                        </div>
                      </div>

                      {/* Institution */}
                      <div className={`flex items-center gap-2 mb-4 p-3 rounded-xl border ${edu.iconBg}`}>
                        <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <span className="text-gray-300 text-sm font-medium">{edu.institution}</span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-400 text-sm leading-relaxed mb-5">{edu.desc}</p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {edu.tags.map((tag) => (
                          <span key={tag}
                            className="bg-gray-700/60 text-gray-300 text-xs px-3 py-1 rounded-full border border-gray-600/40 hover:border-purple-500/40 hover:text-purple-300 transition-colors duration-200">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block w-[46%]" />
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
