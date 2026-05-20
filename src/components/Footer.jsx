import AnimateOnScroll from "./AnimateOnScroll";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800/60 py-12 relative">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll direction="up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            <div>
              <a href="#home" className="text-2xl font-bold text-white">
                Kartik<span className="text-purple-500">.</span>
              </a>
              <p className="text-gray-400 text-sm mt-3 leading-relaxed max-w-xs">
                MERN Full Stack Developer building scalable web applications with passion and precision.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="flex flex-col gap-2">
                {["Home", "About", "Education", "Skills", "Projects", "Testimonials", "Contact"].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`}
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <div className="flex gap-3">
                {[
                  { href: "https://github.com/", label: "GitHub" },
                  { href: "https://linkedin.com/", label: "LinkedIn" },
                  { href: "mailto:kartik@example.com", label: "Email" },
                ].map((s) => (
                  <a key={s.label} href={s.href} target={s.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500 hover:bg-purple-900/30 transition-all duration-200 text-sm font-bold"
                    aria-label={s.label}>
                    {s.label[0]}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-gray-500 text-sm">© 2026 Kartik Maru. Built with Next.js &amp; ❤️</p>
            <a href="#home" className="text-gray-500 hover:text-purple-400 text-sm transition-colors duration-200">
              Back to Top ↑
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </footer>
  );
}
