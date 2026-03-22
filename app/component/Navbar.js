"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown, LogIn, UserPlus } from "lucide-react";
import { Show, UserButton } from "@clerk/nextjs";

const navLinks = [
  { label: "About Us",                     href: "/about"        },
  { label: "Shiksheshwar 2.0",             href: "/shiksheshwar" },
  { label: "Coaching for Junior & Senior", href: "/coaching"     },
  { label: "Gallery",                      href: "/gallery"      },
];

/* ── Shared UserButton appearance (dark theme) ── */
const userButtonAppearance = {
  variables: {
    colorPrimary:         "#F59E0B",
    colorBackground:      "#0D0D20",
    colorText:            "#ffffff",
    colorTextSecondary:   "rgba(255,255,255,0.55)",
    colorInputBackground: "rgba(255,255,255,0.06)",
    colorInputText:       "#ffffff",
    colorNeutral:         "#ffffff",
  },
  elements: {
    userButtonPopoverCard: {
      background:     "rgba(13,13,32,0.98)",
      border:         "1px solid rgba(124,58,237,0.3)",
      boxShadow:      "0 16px 48px rgba(0,0,0,0.6)",
      backdropFilter: "blur(20px)",
    },
    userButtonPopoverActions: {
      background: "transparent",
    },
    userButtonPopoverActionButton: {
      color:        "rgba(255,255,255,0.75)",
      borderRadius: "10px",
      background:   "transparent",
    },
    userButtonPopoverActionButtonText: {
      color: "rgba(255,255,255,0.75)",
    },
    userButtonPopoverActionButtonIcon: {
      color: "rgba(255,255,255,0.6)",
    },
    userPreviewMainIdentifier: {
      color:      "#ffffff",
      fontWeight: "700",
      fontFamily: "'Syne', sans-serif",
    },
    userPreviewSecondaryIdentifier: {
      color: "rgba(255,255,255,0.45)",
    },
    userButtonPopoverFooter: {
      display: "none",
    },
    avatarBox: {
      width:  "34px",
      height: "34px",
    },
  },
};

