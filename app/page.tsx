"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" as const },
  },
};

const fadeUp80 = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 0.8,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" as const },
  },
};

export default function Home() {
  const [activeGalleryImage, setActiveGalleryImage] = useState<string | null>(null);

  useEffect(() => {
    if (!activeGalleryImage) return;

    const bodyStyle = document.body.style;
    const previousOverflow = bodyStyle.overflow;
    bodyStyle.overflow = "hidden";

    return () => {
      bodyStyle.overflow = previousOverflow;
    };
  }, [activeGalleryImage]);

  const openGalleryImage = (img: string) => {
    setActiveGalleryImage(img);
  };

  const closeGalleryImage = () => {
    setActiveGalleryImage(null);
  };

  return (
    <main className="bg-black text-textgray overflow-x-hidden">
      
      {/* ================= HERO ================= */}

      <section className="relative h-screen min-h-[100svh] flex items-center justify-center text-center">
        
        <Image
          src="/Logo.png"
          alt="ShkheeV MerA"
          fill
          priority
          className="hero-img object-contain opacity-100 scale-105 brightness-105"
        />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-darkbg"></div>

        {/* Content */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="relative z-10 px-4 sm:px-6"
        >
<a href="#music" className="group relative inline-block mt-6 -translate-y-2.5">
  
  {/* glow */}
  <span className="absolute inset-0 rounded-md bg-white/10 blur-lg opacity-0 group-hover:opacity-100 transition duration-700"></span>

  {/* button */}
  <span className="
    relative
    inline-flex
    max-w-[92vw]
    justify-center
    px-3 py-3
    sm:px-5 sm:py-5
    tracking-[0.16em]
    sm:tracking-[0.25em]
    border border-white/40
    text-white
    uppercase
    text-[11px]
    sm:text-sm
    backdrop-blur-sm
    transition
    duration-500
    group-hover:border-white
    group-hover:bg-white
    group-hover:text-black
  ">
    ENTER THE RITUAL
  </span>

</a>

        </motion.div>
      </section>

      <Navbar />

      {/* ================= MUSIC ================= */}

      <motion.section
        id="music"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="scroll-mt-28 py-16 px-4 text-center sm:py-24 sm:px-6 md:px-12 lg:py-32 lg:px-20"
      >
        <h2 className="text-3xl text-white mb-10 font-semibold sm:text-4xl sm:mb-14 lg:text-5xl lg:mb-16">
          Latest Release
        </h2>

        <div className="flex justify-center">
          <div className="w-full max-w-[420px] aspect-[35/42]">
          <iframe
            title="YouTube video: Latest Release"
            src="https://www.youtube.com/embed/J2ahCFtWksI"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            loading="lazy"
            className="w-full h-full rounded-lg shadow-2xl"
          />
          </div>
        </div>
      </motion.section>

      {/* ================= PARALLAX BREAK ================= */}

      <section className="relative h-[60vh] min-h-[360px] sm:min-h-[420px] flex items-center justify-center overflow-hidden">
        
        <div className="absolute inset-0 bg-black/70" />

        <motion.h2
          variants={fadeUp80}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="px-4 text-center text-white text-3xl font-black uppercase leading-tight tracking-[0.18em] opacity-80 sm:px-6 sm:text-5xl sm:tracking-widest md:text-7xl"
        >
          ONLY THE DYING HEAR OUR CALL.
          <br />
          SUFFER.
        </motion.h2>
      </section>

      {/* ================= GALLERY ================= */}

      <motion.section
        id="gallery"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="scroll-mt-28 py-16 px-4 sm:py-24 sm:px-6 md:px-12 lg:py-32 lg:px-20"
      >
        <h2 className="text-3xl text-center mb-12 sm:text-4xl sm:mb-16 lg:text-5xl lg:mb-20">Gallery</h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {[
            { id: "g1", src: "/g1.png" },
            { id: "g2", src: "/Logo.png" },
            { id: "g3", src: "/g3.png" },
          ].map((img) => (
            <button
              type="button"
              key={img.id}
              onClick={() => openGalleryImage(img.src)}
              className="relative h-[260px] overflow-hidden group cursor-pointer sm:h-[320px] lg:h-[420px]"
              aria-label="Open gallery image"
            >
              <Image
                src={img.src}
                alt="Band photo"
                fill
                className="object-contain bg-black grayscale group-hover:grayscale-0 transition duration-700"
              />
            </button>
          ))}
        </div>
      </motion.section>

      {activeGalleryImage && (
        <div className="fixed inset-0 z-[60]">
          <button
            type="button"
            aria-label="Close image preview"
            className="absolute inset-0 bg-black/80"
            onClick={closeGalleryImage}
          />

          <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 pointer-events-none">
            <div className="relative z-10 w-[94vw] h-[78svh] max-w-6xl pointer-events-auto sm:w-[92vw] sm:h-[82vh]">
              <Image
                src={activeGalleryImage}
                alt="Gallery image"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      )}

      {/* ================= TOUR ================= */}

      <motion.section
        id="tour"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="scroll-mt-28 text-white py-16 bg-darksection text-center sm:py-24 lg:py-32"
      >
        <h2 className="text-3xl mb-10 sm:text-4xl sm:mb-14 lg:text-5xl lg:mb-16">Tour</h2>

        <div className="space-y-10 text-lg">
          <p>Rituals will be announced soon.</p>
        </div>
      </motion.section>

      {/* ================= FOOTER ================= */}

      <footer className="py-10 px-4 text-center text-gray-500 sm:py-16">
        © {new Date().getFullYear()} ShkheeV MerA • Where Light Dies, We Reign
      </footer>
    </main>
  );
}