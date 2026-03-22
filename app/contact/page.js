"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Phone, MapPin, Mail, Send, User, BookOpen,
  MessageSquare, Instagram, Linkedin, Clock,
  CheckCircle, ArrowRight, GraduationCap,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const EDUCATION_OPTIONS = [
  "Class 6th - 8th",
  "Class 9th - 10th",
  "Class 11th - 12th (Commerce)",
  "Class 11th - 12th (Science)",
  "Class 11th - 12th (Humanities)",
  "CA Foundation",
  "CS Foundation",
  "CMA Foundation",
  "CSEET",
  "JEE Mains / Advanced",
  "NEET",
  "CUET",
  "Other",
];

export default function ContactPage() {
  const ctxRef = useRef(null);
  const [form, setForm] = useState({
    name: "", phone: "", education: "", email: "", address: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(null);

  useEffect(() => {
    ctxRef.current = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(".contact-hero-badge", { y: -30, opacity: 0, duration: 0.6, ease: "back.out(1.7)" })
        .from(".contact-hero-title span", { y: 60, opacity: 0, stagger: 0.1, duration: 0.8, ease: "power3.out" }, "-=0.2")
        .from(".contact-hero-sub", { y: 20, opacity: 0, duration: 0.6 }, "-=0.3");

      gsap.to(".orb-c1", { y: -25, x: 12, duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".orb-c2", { y: 20, x: -18, duration: 5, repeat: -1, yoyo: true, ease: "sine.inOut" });

      gsap.utils.toArray(".reveal-up").forEach((el) => {
        gsap.from(el, {
          y: 40, opacity: 0, duration: 0.75, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%" },
        });
      });

      gsap.utils.toArray(".stagger-cards").forEach((container) => {
        const cards = container.querySelectorAll(".stagger-card");
        gsap.from(cards, {
          y: 40, opacity: 0, stagger: 0.1, duration: 0.65, ease: "power3.out",
          scrollTrigger: { trigger: container, start: "top 88%" },
        });
      });
    });

    return () => ctxRef.current?.revert();
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    if (!form.name || !form.phone || !form.education) return;
    const msg =
      `*New Enquiry — AM Institute of Excellence*%0A%0A` +
      `👤 *Name:* ${encodeURIComponent(form.name)}%0A` +
      `📞 *Phone:* ${encodeURIComponent(form.phone)}%0A` +
      `🎓 *Education:* ${encodeURIComponent(form.education)}%0A` +
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

  return (
    <div
      className="overflow-x-hidden text-white"
      style={{ fontFamily: "'Syne', sans-serif", background: "#0B0B1A" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; }
        body { margin: 0; }
        ::selection { background: #7C3AED; color: #fff; }

        .gradient-text {
          background: linear-gradient(135deg, #F59E0B 0%, #F43F5E 40%, #7C3AED 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .gradient-text-orange {
          background: linear-gradient(135deg, #F97316 0%, #F59E0B 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        @keyframes spin-slow { to { transform: translate(-50%,-50%) rotate(360deg); } }
        @keyframes spin-rev  { to { transform: translate(-50%,-50%) rotate(-360deg); } }
        .spin-slow { animation: spin-slow 20s linear infinite; }
        .spin-rev  { animation: spin-rev  32s linear infinite; }

        @keyframes pulse-ring {
          0%, 100% { box-shadow: 0 0 0 0 rgba(249,115,22,0.35); }
          50%       { box-shadow: 0 0 0 10px rgba(249,115,22,0); }
        }
        .pulse-ring { animation: pulse-ring 2.5s ease infinite; }

        .input-field {
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
          -webkit-appearance: none;
          appearance: none;
        }
        .input-field::placeholder { color: rgba(255,255,255,0.25); }
        .input-field:focus {
          border-color: rgba(249,115,22,0.55);
          background: rgba(249,115,22,0.04);
          box-shadow: 0 0 0 3px rgba(249,115,22,0.1);
        }
        .input-field option { background: #1a1a2e; color: #fff; }

        .info-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 18px;
          transition: background 0.25s, border-color 0.25s, transform 0.25s;
        }
        .info-card:hover { background: rgba(255,255,255,0.05); transform: translateY(-3px); }

        .stat-badge {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 14px;
          padding: 16px 10px;
          text-align: center;
          transition: border-color 0.2s, transform 0.2s;
        }
        .stat-badge:hover { border-color: rgba(249,115,22,0.3); transform: translateY(-3px); }

        .social-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 13px 16px;
          border-radius: 13px;
          text-decoration: none;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          font-size: 0.88rem;
          transition: transform 0.2s;
          overflow: hidden;
        }
        .social-btn:hover { transform: translateY(-3px); }
        .social-btn span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

        .submit-btn {
          width: 100%;
          padding: 15px;
          border-radius: 14px;
          border: none;
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 1rem;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .submit-btn:active { transform: scale(0.98) !important; }

        /* Two-col → single-col below 860px */
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.05fr;
          gap: 48px;
          align-items: start;
        }
        @media (max-width: 860px) {
          .contact-grid { grid-template-columns: 1fr; gap: 32px; }
        }

        /* Stats: 4 col → 2 col on mobile */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }
        @media (max-width: 600px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
        }

        .map-container {
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.08);
        }

        /* Hide heavy decorations on very small screens */
        @media (max-width: 480px) {
          .spin-slow, .spin-rev { display: none !important; }
        }

        textarea.input-field { resize: none; padding-top: 14px; line-height: 1.6; }

        /* Smooth tap highlight removal on mobile */
        * { -webkit-tap-highlight-color: transparent; }
      `}</style>

      {/* ─────────── HERO ─────────── */}
      <section
        id="contact"
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "clamp(72px,14vw,120px) clamp(16px,4vw,24px) clamp(48px,8vw,80px)",
          overflow: "hidden",
          minHeight: "42vh",
        }}
      >
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }} />

        <div className="orb-c1 absolute pointer-events-none"
          style={{ top: "5%", left: "2%", width: "clamp(160px,40vw,300px)", height: "clamp(160px,40vw,300px)", borderRadius: "50%", background: "radial-gradient(circle, rgba(249,115,22,0.28) 0%, transparent 70%)", filter: "blur(40px)" }} />
        <div className="orb-c2 absolute pointer-events-none"
          style={{ bottom: "8%", right: "2%", width: "clamp(140px,36vw,270px)", height: "clamp(140px,36vw,270px)", borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.26) 0%, transparent 70%)", filter: "blur(40px)" }} />

        <div className="spin-slow absolute pointer-events-none"
          style={{ top: "50%", left: "50%", width: "min(560px,88vw)", height: "min(560px,88vw)", borderRadius: "50%", border: "1px solid rgba(249,115,22,0.07)" }} />
        <div className="spin-rev absolute pointer-events-none"
          style={{ top: "50%", left: "50%", width: "min(400px,66vw)", height: "min(400px,66vw)", borderRadius: "50%", border: "1px dashed rgba(124,58,237,0.07)" }} />

        <div style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: 680, width: "100%" }}>
          <div
            className="contact-hero-badge"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              borderRadius: 50, padding: "7px 18px", marginBottom: "clamp(16px,4vw,24px)",
              fontSize: "clamp(11px,2.8vw,13px)",
              background: "rgba(249,115,22,0.12)", border: "1px solid rgba(249,115,22,0.3)", color: "#FDB06B",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            <Phone size={13} /> Get In Touch With Us
          </div>

          <h1
            className="contact-hero-title"
            style={{
              fontWeight: 800, lineHeight: 1.07, marginBottom: "clamp(14px,3vw,20px)",
              fontSize: "clamp(1.9rem,7.5vw,4.2rem)", letterSpacing: "-0.02em",
            }}
          >
            {"Let's Start Your".split(" ").map((w, i) => (
              <span key={i} style={{ display: "inline-block", marginRight: "0.22em" }}>{w}</span>
            ))}
            <span className="gradient-text" style={{ display: "inline-block" }}>Journey</span>
          </h1>

          <p
            className="contact-hero-sub"
            style={{
              margin: "0 auto",
              fontSize: "clamp(0.85rem,2.8vw,1.05rem)", lineHeight: 1.75,
              color: "rgba(255,255,255,0.5)", maxWidth: 480,
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Have questions about programs, scholarships, or admissions? Reach out — we're here to guide you every step of the way.
          </p>
        </div>
      </section>

      {/* ─────────── STATS ─────────── */}
      <section style={{ background: "#0D0D20", padding: "clamp(20px,4vw,36px) clamp(16px,4vw,24px)" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div className="stagger-cards stats-grid">
            {[
              { val: "500+", label: "Students Enrolled", color: "#F97316" },
              { val: "6–12", label: "Classes Covered",   color: "#0EA5E9" },
              { val: "3+",   label: "Years of Excellence", color: "#7C3AED" },
              { val: "95%",  label: "Success Rate",       color: "#F59E0B" },
            ].map((s, i) => (
              <div key={i} className="stagger-card stat-badge">
                <div style={{ fontWeight: 800, fontSize: "clamp(1.2rem,4.5vw,1.65rem)", color: s.color, marginBottom: 4 }}>{s.val}</div>
                <div style={{ fontSize: "clamp(0.65rem,1.8vw,0.76rem)", color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans',sans-serif", letterSpacing: "0.04em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── MAIN CONTENT ─────────── */}
      <section style={{ background: "linear-gradient(180deg,#0D0D20 0%,#0B0B1A 100%)", padding: "clamp(40px,8vw,80px) clamp(16px,4vw,24px)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="contact-grid">

            {/* ── LEFT: Info ── */}
            <div>
              <div
                className="reveal-up"
                style={{
                  display: "inline-block", borderRadius: 50, padding: "5px 16px",
                  fontSize: 11, marginBottom: 18,
                  background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.25)", color: "#FDB06B",
                  fontFamily: "'DM Sans',sans-serif", letterSpacing: "0.12em",
                }}
              >
                CONTACT DETAILS
              </div>

              <h2
                className="reveal-up"
                style={{
                  fontWeight: 800, marginBottom: 12,
                  fontSize: "clamp(1.5rem,5.5vw,2.5rem)", letterSpacing: "-0.02em", lineHeight: 1.1,
                }}
              >
                Talk to <span className="gradient-text-orange">Anshul Mittal</span>
              </h2>
              <p
                className="reveal-up"
                style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'DM Sans',sans-serif", lineHeight: 1.8, marginBottom: 28, fontSize: "clamp(0.85rem,2.2vw,0.97rem)" }}
              >
                Director & CA Aspirant at AM Institute of Excellence — personally committed to your academic success.
              </p>

              {/* Contact info cards */}
              <div className="stagger-cards" style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>

                <div className="stagger-card info-card" style={{ padding: "15px 16px", display: "flex", alignItems: "flex-start", gap: 13 }}>
                  <div className="pulse-ring" style={{ width: 42, height: 42, minWidth: 42, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(249,115,22,0.12)", border: "1px solid rgba(249,115,22,0.35)", color: "#F97316" }}>
                    <Phone size={17} />
                  </div>
                  <div>
                    <p style={{ fontSize: 10, letterSpacing: "0.12em", color: "rgba(255,255,255,0.35)", fontFamily: "'DM Sans',sans-serif", marginBottom: 3 }}>PHONE</p>
                    <a href="tel:9817717665" style={{ fontWeight: 700, fontSize: "clamp(0.92rem,2.8vw,1.05rem)", color: "#fff", textDecoration: "none" }}>
                      9817717665
                    </a>
                    <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.35)", fontFamily: "'DM Sans',sans-serif", marginTop: 2 }}>Mon – Sat, 8 AM – 8 PM</p>
                  </div>
                </div>

                <div className="stagger-card info-card" style={{ padding: "15px 16px", display: "flex", alignItems: "flex-start", gap: 13 }}>
                  <div style={{ width: 42, height: 42, minWidth: 42, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.35)", color: "#10B981" }}>
                    <MessageSquare size={17} />
                  </div>
                  <div>
                    <p style={{ fontSize: 10, letterSpacing: "0.12em", color: "rgba(255,255,255,0.35)", fontFamily: "'DM Sans',sans-serif", marginBottom: 3 }}>WHATSAPP</p>
                    <a href="https://wa.me/919817717665" target="_blank" rel="noopener noreferrer"
                      style={{ fontWeight: 700, fontSize: "clamp(0.92rem,2.8vw,1.05rem)", color: "#fff", textDecoration: "none" }}>
                      +91 98177 17665
                    </a>
                    <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.35)", fontFamily: "'DM Sans',sans-serif", marginTop: 2 }}>Chat with us directly</p>
                  </div>
                </div>

                <div className="stagger-card info-card" style={{ padding: "15px 16px", display: "flex", alignItems: "flex-start", gap: 13 }}>
                  <div style={{ width: 42, height: 42, minWidth: 42, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(14,165,233,0.12)", border: "1px solid rgba(14,165,233,0.35)", color: "#0EA5E9" }}>
                    <MapPin size={17} />
                  </div>
                  <div>
                    <p style={{ fontSize: 10, letterSpacing: "0.12em", color: "rgba(255,255,255,0.35)", fontFamily: "'DM Sans',sans-serif", marginBottom: 3 }}>ADDRESS</p>
                    <p style={{ fontWeight: 600, fontSize: "clamp(0.8rem,2.2vw,0.9rem)", lineHeight: 1.65, color: "#fff", fontFamily: "'DM Sans',sans-serif" }}>
                      SCF 35, Second Floor, Urban Estate Huda Market,<br />
                      Near Maharaja Aggarsain Chowk,<br />
                      Kurukshetra Sector 13, Thanesar,<br />
                      Kurukshetra – 136118, Haryana
                    </p>
                  </div>
                </div>

                <div className="stagger-card info-card" style={{ padding: "15px 16px", display: "flex", alignItems: "flex-start", gap: 13 }}>
                  <div style={{ width: 42, height: 42, minWidth: 42, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(124,58,237,0.12)", border: "1px solid rgba(124,58,237,0.35)", color: "#7C3AED" }}>
                    <Clock size={17} />
                  </div>
                  <div>
                    <p style={{ fontSize: 10, letterSpacing: "0.12em", color: "rgba(255,255,255,0.35)", fontFamily: "'DM Sans',sans-serif", marginBottom: 3 }}>TIMINGS</p>
                    <p style={{ fontWeight: 600, fontSize: "clamp(0.85rem,2.2vw,0.93rem)", color: "#fff", fontFamily: "'DM Sans',sans-serif" }}>Monday – Saturday</p>
                    <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans',sans-serif", marginTop: 2 }}>
                      Morning: 7 AM – 12 PM &nbsp;|&nbsp; Evening: 3 PM – 8 PM
                    </p>
                    <p style={{ fontWeight: 600, fontSize: "0.8rem", color: "#F59E0B", fontFamily: "'DM Sans',sans-serif", marginTop: 4 }}>
                      Scholarship Test: Every 2nd Sat & 4th Sun
                    </p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="reveal-up">
                <p style={{ fontSize: 10, letterSpacing: "0.14em", color: "rgba(255,255,255,0.3)", fontFamily: "'DM Sans',sans-serif", marginBottom: 10 }}>FOLLOW US</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                  <a
                    href="https://www.instagram.com/am_institute_of_excellence"
                    target="_blank" rel="noopener noreferrer"
                    className="social-btn"
                    style={{ background: "linear-gradient(135deg,rgba(225,48,108,0.12),rgba(193,53,132,0.08))", border: "1px solid rgba(225,48,108,0.25)", color: "#f472b6" }}
                  >
                    <Instagram size={17} style={{ flexShrink: 0 }} />
                    <span>@am_institute_of_excellence</span>
                    <ArrowRight size={13} style={{ flexShrink: 0, marginLeft: "auto", opacity: 0.5 }} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/anshul-mittal"
                    target="_blank" rel="noopener noreferrer"
                    className="social-btn"
                    style={{ background: "linear-gradient(135deg,rgba(10,102,194,0.12),rgba(14,165,233,0.08))", border: "1px solid rgba(10,102,194,0.3)", color: "#7DD3FC" }}
                  >
                    <Linkedin size={17} style={{ flexShrink: 0 }} />
                    <span>Anshul Mittal — LinkedIn</span>
                    <ArrowRight size={13} style={{ flexShrink: 0, marginLeft: "auto", opacity: 0.5 }} />
                  </a>
                </div>
              </div>
            </div>

            {/* ── RIGHT: Form ── */}
            <div className="reveal-up">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  background: "linear-gradient(135deg,rgba(255,255,255,0.04) 0%,rgba(255,255,255,0.01) 100%)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 22,
                  padding: "clamp(22px,5vw,40px) clamp(18px,4vw,36px)",
                  backdropFilter: "blur(16px)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,rgba(249,115,22,0.6),rgba(245,158,11,0.4),transparent)" }} />
                <div style={{ position: "absolute", top: -60, right: -60, width: 180, height: 180, borderRadius: "50%", pointerEvents: "none", background: "radial-gradient(circle,rgba(249,115,22,0.08) 0%,transparent 70%)" }} />

                {submitted ? (
                  <motion.div
                    style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "clamp(36px,8vw,72px) 0" }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <div style={{ width: 72, height: 72, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18, background: "rgba(16,185,129,0.15)", border: "2px solid rgba(16,185,129,0.4)" }}>
                      <CheckCircle size={32} color="#10B981" />
                    </div>
                    <h3 style={{ fontWeight: 800, fontSize: "clamp(1.2rem,4vw,1.5rem)", marginBottom: 8 }}>Sent to WhatsApp!</h3>
                    <p style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'DM Sans',sans-serif", fontSize: "clamp(0.85rem,2.2vw,0.95rem)" }}>
                      Your enquiry is on its way. We'll respond shortly!
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <div style={{ marginBottom: 22 }}>
                      <h3 style={{ fontWeight: 800, fontSize: "clamp(1.15rem,3.5vw,1.4rem)", marginBottom: 5 }}>Send an Enquiry</h3>
                      <p style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans',sans-serif", fontSize: "clamp(0.78rem,2vw,0.88rem)" }}>
                        Fill in the form — your message goes directly to our WhatsApp.
                      </p>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>

                      {/* Name */}
                      <div style={{ position: "relative" }}>
                        <div style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: focused === "name" ? "#F97316" : "rgba(255,255,255,0.3)", transition: "color 0.2s" }}>
                          <User size={16} />
                        </div>
                        <input name="name" value={form.name} onChange={handleChange}
                          onFocus={() => setFocused("name")} onBlur={() => setFocused(null)}
                          placeholder="Full Name *" required className="input-field" />
                      </div>

                      {/* Phone */}
                      <div style={{ position: "relative" }}>
                        <div style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: focused === "phone" ? "#F97316" : "rgba(255,255,255,0.3)", transition: "color 0.2s" }}>
                          <Phone size={16} />
                        </div>
                        <input name="phone" value={form.phone} onChange={handleChange}
                          onFocus={() => setFocused("phone")} onBlur={() => setFocused(null)}
                          placeholder="Phone Number *" type="tel" required className="input-field" />
                      </div>

                      {/* Education */}
                      <div style={{ position: "relative" }}>
                        <div style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "none", zIndex: 1, color: focused === "education" ? "#F97316" : "rgba(255,255,255,0.3)", transition: "color 0.2s" }}>
                          <GraduationCap size={16} />
                        </div>
                        <select name="education" value={form.education} onChange={handleChange}
                          onFocus={() => setFocused("education")} onBlur={() => setFocused(null)}
                          required className="input-field"
                          style={{ color: form.education ? "#fff" : "rgba(255,255,255,0.25)" }}>
                          <option value="" disabled>Select Course / Education *</option>
                          {EDUCATION_OPTIONS.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>

                      {/* Email */}
                      <div style={{ position: "relative" }}>
                        <div style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: focused === "email" ? "#F97316" : "rgba(255,255,255,0.3)", transition: "color 0.2s" }}>
                          <Mail size={16} />
                        </div>
                        <input name="email" value={form.email} onChange={handleChange}
                          onFocus={() => setFocused("email")} onBlur={() => setFocused(null)}
                          placeholder="Email Address" type="email" className="input-field" />
                      </div>

                      {/* Address */}
                      <div style={{ position: "relative" }}>
                        <div style={{ position: "absolute", left: 14, top: 16, pointerEvents: "none", color: focused === "address" ? "#F97316" : "rgba(255,255,255,0.3)", transition: "color 0.2s" }}>
                          <MapPin size={16} />
                        </div>
                        <input name="address" value={form.address} onChange={handleChange}
                          onFocus={() => setFocused("address")} onBlur={() => setFocused(null)}
                          placeholder="Your City / Address" className="input-field" />
                      </div>

                      {/* Message */}
                      <div style={{ position: "relative" }}>
                        <div style={{ position: "absolute", left: 14, top: 15, pointerEvents: "none", color: focused === "message" ? "#F97316" : "rgba(255,255,255,0.3)", transition: "color 0.2s" }}>
                          <MessageSquare size={16} />
                        </div>
                        <textarea name="message" value={form.message} onChange={handleChange}
                          onFocus={() => setFocused("message")} onBlur={() => setFocused(null)}
                          placeholder="Your message or questions..." rows={4} className="input-field" />
                      </div>

                      {/* Submit */}
                      <motion.button
                        onClick={handleSubmit}
                        className="submit-btn"
                        style={{
                          marginTop: 4,
                          background: isValid ? "linear-gradient(135deg,#F97316,#F59E0B)" : "rgba(255,255,255,0.06)",
                          boxShadow: isValid ? "0 4px 24px rgba(249,115,22,0.4)" : "none",
                          cursor: isValid ? "pointer" : "not-allowed",
                          opacity: isValid ? 1 : 0.55,
                        }}
                        whileHover={isValid ? { scale: 1.01 } : {}}
                        whileTap={isValid ? { scale: 0.98 } : {}}
                      >
                        <Send size={17} />
                        Send via WhatsApp
                      </motion.button>

                      <p style={{ textAlign: "center", fontSize: "0.73rem", color: "rgba(255,255,255,0.22)", fontFamily: "'DM Sans',sans-serif" }}>
                        * Required fields. Opens WhatsApp with your details pre-filled.
                      </p>
                    </div>
                  </>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── MAP ─────────── */}
      <section style={{ background: "#0B0B1A", padding: "0 clamp(16px,4vw,24px) clamp(36px,6vw,56px)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="reveal-up" style={{ textAlign: "center", marginBottom: 20 }}>
            <div style={{
              display: "inline-block", borderRadius: 50, padding: "5px 16px", marginBottom: 10,
              background: "rgba(14,165,233,0.1)", border: "1px solid rgba(14,165,233,0.25)", color: "#7DD3FC",
              fontFamily: "'DM Sans',sans-serif", fontSize: 11, letterSpacing: "0.12em",
            }}>
              FIND US
            </div>
            <h3 style={{ fontWeight: 800, fontSize: "clamp(1.25rem,4.5vw,1.7rem)" }}>
              Visit Our <span className="gradient-text-orange">Campus</span>
            </h3>
          </div>
          <div className="reveal-up map-container" style={{ height: "clamp(220px,50vw,360px)" }}>
            <iframe
              title="AM Institute of Excellence"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3447.0!2d76.8561!3d29.9708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDU4JzE0LjciTiA3NsKwNTEnMjIuMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%" height="100%"
              style={{ border: 0, display: "block", filter: "invert(0.88) hue-rotate(195deg) saturate(0.7)" }}
              allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* ─────────── CTA BANNER ─────────── */}
      <section style={{ background: "#0B0B1A", padding: "0 clamp(16px,4vw,24px) clamp(48px,8vw,72px)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }} className="reveal-up">
          <motion.div
            whileHover={{ scale: 1.005 }}
            style={{
              position: "relative", borderRadius: 22,
              padding: "clamp(28px,6vw,52px) clamp(18px,5vw,48px)",
              textAlign: "center", overflow: "hidden",
              background: "linear-gradient(135deg,rgba(249,115,22,0.13),rgba(124,58,237,0.11))",
              border: "1px solid rgba(249,115,22,0.2)",
            }}
          >
            <div style={{ position: "absolute", top: -50, right: -50, width: 160, height: 160, borderRadius: "50%", pointerEvents: "none", background: "radial-gradient(circle,rgba(249,115,22,0.14) 0%,transparent 70%)" }} />
            <div style={{ position: "absolute", bottom: -40, left: -40, width: 140, height: 140, borderRadius: "50%", pointerEvents: "none", background: "radial-gradient(circle,rgba(124,58,237,0.14) 0%,transparent 70%)" }} />
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,rgba(249,115,22,0.5),transparent)" }} />

            <div style={{
              display: "inline-flex", alignItems: "center", gap: 7, borderRadius: 50,
              padding: "6px 14px", marginBottom: 16, fontSize: "clamp(10px,2.5vw,12px)",
              background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.3)", color: "#FCD34D",
              fontFamily: "'DM Sans',sans-serif",
            }}>
              <BookOpen size={11} />
              Shiksheshwar 2.0 Scholarship — Every 2nd Sat & 4th Sun
            </div>

            <h3 style={{
              position: "relative", fontWeight: 800, marginBottom: 12,
              fontSize: "clamp(1.3rem,5vw,2.2rem)", letterSpacing: "-0.02em",
            }}>
              Ready to <span className="gradient-text">Give Wings</span> to Your Dreams?
            </h3>
            <p style={{
              position: "relative", marginBottom: 24, maxWidth: 400, marginLeft: "auto", marginRight: "auto",
              color: "rgba(255,255,255,0.5)", fontFamily: "'DM Sans',sans-serif",
              fontSize: "clamp(0.82rem,2.2vw,0.93rem)", lineHeight: 1.7,
            }}>
              Enroll today or appear in our free scholarship test to win up to 100% fee waiver. Zero barriers. Pure merit.
            </p>

            <div style={{ position: "relative", display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
              <a
                href="https://wa.me/919817717665?text=Hi%2C%20I%20want%20to%20enroll%20at%20AM%20Institute%20of%20Excellence."
                target="_blank" rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "linear-gradient(135deg,#F97316,#F59E0B)",
                  color: "#fff", fontWeight: 700, fontSize: "clamp(0.83rem,2.5vw,0.93rem)",
                  padding: "12px 22px", borderRadius: 50,
                  boxShadow: "0 4px 20px rgba(249,115,22,0.4)",
                  textDecoration: "none", fontFamily: "'Syne',sans-serif",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(249,115,22,0.55)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 4px 20px rgba(249,115,22,0.4)"; }}
              >
                <Send size={15} /> Enroll on WhatsApp
              </a>
              <a
                href="tel:9817717665"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  border: "1px solid rgba(255,255,255,0.18)", background: "rgba(255,255,255,0.04)",
                  color: "#fff", fontWeight: 600, fontSize: "clamp(0.83rem,2.5vw,0.93rem)",
                  padding: "12px 22px", borderRadius: 50,
                  textDecoration: "none", fontFamily: "'Syne',sans-serif",
                }}
              >
                <Phone size={15} /> Call Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}