export default function Navbar() {
  const [menuOpen, setMenuOpen]     = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

        .nav-link-underline {
          position: absolute; bottom: 6px; left: 16px; right: 16px;
          height: 1px; border-radius: 999px;
          background: linear-gradient(90deg, #F59E0B, #F43F5E);
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.3s ease;
        }
        .nav-link:hover .nav-link-underline,
        .nav-link.active .nav-link-underline { transform: scaleX(1); }

        .enroll-btn {
          background: linear-gradient(135deg, #F59E0B, #F43F5E);
          box-shadow: 0 4px 20px rgba(244,63,94,0.35);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .enroll-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(244,63,94,0.5);
        }

        .auth-ghost-btn {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 7px 14px; border-radius: 10px;
          font-family: 'DM Sans', sans-serif; font-size: 0.85rem; font-weight: 600;
          color: rgba(255,255,255,0.65);
          border: 1px solid rgba(255,255,255,0.12);
          background: transparent;
          transition: color 0.2s, border-color 0.2s, background 0.2s;
          text-decoration: none;
        }
        .auth-ghost-btn:hover {
          color: #fff;
          border-color: rgba(255,255,255,0.25);
          background: rgba(255,255,255,0.05);
        }

        /* ── Clerk UserButton: avatar size ── */
        .cl-avatarBox {
          width: 34px !important;
          height: 34px !important;
        }

        /* ── Popover card + ALL children forced dark ── */
        .cl-userButtonPopoverCard,
        .cl-userButtonPopoverCard * {
          background: rgba(13,13,32,0.98) !important;
          color: rgba(255,255,255,0.85) !important;
        }
        .cl-userButtonPopoverCard {
          border: 1px solid rgba(124,58,237,0.3) !important;
          box-shadow: 0 16px 48px rgba(0,0,0,0.6) !important;
          backdrop-filter: blur(20px) !important;
        }

        /* ── Sections inside popover ── */
        .cl-userButtonPopoverMain,
        .cl-userButtonPopoverFooter,
        .cl-userButtonPopoverActions {
          background: transparent !important;
        }

        /* ── User name & email ── */
        .cl-userPreviewMainIdentifier {
          color: #ffffff !important;
          font-family: 'Syne', sans-serif !important;
          font-weight: 700 !important;
        }
        .cl-userPreviewSecondaryIdentifier {
          color: rgba(255,255,255,0.45) !important;
          font-family: 'DM Sans', sans-serif !important;
        }

        /* ── Action buttons (Manage account / Sign out) ── */
        .cl-userButtonPopoverActionButton {
          background: transparent !important;
          color: rgba(255,255,255,0.75) !important;
          font-family: 'DM Sans', sans-serif !important;
          border-radius: 10px !important;
          transition: background 0.2s !important;
        }
        .cl-userButtonPopoverActionButton:hover {
          background: rgba(255,255,255,0.07) !important;
          color: #ffffff !important;
        }
        .cl-userButtonPopoverActionButtonText {
          color: rgba(255,255,255,0.75) !important;
        }
        .cl-userButtonPopoverActionButton:hover .cl-userButtonPopoverActionButtonText {
          color: #ffffff !important;
        }

        /* ── Icons inside action buttons ── */
        .cl-userButtonPopoverActionButtonIconBox svg,
        .cl-userButtonPopoverActionButtonIconBox path {
          stroke: rgba(255,255,255,0.6) !important;
          fill: none !important;
          color: rgba(255,255,255,0.6) !important;
        }
        .cl-userButtonPopoverActionButton:hover .cl-userButtonPopoverActionButtonIconBox svg,
        .cl-userButtonPopoverActionButton:hover .cl-userButtonPopoverActionButtonIconBox path {
          stroke: #ffffff !important;
          color: #ffffff !important;
        }

        /* ── Divider line ── */
        .cl-userButtonPopoverCard hr,
        .cl-line,
        .cl-dividerLine {
          background: rgba(255,255,255,0.08) !important;
          border-color: rgba(255,255,255,0.08) !important;
        }

        /* ── Hide Clerk branding ── */
        .cl-userButtonPopoverFooter {
          display: none !important;
        }

        /* ── Clerk root wrappers ── */
        .cl-rootBox,
        [data-clerk-component] {
          background: transparent !important;
        }
      `}</style>

      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(11,11,26,0.85)" : "rgba(11,11,26,0.45)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          borderBottom: scrolled
            ? "1px solid rgba(124,58,237,0.25)"
            : "1px solid rgba(255,255,255,0.06)",
          boxShadow: scrolled
            ? "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)"
            : "none",
          padding: scrolled ? "10px 0" : "18px 0",
        }}
      >
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-[2px]"
          style={{ background: "linear-gradient(90deg,#F59E0B 0%,#F43F5E 50%,#7C3AED 100%)" }} />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* ── Logo ── */}
            <Link href="/" className="flex items-center gap-3 group" style={{ textDecoration: "none" }}>
              <div
                className="relative w-11 h-11 rounded-xl overflow-hidden transition-all duration-300"
                style={{ border: "1px solid rgba(245,158,11,0.35)", background: "rgba(255,255,255,0.06)" }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 0 16px rgba(245,158,11,0.45)")}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}
              >
                <Image src="/logo.png" alt="AM Institute Logo" fill className="object-contain p-1" priority />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-[10px] font-semibold tracking-[0.22em] uppercase"
                  style={{ color: "#F59E0B", fontFamily: "'DM Sans',sans-serif" }}>
                  AM Institute of
                </span>
                <span className="text-[1.15rem] font-extrabold tracking-tight text-white transition-colors duration-300 group-hover:text-amber-400"
                  style={{ fontFamily: "'Syne',sans-serif" }}>
                  Excellence
                </span>
              </div>
            </Link>

            {/* ── Desktop Nav ── */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setActiveLink(link.href)}
                  className={`nav-link relative px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${activeLink === link.href ? "active" : ""}`}
                  style={{
                    color: activeLink === link.href ? "#F59E0B" : "rgba(255,255,255,0.7)",
                    background: activeLink === link.href ? "rgba(245,158,11,0.08)" : "transparent",
                    fontFamily: "'DM Sans',sans-serif",
                    textDecoration: "none",
                  }}
                  onMouseEnter={e => { if (activeLink !== link.href) { e.currentTarget.style.color = "#fff"; e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}}
                  onMouseLeave={e => { if (activeLink !== link.href) { e.currentTarget.style.color = "rgba(255,255,255,0.7)"; e.currentTarget.style.background = "transparent"; }}}
                >
                  {link.label}
                  <span className="nav-link-underline" />
                </Link>
              ))}

              {/* Auth area */}
              <div className="flex items-center gap-2 ml-3 pl-3"
                style={{ borderLeft: "1px solid rgba(255,255,255,0.1)" }}>

                {/* Logged OUT */}
                <Show when="signed-out">
                  <Link href="/sign-in" className="auth-ghost-btn">
                    <LogIn size={14} /> Sign In
                  </Link>
                  <Link
                    href="/sign-up"
                    className="enroll-btn px-4 py-2 text-white text-sm font-bold rounded-xl"
                    style={{ fontFamily: "'Syne',sans-serif", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}
                  >
                    <UserPlus size={14} /> Sign Up
                  </Link>
                </Show>

                {/* Logged IN */}
                <Show when="signed-in">
                  <Link
                    href="/contact"
                    className="enroll-btn px-5 py-2 text-white text-sm font-bold rounded-xl"
                    style={{ fontFamily: "'Syne',sans-serif", textDecoration: "none" }}
                  >
                    Enroll Now
                  </Link>
                  <UserButton
                    afterSignOutUrl="/"
                    appearance={userButtonAppearance}
                  />
                </Show>
              </div>
            </div>

            {/* ── Mobile: UserButton + Hamburger ── */}
            <div className="lg:hidden flex items-center gap-2">
              <Show when="signed-in">
                <UserButton
                  afterSignOutUrl="/"
                  appearance={userButtonAppearance}
                />
              </Show>
              <button
                className="p-2 rounded-lg transition-colors duration-200"
                style={{ color: "rgba(255,255,255,0.7)", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
                onClick={() => setMenuOpen(!menuOpen)}
                onMouseEnter={e => { e.currentTarget.style.color = "#F59E0B"; e.currentTarget.style.borderColor = "rgba(245,158,11,0.3)"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.7)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* ── Mobile Menu ── */}
        <div
          className="lg:hidden overflow-hidden transition-all duration-300 ease-in-out"
          style={{ maxHeight: menuOpen ? "600px" : "0", opacity: menuOpen ? 1 : 0 }}
        >
          <div
            className="px-4 pt-3 pb-6 space-y-1"
            style={{ background: "rgba(11,11,26,0.97)", borderTop: "1px solid rgba(124,58,237,0.2)", backdropFilter: "blur(20px)" }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => { setActiveLink(link.href); setMenuOpen(false); }}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
                style={{
                  color: activeLink === link.href ? "#F59E0B" : "rgba(255,255,255,0.7)",
                  background: activeLink === link.href ? "rgba(245,158,11,0.08)" : "transparent",
                  borderLeft: activeLink === link.href ? "2px solid #F59E0B" : "2px solid transparent",
                  fontFamily: "'DM Sans',sans-serif",
                  textDecoration: "none",
                }}
              >
                <span>{link.label}</span>
                <ChevronDown size={14} className="opacity-40 -rotate-90" />
              </Link>
            ))}

            {/* Mobile auth buttons */}
            <div className="pt-3 space-y-2">
              <Show when="signed-out">
                <Link
                  href="/sign-in"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl text-sm font-semibold"
                  style={{ color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.04)", fontFamily: "'DM Sans',sans-serif", textDecoration: "none" }}
                >
                  <LogIn size={15} /> Sign In
                </Link>
                <Link
                  href="/sign-up"
                  onClick={() => setMenuOpen(false)}
                  className="enroll-btn flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl text-white font-bold"
                  style={{ fontFamily: "'Syne',sans-serif", textDecoration: "none" }}
                >
                  <UserPlus size={15} /> Sign Up Free
                </Link>
              </Show>

              <Show when="signed-in">
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="enroll-btn block w-full text-center px-5 py-3 text-white font-bold rounded-xl"
                  style={{ fontFamily: "'Syne',sans-serif", textDecoration: "none" }}
                >
                  Enroll Now
                </Link>
              </Show>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}


// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Menu, X, ChevronDown } from "lucide-react";

// const navLinks = [
//   { label: "About Us",                      href: "/about" },
//   { label: "Shiksheshwar 2.0",              href: "/shiksheshwar" },
//   { label: "Coaching for Junior & Senior",  href: "/coaching" },
//   { label: "Gallery",                        href: "/gallery" },
// ];

// export default function Navbar() {
//   const [menuOpen, setMenuOpen]   = useState(false);
//   const [scrolled, setScrolled]   = useState(false);
//   const [activeLink, setActiveLink] = useState(null);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       <style>{`
//         .nav-link-underline {
//           position: absolute;
//           bottom: 6px;
//           left: 16px;
//           right: 16px;
//           height: 1px;
//           border-radius: 999px;
//           background: linear-gradient(90deg, #F59E0B, #F43F5E);
//           transform: scaleX(0);
//           transform-origin: left;
//           transition: transform 0.3s ease;
//         }
//         .nav-link:hover .nav-link-underline,
//         .nav-link.active .nav-link-underline {
//           transform: scaleX(1);
//         }
//         .enroll-btn {
//           background: linear-gradient(135deg, #F59E0B, #F43F5E);
//           box-shadow: 0 4px 20px rgba(244,63,94,0.35);
//           transition: transform 0.2s, box-shadow 0.2s;
//         }
//         .enroll-btn:hover {
//           transform: translateY(-2px);
//           box-shadow: 0 8px 28px rgba(244,63,94,0.5);
//         }
//       `}</style>

//       <nav
//         className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
//         style={{
//           background: scrolled
//             ? "rgba(11,11,26,0.85)"
//             : "rgba(11,11,26,0.45)",
//           backdropFilter: "blur(18px)",
//           WebkitBackdropFilter: "blur(18px)",
//           borderBottom: scrolled
//             ? "1px solid rgba(124,58,237,0.25)"
//             : "1px solid rgba(255,255,255,0.06)",
//           boxShadow: scrolled
//             ? "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)"
//             : "none",
//           padding: scrolled ? "10px 0" : "18px 0",
//         }}
//       >
//         {/* Top gradient accent bar */}
//         <div
//           className="absolute top-0 left-0 right-0 h-[2px]"
//           style={{ background: "linear-gradient(90deg, #F59E0B 0%, #F43F5E 50%, #7C3AED 100%)" }}
//         />

//         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between">

//             {/* Logo + Name */}
//             <Link href="/" className="flex items-center gap-3 group">
//               <div
//                 className="relative w-11 h-11 rounded-xl overflow-hidden transition-all duration-300"
//                 style={{
//                   border: "1px solid rgba(245,158,11,0.35)",
//                   boxShadow: "0 0 0 0 rgba(245,158,11,0)",
//                   background: "rgba(255,255,255,0.06)",
//                 }}
//                 onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 0 16px rgba(245,158,11,0.45)")}
//                 onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 0 0 0 rgba(245,158,11,0)")}
//               >
//                 <Image
//                   src="/logo.png"
//                   alt="AM Institute of Excellence Logo"
//                   fill
//                   className="object-contain p-1"
//                   priority
//                 />
//               </div>
//               <div className="flex flex-col leading-tight">
//                 <span
//                   className="text-[10px] font-semibold tracking-[0.22em] uppercase"
//                   style={{ color: "#F59E0B", fontFamily: "'DM Sans',sans-serif" }}
//                 >
//                   AM Institute of
//                 </span>
//                 <span
//                   className="text-[1.15rem] font-extrabold tracking-tight text-white transition-colors duration-300 group-hover:text-amber-400"
//                   style={{ fontFamily: "'Syne', sans-serif" }}
//                 >
//                   Excellence
//                 </span>
//               </div>
//             </Link>

//             {/* Desktop Nav */}
//             <div className="hidden lg:flex items-center gap-1">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.href}
//                   href={link.href}
//                   onClick={() => setActiveLink(link.href)}
//                   className={`nav-link relative px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${activeLink === link.href ? "active" : ""}`}
//                   style={{
//                     color: activeLink === link.href ? "#F59E0B" : "rgba(255,255,255,0.7)",
//                     background: activeLink === link.href ? "rgba(245,158,11,0.08)" : "transparent",
//                     fontFamily: "'DM Sans',sans-serif",
//                   }}
//                   onMouseEnter={e => {
//                     if (activeLink !== link.href) {
//                       e.currentTarget.style.color = "#fff";
//                       e.currentTarget.style.background = "rgba(255,255,255,0.06)";
//                     }
//                   }}
//                   onMouseLeave={e => {
//                     if (activeLink !== link.href) {
//                       e.currentTarget.style.color = "rgba(255,255,255,0.7)";
//                       e.currentTarget.style.background = "transparent";
//                     }
//                   }}
//                 >
//                   {link.label}
//                   <span className="nav-link-underline" />
//                 </Link>
//               ))}

//               <Link
//                 href="/contact"
//                 className="enroll-btn ml-4 px-5 py-2 text-white text-sm font-bold rounded-xl"
//                 style={{ fontFamily: "'Syne',sans-serif" }}
//               >
//                 Enroll Now
//               </Link>
//             </div>

//             {/* Mobile Hamburger */}
//             <button
//               className="lg:hidden p-2 rounded-lg transition-colors duration-200"
//               style={{ color: "rgba(255,255,255,0.7)", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
//               onClick={() => setMenuOpen(!menuOpen)}
//               onMouseEnter={e => { e.currentTarget.style.color = "#F59E0B"; e.currentTarget.style.borderColor = "rgba(245,158,11,0.3)"; }}
//               onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.7)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
//               aria-label="Toggle menu"
//             >
//               {menuOpen ? <X size={22} /> : <Menu size={22} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         <div
//           className="lg:hidden overflow-hidden transition-all duration-300 ease-in-out"
//           style={{ maxHeight: menuOpen ? "500px" : "0", opacity: menuOpen ? 1 : 0 }}
//         >
//           <div
//             className="px-4 pt-3 pb-6 space-y-1"
//             style={{
//               background: "rgba(11,11,26,0.97)",
//               borderTop: "1px solid rgba(124,58,237,0.2)",
//               backdropFilter: "blur(20px)",
//             }}
//           >
//             {navLinks.map((link, i) => (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 onClick={() => { setActiveLink(link.href); setMenuOpen(false); }}
//                 className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
//                 style={{
//                   color: activeLink === link.href ? "#F59E0B" : "rgba(255,255,255,0.7)",
//                   background: activeLink === link.href ? "rgba(245,158,11,0.08)" : "transparent",
//                   borderLeft: activeLink === link.href ? "2px solid #F59E0B" : "2px solid transparent",
//                   fontFamily: "'DM Sans',sans-serif",
//                   animationDelay: `${i * 60}ms`,
//                 }}
//               >
//                 <span>{link.label}</span>
//                 <ChevronDown size={14} className="opacity-40 -rotate-90" />
//               </Link>
//             ))}

//             <div className="pt-3">
//               <Link
//                 href="/contact"
//                 onClick={() => setMenuOpen(false)}
//                 className="enroll-btn block w-full text-center px-5 py-3 text-white font-bold rounded-xl"
//                 style={{ fontFamily: "'Syne',sans-serif" }}
//               >
//                 Enroll Now
//               </Link>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }