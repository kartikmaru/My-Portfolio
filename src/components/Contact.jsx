"use client";
import { useState } from "react";
import AnimateOnScroll from "./AnimateOnScroll";

const initialForm = { name: "", email: "", mobile: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) { setStatus("success"); setForm(initialForm); }
      else { setStatus("error"); setErrorMsg(data.error || "Something went wrong."); }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  };

  const contactInfo = [
    { icon: "✉️", label: "EMAIL",    value: "kartikmaru2001@gmail.com",   href: "mailto:kartikmaru2001@gmail.com" },
    { icon: "💼", label: "LINKEDIN", value: "linkedin.com/in/kartikmaru", href: "https://linkedin.com/" },
    { icon: "🐙", label: "GITHUB",   value: "github.com/kartikmaru",      href: "https://github.com/" },
    { icon: "📍", label: "LOCATION", value: "Sumer Nagar, Maansarovar, Jaipur, India", href: null },
  ];

  const inputClass = "w-full bg-gray-700/50 border border-gray-600/60 text-white placeholder-gray-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500 focus:bg-gray-700/80 transition-all duration-200";

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/8 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll direction="up" className="text-center mb-16">
          <p className="text-purple-400 text-sm font-semibold uppercase tracking-widest mb-2">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Get In Touch</h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you!
          </p>
        </AnimateOnScroll>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left */}
          <AnimateOnScroll direction="right" delay={0.1} className="lg:w-5/12">
            <h3 className="text-white font-bold text-xl mb-3">Let&apos;s work together</h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              I&apos;m currently open to new opportunities — whether it&apos;s a full-time role,
              freelance project, or just a friendly chat about tech. My inbox is always open!
            </p>

            <div className="flex flex-col gap-5 mb-8">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-purple-900/40 border border-purple-500/30 flex items-center justify-center text-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-white hover:text-purple-400 transition-colors duration-200 text-sm font-medium">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white text-sm font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-purple-900/20 border border-purple-500/20 rounded-xl">
              <p className="text-purple-300 text-sm">✅ Available for freelance &amp; full-time opportunities</p>
            </div>
          </AnimateOnScroll>

          {/* Right: Form */}
          <AnimateOnScroll direction="left" delay={0.15} className="lg:w-7/12">
            <form onSubmit={handleSubmit}
              className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-8 flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-gray-400 text-sm mb-1.5 block">Your Name</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange}
                    placeholder="Kartik Maru" required className={inputClass} />
                </div>
                <div>
                  <label className="text-gray-400 text-sm mb-1.5 block">Email Address</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange}
                    placeholder="kartik@example.com" required className={inputClass} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-gray-400 text-sm mb-1.5 block">Mobile Number</label>
                  <input type="tel" name="mobile" value={form.mobile} onChange={handleChange}
                    placeholder="+91 98765 43210" required className={inputClass} />
                </div>
                <div>
                  <label className="text-gray-400 text-sm mb-1.5 block">Subject</label>
                  <input type="text" name="subject" value={form.subject} onChange={handleChange}
                    placeholder="Project Inquiry" required className={inputClass} />
                </div>
              </div>

              <div>
                <label className="text-gray-400 text-sm mb-1.5 block">Message</label>
                <textarea name="message" value={form.message} onChange={handleChange}
                  placeholder="Tell me about your project..." required rows={5}
                  className={`${inputClass} resize-none`} />
              </div>

              {status === "success" && (
                <div className="bg-green-900/30 border border-green-500/40 text-green-400 rounded-xl px-4 py-3 text-sm">
                  ✅ Message sent successfully! I&apos;ll get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div className="bg-red-900/30 border border-red-500/40 text-red-400 rounded-xl px-4 py-3 text-sm">
                  ❌ {errorMsg}
                </div>
              )}

              <button type="submit" disabled={status === "loading"}
                className="bg-purple-600 hover:bg-purple-700 disabled:opacity-60 disabled:cursor-not-allowed text-white py-3 rounded-xl font-medium transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/25 flex items-center justify-center gap-2">
                {status === "loading" ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Sending...
                  </>
                ) : "Send Message →"}
              </button>
            </form>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
