import {
  GraduationCap,
  Users,
  Award,
  BookOpen,
  Trophy,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  ArrowUpRight,
  Heart,
  ChevronRight,
} from "lucide-react";

const QUICK_LINKS = [
  { label: "About Us",     href: "/about"        },
  { label: "Shiksheshwar", href: "/shiksheshwar" },
  { label: "Coaching",     href: "/coaching"     },
  { label: "Gallery",      href: "/gallery"      },
  { label: "Contact",      href: "/contact"      },
];

const PROGRAMS = [
  { icon: <BookOpen size={13} />,    label: "School (Class 6–12)",  color: "text-sky-400"    },
  { icon: <GraduationCap size={13}/>,label: "CA Foundation",        color: "text-violet-400" },
  { icon: <GraduationCap size={13}/>,label: "CS Foundation",        color: "text-violet-400" },
  { icon: <GraduationCap size={13}/>,label: "CMA Foundation",       color: "text-violet-400" },
  { icon: <Trophy size={13} />,      label: "JEE Mains & Advance",  color: "text-amber-400"  },
  { icon: <Trophy size={13} />,      label: "NEET / CUET",          color: "text-rose-400"   },
];

const SOCIAL_LINKS = [
  {
    label:      "Instagram",
    handle:     "@am_institute_of_excellence",
    href:       "https://www.instagram.com/am_institute_of_excellence",
    icon:       <Instagram size={18} />,
    gradient:   "from-pink-500 to-orange-400",
    border:     "border-pink-500/25",
    text:       "text-pink-400",
    bg:         "bg-pink-500/10",
    hoverBg:    "hover:bg-pink-500/20",
    iconBorder: "border-pink-500/30",
  },
  {
    label:      "LinkedIn",
    handle:     "Anshul Mittal",
    href:       "https://www.linkedin.com/in/anshul-mittal",
    icon:       <Linkedin size={18} />,
    gradient:   "from-sky-500 to-blue-600",
    border:     "border-sky-500/25",
    text:       "text-sky-400",
    bg:         "bg-sky-500/10",
    hoverBg:    "hover:bg-sky-500/20",
    iconBorder: "border-sky-500/30",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#07070F] text-white font-sans">

      {/* Top glow border */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500/60 to-transparent" />

      {/* Ambient orbs */}
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-violet-600/10 blur-[90px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-rose-500/10 blur-[80px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-amber-400/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-10">

        {/* ── 4-column grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* ─── COL 1 · Brand ─── */}
          <div className="flex flex-col gap-5">

            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-400 to-rose-500 flex items-center justify-center shadow-lg shadow-rose-500/30 shrink-0">
                <GraduationCap size={22} className="text-white" />
              </div>
              <div>
                <p className="font-extrabold text-[0.9rem] leading-tight tracking-tight text-white">
                  AM Institute
                </p>
                <p className="text-[9px] text-amber-400 font-bold tracking-[0.22em] uppercase">
                  of Excellence
                </p>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-white/35 text-[11px] italic tracking-wide border-l-2 border-violet-500/30 pl-3">
              "Give Wings to Your Dreams"
            </p>

            {/* Description */}
            <p className="text-white/45 text-[0.82rem] leading-[1.75]">
              Join AM Institute of Excellence and start your journey toward academic and professional success.
            </p>

            {/* Badges */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2.5 bg-violet-500/8 border border-violet-500/15 rounded-xl px-3 py-2">
                <div className="w-6 h-6 rounded-lg bg-violet-500/20 border border-violet-500/30 flex items-center justify-center shrink-0">
                  <Users size={12} className="text-violet-400" />
                </div>
                <span className="text-white/60 text-[0.78rem] font-medium">Expert Faculty Support</span>
              </div>
              <div className="flex items-center gap-2.5 bg-amber-500/8 border border-amber-500/15 rounded-xl px-3 py-2">
                <div className="w-6 h-6 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center shrink-0">
                  <Award size={12} className="text-amber-400" />
                </div>
                <span className="text-white/60 text-[0.78rem] font-medium">Scholarship Programs</span>
              </div>
            </div>
          </div>

          {/* ─── COL 2 · Quick Links ─── */}
          <div>
            <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-white/30 mb-6 flex items-center gap-2">
              <span className="inline-block w-4 h-px bg-violet-500/50" />
              Quick Links
            </p>
            <ul className="space-y-0.5">
              {QUICK_LINKS.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 py-2 px-2 rounded-lg text-white/50 hover:text-white hover:bg-white/5 transition-all duration-200 text-[0.83rem] font-medium"
                  >
                    <ChevronRight
                      size={13}
                      className="text-violet-500/40 group-hover:text-violet-400 group-hover:translate-x-0.5 transition-all duration-200 shrink-0"
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ─── COL 3 · Programs ─── */}
          <div>
            <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-white/30 mb-6 flex items-center gap-2">
              <span className="inline-block w-4 h-px bg-amber-500/50" />
              Programs
            </p>
            <ul className="space-y-0.5">
              {PROGRAMS.map((p, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2.5 py-2 px-2 rounded-lg hover:bg-white/4 transition-colors duration-150 text-[0.82rem] text-white/50 hover:text-white/70 font-medium cursor-default"
                >
                  <span className={`${p.color} shrink-0`}>{p.icon}</span>
                  {p.label}
                </li>
              ))}
            </ul>
          </div>

          {/* ─── COL 4 · Follow Me ─── */}
          <div className="flex flex-col gap-5">
            <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-white/30 flex items-center gap-2">
              <span className="inline-block w-4 h-px bg-pink-500/50" />
              Follow Me
            </p>

            {/* Social cards */}
            <div className="flex flex-col gap-3">
              {SOCIAL_LINKS.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 p-3 rounded-2xl border ${s.border} ${s.bg} ${s.hoverBg} group transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg`}
                >
                  <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform duration-200`}>
                    <span className="text-white">{s.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-[0.78rem] font-bold ${s.text} leading-tight`}>
                      {s.label}
                    </p>
                    <p className="text-white/35 text-[0.7rem] truncate mt-0.5">
                      {s.handle}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="text-white/20 group-hover:text-white/55 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-200 shrink-0"
                  />
                </a>
              ))}
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-white/30 text-[0.75rem] bg-white/3 border border-white/6 rounded-xl px-3 py-2">
              <MapPin size={12} className="text-emerald-400/60 shrink-0" />
              Kurukshetra, Haryana
            </div>

            {/* CTA button */}
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-[0.8rem] font-bold text-white bg-gradient-to-r from-amber-400 to-rose-500 shadow-md shadow-rose-500/25 hover:-translate-y-0.5 hover:shadow-rose-500/45 hover:shadow-lg transition-all duration-200 w-fit"
            >
              <Phone size={13} />
              Get in Touch
            </a>
          </div>

        </div>

        {/* ── Divider ── */}
        <div className="mt-14 mb-7 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* ── Bottom bar ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

          <p className="text-white/20 text-[0.72rem] text-center sm:text-left">
            © {new Date().getFullYear()} AM Institute of Excellence · All Rights Reserved
          </p>

          <p className="text-white/18 text-[0.7rem] flex items-center gap-1.5">
            Made with
            <Heart size={10} className="text-rose-500/50 fill-rose-500/50" />
            for every student's future
          </p>

          <div className="flex items-center gap-2">
            {SOCIAL_LINKS.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                className={`w-8 h-8 rounded-xl ${s.bg} border ${s.border} ${s.text} flex items-center justify-center hover:scale-110 hover:brightness-125 transition-all duration-200`}
              >
                {s.icon}
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
}