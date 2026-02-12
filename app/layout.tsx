"use client"

import { ParallaxProvider } from "react-scroll-parallax";
import "./globals.css";
import GlowCursor from "@/components/GlowCursor";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <GlowCursor />
        <ParallaxProvider>{children}</ParallaxProvider>
      </body>
    </html>
  );
}