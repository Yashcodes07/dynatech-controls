"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Settings, 
  Eye, 
  Database, 
  ScanBarcode 
} from "lucide-react";

const services = [
  {
    title: "Special Purpose Machines",
    icon: Settings,
    description:
      "Special Purpose Machines (SPM) are custom-built machines designed as per customer requirements. Applications include Leak Testing, Light Testing, EOL Machines.",
    animation: { rotate: 360 } // Gear rotates
  },
  {
    title: "Machine Vision",
    icon: Eye,
    description:
      "Machine Vision solutions including Guidance, Identification, Gauging, Inspection (GIGI). Applications include Lamp Inspection, OCR, Robo Guidance.",
    animation: { scale: [1, 1.2, 1] } // Eye "pulses" or blinks
  },
  {
    title: "Data Traceability",
    icon: Database,
    description:
      "Data Traceability enables companies to track products across processes, providing impact, insights, and added value. We offer end-to-end traceability.",
    animation: { y: [0, -5, 0] } // Database floats
  },
  {
    title: "Laser Marking & Barcode",
    icon: ScanBarcode,
    description:
      "We provide laser marking and pin marking solutions with high-quality barcode scanners for paper stickers and DPM, integrated with PC applications.",
    animation: { opacity: [1, 0.5, 1] } // Scan effect
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-4xl font-bold text-gray-700 mb-12">
          Featured Services
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              // 1. 3D Tilt and Scale Effect
              whileHover={{ 
                scale: 1.05,
                rotateY: 10,
                rotateX: -5,
                z: 50
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="
                group
                relative
                perspective-1000
                rounded-2xl
                bg-white
                p-8
                shadow-lg
                cursor-default
                transition-colors
                duration-500
                hover:bg-gradient-to-tl from-black via-red-900 to-red-600
              "
            >
              {/* Icon Section */}
              <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-xl bg-red-50 text-red-600 group-hover:bg-red-500 group-hover:text-white transition-colors duration-300">
                <motion.div
                  // 2. Icon-specific animation triggered by card hover
                  variants={{
                    hover: service.animation
                  }}
                  whileHover="hover"
                  transition={{ 
                    repeat: Infinity, 
                    duration: 2, 
                    ease: "linear" 
                  }}
                >
                  <service.icon size={32} />
                </motion.div>
              </div>

              <h3 className="
                mb-4
                text-lg
                font-semibold
                text-gray-800
                group-hover:text-white
                transition-colors
              ">
                {service.title}
              </h3>

              <p className="
                text-sm
                leading-relaxed
                text-gray-600
                group-hover:text-red-50
                transition-colors
              ">
                {service.description}
              </p>

              {/* Decorative background element for 3D depth */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-400/30 rounded-2xl pointer-events-none transition-all" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}