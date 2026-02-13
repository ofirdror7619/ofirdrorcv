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

  const openGalleryImage = (img: string) => {
    setActiveGalleryImage(img);
  };

  const closeGalleryImage = () => {
    setActiveGalleryImage(null);
  };

  useEffect(() => {
    if (!activeGalleryImage) return;

    const bodyStyle = document.body.style;
    const previousOverflow = bodyStyle.overflow;
    bodyStyle.overflow = "hidden";

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeGalleryImage();
    };

    globalThis.addEventListener("keydown", handleEscape);

    return () => {
      bodyStyle.overflow = previousOverflow;
      globalThis.removeEventListener("keydown", handleEscape);
    };
  }, [activeGalleryImage]);

  return (
    <main className="bg-black text-gray-400 overflow-x-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black" />

        {/* Content */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="relative z-10 px-4 sm:px-6"
        >
          <button
            type="button"
            onClick={() =>
              document.getElementById("occult")?.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            className="group relative inline-block mt-6 -translate-y-2.5"
          >
            {/* glow */}
            <span className="absolute inset-0 rounded-md bg-white/10 blur-lg opacity-0 group-hover:opacity-100 transition duration-700" />

            {/* button */}
            <span
              className="
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
              "
            >
              ENTER THE RITUAL
            </span>
          </button>
        </motion.div>
      </section>

      <Navbar />

      {/* ================= Occult Dictionary ================= */}
      <section id="occult" className="occult-section">
        <div className="occult-bg-title">ShkheeV MerA</div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="occult-wrap"
        >
          <h2 className="occult-title font-semibold" data-text="ShkheeV MerA">
            ShkheeV MerA
            <span className="hebrew">(שְׁכִיב מְרַע)</span>
          </h2>

          <p className="occult-label">Ancient Term — Noun</p>

          <p className="occult-definition">
            A name whispered for one suspended at the threshold of death — neither living nor gone,
            <br />
            but slowly dissolving into the hush beyond breath.
          </p>
        </motion.div>
      </section>

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

      {/* ================= EMISSARIES OF DEATH ================= */}

      <motion.section
        id="emissaries"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative scroll-mt-28 py-20 px-4 sm:py-28 sm:px-6 md:px-12 lg:px-20"
      >
        <h2 className="text-3xl text-white text-center mb-14 sm:text-4xl lg:text-5xl">
          Emissaries of Death
        </h2>

        <div className="relative mx-auto max-w-5xl h-[520px] sm:h-[620px] overflow-hidden bg-black">
          <Image
            src="/me1.png"
            alt="Emissary of Death"
            fill
            className="object-cover object-[50%_20%] scale-90 grayscale contrast-105 brightness-95"
          />

          {/* heavy vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/70" />

          {/* text */}
          <div className="absolute bottom-16 left-10 max-w-xl">
            <h3 className="text-white text-4xl sm:text-5xl tracking-[0.25em] font-semibold">
              Lord OFear
            </h3>

            <p className="mt-4 text-white/80 tracking-[0.35em] uppercase text-sm">
              Guitars • Bass • Illness Melodies
            </p>

            <p className="mt-6 text-white/70 leading-relaxed">
              Among the dying, he wanders. <br/>
              Breath fades before his gaze. <br/>
              All that survives mourns in silence.
            </p>
          </div>
        </div>
      </motion.section>

      {/* ================= GALLERY ================= */}

      <motion.section
        id="gallery"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="scroll-mt-28 py-16 px-4 sm:py-24 sm:px-6 md:px-12 lg:py-32 lg:px-20"
      >
        <h2 className="text-3xl text-white text-center mb-12 sm:text-4xl sm:mb-16 lg:text-5xl lg:mb-20">Gallery</h2>

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
        className="scroll-mt-28 text-white py-16 bg-black text-center sm:py-24 lg:py-32"
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
