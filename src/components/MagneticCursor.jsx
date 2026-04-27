import React, { useEffect, useRef } from "react";

// Magnetic dual-ring cursor. Disabled on touch devices.
const MagneticCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const fine =
      window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;

    document.body.classList.add("has-magnetic");

    const onMove = (e) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };

    const onEnter = (e) => {
      const el = e.target.closest("[data-magnetic], a, button");
      if (el && ringRef.current) {
        ringRef.current.style.width = "54px";
        ringRef.current.style.height = "54px";
        ringRef.current.style.borderColor = "rgba(0,210,255,0.8)";
        ringRef.current.style.background = "rgba(0,210,255,0.08)";
      }
    };
    const onLeave = (e) => {
      const el = e.target.closest && e.target.closest("[data-magnetic], a, button");
      if (el && ringRef.current) {
        ringRef.current.style.width = "32px";
        ringRef.current.style.height = "32px";
        ringRef.current.style.borderColor = "rgba(255,255,255,0.25)";
        ringRef.current.style.background = "transparent";
      }
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onEnter);
    document.addEventListener("mouseout", onLeave);

    let raf;
    const tick = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.5;
      pos.current.y += (target.current.y - pos.current.y) * 0.5;
      ringPos.current.x += (target.current.x - ringPos.current.x) * 0.18;
      ringPos.current.y += (target.current.y - ringPos.current.y) * 0.18;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mouseout", onLeave);
      cancelAnimationFrame(raf);
      document.body.classList.remove("has-magnetic");
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        className="hidden md:block fixed top-0 left-0 z-[9999] w-8 h-8 rounded-full border border-white/25 pointer-events-none"
        style={{
          transition:
            "width 0.25s ease, height 0.25s ease, border-color 0.25s ease, background 0.25s ease",
        }}
      />
      <div
        ref={dotRef}
        className="hidden md:block fixed top-0 left-0 z-[9999] w-1.5 h-1.5 rounded-full bg-cyan-300 pointer-events-none shadow-[0_0_12px_rgba(0,210,255,0.9)]"
      />
    </>
  );
};

export default MagneticCursor;
