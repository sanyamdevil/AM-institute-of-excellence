"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  BookOpen, Award, Users, Target, GraduationCap,
  Star, Zap, CheckCircle,
  Home, Info, LayoutGrid, Trophy, Images, Phone,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const NAV_LINKS = [
  { label: "Home",        href: "#home",        icon: <Home size={20} />,       color: "text-violet-400",  glow: "rgba(124,58,237,0.25)"  },
  { label: "About",       href: "/about",       icon: <Info size={20} />,       color: "text-sky-400",     glow: "rgba(14,165,233,0.25)"  },
  { label: "Programs",    href: "#programs",    icon: <LayoutGrid size={20} />, color: "text-amber-400",   glow: "rgba(245,158,11,0.25)"  },
  { label: "Scholarship", href: "#scholarship", icon: <Trophy size={20} />,     color: "text-rose-400",    glow: "rgba(244,63,94,0.25)"   },
  { label: "Gallery",     href: "#gallery",     icon: <Images size={20} />,     color: "text-emerald-400", glow: "rgba(16,185,129,0.25)"  },
  { label: "Contact",     href: "#contact",     icon: <Phone size={20} />,      color: "text-orange-400",  glow: "rgba(249,115,22,0.25)"  },
];

export default function LandingPage() {
  const heroRef  = useRef(null);
  const aboutRef = useRef(null);
  /* Keep a ref to every GSAP context so we can revert on unmount */
  const ctxRef   = useRef(null);

  useEffect(() => {
    /*
     * Wrap ALL gsap calls in a single context so that:
     * 1. gsap.context.revert() kills tweens AND ScrollTriggers on unmount.
     * 2. Elements are never left with opacity:0 after the component re-mounts.
     */
    ctxRef.current = gsap.context(() => {

      /* ── Hero entrance ── */
      const tl = gsap.timeline();
      tl.from(".hero-badge",     { y: -30, opacity: 0, duration: 0.6, ease: "back.out(1.7)" })
        .from(".hero-title span", { y: 60,  opacity: 0, stagger: 0.1, duration: 0.8, ease: "power3.out" }, "-=0.2")
        .from(".hero-tagline",   { y: 30,  opacity: 0, duration: 0.7, ease: "power2.out" }, "-=0.4")
        .from(".hero-desc",      { y: 20,  opacity: 0, duration: 0.6 }, "-=0.3")
        .from(".hero-cta",       { scale: 0.8, opacity: 0, duration: 0.5, ease: "back.out(1.5)" }, "-=0.2")
        .from(".hero-card",      { y: 40,  opacity: 0, stagger: 0.12, duration: 0.6, ease: "power2.out" }, "-=0.2")
        .from(".nav-section-card",{ y: 40, opacity: 0, stagger: 0.08, duration: 0.55, ease: "back.out(1.4)" }, "-=0.1");

      /* ── Floating orbs ── */
      gsap.to(".orb-1", { y: -20, x:  10, duration: 3.5, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".orb-2", { y:  25, x: -15, duration: 4.2, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".orb-3", { y: -30, x:  20, duration: 5,   repeat: -1, yoyo: true, ease: "sine.inOut" });

      /* ── Scroll reveals ── */
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

    }); /* end gsap.context */

    /*
     * CLEANUP — called when the component unmounts (route change).
     * revert() restores every element's inline style back to its
     * original state, so when the user navigates back, nothing
     * is stuck at opacity:0 or translateY:60px.
     */
    return () => {
      ctxRef.current?.revert();
    };
  }, []);

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 400], [0, -80]);

  return (
    <div
      className="overflow-x-hidden text-white"
      style={{ fontFamily: "'Syne', sans-serif", background: "#0B0B1A" }}
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

        @keyframes carousel-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .carousel-track {
          display: flex;
          width: max-content;
          animation: carousel-scroll 28s linear infinite;
        }
        .carousel-track:hover { animation-play-state: paused; }

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

        .sch-item {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          transition: background 0.2s, border-color 0.2s;
        }
        .sch-item:hover {
          background: rgba(124,58,237,0.12);
          border-color: rgba(124,58,237,0.3);
        }

        .gallery-box {
          background: linear-gradient(135deg, rgba(79,70,229,0.2), rgba(124,58,237,0.1));
          border: 1px solid rgba(255,255,255,0.07);
          transition: transform 0.2s, border-color 0.2s;
          overflow: hidden;
        }
        .gallery-box:hover {
          transform: scale(1.03);
          border-color: rgba(245,158,11,0.4);
        }

        .nav-sec-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          backdrop-filter: blur(14px);
          transition: background 0.25s, border-color 0.25s, transform 0.25s, box-shadow 0.25s;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          border-radius: 20px;
          padding: 28px 16px;
          cursor: pointer;
        }
        .nav-sec-card:hover {
          background: rgba(255,255,255,0.06);
          transform: translateY(-6px);
        }
        .nav-sec-divider {
          width: 36px;
          height: 2px;
          border-radius: 2px;
          transition: width 0.3s;
        }
        .nav-sec-card:hover .nav-sec-divider {
          width: 52px;
        }
      `}</style>

      {/* ── HERO ── */}
      <section
        id="home"
        ref={heroRef}
        className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-20 pb-16 overflow-hidden"
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }}
        />
        <div className="orb-1 absolute top-[10%] left-[8%] w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.35) 0%, transparent 70%)", filter: "blur(40px)" }} />
        <div className="orb-2 absolute bottom-[15%] right-[6%] w-72 h-72 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(244,63,94,0.3) 0%, transparent 70%)", filter: "blur(40px)" }} />
        <div className="orb-3 absolute top-1/2 right-1/4 w-48 h-48 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(245,158,11,0.2) 0%, transparent 70%)", filter: "blur(40px)" }} />
        <div className="spin-slow absolute w-[680px] h-[680px] rounded-full pointer-events-none"
          style={{ top: "50%", left: "50%", border: "1px solid rgba(124,58,237,0.08)" }} />
        <div className="spin-rev absolute w-[520px] h-[520px] rounded-full pointer-events-none"
          style={{ top: "50%", left: "50%", border: "1px dashed rgba(245,158,11,0.07)" }} />

        <motion.div style={{ y: heroY, position: "relative", zIndex: 1, textAlign: "center", maxWidth: 800 }}>
          <div
            className="hero-badge inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-7 text-[13px]"
            style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.3)", color: "#C4B5FD", fontFamily: "'DM Sans', sans-serif" }}
          >
            <Star size={13} fill="#C4B5FD" />
            Kurukshetra's Premier Coaching Institute
          </div>

          <h1
            className="hero-title font-extrabold leading-[1.05] mb-5"
            style={{ fontSize: "clamp(2.4rem,6vw,5rem)", letterSpacing: "-0.02em" }}
          >
            {"AM Institute of".split(" ").map((w, i) => (
              <span key={i} className="inline-block mr-1">{w} </span>
            ))}
            <span className="gradient-text inline-block">Excellence</span>
          </h1>

          <p
            className="hero-tagline font-semibold italic mb-4"
            style={{ fontSize: "clamp(1.1rem,2.5vw,1.5rem)", color: "#F59E0B", letterSpacing: "0.04em" }}
          >
            "Give Wings to Your Dreams"
          </p>

          <p
            className="hero-desc mb-9 mx-auto leading-[1.7]"
            style={{ fontSize: "clamp(0.9rem,1.8vw,1.1rem)", color: "rgba(255,255,255,0.55)", maxWidth: 580, fontFamily: "'DM Sans', sans-serif" }}
          >
            Empowering students from Class 6 to competitive exams — CA, CS, CMA, JEE, NEET & beyond.
            Led by Anshul Mittal, a passionate CA Aspirant dedicated to your success.
          </p>

          <div className="hero-cta flex flex-wrap gap-3 justify-center">
            <button
              className="px-8 py-3 rounded-full font-bold text-[15px] text-white border-0 cursor-pointer"
              style={{ background: "linear-gradient(135deg,#F59E0B,#F43F5E)", boxShadow: "0 4px 24px rgba(244,63,94,0.45)", transition: "transform 0.2s, box-shadow 0.2s", fontFamily: "inherit" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px) scale(1.03)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(244,63,94,0.6)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 4px 24px rgba(244,63,94,0.45)"; }}
            >
              Enroll Now
            </button>
            <button
              className="px-8 py-3 rounded-full font-semibold text-[15px] text-white cursor-pointer"
              style={{ border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.04)", fontFamily: "inherit", transition: "border-color 0.2s" }}
            >
              Learn More
            </button>
          </div>

          <div className="flex flex-wrap gap-3 justify-center mt-14">
            {[
              { val: "6-12",      label: "Classes" },
              { val: "CA/CS/CMA", label: "Professional" },
              { val: "JEE/NEET",  label: "Competitive" },
            ].map((s, i) => (
              <div
                key={i}
                className="hero-card text-center rounded-2xl px-6 py-3 min-w-[110px]"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div className="font-extrabold text-[1.1rem]" style={{ color: "#F59E0B" }}>{s.val}</div>
                <div className="text-[12px] mt-0.5" style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'DM Sans',sans-serif" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── NAVIGATION SECTION ── */}
      <section
        className="relative px-6 py-16 overflow-hidden"
        style={{ background: "linear-gradient(180deg,#0B0B1A 0%,#0D0D20 100%)" }}
      >
        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg,transparent,rgba(124,58,237,0.5),rgba(244,63,94,0.5),transparent)" }} />

        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p
              className="inline-block text-[11px] tracking-[0.18em] uppercase rounded-full px-4 py-1"
              style={{ color: "rgba(255,255,255,0.35)", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", fontFamily: "'DM Sans',sans-serif" }}
            >
              Quick Navigation
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                className="nav-sec-card nav-section-card"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                style={{ boxShadow: "none", color: "inherit", textDecoration: "none" }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 0 28px ${link.glow}`; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; }}
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center ${link.color}`}
                  style={{ background: link.glow.replace("0.25","0.12"), border: `1px solid ${link.glow.replace("0.25","0.35")}` }}
                >
                  {link.icon}
                </div>
                <span className="font-bold text-[0.9rem] text-white/80 tracking-wide" style={{ fontFamily: "'Syne',sans-serif" }}>
                  {link.label}
                </span>
                <div className="nav-sec-divider" style={{ background: link.glow.replace("0.25","0.8") }} />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg,transparent,rgba(14,165,233,0.3),rgba(245,158,11,0.3),transparent)" }} />
      </section>

      {/* ── PHOTO CAROUSEL ── */}
      <section className="py-14 overflow-hidden" style={{ background: "#0D0D20" }}>
        <div className="carousel-track">
          {[...Array(2)].flatMap((_, di) =>
            [1, 2, 3, 4, 5, 6, 7].map((num) => (
              <div
                key={`${di}-${num}`}
                className="flex-shrink-0 mx-3 rounded-2xl overflow-hidden"
                style={{ width: 280, height: 200, border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <img
                  src={`/photo${num}.jpg`}
                  alt={`Gallery photo ${num}`}
                  className="w-full h-full object-cover"
                  style={{ transition: "transform 0.4s" }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.06)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                />
              </div>
            ))
          )}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section
        id="about"
        ref={aboutRef}
        className="relative px-6 py-24"
        style={{ background: "linear-gradient(180deg,#0B0B1A 0%,#110D2E 100%)" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="reveal-up inline-block rounded-full px-4 py-1 text-xs mb-5"
            style={{ background: "rgba(14,165,233,0.12)", border: "1px solid rgba(14,165,233,0.25)", color: "#7DD3FC", fontFamily: "'DM Sans',sans-serif" }}
          >
            WHO WE ARE
          </div>
          <h2 className="reveal-up font-extrabold mb-6" style={{ fontSize: "clamp(2rem,4vw,3rem)", letterSpacing: "-0.02em" }}>
            About <span className="gradient-text-blue">Us</span>
          </h2>
          <p className="reveal-up mb-8 leading-[1.8] text-[1.05rem]" style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'DM Sans',sans-serif" }}>
            AM Institute of Excellence is a premier coaching centre focused on holistic growth and innovation — equipping students with the skills, knowledge, and mindset to lead in a fast-paced world.
          </p>

          <motion.div
            className="reveal-up relative text-left rounded-2xl px-9 py-8 overflow-hidden"
            whileHover={{ scale: 1.01 }}
            style={{ background: "linear-gradient(135deg,rgba(124,58,237,0.15),rgba(244,63,94,0.08))", border: "1px solid rgba(124,58,237,0.25)" }}
          >
            <div className="absolute top-[-20px] right-[-20px] text-[120px] opacity-[0.06] leading-none">"</div>
            <p className="italic leading-[1.8] text-[1.05rem] mb-3" style={{ color: "rgba(255,255,255,0.7)", fontFamily: "'DM Sans',sans-serif" }}>
              Ready to conquer your CA/CS/CMA journey and boards? I'm here to guide your path to success — providing structured coaching, individual attention, and unwavering support every step of the way.
            </p>
            <p className="font-bold text-[0.95rem]" style={{ color: "#F59E0B" }}>— Anshul Mittal, Director</p>
          </motion.div>
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section id="programs" className="px-6 py-24" style={{ background: "#0D0D20" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div
              className="reveal-up inline-block rounded-full px-4 py-1 text-xs mb-5"
              style={{ background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.25)", color: "#FCD34D", fontFamily: "'DM Sans',sans-serif" }}
            >
              WHAT WE OFFER
            </div>
            <h2 className="reveal-up font-extrabold m-0" style={{ fontSize: "clamp(2rem,4vw,3rem)", letterSpacing: "-0.02em" }}>
              Our <span className="gradient-text">Programs</span>
            </h2>
          </div>

          <div className="stagger-cards grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))" }}>
            {[
              { icon: <BookOpen size={28} />, title: "School Programs",   color: "#0EA5E9", accent: "rgba(14,165,233,0.15)",  border: "rgba(14,165,233,0.3)",  items: ["CLASS 6TH - 12TH","COMMERCE","SCIENCE","HUMANITIES","COMPUTER SCIENCE"] },
              { icon: <GraduationCap size={28} />, title: "Special Classes", color: "#7C3AED", accent: "rgba(124,58,237,0.15)", border: "rgba(124,58,237,0.3)", items: ["CA FOUNDATION","CS FOUNDATION","CMA FOUNDATION","CSEET"] },
              { icon: <Target size={28} />, title: "Competitive Exams",  color: "#F43F5E", accent: "rgba(244,63,94,0.15)",  border: "rgba(244,63,94,0.3)",  items: ["JEE MAINS","JEE ADVANCE","NEET","CUET"] },
            ].map((prog, i) => (
              <motion.div key={i} className="stagger-card program-card rounded-2xl p-8 cursor-default" whileHover={{ scale: 1.02 }}>
                <div className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center mb-5"
                  style={{ background: prog.accent, border: `1px solid ${prog.border}`, color: prog.color }}>
                  {prog.icon}
                </div>
                <h3 className="font-extrabold text-[1.2rem] mb-[18px] text-white">{prog.title}</h3>
                <ul className="list-none p-0 m-0 flex flex-col gap-[10px]">
                  {prog.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-[10px] text-[0.9rem]"
                      style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'DM Sans',sans-serif" }}>
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: prog.color }} />
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
        className="relative px-6 py-24 overflow-hidden"
        style={{ background: "linear-gradient(135deg,#110D2E 0%,#1A0B2E 50%,#0D1520 100%)" }}
      >
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ transform: "translate(-50%,-50%)", background: "radial-gradient(circle,rgba(124,58,237,0.12) 0%,transparent 60%)" }} />

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <div className="reveal-up inline-block rounded-full px-4 py-1 text-xs mb-5"
              style={{ background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.3)", color: "#FCD34D", fontFamily: "'DM Sans',sans-serif" }}>
              FLAGSHIP INITIATIVE
            </div>
            <h2 className="reveal-up font-extrabold mb-[14px]" style={{ fontSize: "clamp(2rem,4vw,3rem)", letterSpacing: "-0.02em" }}>
              Shiksheshwar 2.0 <span className="gradient-text">Scholarship</span>
            </h2>
            <p className="reveal-up text-[1rem]" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'DM Sans',sans-serif" }}>
              Every 2nd Saturday & 4th Sunday — Identify and reward academic brilliance
            </p>
          </div>

          <div className="stagger-cards grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))" }}>
            {[
              { icon: <Award size={20} />,      label: "Merit-Based Scholarships", color: "#F59E0B" },
              { icon: <Users size={20} />,       label: "Open to All Classes",       color: "#0EA5E9" },
              { icon: <Star size={20} />,        label: "Expert Assessment",          color: "#7C3AED" },
              { icon: <Zap size={20} />,         label: "Instant Results",            color: "#F43F5E" },
              { icon: <CheckCircle size={20} />, label: "Zero Entry Cost",            color: "#10B981" },
              { icon: <BookOpen size={20} />,    label: "Detailed Feedback",          color: "#F97316" },
            ].map((s, i) => (
              <motion.div key={i} className="stagger-card sch-item rounded-2xl px-5 py-[18px] flex items-center gap-[14px]" whileHover={{ x: 4 }}>
                <div style={{ color: s.color, flexShrink: 0 }}>{s.icon}</div>
                <span className="font-medium text-[0.95rem]" style={{ color: "rgba(255,255,255,0.75)", fontFamily: "'DM Sans',sans-serif" }}>{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     
    </div>
  );
}