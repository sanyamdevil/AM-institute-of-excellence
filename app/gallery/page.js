"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { X, ZoomIn, ChevronLeft, ChevronRight, Images } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const TOTAL = 30;
const photos = Array.from({ length: TOTAL }, (_, i) => ({
  id: i + 1,
  src: `/photo${i + 1}.jpg`,
  alt: `Gallery photo ${i + 1}`,
}));

// Filter categories
const FILTERS = ["All", "Events", "Classes", "Achievements", "Campus"];

// Assign categories cyclically so every photo has one
const withCategory = photos.map((p, i) => ({
  ...p,
  category: FILTERS[1 + (i % (FILTERS.length - 1))],
}));

export default function GalleryPage() {
  const ctxRef = useRef(null);
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState(null); // index into filtered array

  const filtered =
    active === "All" ? withCategory : withCategory.filter((p) => p.category === active);

  // GSAP entrance
  useEffect(() => {
    ctxRef.current = gsap.context(() => {
      gsap.from(".gallery-hero-badge", { y: -30, opacity: 0, duration: 0.6, ease: "back.out(1.7)" });
      gsap.from(".gallery-hero-title span", { y: 60, opacity: 0, stagger: 0.1, duration: 0.8, ease: "power3.out", delay: 0.2 });
      gsap.from(".gallery-hero-sub",   { y: 20, opacity: 0, duration: 0.6, delay: 0.7 });
      gsap.from(".gallery-filters",    { y: 20, opacity: 0, duration: 0.5, delay: 0.9 });
    });
    return () => ctxRef.current?.revert();
  }, []);

  // Re-animate cards when filter changes
  useEffect(() => {
    gsap.fromTo(
      ".gallery-item",
      { opacity: 0, y: 30, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, stagger: 0.04, duration: 0.45, ease: "power2.out" }
    );
  }, [active]);

  // Lightbox keyboard nav
  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e) => {
      if (e.key === "ArrowRight") setLightbox((l) => (l + 1) % filtered.length);
      if (e.key === "ArrowLeft")  setLightbox((l) => (l - 1 + filtered.length) % filtered.length);
      if (e.key === "Escape")     setLightbox(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox, filtered.length]);

  return (
    <div
      className="overflow-x-hidden text-white"
      style={{ fontFamily: "'Syne', sans-serif", background: "#0B0B1A", minHeight: "100vh" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; }
        ::selection { background: #7C3AED; color: #fff; }

        .gradient-text {
          background: linear-gradient(135deg, #F59E0B 0%, #F43F5E 40%, #7C3AED 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        @keyframes spin-slow { to { transform: translate(-50%,-50%) rotate(360deg); } }
        @keyframes spin-rev  { to { transform: translate(-50%,-50%) rotate(-360deg); } }
        .spin-slow { animation: spin-slow 18s linear infinite; }
        .spin-rev  { animation: spin-rev  30s linear infinite; }

        @keyframes orb-drift-a {
          0%,100% { transform: translateY(0) translateX(0); }
          40%      { transform: translateY(-22px) translateX(12px); }
          70%      { transform: translateY(14px) translateX(-8px); }
        }
        @keyframes orb-drift-b {
          0%,100% { transform: translateY(0) translateX(0); }
          35%      { transform: translateY(18px) translateX(-14px); }
          65%      { transform: translateY(-10px) translateX(10px); }
        }
        .orb-a { animation: orb-drift-a 6s ease-in-out infinite; }
        .orb-b { animation: orb-drift-b 8s ease-in-out infinite; }

        /* Masonry via CSS columns */
        .masonry-grid {
          columns: 4;
          column-gap: 16px;
        }
        @media (max-width: 1024px) { .masonry-grid { columns: 3; } }
        @media (max-width: 640px)  { .masonry-grid { columns: 2; column-gap: 10px; } }
        @media (max-width: 380px)  { .masonry-grid { columns: 1; } }

        .masonry-item {
          break-inside: avoid;
          margin-bottom: 16px;
          border-radius: 16px;
          overflow: hidden;
          position: relative;
          cursor: pointer;
          border: 1px solid rgba(255,255,255,0.07);
        }
        @media (max-width: 640px) {
          .masonry-item { margin-bottom: 10px; border-radius: 12px; }
        }

        .masonry-item img {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.5s ease;
        }
        .masonry-item:hover img {
          transform: scale(1.06);
        }

        .masonry-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(11,11,26,0.85) 0%, transparent 55%);
          opacity: 0;
          transition: opacity 0.35s ease;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          padding: 14px;
        }
        .masonry-item:hover .masonry-overlay { opacity: 1; }

        .filter-btn {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.09);
          color: rgba(255,255,255,0.55);
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          transition: all 0.22s;
          border-radius: 999px;
          padding: 7px 20px;
          font-size: 0.82rem;
          letter-spacing: 0.04em;
          white-space: nowrap;
        }
        .filter-btn:hover {
          background: rgba(124,58,237,0.18);
          border-color: rgba(124,58,237,0.4);
          color: #C4B5FD;
        }
        .filter-btn.active {
          background: linear-gradient(135deg, rgba(124,58,237,0.35), rgba(244,63,94,0.25));
          border-color: rgba(124,58,237,0.55);
          color: #fff;
          box-shadow: 0 0 18px rgba(124,58,237,0.25);
        }

        .shine-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(124,58,237,0.5), rgba(244,63,94,0.4), rgba(245,158,11,0.3), transparent);
        }

        /* Lightbox */
        .lb-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(5,5,15,0.95);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(12px);
        }
        .lb-img {
          max-width: 90vw;
          max-height: 85vh;
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 0 80px rgba(124,58,237,0.3), 0 0 40px rgba(0,0,0,0.8);
          object-fit: contain;
          display: block;
        }
        .lb-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
          backdrop-filter: blur(6px);
          color: white;
        }
        .lb-nav:hover {
          background: rgba(124,58,237,0.35);
          transform: translateY(-50%) scale(1.1);
        }
        .lb-close {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s;
          color: white;
          backdrop-filter: blur(6px);
          z-index: 10;
        }
        .lb-close:hover { background: rgba(244,63,94,0.4); }

        .lb-counter {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem;
          color: rgba(255,255,255,0.4);
          background: rgba(0,0,0,0.4);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 999px;
          padding: 5px 16px;
          backdrop-filter: blur(6px);
          white-space: nowrap;
        }

        /* Noise */
        .noise-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.025;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }

        @media (max-width: 640px) {
          .filter-scroll { flex-wrap: nowrap; overflow-x: auto; padding-bottom: 4px; justify-content: flex-start !important; }
          .filter-scroll::-webkit-scrollbar { display: none; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section className="relative flex flex-col items-center justify-center pt-28 pb-16 px-5 overflow-hidden text-center">
        <div className="noise-overlay" />
        <div className="orb-a absolute top-[8%] left-[5%] w-72 h-72 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(124,58,237,0.32) 0%,transparent 70%)", filter: "blur(50px)" }} />
        <div className="orb-b absolute bottom-[5%] right-[4%] w-64 h-64 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(244,63,94,0.28) 0%,transparent 70%)", filter: "blur(50px)" }} />
        <div className="spin-slow absolute w-[560px] h-[560px] rounded-full pointer-events-none"
          style={{ top: "50%", left: "50%", border: "1px solid rgba(124,58,237,0.07)" }} />
        <div className="spin-rev absolute w-[420px] h-[420px] rounded-full pointer-events-none"
          style={{ top: "50%", left: "50%", border: "1px dashed rgba(245,158,11,0.06)" }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 680, width: "100%" }}>
          <div
            className="gallery-hero-badge inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-[12px]"
            style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.3)", color: "#C4B5FD", fontFamily: "'DM Sans',sans-serif" }}
          >
            <Images size={13} />
            AM Institute of Excellence
          </div>

          <h1
            className="gallery-hero-title font-extrabold leading-[1.05] mb-4"
            style={{ fontSize: "clamp(2.4rem,6vw,4.5rem)", letterSpacing: "-0.02em" }}
          >
            {"Our".split(" ").map((w, i) => <span key={i} className="inline-block mr-2">{w}</span>)}
            <span className="gradient-text inline-block">Gallery</span>
          </h1>

          <p
            className="gallery-hero-sub mx-auto leading-[1.7]"
            style={{ fontSize: "clamp(0.9rem,1.8vw,1.05rem)", color: "rgba(255,255,255,0.45)", maxWidth: 480, fontFamily: "'DM Sans',sans-serif" }}
          >
            Moments of brilliance, milestones of pride — a visual journey through life at AM Institute of Excellence.
          </p>

          {/* Photo count badge */}
          <div className="mt-6 inline-flex items-center gap-2 rounded-2xl px-5 py-2"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", fontFamily: "'DM Sans',sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.4)" }}>
            Photos &nbsp;·&nbsp; click to view full size
          </div>
        </div>
      </section>

      <div className="shine-divider" />

      {/* ── FILTER BAR ── */}
      <section className="px-5 py-8" style={{ background: "#0D0D20" }}>
        <div className="max-w-5xl mx-auto">
          <div className="gallery-filters flex gap-2 justify-center filter-scroll">
            {FILTERS.map((f) => (
              <button
                key={f}
                className={`filter-btn ${active === f ? "active" : ""}`}
                onClick={() => setActive(f)}
              >
                {f}
                {active === f && (
                  <span className="ml-1.5 text-[10px] opacity-70">
                    ({f === "All" ? TOTAL : withCategory.filter((p) => p.category === f).length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── MASONRY GRID ── */}
      <section
        className="px-4 sm:px-6 pb-24"
        style={{ background: "linear-gradient(180deg,#0D0D20 0%,#0B0B1A 100%)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="masonry-grid">
            {filtered.map((photo, idx) => (
              <div
                key={photo.id}
                className="gallery-item masonry-item"
                onClick={() => setLightbox(idx)}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                />
                <div className="masonry-overlay">
                  <span
                    className="text-[10px] rounded-full px-2.5 py-0.5"
                    style={{ background: "rgba(124,58,237,0.5)", border: "1px solid rgba(124,58,237,0.6)", color: "#E9D5FF", fontFamily: "'DM Sans',sans-serif" }}
                  >
                    {photo.category}
                  </span>
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(255,255,255,0.12)", color: "white" }}
                  >
                    <ZoomIn size={13} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-24" style={{ color: "rgba(255,255,255,0.25)", fontFamily: "'DM Sans',sans-serif" }}>
              No photos found in this category.
            </div>
          )}
        </div>
      </section>

      {/* ── LIGHTBOX ── */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="lb-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => { if (e.target === e.currentTarget) setLightbox(null); }}
          >
            {/* Close */}
            <button className="lb-close" onClick={() => setLightbox(null)}>
              <X size={18} />
            </button>

            {/* Prev */}
            <button
              className="lb-nav"
              style={{ left: 14 }}
              onClick={() => setLightbox((l) => (l - 1 + filtered.length) % filtered.length)}
            >
              <ChevronLeft size={22} />
            </button>

            {/* Image */}
            <motion.img
              key={lightbox}
              className="lb-img"
              src={filtered[lightbox].src}
              alt={filtered[lightbox].alt}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.28 }}
            />

            {/* Next */}
            <button
              className="lb-nav"
              style={{ right: 14 }}
              onClick={() => setLightbox((l) => (l + 1) % filtered.length)}
            >
              <ChevronRight size={22} />
            </button>

            {/* Counter */}
            <div className="lb-counter">
              {lightbox + 1} / {filtered.length}
              &nbsp;·&nbsp;
              <span style={{ color: "#C4B5FD" }}>{filtered[lightbox].category}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}