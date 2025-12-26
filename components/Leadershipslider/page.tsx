"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const members = [
  {
    name: "Ns Kushawaha",
    role: "Company CEO",
    quote:
      "We deliver cutting-edge digital solutions that empower businesses to grow, transform, and lead in a competitive world.",
    image: "/Ns kushwaha.png",
  },
  {
    name: "Bhawna Kushwaha",
    role: "Co-Partner",
    quote:
      "Innovation and technology are at the heart of everything we build for our clients.",
    image: "/bk.jpg",
  },
  {
    name: "Shubhankar Vikram Singh",
    role: "Operations Head",
    quote:
      "Our focus is on scalable, reliable, and future-ready digital solutions.",
    image: "/SVs.jpg",
  },
];

export default function LeadershipSlider() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((index - 1 + members.length) % members.length);
  const next = () =>
    setIndex((index + 1) % members.length);

  const member = members[index];

  return (
    <section id="home" className="py-10 bg-white scroll-mt-24">
      {/* Soft red outer border */}
      <div className="mx-auto max-w-7xl rounded-3xl bg-red-600/10 p-4">
        {/* White card */}
        <div className="relative rounded-2xl bg-red-50 px-10 py-14 shadow-xl">
          <div className="grid items-center gap-12 md:grid-cols-2">

            {/* LEFT CONTENT */}
            <div>
              <h2 className="mb-5 text-4xl font-bold text-red-600 leading-tight">
                Building Trust Through <br /> Technology & Innovation
              </h2>

              <p className="mb-4 text-lg text-gray-700">
                {member.quote}
              </p>

              <p className="text-sm text-gray-600 leading-tight">
                ~ {member.name}
              </p>
              <p className="mb-6 text-sm text-gray-500 leading-tight">
                {member.role}
              </p>

              <Link
                href="#contact"
                className="inline-block rounded-full bg-red-600 px-7 py-3 text-white font-semibold transition hover:bg-red-700"
              >
                Contact Us
              </Link>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative flex justify-center">
              <div className="relative h-[320px] w-[320px] rounded-full border-4 border-red-600 overflow-hidden shadow-2xl bg-white">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* LEFT ARROW */}
              <button
                onClick={prev}
                aria-label="Previous"
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-red-600 p-3 text-white shadow-lg hover:bg-red-700 transition"
              >
                <ChevronLeft size={22} />
              </button>

              {/* RIGHT ARROW */}
              <button
                onClick={next}
                aria-label="Next"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-red-600 p-3 text-white shadow-lg hover:bg-red-700 transition"
              >
                <ChevronRight size={22} />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
