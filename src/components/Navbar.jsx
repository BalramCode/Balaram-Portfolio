import React, { useEffect, useState } from "react";
import { navLinks, personalInfo } from "../mock";
import { Code2, Menu, X } from "lucide-react";
// Remove Github and Linkedin from lucide-react
// Import them from Font Awesome (fa) or Simple Icons (si) instead
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = navLinks.map((l) => document.getElementById(l.id));
      const y = window.scrollY + window.innerHeight / 3;
      for (const s of sections) {
        if (!s) continue;
        if (s.offsetTop <= y && s.offsetTop + s.offsetHeight > y) {
          setActive(s.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 md:px-6 py-3 transition-all duration-500 ${scrolled ? "glass-strong" : "glass"
            }`}
        >
          {/* Logo */}
          <button
            onClick={() => scrollTo("home")}
            className="flex items-center gap-2 group"
          >
            <span className="relative w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-to-br from-cyan-400/20 to-violet-500/20 border border-cyan-400/30">
              <span className="mono text-sm font-bold text-cyan-300">BN</span>
              <span className="absolute inset-0 rounded-lg pulse-ring"></span>
            </span>
            <span className="hidden sm:block text-sm tracking-[0.2em] text-slate-300 group-hover:text-cyan-300 transition-colors">
              BALARAM NAIK
            </span>
          </button>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <li key={l.id}>
                <button
                  data-magnetic
                  onClick={() => scrollTo(l.id)}
                  className={`relative px-4 py-2 text-sm font-medium tracking-wide rounded-lg transition-colors duration-300 ${active === l.id
                      ? "text-cyan-300"
                      : "text-slate-400 hover:text-slate-100"
                    }`}
                >
                  {l.label}
                  {active === l.id && (
                    <span className="absolute left-2 right-2 -bottom-0.5 h-px bg-gradient-to-r from-cyan-400 to-violet-400"></span>
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Right cluster */}
          <div className="flex items-center gap-2">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noreferrer"
              data-magnetic
              aria-label="Github"
              className="hidden sm:flex w-9 h-9 items-center justify-center rounded-lg text-slate-400 hover:text-cyan-300 hover:bg-white/5 transition-colors"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              data-magnetic
              aria-label="Linkedin"
              className="hidden sm:flex w-9 h-9 items-center justify-center rounded-lg text-slate-400 hover:text-cyan-300 hover:bg-white/5 transition-colors"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.leetcode}
              target="_blank"
              rel="noreferrer"
              data-magnetic
              aria-label="LeetCode"
              className="hidden sm:flex w-9 h-9 items-center justify-center rounded-lg text-slate-400 hover:text-cyan-300 hover:bg-white/5 transition-colors"
            >
              <SiLeetcode className="w-4 h-4" />
            </a>
            <button
              onClick={() => scrollTo("contact")}
              data-magnetic
              className="hidden md:inline-flex items-center text-sm font-medium px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-violet-500 text-slate-950 hover:shadow-[0_0_30px_rgba(0,210,255,0.45)] transition-shadow"
            >
              Hire Me
            </button>
            <button
              onClick={() => setOpen((s) => !s)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-slate-200 hover:bg-white/5"
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden mt-2 glass-strong rounded-2xl p-3">
            <ul className="flex flex-col">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => scrollTo(l.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm ${active === l.id
                        ? "text-cyan-300 bg-white/5"
                        : "text-slate-300 hover:bg-white/5"
                      }`}
                  >
                    {l.label}
                  </button>
                </li>
              ))}
              <li className="px-2 pt-2">
                <button
                  onClick={() => scrollTo("contact")}
                  className="w-full text-sm font-medium px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-violet-500 text-slate-950"
                >
                  Hire Me
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
