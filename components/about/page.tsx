"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.95, x: -20 },
    visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">

        {/* TOP HEADING SECTION */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-16 text-center"
        >
          <span className="inline-block rounded-full bg-red-50 border border-red-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-red-600">
            Our Story
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            A Brief <span className="text-red-600">Overview</span>
          </h1>

          <div className="mt-4 flex flex-col items-center justify-center">
            <p className="text-sm font-bold tracking-[0.2em] text-gray-400 uppercase">
              Industrial Automation Excellence
            </p>
            <div className="mt-2 h-1 w-20 bg-red-600 rounded-full" />
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="relative mx-auto mt-10 max-w-2xl"
          >
            <span className="absolute -top-4 -left-6 text-6xl text-red-100 font-serif leading-none">“</span>
            <p className="italic text-lg text-gray-600 leading-relaxed relative z-10 px-4">
              It has always been our priority to enable manufacturing industries
              and machine manufacturers to realize the full potential of
              Automation.
            </p>
            <p className="mt-4 text-sm font-bold text-gray-900">— Mr. N S Kushawaha</p>
          </motion.div>
        </motion.div>

        {/* CONTENT SECTION */}
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

          {/* LEFT IMAGE WITH DECORATION */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageVariant}
            className="relative group"
          >
            {/* Decorative background box */}
            <div className="absolute -bottom-6 -right-6 h-full w-full rounded-2xl bg-red-600/5 group-hover:bg-red-600/10 transition-colors duration-500" />
            
            <div className="relative z-10 overflow-hidden rounded-2xl border-[12px] border-white shadow-2xl">
              <Image
                src="/img-2.jpg"
                alt="About Dynatech Controls Team"
                width={600}
                height={500}
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>
          </motion.div>

          {/* RIGHT TEXT SECTION */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
                visible: { transition: { staggerChildren: 0.2 } }
            }}
            className="space-y-8 text-gray-700 leading-loose"
          >
            <motion.p variants={fadeInUp} className="text-lg">
              Founded in <span className="font-bold text-red-600">2001</span> by <strong>Mr. N S Kushawaha</strong> and{" "}
              <strong>Mrs. Bhawna Kushwaha</strong>, Dynatech Controls was born from a 
              strong passion for Industrial Automation.
            </motion.p>

            <motion.div variants={fadeInUp} className="p-6 bg-red-50 rounded-xl border-l-4 border-red-600">
              <p className="font-medium">
                Our core strength lies in delivering automation solutions in the
                field of <span className="text-red-600">Programmable Logic Controllers (PLC)</span>, 
                SPM Manufacturing, Pneumatics, and Vision Inspection.
              </p>
            </motion.div>

            <motion.p variants={fadeInUp}>
              We have been a reliable automation partner for decades, working with esteemed 
              clients like <strong>Lumax Industries Ltd., FIEM Industries Ltd., Hella Electronics</strong>, 
              and <strong>Padmini</strong>. Our commitment is to provide scalable, cost-effective 
              solutions for the modern factory.
            </motion.p>

            {/* Quick Stats Highlight */}
            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4 pt-4">
               <div>
                  <h4 className="text-2xl font-bold text-red-600">20+</h4>
                  <p className="text-xs uppercase tracking-wider text-gray-500 font-bold">Years Experience</p>
               </div>
               <div>
                  <h4 className="text-2xl font-bold text-red-600">50+</h4>
                  <p className="text-xs uppercase tracking-wider text-gray-500 font-bold">Corporate Clients</p>
               </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}