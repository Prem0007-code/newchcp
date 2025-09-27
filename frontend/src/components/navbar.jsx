"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const items = [
    { href: "#overview", id: "overview", label: "Overview" },
    { href: "#rules", id: "rules", label: "Rules" },
    { href: "#timeline", id: "timeline", label: "Timeline" },
    { href: "#register", id: "register", label: "Register" },
    { href: "#quick", id: "quick", label: "Quick Access" },
    { href: "#contact", id: "contact", label: "Contact" },
  ];

  const handleNav = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const nav = document.getElementById("site-navbar");
    const navH = nav ? nav.offsetHeight : 0;
    const rect = el.getBoundingClientRect();
    const offsetTop = window.scrollY + rect.top - navH - 16; // 16px breathing room
    window.scrollTo({ top: offsetTop, behavior: "smooth" });

    // add temporary green glow highlight
    el.classList.add("section-highlight");
    window.setTimeout(() => el.classList.remove("section-highlight"), 1800);
    setOpen(false);
  };

  return (
    <header id="site-navbar" className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-[#070314]/60 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-4 md:py-5 flex items-center justify-between">
        <Link href="#" className="font-semibold tracking-wider text-sm text-white/90 flex items-center">
          <img src="/k3.png" alt="codehurdle" className="h-7 w-auto mr-2" />
          <span className="sr-only">codehurdle</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {items.map((it) => (
            <a key={it.href} href={it.href} onClick={(e)=>handleNav(e, it.id)} className="text-white/80 hover:text-white transition-colors">
              {it.label}
            </a>
          ))}
          <Link href="/admin-submissions" className="text-cyan-300 hover:text-cyan-200 transition-colors">
            Admin Submissions
          </Link>
          <Link href="/admin-after-registrations" className="text-cyan-300 hover:text-cyan-200 transition-colors">
            Admin Registrations
          </Link>
        </nav>

        <button
          className="md:hidden text-white/80 hover:text-white"
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
      </div>
        {open && (
          <div className="md:hidden border-t border-white/10">
            <div className="px-4 py-3 flex flex-col gap-3">
              {items.map((it) => (
                <a key={it.href} href={it.href} onClick={(e)=>handleNav(e, it.id)} className="text-white/80 hover:text-white">
                  {it.label}
                </a>
              ))}
              <Link href="/admin-submissions" onClick={() => setOpen(false)} className="text-cyan-300 hover:text-cyan-200">
                Admin Submissions
              </Link>
              <Link href="/admin-after-registrations" onClick={() => setOpen(false)} className="text-cyan-300 hover:text-cyan-200">
                Admin Registrations
              </Link>
            </div>
          </div>
        )}
      </header>
    );
}
