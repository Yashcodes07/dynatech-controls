"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { LazyMotion, domMax, m, AnimatePresence } from "framer-motion";

const members = [
  {
    name: "N S Kushawaha",
    role: "Company CEO",
    quote: "We deliver cutting-edge Hardware solutions that empower businesses to grow, transform, and lead in a competitive world.",
    image: "/Ns kushwaha.webp",
  },
  {
    name: "Bhawna Kushwaha",
    role: "Co-Partner",
    quote: "Innovation and technology are at the heart of everything we build for our clients.",
    image: "/bk.webp",
  },
  {
    name: "Shubhankar Vikram Singh",
    role: "Operations Head",
    quote: "Our focus is on scalable, reliable, and future-ready digital solutions.",
    image: "/SVs.webp", // Ensure you converted this to .webp!
  },
];

export default function LeadershipSlider() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((prevIndex) => (prevIndex + 1) % members.length);
  }, []);

  const prev = () => setIndex((prevIndex) => (prevIndex - 1 + members.length) % members.length);

  useEffect(() => {
    const interval = setInterval(() => { next(); }, 5000);
    return () => clearInterval(interval);
  }, [next]);

  const member = members[index];

  return (
    <LazyMotion features={domMax}>
      <section id="home" className="py-10 bg-white scroll-mt-24 overflow-hidden">
        <div className="mx-auto max-w-7xl rounded-3xl bg-red-600/10 p-4">
          <div className="relative rounded-2xl bg-red-50 px-10 py-14 shadow-xl">
            <div className="grid items-center gap-12 md:grid-cols-2">

              {/* LEFT CONTENT */}
              <div>
                {/* Use standard HTML for the main title to prevent LCP delay */}
                <h2 className="mb-5 text-4xl font-bold text-red-600 leading-tight">
                  Building Trust Through <br /> Technology & Innovation
                </h2>

                <AnimatePresence mode="wait" initial={false}>
                  <m.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="mb-4 text-lg text-gray-700 italic">
                      "{member.quote}"
                    </p>
                    <p className="text-sm font-bold text-gray-600 leading-tight">
                      ~ {member.name}
                    </p>
                    <p className="mb-6 text-sm text-gray-500 leading-tight">
                      {member.role}
                    </p>
                  </m.div>
                </AnimatePresence>

                <Link
                  href="#contact"
                  className="inline-block rounded-full bg-red-600 px-7 py-3 text-white font-semibold transition-transform hover:scale-105 active:scale-95"
                >
                  Contact Us
                </Link>
              </div>

              {/* RIGHT IMAGE SECTION */}
              <div className="relative flex justify-center">
                <AnimatePresence mode="wait" initial={false}>
                  <m.div 
                    key={`img-${index}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative h-[320px] w-[320px] rounded-full border-4 border-red-600 overflow-hidden shadow-2xl bg-white"
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      priority={index === 0} 
                      sizes="320px"
                      className="object-cover object-top"
                    />
                  </m.div>
                </AnimatePresence>

                <button onClick={prev} aria-label="Previous slide" className="absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-red-600 p-3 text-white shadow-lg hover:bg-red-700 transition">
                  <ChevronLeft size={22} />
                </button>
                <button onClick={next} aria-label="Next slide" className="absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-red-600 p-3 text-white shadow-lg hover:bg-red-700 transition">
                  <ChevronRight size={22} />
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}