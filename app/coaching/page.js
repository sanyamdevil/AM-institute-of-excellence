"use client";

import { motion } from "framer-motion";
import {
  BookOpen, GraduationCap, Target, CheckCircle,
  Star, Zap, Users, Award, Brain, Clock,
  Monitor, Wind, MessageCircle, BarChart2,
  RotateCcw, UserCheck, Globe, FlaskConical,
  MapPin, ArrowRight,
} from "lucide-react";

/* ─── DATA ─────────────────────────────────────── */
const PROGRAMS = [
  {
    badge: "SCHOOL",
    title: "Junior & Senior Grades",
    subtitle: "Class 6th – 12th",
    color: "#0EA5E9",
    accent: "rgba(14,165,233,0.15)",
    border: "rgba(14,165,233,0.3)",
    glow: "rgba(14,165,233,0.2)",
    icon: <BookOpen size={26} />,
    streams: [
      { label: "Commerce", icon: <BarChart2 size={14} /> },
      { label: "Science", icon: <FlaskConical size={14} /> },
      { label: "Humanities", icon: <Globe size={14} /> },
      { label: "Computer Science", icon: <Monitor size={14} /> },
    ],
  },
  {
    badge: "PROFESSIONAL",
    title: "Chartered & Secretarial",
    subtitle: "Foundation Courses",
    color: "#7C3AED",
    accent: "rgba(124,58,237,0.15)",
    border: "rgba(124,58,237,0.3)",
    glow: "rgba(124,58,237,0.2)",
    icon: <GraduationCap size={26} />,
    streams: [
      { label: "CA Foundation", icon: <Star size={14} /> },
      { label: "CS Foundation", icon: <Star size={14} /> },
      { label: "CMA Foundation", icon: <Star size={14} /> },
      { label: "CSEET", icon: <Star size={14} /> },
    ],
  },
  {
    badge: "COMPETITIVE",
    title: "Engineering & Medical",
    subtitle: "Entrance Exams",
    color: "#F43F5E",
    accent: "rgba(244,63,94,0.15)",
    border: "rgba(244,63,94,0.3)",
    glow: "rgba(244,63,94,0.2)",
    icon: <Target size={26} />,
    streams: [
      { label: "JEE Mains", icon: <Zap size={14} /> },
      { label: "JEE Advance", icon: <Zap size={14} /> },
      { label: "NEET", icon: <Zap size={14} /> },
      { label: "CUET", icon: <Zap size={14} /> },
    ],
  },
];

const WHY_CHOOSE = [
  { icon: <Award size={20} />, label: "Proven Expertise", color: "#F59E0B" },
  { icon: <UserCheck size={20} />, label: "Tailored Learning", color: "#0EA5E9" },
  { icon: <BookOpen size={20} />, label: "Comprehensive Curriculum", color: "#7C3AED" },
  { icon: <Users size={20} />, label: "Interactive Sessions", color: "#F43F5E" },
  { icon: <BarChart2 size={20} />, label: "Regular Assessments", color: "#10B981" },
];

const WHAT_WE_OFFER = [
  { icon: <Brain size={20} />, label: "In-Depth Subject Knowledge", color: "#F59E0B" },
  { icon: <Zap size={20} />, label: "Tips & Tricks for Exams", color: "#F43F5E" },
  { icon: <Clock size={20} />, label: "Time Management Strategies", color: "#0EA5E9" },
  { icon: <BarChart2 size={20} />, label: "Mock Tests", color: "#7C3AED" },
];

