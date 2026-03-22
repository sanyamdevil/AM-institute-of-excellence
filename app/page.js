"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  BookOpen, Award, Users, Target, GraduationCap,
  Star, Zap, CheckCircle, ArrowRight,
  Info, Trophy, Images, Phone, Layers,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const NAV_LINKS = [
  { label: "About Us",        href: "/about",        icon: <Info size={18} />,       color: "text-sky-400",     glow: "rgba(14,165,233,0.25)"  },
  { label: "Shiksheshwar 2.0",href: "/shiksheshwar", icon: <Trophy size={18} />,     color: "text-rose-400",    glow: "rgba(244,63,94,0.25)"   },
  { label: "Coaching",        href: "/coaching",     icon: <Layers size={18} />,     color: "text-amber-400",   glow: "rgba(245,158,11,0.25)"  },
  { label: "Gallery",         href: "/gallery",      icon: <Images size={18} />,     color: "text-emerald-400", glow: "rgba(16,185,129,0.25)"  },
  { label: "Enroll Now",      href: "/contact",      icon: <Phone size={18} />,      color: "text-orange-400",  glow: "rgba(249,115,22,0.25)"  },
];

export default function LandingPage() {
  const heroRef  = useRef(null);
  const aboutRef = useRef(null);
  const ctxRef   = useRef(null);

  useEffect(() => {
    ctxRef.current = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(".hero-badge",     { y: -30, opacity: 0, duration: 0.6, ease: "back.out(1.7)" })
        .from(".hero-title span", { y: 60,  opacity: 0, stagger: 0.1, duration: 0.8, ease: "power3.out" }, "-=0.2")
        .from(".hero-tagline",   { y: 30,  opacity: 0, duration: 0.7, ease: "power2.out" }, "-=0.4")
        .from(".hero-desc",      { y: 20,  opacity: 0, duration: 0.6 }, "-=0.3")
        .from(".hero-cta",       { scale: 0.8, opacity: 0, duration: 0.5, ease: "back.out(1.5)" }, "-=0.2")
        .from(".hero-card",      { y: 40,  opacity: 0, stagger: 0.12, duration: 0.6, ease: "power2.out" }, "-=0.2")
        .from(".nav-section-card",{ y: 30, opacity: 0, stagger: 0.06, duration: 0.5, ease: "back.out(1.4)" }, "-=0.1");

      gsap.to(".orb-1", { y: -20, x:  10, duration: 3.5, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".orb-2", { y:  25, x: -15, duration: 4.2, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".orb-3", { y: -30, x:  20, duration: 5,   repeat: -1, yoyo: true, ease: "sine.inOut" });

      gsap.utils.toArray(".reveal-up").forEach((el) => {
        gsap.from(el, {
          y: 50, opacity: 0, duration: 0.8, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });

      gsap.utils.toArray(".stagger-cards").forEach((container) => {
        const cards = container.querySelectorAll(".stagger-card");
        gsap.from(cards, {
          y: 60, opacity: 0, stagger: 0.15, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: container, start: "top 80%" },
        });
      });
    });

    return () => { ctxRef.current?.revert(); };
  }, []);

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 400], [0, -60]);

  return (
    <div
      className="overflow-x-hidden text-white"
      style={{ fontFamily: "'Syne', sans-serif", background: "#0B0B1A" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; }
        body { margin: 0; }
        -webkit-tap-highlight-color: transparent;
        ::selection { background: #7C3AED; color: #fff; }

        .gradient-text {
          background: linear-gradient(135deg, #F59E0B 0%, #F43F5E 40%, #7C3AED 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .gradient-text-blue {
          background: linear-gradient(135deg, #0EA5E9 0%, #7C3AED 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        @keyframes spin-slow { to { transform: translate(-50%,-50%) rotate(360deg); } }
        @keyframes spin-rev  { to { transform: translate(-50%,-50%) rotate(-360deg); } }
        .spin-slow { animation: spin-slow 18s linear infinite; }
        .spin-rev  { animation: spin-rev  30s linear infinite; }

        /* hide heavy decorations on small screens */
        @media (max-width: 480px) {
          .spin-slow, .spin-rev { display: none !important; }
          .orb-3 { display: none !important; }
        }

        /* ─── Carousel ─── */
        .carousel-outer {
          overflow: hidden;
          width: 100%;
          cursor: grab;
        }
        .carousel-outer:active { cursor: grabbing; }
        @keyframes carousel-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .carousel-track {
          display: flex;
          width: max-content;
          animation: carousel-scroll 36s linear infinite;
        }
        .carousel-track:hover { animation-play-state: paused; }

        /* ─── Program card ─── */
        .program-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%);
          border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(12px);
          transition: border-color 0.3s, transform 0.3s;
        }
        .program-card:hover {
          border-color: rgba(124,58,237,0.5);
          transform: translateY(-6px);
        }

        /* ─── Scholarship item ─── */
        .sch-item {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          transition: background 0.2s, border-color 0.2s;
        }
        .sch-item:hover {
          background: rgba(124,58,237,0.12);
          border-color: rgba(124,58,237,0.3);
        }

        /* ─── Nav section card ─── */
        .nav-sec-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          backdrop-filter: blur(14px);
          transition: background 0.25s, border-color 0.25s, transform 0.2s, box-shadow 0.25s;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border-radius: 18px;
          padding: 20px 12px;
          cursor: pointer;
          -webkit-tap-highlight-color: transparent;
        }
        .nav-sec-card:hover {
          background: rgba(255,255,255,0.06);
          transform: translateY(-4px);
        }
        .nav-sec-divider {
          width: 28px;
          height: 2px;
          border-radius: 2px;
          transition: width 0.3s;
        }
        .nav-sec-card:hover .nav-sec-divider {
          width: 44px;
        }

        /* ─── Director card ─── */
        .director-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01));
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 24px;
          overflow: hidden;
          transition: transform 0.3s, border-color 0.3s;
        }
        .director-card:hover {
          transform: translateY(-4px);
          border-color: rgba(245,158,11,0.35);
        }

        /* ─── Responsive hero badge ─── */
        .hero-badge-wrapper {
          padding-top: clamp(16px, 5vw, 28px);
        }

        /* ─── Buttons ─── */
        * { -webkit-tap-highlight-color: transparent; }
      `}</style>

      {/* ── HERO ── */}
      <section
        id="home"
        ref={heroRef}
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100svh",
          padding: "clamp(80px,14vw,140px) clamp(16px,5vw,40px) clamp(48px,8vw,80px)",
          overflow: "hidden",
        }}
      >
        {/* noise */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }} />

        {/* orbs */}
        <div className="orb-1 absolute rounded-full pointer-events-none"
          style={{ top: "12%", left: "6%", width: "clamp(180px,35vw,320px)", height: "clamp(180px,35vw,320px)", background: "radial-gradient(circle, rgba(124,58,237,0.35) 0%, transparent 70%)", filter: "blur(40px)" }} />
        <div className="orb-2 absolute rounded-full pointer-events-none"
          style={{ bottom: "12%", right: "4%", width: "clamp(160px,30vw,280px)", height: "clamp(160px,30vw,280px)", background: "radial-gradient(circle, rgba(244,63,94,0.3) 0%, transparent 70%)", filter: "blur(40px)" }} />
        <div className="orb-3 absolute rounded-full pointer-events-none"
          style={{ top: "50%", right: "22%", width: "clamp(100px,18vw,190px)", height: "clamp(100px,18vw,190px)", background: "radial-gradient(circle, rgba(245,158,11,0.2) 0%, transparent 70%)", filter: "blur(40px)" }} />

        {/* rings */}
        <div className="spin-slow absolute pointer-events-none"
          style={{ top: "50%", left: "50%", width: "min(680px,90vw)", height: "min(680px,90vw)", borderRadius: "50%", border: "1px solid rgba(124,58,237,0.08)" }} />
        <div className="spin-rev absolute pointer-events-none"
          style={{ top: "50%", left: "50%", width: "min(520px,70vw)", height: "min(520px,70vw)", borderRadius: "50%", border: "1px dashed rgba(245,158,11,0.07)" }} />

        <motion.div style={{ y: heroY, position: "relative", zIndex: 1, textAlign: "center", maxWidth: 820, width: "100%" }}>
          {/* Badge — has top padding so it clears navbar on all screen sizes */}
          <div className="hero-badge-wrapper">
            <div
              className="hero-badge inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 text-[13px]"
              style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.3)", color: "#C4B5FD", fontFamily: "'DM Sans', sans-serif" }}
            >
              <Star size={13} fill="#C4B5FD" />
              Kurukshetra's Premier Coaching Institute
            </div>
          </div>

          <h1
            className="hero-title font-extrabold leading-[1.05] mb-4"
            style={{ fontSize: "clamp(2rem,6.5vw,5rem)", letterSpacing: "-0.02em" }}
          >
            {"AM Institute of".split(" ").map((w, i) => (
              <span key={i} style={{ display: "inline-block", marginRight: "0.2em" }}>{w}</span>
            ))}
            <span className="gradient-text" style={{ display: "inline-block" }}>Excellence</span>
          </h1>

          <p
            className="hero-tagline font-semibold italic mb-4"
            style={{ fontSize: "clamp(1rem,2.5vw,1.4rem)", color: "#F59E0B", letterSpacing: "0.04em" }}
          >
            "Give Wings to Your Dreams"
          </p>

          <p
            className="hero-desc mx-auto leading-[1.75]"
            style={{ fontSize: "clamp(0.85rem,1.8vw,1.05rem)", color: "rgba(255,255,255,0.55)", maxWidth: 560, fontFamily: "'DM Sans', sans-serif", marginBottom: "clamp(28px,6vw,40px)" }}
          >
            Empowering students from Class 6 to competitive exams — CA, CS, CMA, JEE, NEET &amp; beyond.
            Led by Anshul Mittal, a passionate CA Aspirant dedicated to your success.
          </p>

          <div className="hero-cta" style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            <a
              href="/contact"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "13px 28px", borderRadius: 50,
                background: "linear-gradient(135deg,#F59E0B,#F43F5E)",
                boxShadow: "0 4px 24px rgba(244,63,94,0.45)",
                color: "#fff", fontWeight: 700, fontSize: "clamp(0.85rem,2.5vw,0.95rem)",
                textDecoration: "none", fontFamily: "'Syne',sans-serif",
                transition: "transform 0.2s, box-shadow 0.2s",
                border: "none",
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px) scale(1.03)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(244,63,94,0.6)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 4px 24px rgba(244,63,94,0.45)"; }}
            >
              Enroll Now <ArrowRight size={15} />
            </a>
            <a
              href="/about"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "13px 28px", borderRadius: 50,
                border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.04)",
                color: "#fff", fontWeight: 600, fontSize: "clamp(0.85rem,2.5vw,0.95rem)",
                textDecoration: "none", fontFamily: "'Syne',sans-serif",
                transition: "border-color 0.2s, background 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)"; e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
            >
              Learn More
            </a>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginTop: "clamp(32px,7vw,56px)" }}>
            {[
              { val: "6–12",      label: "Classes" },
              { val: "CA/CS/CMA", label: "Professional" },
              { val: "JEE/NEET",  label: "Competitive" },
            ].map((s, i) => (
              <div
                key={i}
                className="hero-card"
                style={{
                  textAlign: "center", borderRadius: 16, padding: "12px 20px", minWidth: 100,
                  background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div style={{ fontWeight: 800, fontSize: "clamp(0.95rem,2.5vw,1.1rem)", color: "#F59E0B" }}>{s.val}</div>
                <div style={{ fontSize: "clamp(11px,1.8vw,13px)", marginTop: 3, color: "rgba(255,255,255,0.45)", fontFamily: "'DM Sans',sans-serif" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── NAVIGATION SECTION ── */}
      <section
        style={{
          position: "relative",
          padding: "clamp(36px,7vw,64px) clamp(16px,4vw,32px)",
          background: "linear-gradient(180deg,#0B0B1A 0%,#0D0D20 100%)",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,rgba(124,58,237,0.5),rgba(244,63,94,0.5),transparent)" }} />

        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "clamp(20px,4vw,36px)" }}>
            <p style={{
              display: "inline-block", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase",
              borderRadius: 50, padding: "5px 16px",
              color: "rgba(255,255,255,0.35)", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)",
              fontFamily: "'DM Sans',sans-serif",
            }}>
              Quick Navigation
            </p>
          </div>

          {/* 5 items: 5 col on md+, 3+2 on sm, 2+3 on xs */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "clamp(8px,2vw,16px)",
          }}
            className="nav-grid"
          >
            <style>{`
              @media (max-width: 680px) {
                .nav-grid { grid-template-columns: repeat(3, 1fr) !important; }
                .nav-grid > :last-child {
                  grid-column: 1 / -1;
                  max-width: 160px;
                  margin: 0 auto;
                  width: 100%;
                }
              }
              @media (max-width: 380px) {
                .nav-grid { grid-template-columns: repeat(2, 1fr) !important; }
                .nav-grid > :last-child { grid-column: auto; max-width: none; }
              }
            `}</style>
            {NAV_LINKS.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="nav-sec-card nav-section-card"
                style={{ color: "inherit", textDecoration: "none" }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 0 24px ${link.glow}`; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; }}
              >
                <div
                  style={{
                    width: "clamp(36px,8vw,44px)", height: "clamp(36px,8vw,44px)",
                    borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center",
                    background: link.glow.replace("0.25","0.12"),
                    border: `1px solid ${link.glow.replace("0.25","0.35")}`,
                    color: link.glow.replace("rgba(","").replace(",0.25)","").split(",").map(Number),
                    /* use the color class directly via style for icon color */
                    flexShrink: 0,
                  }}
                  className={link.color}
                >
                  {link.icon}
                </div>
                <span style={{
                  fontWeight: 700, fontSize: "clamp(0.7rem,1.8vw,0.82rem)",
                  color: "rgba(255,255,255,0.82)", textAlign: "center",
                  fontFamily: "'Syne',sans-serif", lineHeight: 1.3,
                }}>
                  {link.label}
                </span>
                <div className="nav-sec-divider" style={{ background: link.glow.replace("0.25","0.8") }} />
              </a>
            ))}
          </div>
        </div>

        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,rgba(14,165,233,0.3),rgba(245,158,11,0.3),transparent)" }} />
      </section>

      {/* ── PHOTO CAROUSEL ── */}
      <section style={{ padding: "clamp(32px,6vw,56px) 0", background: "#0D0D20", overflow: "hidden" }}>
        <div style={{ textAlign: "center", marginBottom: "clamp(16px,3vw,24px)" }}>
          <p style={{
            display: "inline-block", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase",
            borderRadius: 50, padding: "5px 16px",
            color: "rgba(255,255,255,0.3)", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)",
            fontFamily: "'DM Sans',sans-serif",
          }}>
            Gallery Preview
          </p>
        </div>
        <div className="carousel-outer">
          <div className="carousel-track">
            {[...Array(2)].flatMap((_, di) =>
              [1, 2, 3, 4, 5, 6, 7].map((num) => (
                <div
                  key={`${di}-${num}`}
                  style={{
                    flexShrink: 0,
                    margin: "0 clamp(6px,1.5vw,12px)",
                    borderRadius: "clamp(12px,2vw,20px)",
                    overflow: "hidden",
                    width: "clamp(200px,38vw,300px)",
                    height: "clamp(140px,26vw,210px)",
                    border: "1px solid rgba(255,255,255,0.09)",
                    background: "linear-gradient(135deg,rgba(79,70,229,0.18),rgba(124,58,237,0.1))",
                    position: "relative",
                  }}
                >
                  <img
                    src={`/photo${num}.jpg`}
                    alt={`Gallery photo ${num}`}
                    style={{
                      width: "100%", height: "100%", objectFit: "cover", display: "block",
                      transition: "transform 0.4s",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.07)")}
                    onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                  />
                  {/* subtle overlay */}
                  <div style={{
                    position: "absolute", inset: 0, pointerEvents: "none",
                    background: "linear-gradient(180deg,transparent 60%,rgba(11,11,26,0.4) 100%)",
                  }} />
                </div>
              ))
            )}
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: "clamp(14px,3vw,22px)" }}>
          <a href="/gallery" style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            fontSize: "clamp(0.8rem,2vw,0.88rem)", color: "rgba(255,255,255,0.45)",
            fontFamily: "'DM Sans',sans-serif", textDecoration: "none",
            transition: "color 0.2s",
          }}
            onMouseEnter={e => (e.currentTarget.style.color = "#F59E0B")}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
          >
            View full gallery <ArrowRight size={14} />
          </a>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section
        id="about"
        ref={aboutRef}
        style={{
          position: "relative",
          padding: "clamp(48px,10vw,96px) clamp(16px,5vw,40px)",
          background: "linear-gradient(180deg,#0B0B1A 0%,#110D2E 100%)",
        }}
      >
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "clamp(32px,6vw,56px)" }}>
            <div
              className="reveal-up"
              style={{
                display: "inline-block", borderRadius: 50, padding: "5px 16px", marginBottom: 14,
                background: "rgba(14,165,233,0.12)", border: "1px solid rgba(14,165,233,0.25)",
                color: "#7DD3FC", fontFamily: "'DM Sans',sans-serif", fontSize: 11, letterSpacing: "0.12em",
              }}
            >
              WHO WE ARE
            </div>
            <h2 className="reveal-up" style={{ fontWeight: 800, fontSize: "clamp(1.8rem,4vw,3rem)", letterSpacing: "-0.02em", marginBottom: 16 }}>
              About <span className="gradient-text-blue">Us</span>
            </h2>
            <p className="reveal-up" style={{
              maxWidth: 600, margin: "0 auto", lineHeight: 1.8,
              fontSize: "clamp(0.88rem,1.8vw,1.05rem)", color: "rgba(255,255,255,0.55)",
              fontFamily: "'DM Sans',sans-serif",
            }}>
              AM Institute of Excellence is a premier coaching centre focused on holistic growth and innovation — equipping students with the skills, knowledge, and mindset to lead in a fast-paced world.
            </p>
          </div>

          {/* Director section */}
          <div className="reveal-up director-card" style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 0, alignItems: "stretch" }}>
            <style>{`
              @media (max-width: 620px) {
                .director-inner { grid-template-columns: 1fr !important; }
                .director-img-wrap { width: 100% !important; height: 220px !important; border-radius: 0 !important; border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.08) !important; }
              }
            `}</style>
            <div className="director-inner" style={{ display: "grid", gridTemplateColumns: "220px 1fr", width: "100%" }}>
              <div
                className="director-img-wrap"
                style={{
                  width: 220, overflow: "hidden",
                  borderRight: "1px solid rgba(255,255,255,0.08)",
                  position: "relative",
                  background: "linear-gradient(135deg,rgba(124,58,237,0.15),rgba(244,63,94,0.08))",
                }}
              >
                <img
                  src="/anshul.jpg"
                  alt="Anshul Mittal — Director"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }}
                />
                <div style={{
                  position: "absolute", inset: 0, pointerEvents: "none",
                  background: "linear-gradient(90deg,transparent 70%,rgba(17,13,46,0.5) 100%)",
                }} />
              </div>
              <div style={{ padding: "clamp(24px,5vw,40px)", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: -20, right: -10, fontSize: 120, opacity: 0.05, lineHeight: 1, pointerEvents: "none", color: "#fff", fontFamily: "serif" }}>"</div>
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  borderRadius: 50, padding: "4px 12px", marginBottom: 16, fontSize: 11,
                  background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.25)", color: "#FCD34D",
                  fontFamily: "'DM Sans',sans-serif", letterSpacing: "0.1em", width: "fit-content",
                }}>
                  <Star size={10} fill="#FCD34D" /> Director &amp; CA Aspirant
                </div>
                <p style={{ fontStyle: "italic", lineHeight: 1.85, fontSize: "clamp(0.88rem,1.8vw,1.02rem)", marginBottom: 16, color: "rgba(255,255,255,0.72)", fontFamily: "'DM Sans',sans-serif" }}>
                  Ready to conquer your CA/CS/CMA journey and boards? I'm here to guide your path to success — providing structured coaching, individual attention, and unwavering support every step of the way.
                </p>
                <p style={{ fontWeight: 800, fontSize: "clamp(0.9rem,2vw,1rem)", color: "#F59E0B", fontFamily: "'Syne',sans-serif" }}>
                  — Anshul Mittal
                </p>
                <a href="/about" style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  marginTop: 20, fontSize: "0.85rem", color: "#7DD3FC",
                  fontFamily: "'DM Sans',sans-serif", textDecoration: "none",
                  width: "fit-content", transition: "gap 0.2s",
                }}
                  onMouseEnter={e => (e.currentTarget.style.gap = "10px")}
                  onMouseLeave={e => (e.currentTarget.style.gap = "6px")}
                >
                  Read full story <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section id="programs" style={{ padding: "clamp(48px,10vw,96px) clamp(16px,5vw,40px)", background: "#0D0D20" }}>
        <div style={{ maxWidth: 1060, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "clamp(28px,6vw,56px)" }}>
            <div
              className="reveal-up"
              style={{
                display: "inline-block", borderRadius: 50, padding: "5px 16px", marginBottom: 14,
                background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.25)",
                color: "#FCD34D", fontFamily: "'DM Sans',sans-serif", fontSize: 11, letterSpacing: "0.12em",
              }}
            >
              WHAT WE OFFER
            </div>
            <h2 className="reveal-up" style={{ fontWeight: 800, fontSize: "clamp(1.8rem,4vw,3rem)", letterSpacing: "-0.02em" }}>
              Our <span className="gradient-text">Programs</span>
            </h2>
          </div>

          <div className="stagger-cards" style={{ display: "grid", gap: "clamp(12px,2vw,24px)", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))" }}>
            {[
              { icon: <BookOpen size={26} />, title: "School Programs",   color: "#0EA5E9", accent: "rgba(14,165,233,0.15)",  border: "rgba(14,165,233,0.3)",  items: ["CLASS 6TH – 12TH","COMMERCE","SCIENCE","HUMANITIES","COMPUTER SCIENCE"] },
              { icon: <GraduationCap size={26} />, title: "Professional Courses", color: "#7C3AED", accent: "rgba(124,58,237,0.15)", border: "rgba(124,58,237,0.3)", items: ["CA FOUNDATION","CS FOUNDATION","CMA FOUNDATION","CSEET"] },
              { icon: <Target size={26} />, title: "Competitive Exams",  color: "#F43F5E", accent: "rgba(244,63,94,0.15)",  border: "rgba(244,63,94,0.3)",  items: ["JEE MAINS","JEE ADVANCE","NEET","CUET"] },
            ].map((prog, i) => (
              <motion.div key={i} className="stagger-card program-card" style={{ borderRadius: "clamp(16px,2.5vw,22px)", padding: "clamp(22px,4vw,36px)", cursor: "default" }} whileHover={{ scale: 1.02 }}>
                <div style={{ width: 50, height: 50, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, background: prog.accent, border: `1px solid ${prog.border}`, color: prog.color }}>
                  {prog.icon}
                </div>
                <h3 style={{ fontWeight: 800, fontSize: "clamp(1rem,2.5vw,1.2rem)", marginBottom: 16, color: "#fff" }}>{prog.title}</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 9 }}>
                  {prog.items.map((item, j) => (
                    <li key={j} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: "clamp(0.8rem,1.8vw,0.9rem)", color: "rgba(255,255,255,0.6)", fontFamily: "'DM Sans',sans-serif" }}>
                      <span style={{ width: 6, height: 6, borderRadius: "50%", flexShrink: 0, background: prog.color }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCHOLARSHIP ── */}
      <section
        id="scholarship"
        style={{
          position: "relative",
          padding: "clamp(48px,10vw,96px) clamp(16px,5vw,40px)",
          background: "linear-gradient(135deg,#110D2E 0%,#1A0B2E 50%,#0D1520 100%)",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", top: "50%", left: "50%", width: "clamp(300px,60vw,600px)", height: "clamp(300px,60vw,600px)", borderRadius: "50%", pointerEvents: "none", transform: "translate(-50%,-50%)", background: "radial-gradient(circle,rgba(124,58,237,0.12) 0%,transparent 60%)" }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 760, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "clamp(24px,5vw,48px)" }}>
            <div
              className="reveal-up"
              style={{
                display: "inline-block", borderRadius: 50, padding: "5px 16px", marginBottom: 14,
                background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.3)",
                color: "#FCD34D", fontFamily: "'DM Sans',sans-serif", fontSize: 11, letterSpacing: "0.12em",
              }}
            >
              FLAGSHIP INITIATIVE
            </div>
            <h2 className="reveal-up" style={{ fontWeight: 800, fontSize: "clamp(1.8rem,4.5vw,3rem)", letterSpacing: "-0.02em", marginBottom: 12 }}>
              Shiksheshwar 2.0 <span className="gradient-text">Scholarship</span>
            </h2>
            <p className="reveal-up" style={{ fontSize: "clamp(0.85rem,1.8vw,1rem)", color: "rgba(255,255,255,0.5)", fontFamily: "'DM Sans',sans-serif" }}>
              Every 2nd Saturday &amp; 4th Sunday — Identify and reward academic brilliance
            </p>
          </div>

          <div className="stagger-cards" style={{ display: "grid", gap: "clamp(8px,1.5vw,14px)", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", marginBottom: "clamp(24px,5vw,40px)" }}>
            {[
              { icon: <Award size={19} />,       label: "Merit-Based Scholarships", color: "#F59E0B" },
              { icon: <Users size={19} />,        label: "Open to All Classes",       color: "#0EA5E9" },
              { icon: <Star size={19} />,         label: "Expert Assessment",          color: "#7C3AED" },
              { icon: <Zap size={19} />,          label: "Instant Results",            color: "#F43F5E" },
              { icon: <CheckCircle size={19} />,  label: "Zero Entry Cost",            color: "#10B981" },
              { icon: <BookOpen size={19} />,     label: "Detailed Feedback",          color: "#F97316" },
            ].map((s, i) => (
              <motion.div key={i} className="stagger-card sch-item" style={{ borderRadius: "clamp(12px,2vw,16px)", padding: "clamp(14px,2.5vw,20px) clamp(14px,2.5vw,20px)", display: "flex", alignItems: "center", gap: 13 }} whileHover={{ x: 4 }}>
                <div style={{ color: s.color, flexShrink: 0 }}>{s.icon}</div>
                <span style={{ fontWeight: 500, fontSize: "clamp(0.82rem,1.8vw,0.95rem)", color: "rgba(255,255,255,0.75)", fontFamily: "'DM Sans',sans-serif" }}>{s.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Registration CTA */}
          <div className="reveal-up" style={{ textAlign: "center" }}>
            <a
              href="/shiksheshwar"
              style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                padding: "clamp(13px,2.5vw,16px) clamp(28px,5vw,40px)",
                borderRadius: 50,
                background: "linear-gradient(135deg,#7C3AED,#F43F5E)",
                color: "#fff", fontWeight: 700, fontSize: "clamp(0.88rem,2.2vw,1rem)",
                textDecoration: "none", fontFamily: "'Syne',sans-serif",
                boxShadow: "0 4px 28px rgba(124,58,237,0.45)",
                transition: "transform 0.2s, box-shadow 0.2s",
                border: "none",
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 8px 36px rgba(124,58,237,0.6)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 4px 28px rgba(124,58,237,0.45)"; }}
            >
              <Trophy size={17} />
              Register for Shiksheshwar 2.0
              <ArrowRight size={15} />
            </a>
            <p style={{ marginTop: 12, fontSize: "clamp(0.74rem,1.6vw,0.82rem)", color: "rgba(255,255,255,0.3)", fontFamily: "'DM Sans',sans-serif" }}>
              Free entry · Every 2nd Sat &amp; 4th Sun · Win up to 100% fee waiver
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}