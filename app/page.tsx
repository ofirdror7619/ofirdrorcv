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

      <section className="relative h-screen flex items-center justify-center text-center">
        
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
          className="relative z-10 px-6"
        >
<a href="#music" className="group relative inline-block mt-6 -translate-y-2.5">
  
  {/* glow */}
  <span className="absolute inset-0 rounded-md bg-white/10 blur-lg opacity-0 group-hover:opacity-100 transition duration-700"></span>

  {/* button */}
  <span className="
    relative
    px-5 py-5
    tracking-[0.25em]
    border border-white/40
    text-white
    uppercase
    text-sm
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
        className="py-32 px-6 md:px-20 text-center"
      >
        <h2 className="text-5xl text-white mb-16 font-semibold">Latest Release</h2>

        <div className="flex justify-center">
          <iframe
            title="YouTube video: Latest Release"
            src="https://www.youtube.com/embed/tL6crmE2NEU"
            width="350"
            height="420"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-lg shadow-2xl"
          />
        </div>
      </motion.section>

      {/* ================= PARALLAX BREAK ================= */}

      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        
        <div className="absolute inset-0 bg-black/70" />

        <motion.h2
          variants={fadeUp80}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-white text-5xl md:text-7xl font-black uppercase leading-tight tracking-widest opacity-80"
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
        className="py-32 px-6 md:px-20"
      >
        <h2 className="text-5xl text-center mb-20">Gallery</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { id: "g1", src: "/g1.png" },
            { id: "g2", src: "/Logo 2.png" },
            { id: "g3", src: "/g3.png" },
          ].map((img) => (
            <button
              type="button"
              key={img.id}
              onClick={() => openGalleryImage(img.src)}
              className="relative h-[420px] overflow-hidden group cursor-pointer"
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

          <div className="absolute inset-0 flex items-center justify-center p-6 pointer-events-none">
            <div className="relative z-10 w-[92vw] h-[82vh] max-w-6xl pointer-events-auto">
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
        className="text-white py-32 bg-darksection text-center"
      >
        <h2 className="text-5xl mb-16">Tour</h2>

        <div className="space-y-10 text-lg">
          <p>Rituals will be announced soon.</p>
        </div>
      </motion.section>

      {/* ================= FOOTER ================= */}

      <footer className="py-16 text-center text-gray-500">
        © {new Date().getFullYear()} ShkheeV MerA • Where Light Dies, We Reign
      </footer>
    </main>
  );
}