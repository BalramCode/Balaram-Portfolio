// src/components/Achievements.jsx
import React, { useRef, useState } from "react";
import { achievements } from "../mock";
import { Trophy, Code, Brain, Award } from "lucide-react";

const AchievementCard = ({ a, idx }) => {
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

  const accentBorder = a.accent.trim() === "cyan" ? "hover:border-cyan-400/40" : "hover:border-violet-400/40";
  const accentText = a.accent.trim() === "cyan" ? "text-cyan-300" : "text-violet-300";
  const accentGlow = a.accent.trim() === "cyan" ? "from-cyan-500/25 to-transparent" : "from-violet-500/25 to-transparent";

  const renderIcon = () => {
    const props = { className: `w-6 h-6 ${accentText}` };
    const iconKey = a.icon.trim().toLowerCase();
    if (iconKey === "trophy") return <Trophy {...props} />;
    if (iconKey === "code") return <Code {...props} />;
    if (iconKey === "brain") return <Brain {...props} />;
    return <Award {...props} />;
  };

  return (
    <div className="reveal" style={{ transitionDelay: `${idx * 100}ms` }}>
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={reset}
        // Match project card style (minimal padding)
        className={`tilt-card relative glass rounded-2xl p-1.5 overflow-hidden border border-white/10 ${accentBorder} transition-colors duration-500`}
        style={{
          transform: `perspective(1100px) rotateY(${tilt.x * 6}deg) rotateX(${tilt.y * -6}deg)`,
        }}
      >
        {/* Glow effect */}
        <div className={`absolute inset-0 bg-gradient-to-br ${accentGlow} opacity-0 ${hover ? "opacity-100" : ""} transition-opacity duration-500 pointer-events-none rounded-2xl`}></div>

        {/* 1. Dedicated Image Container (NEW) */}
        <div className="relative rounded-xl overflow-hidden bg-[#0b0f14]">
          <div className="aspect-[16/10] overflow-hidden">
            <img
              src={a.image} // Maps to 'image' field in mock.js
              alt={a.title}
              loading="lazy"
              className={`w-full h-full object-cover transition-transform duration-700 ${hover ? "scale-105" : "scale-100"}`}
            />
            {/* The signature dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-[#0d1117]/30 to-transparent"></div>
          </div>

          {/* Text Content (Shifted inside image overlay container) */}
          <div className="p-6 tilt-inner relative z-10">
            <div className="flex justify-between items-start mb-5">
              <div className="flex items-center gap-4">
                <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/10 shadow-inner">
                  {renderIcon()}
                </div>
                <div>
                  <div className="mono text-[10px] tracking-[0.4em] text-slate-500 uppercase">
                    {a.category}
                  </div>
                   <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-300">
                    {a.title}
                  </h3>
                </div>
              </div>
              <div className={`mono text-[10px] px-2.5 py-1 rounded-full border border-white/10 bg-white/5 uppercase tracking-tighter ${accentText}`}>
                {a.tag}
              </div>
            </div>

            <p className={`mt-3 text-sm font-medium ${accentText} leading-relaxed`}>
              {a.subtitle}
            </p>

            <p className="mt-4 text-slate-400 text-xs leading-relaxed italic border-t border-white/5 pt-4">
              {a.detail}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Achievements = () => {
  return (
    <section id="achievement" className="relative py-28 bg-[#0d1117]/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 reveal">
          <div>
            <div className="mono text-xs tracking-[0.4em] text-cyan-400/90 uppercase">
              · 05 — Milestones
            </div>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold">
              Recognition & <span className="text-gradient">Awards</span>.
            </h2>
          </div>
          <p className="max-w-md text-slate-400 text-sm leading-relaxed">
           A visual record of excellence. Showcasing technical leadership and recognized contributions within the regional tech and AI ecosystem.
          </p>
        </div>

        {/* Adjust grid to 2 columns if you want larger images (like projects) or 3 for bento style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {achievements.map((a, i) => (
            <AchievementCard key={a.id} a={a} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;