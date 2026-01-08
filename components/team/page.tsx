"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Mr N S Kushwaha",
    role: "Managing Director",
    description:
      "Good support from the management. A great place to work. The managerial support motivates me to continuously raise my standards every day.",
    experience: "24 yrs+",
    photo: "/Ns kushwaha.webp",
    position: "50% 0%",
  },
  {
    name: "Mr Rakesh Kumar",
    role: "HOD - Design",
    description:
      "Leadership here encourages creativity, innovation, and ownership. Every project pushes us to do better.",
    experience: "15 yrs+",
    photo: "/rakesh (1).webp",
    position: "50% 0%",
  },
  {
    name: "Mr Shubhankar Vikram Singh",
    role: "Project Head",
    description:
      "Innovation and technology are at the heart of everything we build for our clients.",
    experience: "6 yrs+",
    photo: "/svs-3.webp",
    position: "50% 35%",
  },
  {
    name: "Mrs Bhawna Kushwaha",
    role: "Head of Administration",
    description:
      "Ensuring operational excellence through streamlined workflows and strategic resource management to support our large-scale automation initiatives.",
    experience: "20 yrs+",
    photo: "/bk.webp",
    position: "50% 0%",
  },
  {
    name: "Mr Praval Singh",
    role: "Business Development",
    description:
      "Driving growth by identifying strategic partnerships and delivering innovative automation solutions that solve complex client challenges.",
    experience: "10 yrs+",
    photo: "/praval (1).webp",
  },
  {
    name: "Mr Vipin Yadav",
    role: "HOD - Application",
    description:
      "Leading the design and deployment of specialized automation applications, ensuring every system is optimized for peak technical performance.",
    experience: "10 yrs+",
    photo: "/vipin.webp",
  },
  {
    name: "Mr Amit Yadav",
    role: "Purchase Head",
    description:
      "Optimizing our supply chain and procurement strategies to ensure high-quality technical components are sourced efficiently for every project.",
    experience: "12 yrs+",
    photo: "/amit.webp",
    position: "50% 0%",
  },
];

export default function TeamTestimonialSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % testimonials.length),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  const t = testimonials[index];

  return (
    <section className="relative w-full overflow-hidden min-h-[650px] md:h-[450px]">
      {/* Background */}
      <Image
        src="/img-9.webp"
        alt="Office background"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/70" />

      {/* Heading */}
      <div className="relative z-10 pt-10 text-center">
        <h2 className="text-3xl font-extrabold text-white md:text-4xl">
          Our <span className="text-red-500">Dynatech</span> Team
        </h2>
        <div className="mx-auto mt-2 h-1 w-24 rounded-full bg-red-500" />
      </div>

      {/* Content */}
      <div className="relative z-10 mt-10 flex items-center justify-center px-6">
        <div className="mx-auto flex max-w-5xl flex-col md:flex-row items-center gap-10 text-white">

          {/* Image */}
          <div className="flex-shrink-0">
            <div className="h-44 w-44 overflow-hidden rounded-full border-4 border-red-500 shadow-2xl">
              <Image
                key={t.photo}
                src={t.photo}
                alt={t.name}
                width={176}
                height={176}
                className="h-full w-full object-cover transition-opacity duration-500"
                style={{ objectPosition: t.position ?? "50% 50%" }}
              />
            </div>
          </div>

          {/* Text */}
          <div
            key={index}
            className="max-w-2xl text-center md:text-left animate-in fade-in slide-in-from-right-4 duration-700"
          >
            <p className="mb-6 text-lg md:text-xl italic leading-relaxed text-gray-100">
              “{t.description}”
            </p>

            <p className="text-xl md:text-2xl font-bold tracking-wide">
              {t.name}
            </p>

            <p className="text-sm md:text-md font-medium text-red-400">
              {t.role}
            </p>

            <p className="mt-2 text-sm font-semibold text-gray-400 flex items-center justify-center md:justify-start gap-2">
              <span className="h-px w-6 bg-gray-500"></span>
              {t.experience} Experience
            </p>

            {/* Dots */}
            <div className="mt-6 flex justify-center md:justify-start gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? "w-8 bg-red-500" : "w-2 bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
