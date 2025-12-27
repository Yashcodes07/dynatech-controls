"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const members = [
  {
    name: "N S Kushawaha",
    role: "Company CEO",
    quote: "We deliver cutting-edge Hardware solutions that empower businesses to grow, transform, and lead in a competitive world.",
    image: "/Ns kushwaha.png",
  },
  {
    name: "Bhawna Kushwaha",
    role: "Co-Partner",
    quote: "Innovation and technology are at the heart of everything we build for our clients.",
    image: "/bk.jpg",
  },
  {
    name: "Shubhankar Vikram Singh",
    role: "Operations Head",
    quote: "Our focus is on scalable, reliable, and future-ready digital solutions.",
    image: "/SVs.jpg",
  },
];

export default function LeadershipSlider() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((prevIndex) => (prevIndex - 1 + members.length) % members.length);
  const next = () => setIndex((prevIndex) => (prevIndex + 1) % members.length);

  useEffect(() => {
    const interval = setInterval(() => { next(); }, 5000); // Increased to 5s to allow reading
    return () => clearInterval(interval);
  }, [index]);

  const member = members[index];

  return (
    <section id="home" className="py-10 bg-white scroll-mt-24 overflow-hidden">
      <div className="mx-auto max-w-7xl rounded-3xl bg-red-600/10 p-4">
        <div className="relative rounded-2xl bg-red-50 px-10 py-14 shadow-xl">
          <div className="grid items-center gap-12 md:grid-cols-2">

            {/* LEFT CONTENT */}
            <div>
              {/* 1. Dynamic Fade-Up Title */}
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="mb-5 text-4xl font-bold text-red-600 leading-tight"
              >
                Building Trust Through <br /> Technology & Innovation
              </motion.h2>

              {/* Animate text content on slide change */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5 }}
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
                </motion.div>
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
              {/* 2. Parallax/Floating Effect */}
              <motion.div 
                key={`img-${index}`}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ 
                  scale: 1, 
                  opacity: 1,
                  y: [0, -15, 0] // Gentle floating animation
                }}
                transition={{ 
                  scale: { duration: 0.5 },
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" } 
                }}
                className="relative h-[320px] w-[320px] rounded-full border-4 border-red-600 overflow-hidden shadow-2xl bg-white"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                  priority
                />
              </motion.div>

              {/* ARROWS */}
              <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-red-600 p-3 text-white shadow-lg hover:bg-red-700 transition hover:scale-110">
                <ChevronLeft size={22} />
              </button>
              <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-red-600 p-3 text-white shadow-lg hover:bg-red-700 transition hover:scale-110">
                <ChevronRight size={22} />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}