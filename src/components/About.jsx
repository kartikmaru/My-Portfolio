import AnimateOnScroll from "./AnimateOnScroll";

const highlights = [
  { icon: "🚀", title: "MERN Stack",       desc: "Building full-stack apps with MongoDB, Express, React & Node.js" },
  { icon: "🎯", title: "Problem Solver",   desc: "Love tackling complex challenges with clean, efficient solutions" },
  { icon: "📱", title: "Responsive Design",desc: "Crafting pixel-perfect UIs that work on every device" },
  { icon: "⚡", title: "Performance",      desc: "Optimizing apps for speed, scalability and great UX" },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/8 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll direction="up" className="text-center mb-16">
          <p className="text-purple-400 text-sm font-semibold uppercase tracking-widest mb-2">About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Who I Am</h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto">
            A passionate developer on a mission to build impactful digital experiences
          </p>
        </AnimateOnScroll>

        <div className="flex flex-col lg:flex-row gap-14 items-center">
          {/* Avatar */}
          <AnimateOnScroll direction="right" delay={0.1} className="flex-shrink-0 relative">
            <div className="relative w-56 h-56 md:w-72 md:h-72">
              {/* Gradient border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500 via-blue-500 to-violet-600 p-[3px] shadow-2xl shadow-purple-500/25">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-gray-900">
                  <img
                    src="/kartik.PNG"
                    alt="Kartik Maru"
                  className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
              {/* Corner accent dots */}
              <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-purple-500 shadow-lg shadow-purple-500/50" />
              <div className="absolute -bottom-2 -left-2 w-3 h-3 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50" />
              {/* Soft glow behind */}
              <div className="absolute inset-0 rounded-2xl bg-purple-500/10 blur-2xl -z-10 scale-110" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-purple-600 text-white rounded-xl px-4 py-2 text-center shadow-xl shadow-purple-500/30">
              <div className="text-xl font-bold">9+</div>
              <div className="text-xs">Months of Practice</div>
            </div>
          </AnimateOnScroll>

          {/* Content */}
          <AnimateOnScroll direction="left" delay={0.15} className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-1">Kartik Maru</h3>
            <p className="text-purple-400 font-medium mb-4">MERN Full Stack Developer</p>
            <p className="text-gray-400 leading-relaxed mb-6">
              Hey! I&apos;m Kartik, a MERN Stack Developer from India. I completed my BCA from
              Modi Institute of Management and Technology and discovered my passion for web
              development — putting in 9+ months of dedicated practice to master the MERN stack
              and modern technologies like Next.js, Redux Toolkit, and JWT authentication.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
              {[
                ["NAME",     "Kartik Maru"],
                ["ROLE",     "Full Stack Developer"],
                ["LOCATION", "India"],
                ["STATUS",   "Available for Work"],
              ].map(([label, value]) => (
                <div key={label}>
                  <span className="text-gray-500 text-xs uppercase tracking-wider">{label}</span>
                  <p className="text-white font-medium">{value}</p>
                </div>
              ))}
            </div>

            <a href="#contact"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-2.5 rounded-full font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
              Let&apos;s Talk 🚀
            </a>
          </AnimateOnScroll>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {highlights.map((item, i) => (
            <AnimateOnScroll key={item.title} direction="up" delay={i * 0.1}>
              <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
