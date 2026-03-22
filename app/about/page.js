"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Award, BookOpen, Brain, CheckCircle, ChevronRight, Clock,
  GraduationCap, Lightbulb, MapPin, Mic, Monitor, Quote,
  RefreshCw, Star, Target, TrendingUp, Users, Wind, Zap,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const ctxRef = useRef(null);

  useEffect(() => {
    ctxRef.current = gsap.context(() => {
      /* Hero entrance */
      const tl = gsap.timeline();
      tl.from(".ab-badge",       { y: -30, opacity: 0, duration: 0.6, ease: "back.out(1.7)" })
        .from(".ab-title span",  { y: 70, opacity: 0, stagger: 0.08, duration: 0.85, ease: "power3.out" }, "-=0.2")
        .from(".ab-sub",         { y: 30, opacity: 0, duration: 0.6, ease: "power2.out" }, "-=0.3")
        .from(".ab-cta",         { scale: 0.85, opacity: 0, duration: 0.5, ease: "back.out(1.5)" }, "-=0.2");

      /* Floating orbs */
      gsap.to(".orb-a", { y: -22, x:  12, duration: 3.8, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".orb-b", { y:  28, x: -16, duration: 4.4, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".orb-c", { y: -18, x:  22, duration: 5.2, repeat: -1, yoyo: true, ease: "sine.inOut" });

      /* Scroll reveals */
      gsap.utils.toArray(".reveal-up").forEach((el) => {
        gsap.from(el, {
          y: 55, opacity: 0, duration: 0.85, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 87%" },
        });
      });

      gsap.utils.toArray(".stagger-cards").forEach((container) => {
        const cards = container.querySelectorAll(".stagger-card");
        gsap.from(cards, {
          y: 65, opacity: 0, stagger: 0.13, duration: 0.75, ease: "power3.out",
          scrollTrigger: { trigger: container, start: "top 82%" },
        });
      });


    });

    return () => ctxRef.current?.revert();
  }, []);

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, -90]);

  return (
    <div
      className="overflow-x-hidden text-white"
      style={{ fontFamily: "'Syne', sans-serif", background: "#0B0B1A" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; }
        ::selection { background: #7C3AED; color: #fff; }

        .gradient-text {
          background: linear-gradient(135deg, #F59E0B 0%, #F43F5E 45%, #7C3AED 100%);
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
        .gradient-text-gold {
          background: linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        @keyframes spin-slow { to { transform: translate(-50%,-50%) rotate(360deg); } }
        @keyframes spin-rev  { to { transform: translate(-50%,-50%) rotate(-360deg); } }
        .spin-slow { animation: spin-slow 20s linear infinite; }
        .spin-rev  { animation: spin-rev  32s linear infinite; }

        @keyframes pulse-ring {
          0%   { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.35); opacity: 0; }
        }

        .feature-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%);
          border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(12px);
          transition: border-color 0.3s, transform 0.3s, box-shadow 0.3s;
        }
        .feature-card:hover {
          border-color: rgba(124,58,237,0.45);
          transform: translateY(-7px);
          box-shadow: 0 20px 60px rgba(124,58,237,0.15);
        }

        .offer-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          transition: background 0.25s, border-color 0.25s, transform 0.25s;
        }
        .offer-card:hover {
          background: rgba(14,165,233,0.08);
          border-color: rgba(14,165,233,0.3);
          transform: translateX(5px);
        }

        .facility-pill {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          transition: background 0.25s, border-color 0.25s, transform 0.2s;
        }
        .facility-pill:hover {
          background: rgba(245,158,11,0.1);
          border-color: rgba(245,158,11,0.35);
          transform: scale(1.03);
        }

        .quote-card {
          background: linear-gradient(135deg, rgba(124,58,237,0.12), rgba(244,63,94,0.07));
          border: 1px solid rgba(124,58,237,0.22);
          transition: transform 0.3s;
        }
        .quote-card:hover { transform: scale(1.01); }

        .section-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(124,58,237,0.4), rgba(244,63,94,0.4), transparent);
        }

        .address-card {
          background: linear-gradient(135deg, rgba(16,185,129,0.1), rgba(14,165,233,0.06));
          border: 1px solid rgba(16,185,129,0.25);
        }

        .enroll-btn {
          background: linear-gradient(135deg, #F59E0B, #F43F5E);
          box-shadow: 0 6px 28px rgba(244,63,94,0.45);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .enroll-btn:hover {
          transform: translateY(-3px) scale(1.04);
          box-shadow: 0 12px 40px rgba(244,63,94,0.65);
        }
      `}</style>

      {/* ── HERO ── */}
      <section
        id="about-hero"
        className="relative flex flex-col items-center justify-center min-h-[72vh] px-6 pt-36 pb-16 overflow-hidden"
      >
        {/* Noise texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }}
        />
        {/* Orbs */}
        <div className="orb-a absolute top-[12%] left-[6%] w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.32) 0%, transparent 70%)", filter: "blur(48px)" }} />
        <div className="orb-b absolute bottom-[10%] right-[5%] w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(244,63,94,0.28) 0%, transparent 70%)", filter: "blur(48px)" }} />
        <div className="orb-c absolute top-[45%] right-[20%] w-56 h-56 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(245,158,11,0.18) 0%, transparent 70%)", filter: "blur(40px)" }} />
        {/* Spinning rings */}
        <div className="spin-slow absolute w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ top: "50%", left: "50%", border: "1px solid rgba(124,58,237,0.07)" }} />
        <div className="spin-rev absolute w-[540px] h-[540px] rounded-full pointer-events-none"
          style={{ top: "50%", left: "50%", border: "1px dashed rgba(245,158,11,0.06)" }} />

        <motion.div style={{ y: heroY, position: "relative", zIndex: 1, textAlign: "center", maxWidth: 820 }}>
          <div
            className="ab-badge inline-flex items-center gap-2 rounded-full px-5 py-1.5 mb-7 text-[13px]"
            style={{ background: "rgba(14,165,233,0.12)", border: "1px solid rgba(14,165,233,0.3)", color: "#7DD3FC", fontFamily: "'DM Sans',sans-serif" }}
          >
            <Star size={13} fill="#7DD3FC" />
            Premier Coaching Institute · Kurukshetra
          </div>

          <h1
            className="ab-title font-extrabold leading-[1.05] mb-5"
            style={{ fontSize: "clamp(2.4rem,6vw,5rem)", letterSpacing: "-0.02em" }}
          >
            {"AM Institute of".split(" ").map((w, i) => (
              <span key={i} className="inline-block mr-1">{w} </span>
            ))}
            <span className="gradient-text inline-block">Excellence</span>
          </h1>

          <p
            className="ab-sub font-semibold italic mb-4"
            style={{ fontSize: "clamp(1rem,2.2vw,1.35rem)", color: "#F59E0B", letterSpacing: "0.04em" }}
          >
            "Give Wings to Your Dreams"
          </p>

          <p
            className="ab-sub mx-auto leading-[1.75] mb-8"
            style={{ fontSize: "clamp(0.9rem,1.7vw,1.05rem)", color: "rgba(255,255,255,0.52)", maxWidth: 600, fontFamily: "'DM Sans',sans-serif" }}
          >
            Holistic growth, innovation, and excellence — empowering every student with the skills,
            support, and mindset to lead in a fast-paced world.
          </p>

          <div className="ab-cta flex flex-wrap gap-3 justify-center">
            <a
              href="/contact"
              className="enroll-btn px-9 py-3 rounded-full font-bold text-[15px] text-white border-0 cursor-pointer"
              style={{ fontFamily: "inherit", textDecoration: "none", display: "inline-block" }}
            >
              Enroll Now
            </a>
            <a
              href="#why-choose"
              className="px-9 py-3 rounded-full font-semibold text-[15px] text-white cursor-pointer"
              style={{ border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.04)", fontFamily: "inherit", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6, transition: "border-color 0.2s" }}
            >
              Discover More <ChevronRight size={16} />
            </a>
          </div>
        </motion.div>
      </section>

      <div className="section-divider" />

      {/* ── WHY CHOOSE US ── */}
      <section
        id="why-choose"
        className="px-6 py-24"
        style={{ background: "linear-gradient(180deg,#0D0D20 0%,#110D2E 100%)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div
              className="reveal-up inline-block rounded-full px-4 py-1 text-xs mb-5"
              style={{ background: "rgba(124,58,237,0.12)", border: "1px solid rgba(124,58,237,0.28)", color: "#C4B5FD", fontFamily: "'DM Sans',sans-serif" }}
            >
              OUR EDGE
            </div>
            <h2 className="reveal-up font-extrabold" style={{ fontSize: "clamp(1.9rem,3.8vw,2.9rem)", letterSpacing: "-0.02em" }}>
              Why Choose <span className="gradient-text">Us?</span>
            </h2>
            <p className="reveal-up mt-4 mx-auto" style={{ color: "rgba(255,255,255,0.48)", maxWidth: 520, fontFamily: "'DM Sans',sans-serif", lineHeight: 1.75 }}>
              We don't just teach — we transform. Here's what sets AM Institute apart from the rest.
            </p>
          </div>

          <div className="stagger-cards grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))" }}>
            {[
              {
                icon: <Award size={26} />, color: "#F59E0B", bg: "rgba(245,158,11,0.12)", border: "rgba(245,158,11,0.3)",
                title: "Proven Expertise",
                desc: "Years of experience delivering results. Our faculty brings deep subject mastery and a track record of student success across boards and competitive exams.",
              },
              {
                icon: <Target size={26} />, color: "#F43F5E", bg: "rgba(244,63,94,0.12)", border: "rgba(244,63,94,0.3)",
                title: "Tailored Learning",
                desc: "Every student learns differently. We craft personalized study plans and give individual attention to ensure each child reaches their full potential.",
              },
              {
                icon: <BookOpen size={26} />, color: "#0EA5E9", bg: "rgba(14,165,233,0.12)", border: "rgba(14,165,233,0.3)",
                title: "Comprehensive Curriculum",
                desc: "From school boards to CA/CS/CMA and JEE/NEET — our curriculum covers it all, structured to build conceptual clarity from ground up.",
              },
              {
                icon: <Users size={26} />, color: "#7C3AED", bg: "rgba(124,58,237,0.12)", border: "rgba(124,58,237,0.3)",
                title: "Interactive Sessions",
                desc: "Learning is a two-way street. Engaging discussions, real-world examples, and live problem-solving make every class memorable and effective.",
              },
              {
                icon: <TrendingUp size={26} />, color: "#10B981", bg: "rgba(16,185,129,0.12)", border: "rgba(16,185,129,0.3)",
                title: "Regular Assessments",
                desc: "Continuous evaluation through weekly tests, monthly exams, and detailed analysis helps track progress and identify areas for improvement early.",
              },
            ].map((c, i) => (
              <motion.div
                key={i}
                className="stagger-card feature-card rounded-2xl p-7 cursor-default"
                whileHover={{ scale: 1.02 }}
              >
                <div
                  className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center mb-5"
                  style={{ background: c.bg, border: `1px solid ${c.border}`, color: c.color }}
                >
                  {c.icon}
                </div>
                <h3 className="font-extrabold text-[1.1rem] mb-3 text-white">{c.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.52)", fontSize: "0.88rem", lineHeight: 1.72, fontFamily: "'DM Sans',sans-serif" }}>{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── WHAT WE OFFER ── */}
      <section
        id="what-we-offer"
        className="px-6 py-24"
        style={{ background: "#0D0D20" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div
              className="reveal-up inline-block rounded-full px-4 py-1 text-xs mb-5"
              style={{ background: "rgba(14,165,233,0.1)", border: "1px solid rgba(14,165,233,0.25)", color: "#7DD3FC", fontFamily: "'DM Sans',sans-serif" }}
            >
              LEARNING OUTCOMES
            </div>
            <h2 className="reveal-up font-extrabold" style={{ fontSize: "clamp(1.9rem,3.8vw,2.9rem)", letterSpacing: "-0.02em" }}>
              What We <span className="gradient-text-blue">Offer?</span>
            </h2>
            <p className="reveal-up mt-4 mx-auto" style={{ color: "rgba(255,255,255,0.48)", maxWidth: 500, fontFamily: "'DM Sans',sans-serif", lineHeight: 1.75 }}>
              Beyond textbooks — real skills, smart strategies, and the confidence to ace any challenge.
            </p>
          </div>

          <div className="stagger-cards grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))" }}>
            {[
              {
                icon: <Brain size={22} />, color: "#0EA5E9",
                title: "In-Depth Subject Knowledge",
                desc: "We go beyond surface-level teaching. Every concept is explained from its roots, building a strong foundation that lasts well beyond exams.",
              },
              {
                icon: <Lightbulb size={22} />, color: "#F59E0B",
                title: "Tips & Tricks for Exams",
                desc: "Smart shortcuts, mnemonics, and exam-specific strategies that save time and maximize accuracy under pressure.",
              },
              {
                icon: <Clock size={22} />, color: "#7C3AED",
                title: "Time Management Strategies",
                desc: "Master the art of studying smart. We teach proven techniques to allocate time across subjects and tackle papers efficiently.",
              },
              {
                icon: <CheckCircle size={22} />, color: "#F43F5E",
                title: "Mock Tests & Practice",
                desc: "Simulated exam conditions with full-length mock tests, instant feedback, and detailed copy checking to sharpen your performance.",
              },
            ].map((o, i) => (
              <motion.div
                key={i}
                className="stagger-card offer-card rounded-2xl px-6 py-6 flex gap-5"
                whileHover={{ x: 5 }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex-shrink-0 flex items-center justify-center mt-0.5"
                  style={{ background: `${o.color}18`, border: `1px solid ${o.color}40`, color: o.color }}
                >
                  {o.icon}
                </div>
                <div>
                  <h4 className="font-bold text-[1rem] mb-2 text-white">{o.title}</h4>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.86rem", lineHeight: 1.7, fontFamily: "'DM Sans',sans-serif" }}>{o.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── FACILITIES ── */}
      <section
        className="relative px-6 py-24 overflow-hidden"
        style={{ background: "linear-gradient(180deg,#0B0B1A 0%,#110D2E 60%,#0B0B1A 100%)" }}
      >
        <div
          className="absolute top-1/2 left-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ transform: "translate(-50%,-50%)", background: "radial-gradient(circle,rgba(124,58,237,0.1) 0%,transparent 65%)" }}
        />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div
              className="reveal-up inline-block rounded-full px-4 py-1 text-xs mb-5"
              style={{ background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.28)", color: "#FCD34D", fontFamily: "'DM Sans',sans-serif" }}
            >
              INFRASTRUCTURE & SERVICES
            </div>
            <h2 className="reveal-up font-extrabold" style={{ fontSize: "clamp(1.9rem,3.8vw,2.9rem)", letterSpacing: "-0.02em" }}>
              Facilities We <span className="gradient-text">Offer</span>
            </h2>
            <p className="reveal-up mt-4 mx-auto" style={{ color: "rgba(255,255,255,0.48)", maxWidth: 520, fontFamily: "'DM Sans',sans-serif", lineHeight: 1.75 }}>
              State-of-the-art infrastructure combined with caring, personalised support — because your environment shapes your success.
            </p>
          </div>

          {/* Featured large cards */}
          <div className="stagger-cards grid gap-6 mb-8" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))" }}>
            {[
              {
                icon: <Monitor size={32} />, color: "#0EA5E9", bg: "rgba(14,165,233,0.12)", border: "rgba(14,165,233,0.3)",
                title: "Smart Class Technology",
                desc: "Cutting-edge digital boards, multimedia content, and visual learning tools that make even complex topics intuitive and engaging.",
              },
              {
                icon: <Wind size={32} />, color: "#7C3AED", bg: "rgba(124,58,237,0.12)", border: "rgba(124,58,237,0.3)",
                title: "Fully Air-Conditioned Classes",
                desc: "A comfortable, distraction-free environment that helps students stay focused, alert, and ready to absorb knowledge throughout the session.",
              },
              {
                icon: <GraduationCap size={32} />, color: "#F59E0B", bg: "rgba(245,158,11,0.12)", border: "rgba(245,158,11,0.3)",
                title: "Free Career Counselling",
                desc: "Expert guidance to help students identify their strengths, explore career paths, and make informed decisions about their academic future.",
              },
            ].map((f, i) => (
              <motion.div
                key={i}
                className="stagger-card feature-card rounded-2xl p-8"
                whileHover={{ scale: 1.02 }}
              >
                <div
                  className="w-[58px] h-[58px] rounded-[16px] flex items-center justify-center mb-5"
                  style={{ background: f.bg, border: `1px solid ${f.border}`, color: f.color }}
                >
                  {f.icon}
                </div>
                <h3 className="font-extrabold text-[1.15rem] mb-3 text-white">{f.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.88rem", lineHeight: 1.75, fontFamily: "'DM Sans',sans-serif" }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Pill grid for remaining facilities */}
          <div className="stagger-cards flex flex-wrap gap-3 justify-center">
            {[
              { icon: <RefreshCw size={17} />, label: "Revision Sessions", color: "#F43F5E" },
              { icon: <TrendingUp size={17} />, label: "Weekly & Monthly Test Series", color: "#0EA5E9" },
              { icon: <CheckCircle size={17} />, label: "Test Analysis & Copy Checking", color: "#10B981" },
              { icon: <Zap size={17} />, label: "Repetitive Rapid Revision", color: "#F59E0B" },
              { icon: <Users size={17} />, label: "Individual Attention", color: "#7C3AED" },
              { icon: <Mic size={17} />, label: "Free Spoken English Classes", color: "#F97316" },
              { icon: <Brain size={17} />, label: "Free Vedic Maths Classes", color: "#8B5CF6" },
            ].map((p, i) => (
              <motion.div
                key={i}
                className="stagger-card facility-pill flex items-center gap-2.5 rounded-full px-5 py-2.5"
                whileHover={{ scale: 1.05 }}
              >
                <span style={{ color: p.color }}>{p.icon}</span>
                <span className="font-semibold text-[0.88rem]" style={{ color: "rgba(255,255,255,0.72)", fontFamily: "'DM Sans',sans-serif" }}>{p.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── DIRECTOR QUOTES ── */}
      <section
        className="relative px-6 py-24 overflow-hidden"
        style={{ background: "#0D0D20" }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <div
              className="reveal-up inline-block rounded-full px-4 py-1 text-xs mb-5"
              style={{ background: "rgba(244,63,94,0.1)", border: "1px solid rgba(244,63,94,0.28)", color: "#FDA4AF", fontFamily: "'DM Sans',sans-serif" }}
            >
              VOICES FROM AM INSTITUTE
            </div>
            <h2 className="reveal-up font-extrabold" style={{ fontSize: "clamp(1.9rem,3.8vw,2.9rem)", letterSpacing: "-0.02em" }}>
              Words That <span className="gradient-text">Inspire</span>
            </h2>
          </div>

          <div className="stagger-cards grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))" }}>
            {[
              {
                text: "Ready to conquer your CA/CS/CMA journey and your boards? I'm Anshul Mittal (Director), a CA Aspirant — here to guide your journey to success with structured coaching, individual attention, and unwavering support every step of the way.",
                author: "Anshul Mittal",
                role: "Director & CA Aspirant",
                color: "#F59E0B",
                glow: "rgba(245,158,11,0.18)",
              },
              {
                text: "AM Institute focuses on holistic growth and innovation. Join us to acquire the skills and support needed to excel academically and lead in a fast-paced world — because your success is our mission.",
                author: "AM Institute",
                role: "Our Mission Statement",
                color: "#7C3AED",
                glow: "rgba(124,58,237,0.18)",
              },
              {
                text: "Unlock your future with technology! Master essential skills in web development, data analysis, and coding to become a leader in this dynamic digital age. The future belongs to those who learn.",
                author: "Digital Excellence",
                role: "Technology Programs",
                color: "#0EA5E9",
                glow: "rgba(14,165,233,0.18)",
              },
            ].map((q, i) => (
              <motion.div
                key={i}
                className="stagger-card quote-card rounded-2xl p-8 relative overflow-hidden"
                whileHover={{ scale: 1.015 }}
                style={{ boxShadow: `0 0 40px ${q.glow}` }}
              >
                <Quote
                  size={64}
                  className="absolute top-4 right-4 opacity-[0.06]"
                  style={{ color: q.color }}
                />
                <div className="w-8 h-1 rounded-full mb-5" style={{ background: q.color }} />
                <p className="italic leading-[1.8] text-[0.97rem] mb-5" style={{ color: "rgba(255,255,255,0.68)", fontFamily: "'DM Sans',sans-serif" }}>
                  "{q.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-[0.8rem]"
                    style={{ background: `${q.color}22`, border: `1px solid ${q.color}55`, color: q.color }}
                  >
                    {q.author[0]}
                  </div>
                  <div>
                    <div className="font-bold text-[0.9rem]" style={{ color: q.color }}>{q.author}</div>
                    <div style={{ color: "rgba(255,255,255,0.38)", fontSize: "0.78rem", fontFamily: "'DM Sans',sans-serif" }}>{q.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── ENROLL CTA + ADDRESS ── */}
      <section
        className="relative px-6 py-24 overflow-hidden"
        style={{ background: "linear-gradient(135deg,#110D2E 0%,#1A0B2E 50%,#0D1520 100%)" }}
      >
        <div
          className="absolute top-1/2 left-1/2 w-[640px] h-[640px] rounded-full pointer-events-none"
          style={{ transform: "translate(-50%,-50%)", background: "radial-gradient(circle,rgba(124,58,237,0.14) 0%,transparent 60%)" }}
        />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div
            className="reveal-up inline-block rounded-full px-4 py-1 text-xs mb-6"
            style={{ background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.3)", color: "#FCD34D", fontFamily: "'DM Sans',sans-serif" }}
          >
            START YOUR JOURNEY
          </div>

          <h2 className="reveal-up font-extrabold mb-4" style={{ fontSize: "clamp(2rem,4.5vw,3.4rem)", letterSpacing: "-0.02em" }}>
            Ready to <span className="gradient-text">Excel?</span>
          </h2>

          <p className="reveal-up mb-10 mx-auto leading-[1.75]" style={{ color: "rgba(255,255,255,0.52)", maxWidth: 540, fontFamily: "'DM Sans',sans-serif", fontSize: "1.02rem" }}>
            Take the first step towards academic excellence. Join hundreds of students who have already transformed their futures with AM Institute of Excellence.
          </p>

          <motion.a
            href="/contact"
            className="enroll-btn reveal-up px-10 py-4 rounded-full font-bold text-[16px] text-white border-0 cursor-pointer mb-14"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            style={{ fontFamily: "inherit", textDecoration: "none", display: "inline-block" }}
          >
            Enroll Now — It's Free to Start!
          </motion.a>

          {/* Address card */}
          <motion.div
            className="reveal-up address-card rounded-2xl px-8 py-6 inline-flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            whileHover={{ scale: 1.02 }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.35)", color: "#10B981" }}
            >
              <MapPin size={22} />
            </div>
            <div className="text-left">
              <div className="font-bold text-[1rem] text-white mb-0.5">Visit Us</div>
              <div style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'DM Sans',sans-serif", fontSize: "0.9rem" }}>
                SCF 35, Sector 13, Kurukshetra, Haryana
              </div>
              <div className="font-semibold text-[0.82rem] mt-1" style={{ color: "#10B981" }}>
                AM Institute of Excellence
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}