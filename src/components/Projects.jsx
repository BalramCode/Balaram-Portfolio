import React, { useRef, useState } from "react";
import { projects } from "../mock";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const ProjectCard = ({ p, idx }) => {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 2;
    const y = ((e.clientY - r.top) / r.height - 0.5) * 2;
    setTilt({ x, y });
  };
  const reset = () => {
    setTilt({ x: 0, y: 0 });
    setHover(false);
  };

  const accentBorder =
    p.accent === "cyan" ? "hover:border-cyan-400/40" : "hover:border-violet-400/40";
  const accentText = p.accent === "cyan" ? "text-cyan-300" : "text-violet-300";
  const accentGlow =
    p.accent === "cyan"
      ? "from-cyan-500/25 to-transparent"
      : "from-violet-500/25 to-transparent";

  return (
    <div
      className="reveal"
      style={{ transitionDelay: `${idx * 80}ms` }}
    >
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={reset}
        className={`tilt-card relative glass rounded-2xl p-1.5 overflow-hidden border border-white/10 ${accentBorder} transition-colors duration-500`}
        style={{
          transform: `perspective(1100px) rotateY(${tilt.x * 6}deg) rotateX(${tilt.y * -6}deg)`,
        }}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${accentGlow} opacity-0 ${
            hover ? "opacity-100" : ""
          } transition-opacity duration-500 pointer-events-none`}
        ></div>

        <div className="relative rounded-xl overflow-hidden bg-[#0b0f14]">
          <div className="aspect-[16/10] overflow-hidden">
            <img
              src={p.image}
              alt={p.title}
              loading="lazy"
              className={`w-full h-full object-cover transition-transform duration-700 ${
                hover ? "scale-105" : "scale-100"
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-[#0d1117]/30 to-transparent"></div>
          </div>

          <div className="p-6 tilt-inner">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="mono text-[11px] tracking-[0.3em] text-slate-500">
                  {p.year}
                </div>
                <h3 className="mt-2 text-2xl font-semibold text-slate-100 group-hover:text-cyan-300">
                  {p.title}
                </h3>
                <div className={`mt-1 text-sm ${accentText}`}>{p.subtitle}</div>
              </div>
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                data-magnetic
                aria-label={`Open ${p.title}`}
                className={`shrink-0 w-11 h-11 rounded-xl glass-strong flex items-center justify-center border border-white/10 ${accentBorder} transition-all hover:scale-105`}
              >
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
            <p className="mt-4 text-slate-400 text-sm leading-relaxed line-clamp-3">
              {p.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="mono text-[11px] px-2.5 py-1 rounded-md border border-white/10 bg-white/[0.02] text-slate-300"
                >
                  {t}
                </span>
              ))}
            </div>
            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              data-magnetic
              className={`mt-5 inline-flex items-center gap-1.5 text-sm ${accentText} hover:gap-2.5 transition-all`}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live preview
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="work" className="relative py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 reveal">
          <div>
            <div className="mono text-xs tracking-[0.4em] text-cyan-400/90">
              · 03 — SHOWREEL
            </div>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold leading-tight">
              Selected <span className="text-gradient">work</span>.
            </h2>
          </div>
          <p className="max-w-md text-slate-400">
            Four shipped products — each tackling a real problem with a focused tech
            stack and refined UX.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} p={p} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
