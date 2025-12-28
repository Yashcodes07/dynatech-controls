"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const testimonials = [
    {
        name: "N S Kushwaha",
        role: "Managing Director",
        experience:
            "Good support from the management. A great place to work. The managerial support motivates me to continuously raise my standards every day.",
        photo: "/Ns kushwaha.webp",
        position: "50% 0%",
    },
    {
        name: "Rakesh Kumar",
        role: "HOD of Design",
        experience:
            "Leadership here encourages creativity, innovation, and ownership. Every project pushes us to do better.",
        photo: "/Rakesh.webp",
    },
    {
        name: "Shubhankar Vikram Singh",
        role: "Project Coordinator",
        experience:
            "Innovation and technology are at the heart of everything we build for our clients.",
        photo: "/SVS (2).webp",
        position: "50% 35%", // 👈 custom crop
    },
    {
        name: "Mrs Bhawna Kushwaha",
        role: "Head of Administration",
        experience:
            "Working with advanced automation projects has helped me grow technically and professionally.",
        photo: "/bk.webp",
    },
    {
        name: "Praval Singh",
        role: "Business Development",
        experience:
            "Working with advanced automation projects has helped me grow technically and professionally.",
        photo: "/Praval.webp",
    },
];

export default function TeamTestimonialSlider() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(
            () => setIndex((prev) => (prev + 1) % testimonials.length),
            3000
        );
        return () => clearInterval(interval);
    }, []);

    const t = testimonials[index];

    return (
        <section className="relative h-[500px] w-full overflow-hidden">
            {/* Background */}
            <Image
                src="/office-bg.webp"
                alt="Office background"
                fill
                priority
                className="object-cover"
            />

            <div className="absolute inset-0 bg-black/60" />


            {/* HEADING */}
            <div className="relative z-10 pt-6 text-center">
                <h2 className="text-3xl font-extrabold text-white md:text-4xl">
                    Our <span className="text-red-500">Dynatech</span> Team
                </h2>
                <div className="mx-auto mt-2 h-1 w-24 rounded-full bg-red-500" />
            </div>

          
            {/* CONTENT */}
            <div className="relative z-10 flex mt-16 flex-1 items-center justify-center px-6">
                <div className="mx-auto flex max-w-5xl items-center gap-10 text-white">


                    {/* LEFT: Profile Image */}
                    <div className="flex-shrink-0">
                        <div className="h-44 w-44 overflow-hidden rounded-full border-4 border-white shadow-lg">
                            <Image
                                src={t.photo}
                                alt={t.name}
                                width={176}
                                height={176}
                                className="h-full w-full object-cover"
                                style={{
                                    objectPosition: t.position ?? "50% 50%",
                                }}
                            />
                        </div>
                    </div>

                    {/* RIGHT: Text */}
                    <div className="max-w-3xl">
                        <p className="mb-4 text-lg italic leading-relaxed">
                            “{t.experience}”
                        </p>

                        <p className="text-xl font-semibold">{t.name}</p>
                        <p className="text-sm text-gray-300">{t.role}</p>

                        {/* Dots */}
                        <div className="mt-4 flex gap-2">
                            {testimonials.map((_, i) => (
                                <span
                                    key={i}
                                    className={`h-2 w-2 rounded-full ${i === index ? "bg-white" : "bg-white/40"
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
