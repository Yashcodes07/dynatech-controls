"use client";

import Image from "next/image";
import { useState } from "react";

const categories = ["ALL", "MACHINE", "VISION", "OTHERS"];

const products = [
    {
        title: "Office Building",
        category: "OTHERS",
        image: "/building.jpg",
        description: "Company office and infrastructure.",
    },
    {
        title: "End-of-Line (EOL) Poke Yoke Testing Station",
        category: "MACHINE",
        image: "/img-4.jpg",
        description: "This End-of-Line (EOL) Poke Yoke testing station is designed to prevent errors and ensure product quality before final dispatch.",
    },
    {
        title: "Brake Stiffness Testing Machine",
        category: "VISION",
        image: "/img-5.jpg",
        description: "This Brake Stiffness Testing Machine is designed to measure and validate the mechanical stiffness and performance of brake components under controlled conditions.",
    },
    {
        title: "YMC BDG UPPER ASSY STN-2",
        category: "MACHINE",
        image: "/img-6.jpg",
        description: "The YMC BDG Upper Assembly Station (STN-2) is a dedicated precision assembly machine designed for accurate and repeatable upper-component assembly operations.",
    },
    {
        title: "6 Axis Robot for Gluing Application ",
        category: "MACHINE",
        image: "/img-7.jpg",
        description: "With full six-axis articulation, the robot ensures accurate movement along complex paths, enabling consistent glue bead placement even on intricate component geometries.",
    },
    {
        title: "BMW head Lamp ASSY machine ",
        category: "MACHINE",
        image: "/img-8.jpg",
        description: "The BMW Head Lamp Assembly Machine is a high-precision, automated assembly system designed specifically for assembling automotive head lamp modules in compliance with BMW quality and process standards.",
    },
];

export default function ProductsGallery() {
    const [active, setActive] = useState("ALL");

    const filtered =
        active === "ALL"
            ? products
            : products.filter((p) => p.category === active);

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-10">
                    <span className="inline-block mb-3 rounded-full bg-red-100 px-4 py-1 text-sm font-semibold text-red-600">
                        GALLERY
                    </span>
                    <h2 className="text-4xl font-bold text-gray-800">
                        Check our <span className="text-red-600">Gallery</span>
                    </h2>
                </div>

                {/* Tabs */}
                <div className="flex justify-center gap-8 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActive(cat)}
                            className={`text-sm font-semibold transition ${active === cat
                                ? "text-red-600 border-b-2 border-red-600"
                                : "text-gray-500 hover:text-red-600"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filtered.map((item, index) => (
                        <div
                            key={index}
                            className="
    group
    relative
    overflow-hidden
    rounded-xl
    shadow-lg
    transform
    transition-all
    duration-300
    hover:scale-105
    hover:shadow-2xl
  "
                        >
                            {/* Image */}
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={500}
                                height={350}
                                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="
                absolute inset-0
                flex flex-col justify-end
                bg-black/60
                opacity-0
                group-hover:opacity-100
                transition
                p-5
              ">
                                <h3 className="text-lg font-semibold text-white">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-gray-200">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
