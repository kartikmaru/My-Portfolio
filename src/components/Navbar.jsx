"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-900/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="text-2xl font-bold text-white">
          Kartik<span className="text-purple-500">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/resume.pdf"
            download="Kartik_Maru_Resume.pdf"
            className="flex items-center gap-1.5 border border-purple-500/60 text-purple-300 hover:bg-purple-900/30 hover:border-purple-400 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            </svg>
            Resume
          </a>
          <a
            href="#contact"
            className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/25"
          >
            Hire Me
          </a>
        </div>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-gray-900/98 backdrop-blur-md px-6 pb-6">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-base font-medium block py-1"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 mt-2"
              >
                Hire Me
              </a>
            </li>
            <li>
              <a
                href="/resume.pdf"
                download="Kartik_Maru_Resume.pdf"
                className="inline-flex items-center gap-1.5 border border-purple-500/60 text-purple-300 hover:bg-purple-900/30 px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                </svg>
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
