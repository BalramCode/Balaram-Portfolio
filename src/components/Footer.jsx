import React from "react";
import { personalInfo, navLinks } from "../mock";
import { Code2, Heart } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <footer className="relative pt-16 pb-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="glass-strong rounded-3xl p-8 md:p-12 border border-white/10 overflow-hidden relative">
          <div
            className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-30 blur-3xl pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(0,210,255,0.5), transparent 60%)",
            }}
          ></div>

          <div className="relative grid md:grid-cols-12 gap-8">
            <div className="md:col-span-5">
              <div className="flex items-center gap-3">
                <span className="relative w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-cyan-400/20 to-violet-500/20 border border-cyan-400/30">
                  <span className="mono text-sm font-bold text-cyan-300">BN</span>
                </span>
                <div>
                  <div className="text-slate-100 font-semibold">
                    {personalInfo.name}
                  </div>
                  <div className="mono text-[11px] tracking-[0.3em] text-slate-500">
                    FULL‑STACK · MERN · INDIA
                  </div>
                </div>
              </div>
              <p className="mt-5 text-slate-400 max-w-md text-sm leading-relaxed">
                Designing and engineering thoughtful software — one carefully
                shipped feature at a time.
              </p>
            </div>

            <div className="md:col-span-3">
              <div className="mono text-[11px] tracking-[0.3em] text-slate-500 mb-4">
                NAVIGATE
              </div>
              <ul className="space-y-2">
                {navLinks.map((l) => (
                  <li key={l.id}>
                    <button
                      onClick={() => scrollTo(l.id)}
                      className="text-slate-300 hover:text-cyan-300 text-sm transition-colors"
                    >
                      {l.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-4">
              <div className="mono text-[11px] tracking-[0.3em] text-slate-500 mb-4">
                ELSEWHERE
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.socials.github}
                  data-magnetic
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl glass border border-white/10 hover:border-cyan-400/30 hover:text-cyan-300 transition-colors text-sm"
                >
                  <FaGithub className="w-4 h-4" /> GitHub
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  data-magnetic
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl glass border border-white/10 hover:border-cyan-400/30 hover:text-cyan-300 transition-colors text-sm"
                >
                  <FaLinkedin className="w-4 h-4" /> LinkedIn
                </a>
                <a
                  href={personalInfo.socials.leetcode}
                  data-magnetic
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LeetCode"
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center border border-white/10 hover:border-cyan-400/30 hover:text-cyan-300 transition-colors"
                >
                  <Code2 className="w-4 h-4" />
                </a>
              </div>
              <a
                href={`mailto:${personalInfo.email}`}
                className="mt-4 inline-block text-slate-300 hover:text-cyan-300 transition-colors text-sm"
              >
                {personalInfo.email}
              </a>
            </div>
          </div>

          <div className="relative mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
            <div>
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </div>
            <div className="flex items-center gap-1.5">
              Built with <Heart className="w-3 h-3 text-cyan-400" /> &amp; the MERN stack.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
