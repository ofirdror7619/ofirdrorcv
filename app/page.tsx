"use client";

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
            title="Spotify embed: Latest Release"
            src="https://open.spotify.com/embed/album/0VjIjW4GlUZAMYd2vXMwbU"
            width="350"
            height="420"
            allow="encrypted-media"
            className="rounded-lg shadow-2xl"
          />
        </div>
      </motion.section>

      {/* ================= PARALLAX BREAK ================= */}

      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        
        <Image
          src="/band-live.jpg"
          alt="Live show"
          fill
          className="object-cover opacity-30 scale-110"
        />

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
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-32 px-6 md:px-20"
      >
        <h2 className="text-5xl text-center mb-20">Gallery</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {["/g1.jpg", "/g2.jpg", "/g3.jpg"].map((img) => (
            <div
              key={img}
              className="relative h-[420px] overflow-hidden group cursor-pointer"
            >
              <Image
                src={img}
                alt="Band photo"
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition duration-700"
              />
            </div>
          ))}
        </div>
      </motion.section>

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