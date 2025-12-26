"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, Clock } from "lucide-react";

const sections = ["home", "about", "services", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + 140;

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const top = el.offsetTop;
        const height = el.offsetHeight;

        if (scrollPos >= top && scrollPos < top + height) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* CONTACT STRIP */}
      <div className="fixed top-0 z-50 w-full bg-red-600 text-white">
        <div className="mx-auto flex max-w-7xl justify-between px-6 py-2 text-sm">
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <Mail size={14} /> shubhankar.singh@dynatechcontrols.in
            </span>
            <span className="flex items-center gap-2">
              <Phone size={14} /> +91-81301-11432  ||  +91-72899-89683
            </span>
          </div>
          <span className="hidden md:flex items-center gap-2">
            <Clock size={14} /> Mon – Sat 09:00 – 05:40
          </span>
        </div>
      </div>

      {/* NAVBAR */}
      <div className="fixed top-[36px] z-40 w-full bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <Image src="/dc logo.jpg" alt="Logo" width={42} height={42} />
            <div>
              <p className="font-bold text-red-600">Dynatech</p>
              <p className="font-semibold text-black">Controls</p>
            </div>
          </div>

          {/* NAV LINKS */}
          <nav className="relative hidden md:flex gap-8 text-sm font-medium">
            {sections.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`relative pb-2 transition ${
                  active === item
                    ? "text-red-600"
                    : "text-gray-700 hover:text-red-600"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}

                {/* ANIMATED UNDERLINE */}
                <span
                  className={`absolute left-0 -bottom-0.5 h-[2px] w-full bg-red-600 transition-all duration-300 ${
                    active === item ? "scale-x-100" : "scale-x-0"
                  } origin-left`}
                />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <Link
            href="#contact"
            className="rounded-full bg-red-600 px-6 py-2 text-sm font-semibold text-white hover:bg-red-700"
          >
            Get Quote
          </Link>
        </div>
      </div>

      {/* SPACER */}
      <div className="h-[110px]" />
    </>
  );
}
