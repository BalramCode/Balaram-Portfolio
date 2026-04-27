import React from "react";
import { experience } from "../mock";
import { Briefcase, GraduationCap, Code2 } from "lucide-react";

const icons = [Briefcase, Code2, GraduationCap];

const Experience = () => {
  return (
    <section id="experience" className="relative py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="reveal mb-12">
          <div className="mono text-xs tracking-[0.4em] text-cyan-400/90">
            · 04 — JOURNEY
          </div>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold leading-tight">
            Experience &amp; <span className="text-gradient">education</span>.
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400/40 via-violet-500/40 to-transparent md:-translate-x-1/2"></div>

          <ul className="space-y-8">
            {experience.map((e, i) => {
              const Icon = icons[i % icons.length];
              const left = i % 2 === 0;
              return (
                <li
                  key={e.role}
                  className={`reveal relative md:grid md:grid-cols-2 md:gap-10 items-start`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div
                    className={`pl-12 md:pl-0 ${
                      left ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"
                    }`}
                  >
                    <div className="glass rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-colors">
                      <div className="flex items-center gap-2 mb-2 md:justify-start">
                        <span className="mono text-[11px] tracking-[0.25em] text-slate-500">
                          {e.period}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-slate-100">
                        {e.role}
                      </h3>
                      <div className="text-sm text-cyan-300 mt-0.5">{e.org}</div>
                      <ul className="mt-4 space-y-2 text-slate-400 text-sm leading-relaxed">
                        {e.points.map((p, j) => (
                          <li key={j} className="flex gap-2 md:justify-end md:text-right">
                            {!left && <span className="text-cyan-400 shrink-0">•</span>}
                            <span>{p}</span>
                            {left && <span className="text-cyan-400 shrink-0 md:order-first">•</span>}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <span className="absolute left-0 md:left-1/2 top-6 md:-translate-x-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-[#0d1117] border border-cyan-400/40 text-cyan-300">
                    <Icon className="w-4 h-4" />
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
