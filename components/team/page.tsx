"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Mr N S Kushwaha",
    role: "MANAGING DIRECTOR - 24+YRS ",
    description:
    "At DYNATECH CONTROLS, we specialize in delivering reliable, high-performance automation and engineering solutions. With a focus on precision, quality, and continuous improvement, we help our customers achieve efficient and dependable operations.",
   
    photo: "/Ns kushwaha.webp",
    position: "50% 0%",
  },
  {
    name: "Mrs Bhavna Kushwaha",
    role: "DIRECTOR ADMIN - 20+ YRS",
    description:
      "At DYNATECH CONTROLS We ensure efficient coordination, accurate documentation, and smooth day-to-day operations to support timely project execution.",
   
    photo: "/bk.webp",
    position: "50% 0%",
  },
  {
    name: "Mr Praval Singh",
    role: "AGM- BUSSINESS DEVELOPMENT - 10+ YRS",
    description:
      "We focus on identifying opportunities, understanding customer needs, and delivering value-driven engineering and automation solutions through strong partnerships.",
    
    photo: "/praval (1).webp",
  },
  {
    name: "Mr Rakesh Kumar",
    role: " HOD DESIGN -  16+ YRS",
    description:
      "We lead the design and development of robust, efficient, and scalable engineering solutions, driven by precision, innovation, and performance.",
   
    photo: "/Rakesh(3).webp",
    position: "50% 0%",
  },
  {
    name: "Mr Vipin Yadav",
    role: "AGM- APPLICATION - 10+ YRS",
    description:
      "We develop and optimize application solutions that ensure seamless system integration, reliable performance, and customer-specific functionality.",
   
    photo: "/Rakesh(2).webp",
    position: "20% 0%",
  },
  {
    name: "Dhanjay Prasad",
    role: "AGM - ACCOUNTS AND ADMIN - 10+YRS",
    description:
      "We ensure financial discipline, regulatory compliance, and efficient administrative processes to support sustainable and well-governed operations.",
   
    photo: "/Dhanjay.webp",
    position: "50% 35%",
  },
  {
    name: "Mr Amit Yadav",
    role: "MANAGER - INDIRECT PURCHASE",
    description:
      "We manage cost-effective and timely procurement of indirect materials and services to ensure uninterrupted operations and process efficiency.",
    
    photo: "/amit.webp",
    position: "50% 0%",
  },
  {
    name: "Mr Shubhankar Vikram Singh",
    role: "AGM - PROJECTS - 8+ YRS",
    description:
      "We drive disciplined project execution through structured planning, technical coordination, and on-time delivery while meeting quality and performance standards",
 
    photo: "/svs-3.webp",
    position: "50% 35%",
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
    <section className="relative w-full overflow-hidden min-h-[500px] md:h-[450px]">
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
                width={196}
                height={196}
                className="h-full w-full object-cover transition-opacity duration-400"
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

            {/* <p className="mt-2 text-sm font-semibold text-gray-400 flex items-center justify-center md:justify-start gap-2">
              <span className="h-px w-6 bg-gray-500"></span>
              {t.experience} Experience
            </p> */}

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
