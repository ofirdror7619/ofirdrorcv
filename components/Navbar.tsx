"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const current = window.scrollY;

      // hide when scrolling down
      if (current > lastScroll && current > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setScrolled(current > 24);
      lastScroll = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 w-full z-50
        transition-all duration-700 ease-out
        ${visible ? "translate-y-0" : "-translate-y-full"}
        ${
          scrolled
            ? `
              bg-black/55
              backdrop-blur-2xl
              border-b border-white/10
              shadow-[0_8px_30px_rgba(0,0,0,0.35)]
            `
            : "bg-transparent"
        }
      `}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        {/* LOGO */}
        <div className="
          text-sm
          tracking-[0.4em]
          font-semibold
          text-white/80
          hover:text-white
          transition
          cursor-pointer
        ">
          SHKHEEV MERA
        </div>

        {/* LINKS */}
        <div className="
          flex gap-12
          text-xs
          tracking-[0.28em]
          text-white/70
        ">
          <a href="#music" className="hover:text-white transition">
            MUSIC
          </a>

          <a href="#tour" className="hover:text-white transition">
            TOUR
          </a>

          <a href="#gallery" className="hover:text-white transition">
            GALLERY
          </a>
        </div>

      </nav>
    </header>
  );
}
