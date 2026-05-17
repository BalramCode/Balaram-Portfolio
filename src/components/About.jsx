import React from "react";
import { personalInfo } from "../mock";
import { Download } from "lucide-react";
import { ExternalLink } from "lucide-react";
const About = () => {
  return (
    <section id="about" className="relative py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 reveal">
            <div className="mono text-xs tracking-[0.4em] text-cyan-400/90">
              · 01 — ABOUT
            </div>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold leading-tight">
              Developing modern web solutions with <span className="text-gradient">clean code & performance</span>.
            </h2>

            <p className="mt-5 text-slate-400 leading-relaxed">
              I build full-stack applications using modern technologies while exploring
              AI/ML, Blockchain and DevOps systems to create impactful solutions.
            </p>

            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              data-magnetic
              className="mt-7 inline-flex items-center gap-2 px-5 py-3 rounded-xl glass border border-white/10 hover:border-cyan-400/40 hover:text-cyan-300 transition-colors text-sm"
            >
              <ExternalLink className="w-4 h-4" />
              Open Resume
            </a>
          </div>

          <div className="lg:col-span-7 reveal">
            <div className="glass rounded-2xl p-6 md:p-8">
              <div className="space-y-5 text-slate-300 leading-relaxed">
                {personalInfo.about.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
                {personalInfo.stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl border border-white/10 bg-white/[0.02] p-4 text-center hover:border-cyan-400/30 transition-colors"
                  >
                    <div className="text-2xl md:text-3xl font-semibold text-gradient">
                      {s.value}
                    </div>
                    <div className="mono text-[10px] tracking-[0.2em] uppercase text-slate-500 mt-1">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
