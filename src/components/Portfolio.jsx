import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import TechStack from "./TechStack";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";
import Footer from "./Footer";
import MagneticCursor from "./MagneticCursor";
import Achievements from "./Achievements";

const Portfolio = () => {
  // Reveal-on-scroll using IntersectionObserver
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen text-slate-100 overflow-hidden">
      <div className="ambient" aria-hidden="true"></div>
      <MagneticCursor />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Achievements/>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
