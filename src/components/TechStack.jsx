import React from "react";
import { techStack } from "../mock";
import { Cpu, Code, Server, Wrench } from "lucide-react";

const icons = {
  Languages: Code,
  Frontend: Cpu,
  Backend: Server,
  "Tools & DevOps": Wrench,
};

const TechStack = () => {
  return (
    <section id="stack" className="relative py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 reveal">
          <div>
            <div className="mono text-xs tracking-[0.4em] text-cyan-400/90">
              · 02 — STACK
            </div>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold leading-tight">
              Tools that I <span className="text-gradient">live & breathe</span>.
            </h2>
          </div>
          <p className="max-w-md text-slate-400">
            A curated bento of the languages, frameworks and platforms I reach for
            on every project.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 auto-rows-[minmax(180px,auto)]">
          {techStack.map((g, idx) => {
            const Icon = icons[g.title] || Code;
            const accent =
              g.accent === "cyan"
                ? "from-cyan-400/20 to-transparent border-cyan-400/20"
                : "from-violet-500/20 to-transparent border-violet-500/20";
            return (
              <div
                key={g.title}
                className={`reveal ${g.span} group relative glass rounded-2xl p-6 overflow-hidden border border-white/10 hover:border-cyan-400/30 transition-all duration-500`}
                style={{ transitionDelay: `${idx * 60}ms` }}
              >
                <div
                  className={`absolute -top-16 -right-16 w-48 h-48 rounded-full bg-gradient-to-br ${accent} opacity-60 group-hover:opacity-90 transition-opacity blur-2xl`}
                ></div>

                <div className="relative flex items-center gap-3 mb-5">
                  <span
                    className={`w-10 h-10 rounded-xl flex items-center justify-center border ${
                      g.accent === "cyan"
                        ? "text-cyan-300 border-cyan-400/30 bg-cyan-400/5"
                        : "text-violet-300 border-violet-400/30 bg-violet-400/5"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </span>
                  <h3 className="text-lg font-semibold text-slate-100">{g.title}</h3>
                  <span className="ml-auto mono text-[10px] tracking-[0.3em] text-slate-500">
                    .0{idx + 1}
                  </span>
                </div>

                <ul className="relative space-y-3">
                  {g.items.map((it) => (
                    <li key={it.name}>
                      <div className="flex justify-between items-center mono text-[11px] mb-1">
                        <span className="text-slate-300">{it.name}</span>
                        <span className="text-slate-500">{it.level}%</span>
                      </div>
                      <div className="h-1 rounded-full bg-white/5 overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            g.accent === "cyan"
                              ? "bg-gradient-to-r from-cyan-400 to-cyan-200"
                              : "bg-gradient-to-r from-violet-400 to-fuchsia-300"
                          }`}
                          style={{ width: `${it.level}%` }}
                        ></div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
