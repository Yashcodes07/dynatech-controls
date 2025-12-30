"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["ALL", "MACHINE", "Testing Application", "OTHERS"];

const products = [
    { id: 1, title: "Office Building", category: "OTHERS", image: "/building.webp", description: "Company office and infrastructure." },
    { id: 2, title: "EOL Poke Yoke Station", category: "MACHINE", image: "/img-4.webp", description: "Prevent errors and ensure product quality before dispatch." },
    { id: 3, title: "Brake Stiffness Tester", category: "Testing Application", image: "/img-5.webp", description: "Measure and validate mechanical stiffness under controlled conditions." },
    { id: 4, title: "YMC BDG UPPER ASSY", category: "MACHINE", image: "/img-6.webp", description: "Dedicated precision assembly machine for repeatable operations." },
    { id: 5, title: "6 Axis Gluing Robot", category: "MACHINE", image: "/img-7.webp", description: "Accurate movement along complex paths for consistent glue beads." },
    { id: 6, title: "BMW Head Lamp ASSY", category: "MACHINE", image: "/img-8.webp", description: "Automated assembly system compliant with BMW standards." },
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

                {/* Modern Tabs */}
                <div className="flex justify-center gap-4 md:gap-8 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActive(cat)}
                            className={`relative px-4 py-2 text-sm font-bold transition-all duration-300 ${
                                active === cat ? "text-red-600" : "text-gray-500 hover:text-red-400"
                            }`}
                        >
                            {cat}
                            {active === cat && (
                                <motion.div 
                                    layoutId="activeTab"
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600"
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Animated Grid */}
                <motion.div 
                    layout
                    className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                    <AnimatePresence mode="popLayout">
                        {filtered.map((item) => (
                            <motion.div
                                layout
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="group relative overflow-hidden rounded-2xl bg-slate-100 shadow-lg h-[350px] cursor-pointer"
                            >
                                {/* Image with Zoom Effect */}
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Modern Slide-up Content Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent translate-y-[70%] group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col justify-end p-8">
                                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <h3 className="text-xl font-bold text-white mb-3">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-gray-200 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                                            {item.description}
                                        </p>
                                    </div>
                                    
                                    {/* Bottom Accent Line that grows on hover */}
                                    <div className="mt-4 h-1 w-0 bg-red-600 group-hover:w-full transition-all duration-700 delay-300" />
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

            </div>
        </section>
    );
}