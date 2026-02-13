"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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
      <nav className="max-w-7xl mx-auto flex items-center justify-between gap-4 px-4 py-4 sm:px-6 sm:py-5 lg:px-8">

        {/* LOGO */}
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="
            shrink-0
            whitespace-nowrap
            text-xs
            sm:text-sm
            tracking-[0.28em]
            sm:tracking-[0.4em]
            font-semibold
            text-white/80
            hover:text-white
            transition
            cursor-pointer
          "
        >
          ShkheeV MerA
        </button>

        {/* LINKS */}
        <div
          className="
            flex
            flex-wrap
            justify-end
            gap-x-6
            gap-y-2
            sm:gap-x-10
            lg:gap-x-12
            text-[10px]
            sm:text-xs
            tracking-[0.22em]
            sm:tracking-[0.28em]
            text-white/70
          "
        >
          <button type="button" onClick={() => scrollToSection("music")} className="hover:text-white transition">
            Music
          </button>

          <button type="button" onClick={() => scrollToSection("emissaries")} className="hover:text-white transition">
            Emissaries of Death
          </button>

          <button type="button" onClick={() => scrollToSection("gallery")} className="hover:text-white transition">
            Gallery
          </button>

          <button type="button" onClick={() => scrollToSection("tour")} className="hover:text-white transition">
            Tour
          </button>
        </div>

      </nav>
    </header>
  );
}