const FACILITIES = [
  { icon: <Monitor size={18} />, label: "Smart Class Technology", color: "#0EA5E9" },
  { icon: <Wind size={18} />, label: "Fully Air Conditioned Classes", color: "#7C3AED" },
  { icon: <MessageCircle size={18} />, label: "Free Career Counselling", color: "#10B981" },
  { icon: <RotateCcw size={18} />, label: "Revision Sessions", color: "#F59E0B" },
  { icon: <BarChart2 size={18} />, label: "Weekly & Monthly Test Series", color: "#F43F5E" },
  { icon: <CheckCircle size={18} />, label: "Test Analysis & Copy Checking", color: "#0EA5E9" },
  { icon: <Zap size={18} />, label: "Repetitive Rapid Revision", color: "#7C3AED" },
  { icon: <UserCheck size={18} />, label: "Individual Attention", color: "#F59E0B" },
  { icon: <Globe size={18} />, label: "Free Spoken English / Vedic Maths", color: "#10B981" },
  { icon: <Star size={18} />, label: "Demo Classes for 3 Days", color: "#F43F5E" },
];

/* ─── HELPERS ───────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
});

const SectionBadge = ({ label, color = "#F59E0B", bg = "rgba(245,158,11,0.1)", border = "rgba(245,158,11,0.25)" }) => (
  <motion.div {...fadeUp()} className="flex justify-center mb-4">
    <span
      className="inline-block rounded-full px-4 py-1 text-[11px] tracking-[0.16em] uppercase"
      style={{ background: bg, border: `1px solid ${border}`, color, fontFamily: "'DM Sans',sans-serif" }}
    >
      {label}
    </span>
  </motion.div>
);

/* ─── PAGE ──────────────────────────────────────── */
export default function CoachingPage() {
  return (
    <div
      className="overflow-x-hidden text-white"
      style={{ fontFamily: "'Syne', sans-serif", background: "#0B0B1A" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; }
        ::selection { background: #7C3AED; color: #fff; }

        .gradient-text {
          background: linear-gradient(135deg,#F59E0B 0%,#F43F5E 40%,#7C3AED 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .gradient-text-blue {
          background: linear-gradient(135deg,#0EA5E9 0%,#7C3AED 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Program card */
        .prog-card {
          background: linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01));
          border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(12px);
          transition: border-color 0.3s, transform 0.3s, box-shadow 0.3s;
        }
        .prog-card:hover { transform: translateY(-7px); }

        /* Pill chip */
        .stream-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          border-radius: 100px;
          padding: 5px 12px;
          font-size: 0.78rem;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          white-space: nowrap;
        }

        /* Feature card */
        .feat-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          transition: background 0.25s, border-color 0.25s, transform 0.25s;
        }
        .feat-card:hover {
          background: rgba(255,255,255,0.07);
          transform: translateY(-4px);
        }

        /* Facility list item */
        .fac-item {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          transition: background 0.2s, border-color 0.2s;
        }
        .fac-item:hover {
          background: rgba(124,58,237,0.1);
          border-color: rgba(124,58,237,0.25);
        }

        /* Enroll button */
        .enroll-btn {
          background: linear-gradient(135deg,#F59E0B,#F43F5E);
          border: none;
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 6px 28px rgba(244,63,94,0.4);
        }
        .enroll-btn:hover {
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 10px 36px rgba(244,63,94,0.6);
        }

        /* Divider line */
        .h-divider {
          height: 1px;
          background: linear-gradient(90deg,transparent,rgba(124,58,237,0.4),rgba(244,63,94,0.3),transparent);
        }

        /* Responsive: 2-col grid on sm+ for streams */
        @media (max-width: 480px) {
          .stream-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

      {/* ══════════════════════════════════════
          1. PROGRAMS
      ══════════════════════════════════════ */}
      <section id="programs" className="px-4 sm:px-6 py-20 sm:py-28" style={{ background: "#0B0B1A" }}>
        <div className="max-w-5xl mx-auto">
          <SectionBadge label="Our Programs" />

          <motion.h2 {...fadeUp(0.05)} className="text-center font-extrabold mb-3"
            style={{ fontSize: "clamp(2rem,4.5vw,3.2rem)", letterSpacing: "-0.02em" }}>
            What We <span className="gradient-text">Teach</span>
          </motion.h2>
          <motion.p {...fadeUp(0.1)} className="text-center mb-14"
            style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'DM Sans',sans-serif", fontSize: "clamp(0.9rem,2vw,1.05rem)" }}>
            Structured learning from school boards to professional certifications & entrance exams.
          </motion.p>

          <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))" }}>
            {PROGRAMS.map((prog, i) => (
              <motion.div
                key={i}
                className="prog-card rounded-2xl p-7"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                style={{ borderColor: prog.border }}
                whileHover={{ boxShadow: `0 16px 48px ${prog.glow}` }}
              >
                {/* Icon + badge row */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-[50px] h-[50px] rounded-[14px] flex items-center justify-center flex-shrink-0"
                    style={{ background: prog.accent, border: `1px solid ${prog.border}`, color: prog.color }}>
                    {prog.icon}
                  </div>
                  <span className="text-[10px] tracking-[0.15em] font-semibold rounded-full px-3 py-1"
                    style={{ background: prog.accent, color: prog.color, border: `1px solid ${prog.border}`, fontFamily: "'DM Sans',sans-serif" }}>
                    {prog.badge}
                  </span>
                </div>

                <h3 className="font-extrabold text-[1.2rem] text-white mb-1">{prog.title}</h3>
                <p className="mb-5 text-[0.85rem]" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans',sans-serif" }}>{prog.subtitle}</p>

                <div className="stream-grid grid gap-2" style={{ gridTemplateColumns: "1fr 1fr" }}>
                  {prog.streams.map((s, j) => (
                    <span key={j} className="stream-chip"
                      style={{ background: prog.accent, color: prog.color, border: `1px solid ${prog.border}` }}>
                      {s.icon} {s.label}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-divider" />

      {/* ══════════════════════════════════════
          2. ABOUT US (quotes)
      ══════════════════════════════════════ */}
      <section id="about" className="px-4 sm:px-6 py-20 sm:py-24"
        style={{ background: "linear-gradient(180deg,#0B0B1A 0%,#110D2E 100%)" }}>
        <div className="max-w-3xl mx-auto">
          <SectionBadge label="About Us" bg="rgba(14,165,233,0.1)" border="rgba(14,165,233,0.25)" color="#7DD3FC" />

          <motion.h2 {...fadeUp(0.05)} className="text-center font-extrabold mb-12"
            style={{ fontSize: "clamp(2rem,4vw,3rem)", letterSpacing: "-0.02em" }}>
            Who We <span className="gradient-text-blue">Are</span>
          </motion.h2>

          {/* Quote 1 – Director */}
          <motion.div {...fadeUp(0.1)}
            className="relative rounded-2xl px-7 sm:px-9 py-8 mb-6 overflow-hidden"
            style={{ background: "linear-gradient(135deg,rgba(124,58,237,0.15),rgba(244,63,94,0.08))", border: "1px solid rgba(124,58,237,0.25)" }}>
            <div className="absolute top-[-16px] right-4 text-[100px] opacity-[0.07] leading-none select-none" style={{ color: "#F59E0B" }}>"</div>
            <p className="italic leading-[1.8] text-[1rem] mb-3 relative z-10"
              style={{ color: "rgba(255,255,255,0.72)", fontFamily: "'DM Sans',sans-serif" }}>
              Ready to conquer your CA/CS/CMA journey and your boards? I'm here to guide your path to success — providing structured coaching, individual attention, and unwavering support every step of the way.
            </p>
            <p className="font-bold text-[0.9rem]" style={{ color: "#F59E0B" }}>— Anshul Mittal, Director &amp; Faculty of Commerce</p>
          </motion.div>

          {/* Quote 2 – Institute */}
          <motion.div {...fadeUp(0.15)}
            className="relative rounded-2xl px-7 sm:px-9 py-8 mb-6 overflow-hidden"
            style={{ background: "linear-gradient(135deg,rgba(14,165,233,0.1),rgba(124,58,237,0.08))", border: "1px solid rgba(14,165,233,0.22)" }}>
            <div className="absolute top-[-16px] right-4 text-[100px] opacity-[0.07] leading-none select-none" style={{ color: "#0EA5E9" }}>"</div>
            <p className="italic leading-[1.8] text-[1rem] mb-3 relative z-10"
              style={{ color: "rgba(255,255,255,0.72)", fontFamily: "'DM Sans',sans-serif" }}>
              AM Institute focuses on holistic growth and innovation. Join us to acquire the skills and support needed to excel academically and lead in a fast-paced world.
            </p>
            <p className="font-bold text-[0.9rem]" style={{ color: "#0EA5E9" }}>— AM Institute of Excellence</p>
          </motion.div>

          {/* Quote 3 – Technology */}
          <motion.div {...fadeUp(0.2)}
            className="relative rounded-2xl px-7 sm:px-9 py-8 overflow-hidden"
            style={{ background: "linear-gradient(135deg,rgba(245,158,11,0.1),rgba(244,63,94,0.07))", border: "1px solid rgba(245,158,11,0.22)" }}>
            <div className="absolute top-[-16px] right-4 text-[100px] opacity-[0.07] leading-none select-none" style={{ color: "#F59E0B" }}>"</div>
            <p className="italic leading-[1.8] text-[1rem] mb-3 relative z-10"
              style={{ color: "rgba(255,255,255,0.72)", fontFamily: "'DM Sans',sans-serif" }}>
              Unlock your future with technology! Master essential skills in Web Development, Data Analysis, and Coding to become a leader in this dynamic digital age.
            </p>
            <p className="font-bold text-[0.9rem]" style={{ color: "#F59E0B" }}>— AM Institute of Excellence</p>
          </motion.div>
        </div>
      </section>

      <div className="h-divider" />

      {/* ══════════════════════════════════════
          3. WHY CHOOSE US + WHAT WE OFFER
      ══════════════════════════════════════ */}
      <section className="px-4 sm:px-6 py-20 sm:py-28" style={{ background: "#0D0D20" }}>
        <div className="max-w-5xl mx-auto">

          {/* Why Choose Us */}
          <SectionBadge label="Why Choose Us?" bg="rgba(124,58,237,0.1)" border="rgba(124,58,237,0.25)" color="#C4B5FD" />
          <motion.h2 {...fadeUp(0.05)} className="text-center font-extrabold mb-10"
            style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", letterSpacing: "-0.02em" }}>
            Our <span className="gradient-text">Advantage</span>
          </motion.h2>

          <div className="grid gap-4 mb-20" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))" }}>
            {WHY_CHOOSE.map((item, i) => (
              <motion.div key={i}
                className="feat-card rounded-2xl p-5 flex items-center gap-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: i * 0.09 }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${item.color}18`, border: `1px solid ${item.color}40`, color: item.color }}>
                  {item.icon}
                </div>
                <span className="font-semibold text-[0.9rem]" style={{ color: "rgba(255,255,255,0.78)", fontFamily: "'DM Sans',sans-serif" }}>
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* What We Offer */}
          <SectionBadge label="What We Offer?" bg="rgba(244,63,94,0.1)" border="rgba(244,63,94,0.25)" color="#FDA4AF" />
          <motion.h2 {...fadeUp(0.05)} className="text-center font-extrabold mb-10"
            style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", letterSpacing: "-0.02em" }}>
            Inside Our <span className="gradient-text">Classroom</span>
          </motion.h2>

          <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))" }}>
            {WHAT_WE_OFFER.map((item, i) => (
              <motion.div key={i}
                className="feat-card rounded-2xl p-6 text-center flex flex-col items-center gap-3"
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: i * 0.1 }}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ background: `${item.color}18`, border: `1px solid ${item.color}40`, color: item.color }}>
                  {item.icon}
                </div>
                <span className="font-semibold text-[0.9rem]" style={{ color: "rgba(255,255,255,0.78)", fontFamily: "'DM Sans',sans-serif" }}>
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-divider" />

      {/* ══════════════════════════════════════
          4. FACILITIES
      ══════════════════════════════════════ */}
      <section className="px-4 sm:px-6 py-20 sm:py-28 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#110D2E 0%,#1A0B2E 50%,#0D1520 100%)" }}>
        {/* ambient glow */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%,rgba(124,58,237,0.1) 0%,transparent 70%)" }} />

        <div className="relative z-10 max-w-5xl mx-auto">
          <SectionBadge label="Facilities We Offer" bg="rgba(16,185,129,0.1)" border="rgba(16,185,129,0.25)" color="#6EE7B7" />
          <motion.h2 {...fadeUp(0.05)} className="text-center font-extrabold mb-12"
            style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", letterSpacing: "-0.02em" }}>
            Everything You <span className="gradient-text">Need</span>
          </motion.h2>

          <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))" }}>
            {FACILITIES.map((f, i) => (
              <motion.div key={i}
                className="fac-item rounded-xl px-5 py-4 flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: `${f.color}18`, border: `1px solid ${f.color}40`, color: f.color }}>
                  {f.icon}
                </div>
                <span className="text-[0.9rem] font-medium" style={{ color: "rgba(255,255,255,0.72)", fontFamily: "'DM Sans',sans-serif" }}>
                  {f.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-divider" />

      {/* ══════════════════════════════════════
          5. ENROLL CTA
      ══════════════════════════════════════ */}
      <section className="px-4 sm:px-6 py-20 sm:py-28" style={{ background: "#0B0B1A" }}>
        <div className="max-w-2xl mx-auto text-center">
          <motion.div {...fadeUp()}
            className="relative rounded-3xl px-8 sm:px-14 py-12 overflow-hidden"
            style={{ background: "linear-gradient(135deg,rgba(124,58,237,0.18),rgba(244,63,94,0.12))", border: "1px solid rgba(124,58,237,0.28)" }}>
            {/* decorative orbs */}
            <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle,rgba(124,58,237,0.3) 0%,transparent 70%)", filter: "blur(28px)" }} />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle,rgba(244,63,94,0.25) 0%,transparent 70%)", filter: "blur(28px)" }} />

            <motion.div {...fadeUp(0.05)}
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-[12px]"
              style={{ background: "rgba(245,158,11,0.15)", border: "1px solid rgba(245,158,11,0.35)", color: "#FCD34D", fontFamily: "'DM Sans',sans-serif" }}>
              <Star size={12} fill="#FCD34D" /> Limited Seats Available
            </motion.div>

            <motion.h2 {...fadeUp(0.1)} className="font-extrabold mb-4"
              style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", letterSpacing: "-0.02em" }}>
              Ready to <span className="gradient-text">Begin?</span>
            </motion.h2>

            <motion.p {...fadeUp(0.15)} className="mb-8 leading-[1.8]"
              style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'DM Sans',sans-serif", fontSize: "clamp(0.9rem,1.8vw,1.05rem)" }}>
              Join AM Institute of Excellence and take the first step towards achieving your academic and professional goals.
            </motion.p>

            <motion.div {...fadeUp(0.2)} className="flex flex-wrap gap-3 justify-center mb-8">
              <a href="/contact"
                className="enroll-btn px-9 py-3 rounded-full text-[15px] text-white flex items-center gap-2 no-underline">
                Enroll Now <ArrowRight size={16} />
              </a>
              <a href="tel:+919817717665"
                className="px-8 py-3 rounded-full text-[15px] font-semibold text-white flex items-center gap-2 no-underline"
                style={{ border: "1px solid rgba(255,255,255,0.18)", background: "rgba(255,255,255,0.04)", fontFamily: "'Syne',sans-serif" }}>
                +91 98177 17665
              </a>
            </motion.div>

            <motion.div {...fadeUp(0.25)}
              className="inline-flex items-center gap-2 text-[0.85rem]"
              style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans',sans-serif" }}>
              <MapPin size={14} style={{ color: "#F59E0B" }} />
              SCF 35, Sec 13, Kurukshetra
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}