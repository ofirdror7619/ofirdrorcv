"use client";

import { useEffect, useState } from "react";

export default function GlowCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMouse);

    return () => {
      window.removeEventListener("mousemove", updateMouse);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-50 hidden md:block"
      style={{
        left: position.x - 200,
        top: position.y - 200,
      }}
    >
      <div className="w-[400px] h-[400px] rounded-full bg-red-500/20 blur-3xl" />
    </div>
  );
}