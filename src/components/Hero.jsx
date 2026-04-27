import React, { useEffect, useRef, useState } from "react";
import { personalInfo } from "../mock";
import { ArrowRight, Sparkles,Code2, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";


const useTypewriter = (words, speed = 80, pause = 1400) => {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    let t;
    if (!del && text === word) {
      t = setTimeout(() => setDel(true), pause);
    } else if (del && text === "") {
      setDel(false);
      setI((p) => p + 1);
    } else {
      t = setTimeout(
        () => {
          setText((prev) =>
            del ? prev.slice(0, -1) : word.slice(0, prev.length + 1)
          );
        },
        del ? speed / 2 : speed
      );
    }
    return () => clearTimeout(t);
  }, [text, del, i, words, speed, pause]);
  return text;
};

const Hero = () => {
  const typed = useTypewriter(personalInfo.roles);
  const heroRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      if (!heroRef.current) return;
      const r = heroRef.current.getBoundingClientRect();
      setMouse({
        x: ((e.clientX - r.left) / r.width - 0.5) * 2,
        y: ((e.clientY - r.top) / r.height - 0.5) * 2,
      });
    };
    const el = heroRef.current;
    if (el) el.addEventListener("mousemove", onMove);
    return () => el && el.removeEventListener("mousemove", onMove);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left text */}
          <div className="lg:col-span-7 reveal visible">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs tracking-wider uppercase text-cyan-300/90 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              Available for new opportunities
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-semibold leading-[1.02] tracking-tight">
              <span className="block text-slate-100">Hi, I&apos;m</span>
              <span className="block text-gradient">Balaram Naik.</span>
            </h1>

            <div className="mt-6 text-2xl md:text-3xl text-slate-300 mono">
              <span className="text-slate-500">&gt; </span>
              <span className="caret">{typed}</span>
            </div>

            <p className="mt-6 text-base md:text-lg text-slate-400 max-w-xl leading-relaxed">
              {personalInfo.tagline}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <button
                data-magnetic
                onClick={() => scrollTo("work")}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 text-slate-950 font-medium hover:shadow-[0_0_50px_rgba(0,210,255,0.45)] transition-shadow"
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                data-magnetic
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass text-slate-100 hover:border-cyan-400/40 hover:text-cyan-300 transition-colors border border-white/10"
              >
                <Sparkles className="w-4 h-4" />
                Get in Touch
              </button>
            </div>

            <div className="mt-10 flex items-center gap-6 text-slate-400">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-cyan-400" />
                {personalInfo.location}
              </div>
              <span className="w-px h-5 bg-white/10" />
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.socials.github}
                  data-magnetic
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:text-cyan-300 transition-colors"
                >
                  <FaGithub className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  data-magnetic
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:text-cyan-300 transition-colors"
                >
                  <FaLinkedin className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socials.leetcode}
                  data-magnetic
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LeetCode"
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:text-cyan-300 transition-colors"
                >
                  <Code2 className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right photo bento */}
          <div className="lg:col-span-5 reveal visible">
            <div
              className="relative aspect-[4/5] max-w-[460px] mx-auto"
              style={{
                transform: `perspective(1100px) rotateY(${mouse.x * 5}deg) rotateX(${mouse.y * -5}deg)`,
                transition: "transform 0.18s ease-out",
              }}
            >
              {/* Decorative corners */}
              <div className="absolute -inset-3 rounded-[28px] bg-gradient-to-br from-cyan-500/20 via-transparent to-violet-500/20 blur-2xl"></div>

              <div className="relative h-full w-full rounded-[26px] glass-strong p-3 overflow-hidden">
                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 20% 10%, rgba(0,210,255,0.35), transparent 40%), radial-gradient(circle at 80% 90%, rgba(139,92,246,0.35), transparent 40%)",
                  }}
                ></div>
                <div className="relative h-full w-full rounded-[20px] overflow-hidden border border-white/10">
                  <img
                    src={personalInfo.headshot}
                    alt={personalInfo.name}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#0d1117] via-[#0d1117]/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div>
                      <div className="mono text-[11px] tracking-[0.3em] text-cyan-300/90">
                        @BALRAMCODE
                      </div>
                      <div className="text-slate-100 text-lg font-semibold mt-1">
                        Crafting solutions with code, logic, and AI.
                      </div>
                    </div>
                    {/* <div className="glass rounded-xl px-3 py-2 text-[11px] mono text-slate-300">
                      v1.0
                    </div> */}
                  </div>
                </div>
              </div>

              {/* Floating chips */}
              <div className="absolute -left-6 top-10 glass rounded-xl px-3 py-2 float-soft hidden sm:flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                <span className="mono text-[11px] text-slate-300">React • Node</span>
              </div>
              <div
                className="absolute -right-4 bottom-16 glass rounded-xl px-3 py-2 float-soft hidden sm:flex items-center gap-2"
                style={{ animationDelay: "1.5s" }}
              >
                <span className="w-2 h-2 rounded-full bg-violet-400"></span>
                <span className="mono text-[11px] text-slate-300">MongoDB</span>
              </div>
              <div
                className="absolute -right-6 top-6 glass rounded-xl px-3 py-2 float-soft hidden sm:flex items-center gap-2"
                style={{ animationDelay: "3s" }}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span className="mono text-[11px] text-slate-300">150+ DSA</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-slate-500">
        <span className="mono text-[10px] tracking-[0.4em]">SCROLL</span>
        <span className="w-px h-10 bg-gradient-to-b from-cyan-400/60 to-transparent"></span>
      </div> */}
    </section>
  );
};

export default Hero;
