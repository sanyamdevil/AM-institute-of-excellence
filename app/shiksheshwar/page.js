"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Award, Star, Zap, CheckCircle, BookOpen, Users,
  Phone, Mail, ArrowRight, Sparkles, Trophy,
  GraduationCap, Target, Flame, Send, User,
  MapPin, MessageSquare,
} from "lucide-react";

const EDUCATION_OPTIONS = [
  "Class 9th",
  "Class 10th",
  "Class 11th",
  "Class 12th",
  "12th Passout",
];

export default function ShiksheshwarPage() {
  const heroRef = useRef(null);

  /* ── Form state ── */
  const [form, setForm] = useState({ name: "", phone: "", education: "", email: "", address: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = () => {
    if (!form.name || !form.phone || !form.education) return;
    const msg =
      `*Shiksheshwar 2.0 Registration — AM Institute*%0A%0A` +
      `👤 *Name:* ${encodeURIComponent(form.name)}%0A` +
      `📞 *Phone:* ${encodeURIComponent(form.phone)}%0A` +
      `🎓 *Class:* ${encodeURIComponent(form.education)}%0A` +
      `📧 *Email:* ${encodeURIComponent(form.email || "Not provided")}%0A` +
      `🏠 *Address:* ${encodeURIComponent(form.address || "Not provided")}%0A` +
      `💬 *Message:* ${encodeURIComponent(form.message || "No message")}`;
    window.open(`https://wa.me/919817717665?text=${msg}`, "_blank");
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", phone: "", education: "", email: "", address: "", message: "" });
    }, 4000);
  };

  const isValid = form.name && form.phone && form.education;

  useEffect(() => {
    const els = document.querySelectorAll(".fade-in-up");
    els.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(40px)";
      setTimeout(() => {
        el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 100 + i * 120);
    });
  }, []);

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, -60]);

  const advantages = [
    { icon: <Trophy size={22} />, text: "Whole Year Course at just ₹1", sub: "For Top 10 Students", color: "#F59E0B", glow: "rgba(245,158,11,0.2)" },
    { icon: <Award size={22} />, text: "Up to 80% Scholarship*", sub: "Merit-based awards", color: "#F43F5E", glow: "rgba(244,63,94,0.2)" },
    { icon: <Target size={22} />, text: "Know Your Potential", sub: "Expert assessment", color: "#7C3AED", glow: "rgba(124,58,237,0.2)" },
    { icon: <Zap size={22} />, text: "Instant Results", sub: "Same day announcement", color: "#0EA5E9", glow: "rgba(14,165,233,0.2)" },
    { icon: <CheckCircle size={22} />, text: "Zero Entry Cost", sub: "Free to participate", color: "#10B981", glow: "rgba(16,185,129,0.2)" },
    { icon: <BookOpen size={22} />, text: "Detailed Feedback", sub: "Personalised insights", color: "#F97316", glow: "rgba(249,115,22,0.2)" },
  ];

  const classes = ["Class 9th", "Class 10th", "Class 11th", "Class 12th", "12th Passouts"];

  const stats = [
    { val: "11",  label: "Glorious Years"     },
    { val: "₹1",  label: "Top 10 Course Fee"  },
    { val: "80%", label: "Max Scholarship"     },
    { val: "5+",  label: "Student Categories"  },
  ];

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
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .gradient-text-gold {
          background: linear-gradient(135deg, #F59E0B 0%, #FBBF24 50%, #F97316 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .hindi-badge {
          background: linear-gradient(135deg, rgba(124,58,237,0.3), rgba(244,63,94,0.2));
          border: 1px solid rgba(124,58,237,0.45);
          backdrop-filter: blur(12px);
        }
        @keyframes spin-slow { to { transform: translate(-50%,-50%) rotate(360deg); } }
        @keyframes spin-rev  { to { transform: translate(-50%,-50%) rotate(-360deg); } }
        .spin-slow { animation: spin-slow 18s linear infinite; }
        .spin-rev  { animation: spin-rev  26s linear infinite; }

        @keyframes pulse-ring {
          0%,100% { opacity:0.3; transform:scale(1); }
          50%      { opacity:0.7; transform:scale(1.04); }
        }
        .pulse-ring { animation: pulse-ring 3s ease-in-out infinite; }

        @keyframes float-orb {
          0%,100% { transform: translateY(0) translateX(0); }
          33%      { transform: translateY(-18px) translateX(8px); }
          66%      { transform: translateY(12px) translateX(-10px); }
        }
        .orb-float  { animation: float-orb 5s ease-in-out infinite; }
        .orb-float-2{ animation: float-orb 7s ease-in-out infinite reverse; }

        .adv-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          backdrop-filter: blur(12px);
          transition: all 0.3s ease;
        }
        .adv-card:hover { background: rgba(255,255,255,0.06); border-color: rgba(124,58,237,0.35); transform: translateY(-5px); }

        .class-pill {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          transition: all 0.25s;
        }
        .class-pill:hover { background: rgba(124,58,237,0.18); border-color: rgba(124,58,237,0.5); transform: scale(1.05); }

        .cta-btn {
          background: linear-gradient(135deg, #F59E0B, #F43F5E);
          box-shadow: 0 4px 24px rgba(244,63,94,0.45);
          transition: transform 0.2s, box-shadow 0.2s;
          border: none; cursor: pointer;
          font-family: 'Syne', sans-serif; font-weight: 700; color: white;
        }
        .cta-btn:hover { transform: translateY(-2px) scale(1.03); box-shadow: 0 8px 36px rgba(244,63,94,0.65); }

        .stat-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); }
        .section-label { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); font-family: 'DM Sans', sans-serif; }
        .shine-divider { height: 1px; background: linear-gradient(90deg, transparent, rgba(124,58,237,0.6), rgba(244,63,94,0.5), rgba(245,158,11,0.4), transparent); }

        /* ── Registration form styles ── */
        .reg-input {
          width: 100%;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 14px;
          padding: 14px 16px 14px 46px;
          color: #fff;
          font-size: 0.95rem;
          font-family: 'DM Sans', sans-serif;
          outline: none;
          transition: border-color 0.25s, background 0.25s, box-shadow 0.25s;
          -webkit-appearance: none; appearance: none;
        }
        .reg-input::placeholder { color: rgba(255,255,255,0.25); }
        .reg-input:focus {
          border-color: rgba(124,58,237,0.55);
          background: rgba(124,58,237,0.05);
          box-shadow: 0 0 0 3px rgba(124,58,237,0.12);
        }
        .reg-input option { background: #1a1a2e; color: #fff; }
        textarea.reg-input { resize: none; padding-top: 14px; line-height: 1.6; }

        .submit-btn {
          width: 100%; padding: 15px; border-radius: 14px; border: none;
          font-family: 'Syne', sans-serif; font-weight: 700; font-size: 1rem;
          color: #fff; display: flex; align-items: center; justify-content: center; gap: 10px;
          transition: transform 0.2s, box-shadow 0.2s; cursor: pointer;
        }
        .submit-btn:active { transform: scale(0.98) !important; }

        @media (max-width: 640px) {
          .hero-title-size { font-size: 2.2rem !important; }
          .hindi-text-size { font-size: 1.6rem !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .adv-grid { grid-template-columns: 1fr !important; }
          .spin-slow, .spin-rev { display: none !important; }
        }
        * { -webkit-tap-highlight-color: transparent; }
      `}</style>

      {/* ══════════════════ HERO ══════════════════ */}
      <section
        id="shiksheshwar"
        ref={heroRef}
        className="relative flex flex-col items-center justify-center min-h-screen px-5 pt-24 pb-20 overflow-hidden text-center"
      >
        <div className="orb-float absolute top-[8%] left-[5%] w-72 h-72 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(124,58,237,0.35) 0%,transparent 70%)", filter: "blur(48px)" }} />
        <div className="orb-float-2 absolute bottom-[10%] right-[4%] w-64 h-64 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(244,63,94,0.3) 0%,transparent 70%)", filter: "blur(48px)" }} />
        <div className="orb-float absolute top-[45%] right-[20%] w-40 h-40 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(245,158,11,0.22) 0%,transparent 70%)", filter: "blur(36px)" }} />

        <div className="spin-slow absolute w-[640px] h-[640px] rounded-full pointer-events-none"
          style={{ top: "50%", left: "50%", border: "1px solid rgba(124,58,237,0.09)" }} />
        <div className="spin-rev absolute w-[490px] h-[490px] rounded-full pointer-events-none"
          style={{ top: "50%", left: "50%", border: "1px dashed rgba(245,158,11,0.08)" }} />
        <div className="pulse-ring absolute w-[360px] h-[360px] rounded-full pointer-events-none"
          style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)", border: "1px solid rgba(244,63,94,0.12)" }} />

        <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />

        <motion.div style={{ y: heroY, position: "relative", zIndex: 1, maxWidth: 780, width: "100%" }}>
          <div className="fade-in-up inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5 text-[12px]"
            style={{ background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.35)", color: "#FCD34D", fontFamily: "'DM Sans',sans-serif" }}>
            <Flame size={13} fill="#FCD34D" />
            Celebrating 11 Glorious Years of Excellence
          </div>

          <h1 className="fade-in-up hero-title-size font-extrabold leading-[1.05] mb-4"
            style={{ fontSize: "clamp(2.3rem,5.5vw,4.5rem)", letterSpacing: "-0.02em" }}>
            AM Institute of{" "}
            <span className="gradient-text">Excellence</span>
          </h1>

          <div className="fade-in-up hindi-badge inline-block rounded-2xl px-6 py-3 mb-6 mx-auto">
            <p className="hindi-text-size font-extrabold"
              style={{ fontSize: "clamp(1.5rem,4vw,2.4rem)", color: "#E9D5FF", letterSpacing: "0.02em", lineHeight: 1.3 }}>
              शिक्षेश्वर 2.0
            </p>
            <p className="text-[0.78rem] mt-1"
              style={{ color: "rgba(233,213,255,0.6)", fontFamily: "'DM Sans',sans-serif", letterSpacing: "0.1em" }}>
              SCHOLARSHIP CUM ADMISSION TEST
            </p>
          </div>

          <p className="fade-in-up font-bold italic mb-3"
            style={{ fontSize: "clamp(1rem,2.2vw,1.35rem)", color: "#F59E0B", letterSpacing: "0.04em" }}>
            "Give Wings to Your Dreams"
          </p>

          <p className="fade-in-up mb-8 mx-auto leading-[1.7]"
            style={{ fontSize: "clamp(0.88rem,1.7vw,1.05rem)", color: "rgba(255,255,255,0.5)", maxWidth: 540, fontFamily: "'DM Sans',sans-serif" }}>
            Whole Year Course at just{" "}
            <span className="font-extrabold gradient-text-gold">₹1</span>{" "}
            for Top 10 Students — Scholarship Cum Admission Test Announcement
          </p>

          <div className="fade-in-up flex flex-wrap gap-3 justify-center mb-12">
            <a href="#register">
              <button className="cta-btn px-9 py-3.5 rounded-full text-[15px] inline-flex items-center gap-2">
                Register Now <ArrowRight size={17} />
              </button>
            </a>
            <a href="tel:9817717665">
              <button className="px-8 py-3.5 rounded-full font-semibold text-[15px] text-white inline-flex items-center gap-2"
                style={{ border: "1px solid rgba(255,255,255,0.18)", background: "rgba(255,255,255,0.04)", fontFamily: "'Syne',sans-serif", cursor: "pointer" }}>
                <Phone size={15} /> Call Now
              </button>
            </a>
          </div>

          <div className="fade-in-up stats-grid grid gap-3" style={{ gridTemplateColumns: "repeat(4,1fr)" }}>
            {stats.map((s, i) => (
              <div key={i} className="stat-card rounded-2xl px-4 py-3 text-center">
                <div className="font-extrabold" style={{ fontSize: "clamp(1.1rem,2.5vw,1.5rem)", color: "#F59E0B" }}>{s.val}</div>
                <div className="text-[11px] mt-0.5" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans',sans-serif" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <div className="shine-divider" />

      {/* ══════════════════ FOR WHOM ══════════════════ */}
      <section className="px-5 py-20" style={{ background: "linear-gradient(180deg,#0B0B1A 0%,#0D0D20 100%)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="section-label inline-block rounded-full px-4 py-1 text-[11px] tracking-[0.15em] uppercase mb-5"
            style={{ color: "rgba(255,255,255,0.35)" }}>
            <GraduationCap size={11} className="inline mr-1.5" />
            Who Can Apply
          </div>
          <h2 className="font-extrabold mb-4" style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", letterSpacing: "-0.02em" }}>
            For Students Studying In
          </h2>
          <p className="mb-10" style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'DM Sans',sans-serif", fontSize: "0.98rem" }}>
            Open to students across all these academic levels
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {classes.map((cls, i) => (
              <motion.div key={i} className="class-pill rounded-full px-6 py-2.5 font-semibold text-[0.92rem] cursor-default"
                style={{ color: "rgba(255,255,255,0.8)", fontFamily: "'DM Sans',sans-serif" }}
                whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.97 }}>
                {cls}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="shine-divider" />

      {/* ══════════════════ ADVANTAGES ══════════════════ */}
      <section className="relative px-5 py-24 overflow-hidden"
        style={{ background: "linear-gradient(135deg,#110D2E 0%,#1A0B2E 50%,#0D1520 100%)" }}>
        <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ transform: "translate(-50%,-50%)", background: "radial-gradient(circle,rgba(124,58,237,0.1) 0%,transparent 60%)" }} />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <div className="section-label inline-block rounded-full px-4 py-1 text-[11px] tracking-[0.15em] uppercase mb-5"
              style={{ color: "rgba(255,255,255,0.35)" }}>
              <Sparkles size={11} className="inline mr-1.5" />
              Why Join Shiksheshwar 2.0
            </div>
            <h2 className="font-extrabold mb-3" style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", letterSpacing: "-0.02em" }}>
              Your <span className="gradient-text">Advantages</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans',sans-serif" }}>
              Unmatched benefits designed to accelerate your academic journey
            </p>
          </div>

          <div className="adv-grid grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))" }}>
            {advantages.map((adv, i) => (
              <motion.div key={i} className="adv-card rounded-2xl p-6 flex items-start gap-4" whileHover={{ x: 4 }}>
                <div className="w-11 h-11 rounded-[12px] flex-shrink-0 flex items-center justify-center"
                  style={{ background: adv.glow, border: `1px solid ${adv.color}44`, color: adv.color }}>
                  {adv.icon}
                </div>
                <div>
                  <div className="font-bold text-[0.97rem] text-white">{adv.text}</div>
                  <div className="text-[0.8rem] mt-0.5" style={{ color: "rgba(255,255,255,0.38)", fontFamily: "'DM Sans',sans-serif" }}>{adv.sub}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="shine-divider" />

      {/* ══════════════════ REGISTRATION FORM ══════════════════ */}
      <section
        id="register"
        className="relative px-5 py-24 overflow-hidden"
        style={{ background: "linear-gradient(180deg,#0D0D20 0%,#0B0B1A 100%)" }}
      >
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ transform: "translate(-50%,-50%)", background: "radial-gradient(circle,rgba(124,58,237,0.09) 0%,transparent 65%)" }} />

        <div className="relative z-10 max-w-xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-10">
            <div className="section-label inline-block rounded-full px-4 py-1 text-[11px] tracking-[0.15em] uppercase mb-5"
              style={{ color: "rgba(255,255,255,0.35)" }}>
              <Star size={11} className="inline mr-1.5" />
              Free Registration
            </div>
            <h2 className="font-extrabold mb-3" style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", letterSpacing: "-0.02em" }}>
              Register for{" "}
              <span className="gradient-text">Shiksheshwar 2.0</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'DM Sans',sans-serif", fontSize: "0.95rem" }}>
              Fill in the form — your details go directly to our WhatsApp.
            </p>
          </div>

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: "linear-gradient(135deg,rgba(255,255,255,0.04) 0%,rgba(255,255,255,0.01) 100%)",
              border: "1px solid rgba(124,58,237,0.25)",
              borderRadius: 22,
              padding: "clamp(24px,5vw,40px) clamp(18px,4vw,36px)",
              backdropFilter: "blur(16px)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Top shimmer line */}
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1,
              background: "linear-gradient(90deg,transparent,rgba(124,58,237,0.7),rgba(244,63,94,0.5),transparent)" }} />
            {/* Decorative orb */}
            <div style={{ position: "absolute", top: -60, right: -60, width: 180, height: 180, borderRadius: "50%", pointerEvents: "none",
              background: "radial-gradient(circle,rgba(124,58,237,0.1) 0%,transparent 70%)" }} />

            {submitted ? (
              <motion.div
                style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "48px 0" }}
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div style={{ width: 72, height: 72, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 18, background: "rgba(16,185,129,0.15)", border: "2px solid rgba(16,185,129,0.4)" }}>
                  <CheckCircle size={32} color="#10B981" />
                </div>
                <h3 style={{ fontWeight: 800, fontSize: "clamp(1.2rem,4vw,1.5rem)", marginBottom: 8 }}>Registered!</h3>
                <p style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'DM Sans',sans-serif", fontSize: "0.95rem" }}>
                  Your registration has been sent to our WhatsApp. We'll be in touch shortly!
                </p>
              </motion.div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>

                {/* Name */}
                <div style={{ position: "relative" }}>
                  <div style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "none",
                    color: focused === "name" ? "#7C3AED" : "rgba(255,255,255,0.3)", transition: "color 0.2s" }}>
                    <User size={16} />
                  </div>
                  <input name="name" value={form.name} onChange={handleChange}
                    onFocus={() => setFocused("name")} onBlur={() => setFocused(null)}
                    placeholder="Full Name *" required className="reg-input" />
                </div>

                {/* Phone */}
                <div style={{ position: "relative" }}>
                  <div style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "none",
                    color: focused === "phone" ? "#7C3AED" : "rgba(255,255,255,0.3)", transition: "color 0.2s" }}>
                    <Phone size={16} />
                  </div>
                  <input name="phone" value={form.phone} onChange={handleChange}
                    onFocus={() => setFocused("phone")} onBlur={() => setFocused(null)}
                    placeholder="Phone Number *" type="tel" required className="reg-input" />
                </div>

                {/* Class / Education */}
                <div style={{ position: "relative" }}>
                  <div style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "none", zIndex: 1,
                    color: focused === "education" ? "#7C3AED" : "rgba(255,255,255,0.3)", transition: "color 0.2s" }}>
                    <GraduationCap size={16} />
                  </div>
                  <select name="education" value={form.education} onChange={handleChange}
                    onFocus={() => setFocused("education")} onBlur={() => setFocused(null)}
                    required className="reg-input"
                    style={{ color: form.education ? "#fff" : "rgba(255,255,255,0.25)" }}>
                    <option value="" disabled>Select Your Class *</option>
                    {EDUCATION_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                {/* Email */}
                <div style={{ position: "relative" }}>
                  <div style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "none",
                    color: focused === "email" ? "#7C3AED" : "rgba(255,255,255,0.3)", transition: "color 0.2s" }}>
                    <Mail size={16} />
                  </div>
                  <input name="email" value={form.email} onChange={handleChange}
                    onFocus={() => setFocused("email")} onBlur={() => setFocused(null)}
                    placeholder="Email Address" type="email" className="reg-input" />
                </div>

                {/* Address */}
                <div style={{ position: "relative" }}>
                  <div style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "none",
                    color: focused === "address" ? "#7C3AED" : "rgba(255,255,255,0.3)", transition: "color 0.2s" }}>
                    <MapPin size={16} />
                  </div>
                  <input name="address" value={form.address} onChange={handleChange}
                    onFocus={() => setFocused("address")} onBlur={() => setFocused(null)}
                    placeholder="Your City / Area" className="reg-input" />
                </div>

                {/* Message */}
                <div style={{ position: "relative" }}>
                  <div style={{ position: "absolute", left: 14, top: 15, pointerEvents: "none",
                    color: focused === "message" ? "#7C3AED" : "rgba(255,255,255,0.3)", transition: "color 0.2s" }}>
                    <MessageSquare size={16} />
                  </div>
                  <textarea name="message" value={form.message} onChange={handleChange}
                    onFocus={() => setFocused("message")} onBlur={() => setFocused(null)}
                    placeholder="Any questions or message..." rows={3} className="reg-input" />
                </div>

                {/* Submit */}
                <motion.button
                  onClick={handleSubmit}
                  className="submit-btn"
                  style={{
                    marginTop: 4,
                    background: isValid
                      ? "linear-gradient(135deg,#7C3AED,#F43F5E)"
                      : "rgba(255,255,255,0.06)",
                    boxShadow: isValid ? "0 4px 24px rgba(124,58,237,0.4)" : "none",
                    cursor: isValid ? "pointer" : "not-allowed",
                    opacity: isValid ? 1 : 0.5,
                  }}
                  whileHover={isValid ? { scale: 1.01 } : {}}
                  whileTap={isValid ? { scale: 0.98 } : {}}
                >
                  <Send size={17} />
                  Register via WhatsApp
                </motion.button>

                <p style={{ textAlign: "center", fontSize: "0.72rem", color: "rgba(255,255,255,0.22)", fontFamily: "'DM Sans',sans-serif" }}>
                  * Required fields. Opens WhatsApp with your details pre-filled.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      <div className="shine-divider" />

      {/* ══════════════════ ₹1 HIGHLIGHT ══════════════════ */}
      <section className="px-5 py-20" style={{ background: "#0D0D20" }}>
        <div className="max-w-2xl mx-auto">
          <motion.div
            className="relative rounded-3xl p-8 sm:p-12 text-center overflow-hidden"
            style={{ background: "linear-gradient(135deg,rgba(245,158,11,0.12),rgba(244,63,94,0.1),rgba(124,58,237,0.15))", border: "1px solid rgba(245,158,11,0.25)" }}
            whileHover={{ scale: 1.015 }}
          >
            <div className="absolute top-0 left-0 right-0 h-px"
              style={{ background: "linear-gradient(90deg,transparent,rgba(245,158,11,0.8),transparent)" }} />
            <div className="absolute -top-10 -right-10 text-[200px] opacity-[0.04] leading-none select-none font-extrabold">₹</div>

            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5 text-[12px]"
              style={{ background: "rgba(245,158,11,0.15)", border: "1px solid rgba(245,158,11,0.4)", color: "#FCD34D", fontFamily: "'DM Sans',sans-serif" }}>
              <Trophy size={12} fill="#FCD34D" />
              Top 10 Students Exclusive
            </div>

            <div className="font-extrabold gradient-text-gold mb-2" style={{ fontSize: "clamp(3.5rem,12vw,7rem)", lineHeight: 1 }}>
              ₹1
            </div>
            <div className="font-bold text-white mb-3" style={{ fontSize: "clamp(1.1rem,3vw,1.6rem)" }}>
              Whole Year Course Fee
            </div>
            <p className="mb-8" style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'DM Sans',sans-serif", fontSize: "0.95rem", maxWidth: 400, margin: "0 auto 2rem" }}>
              The top 10 performers in Shiksheshwar 2.0 unlock an entire year of premium coaching at just ₹1. Prove your potential and claim your spot.
            </p>

            <a href="#register">
              <button className="cta-btn px-10 py-3.5 rounded-full text-[15px] inline-flex items-center gap-2">
                Hurry Up — Register Now <ArrowRight size={17} />
              </button>
            </a>
          </motion.div>
        </div>
      </section>

      <div className="shine-divider" />

      {/* ══════════════════ CONTACT STRIP ══════════════════ */}
      <section className="px-5 py-16" style={{ background: "linear-gradient(135deg,#0B0B1A 0%,#110D2E 100%)" }}>
        <div className="max-w-2xl mx-auto text-center">
          <div className="section-label inline-block rounded-full px-4 py-1 text-[11px] tracking-[0.15em] uppercase mb-6"
            style={{ color: "rgba(255,255,255,0.35)" }}>
            Get In Touch
          </div>
          <h2 className="font-extrabold mb-8" style={{ fontSize: "clamp(1.6rem,3.5vw,2.4rem)" }}>
            Contact <span className="gradient-text">Us</span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:9817717665" style={{ textDecoration: "none" }}>
              <motion.div className="adv-card rounded-2xl px-7 py-4 flex items-center gap-3 cursor-pointer" whileHover={{ scale: 1.04, x: 4 }}>
                <div className="w-10 h-10 rounded-[10px] flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.35)", color: "#10B981" }}>
                  <Phone size={18} />
                </div>
                <div className="text-left">
                  <div className="text-[11px] mb-0.5" style={{ color: "rgba(255,255,255,0.35)", fontFamily: "'DM Sans',sans-serif", letterSpacing: "0.08em" }}>CALL US</div>
                  <div className="font-bold text-white text-[1rem]">+91 98177 17665</div>
                </div>
              </motion.div>
            </a>
            <a href="mailto:aminstituteofexcellence1@gmail.com" style={{ textDecoration: "none" }}>
              <motion.div className="adv-card rounded-2xl px-7 py-4 flex items-center gap-3 cursor-pointer" whileHover={{ scale: 1.04, x: 4 }}>
                <div className="w-10 h-10 rounded-[10px] flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.35)", color: "#A78BFA" }}>
                  <Mail size={18} />
                </div>
                <div className="text-left">
                  <div className="text-[11px] mb-0.5" style={{ color: "rgba(255,255,255,0.35)", fontFamily: "'DM Sans',sans-serif", letterSpacing: "0.08em" }}>EMAIL US</div>
                  <div className="font-bold text-white text-[0.8rem]">aminstituteofexcellence1@gmail.com</div>
                </div>
              </motion.div>
            </a>
          </div>

          <div className="mt-12">
            <a href="#register">
              <button className="cta-btn px-12 py-4 rounded-full text-[16px] inline-flex items-center gap-2">
                <Star size={16} fill="white" />
                Register for Shiksheshwar 2.0
                <ArrowRight size={16} />
              </button>
            </a>
            <p className="mt-4 text-[12px]" style={{ color: "rgba(255,255,255,0.25)", fontFamily: "'DM Sans',sans-serif" }}>
              * Scholarship percentage subject to test performance. Terms apply.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}