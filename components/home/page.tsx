"use client";

import Image from "next/image";
import Link from "next/link";
import { LazyMotion, domAnimation, m } from "framer-motion";

export default function HeroLanding() {
  return (
    <LazyMotion features={domAnimation}>
      <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-6 py-20 md:flex-row">

          {/* LEFT CONTENT */}
          <m.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-4xl font-extrabold leading-tight text-red-600 md:text-6xl">
              Welcome To Dynatech <span className="text-black">Controls</span>
            </h1>

            <p className="mt-6 max-w-xl text-2xl text-gray-600">
              Automation a better approach
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
              <Link
                href="#about"
                className="rounded-full bg-red-600 px-8 py-3 text-sm font-semibold text-white hover:bg-red-700"
              >
                Get Started
              </Link>

              <Link
                href="#contact"
                className="rounded-full border border-gray-300 px-8 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-100"
              >
                Contact Us
              </Link>
            </div>
          </m.div>

          {/* RIGHT IMAGE */}
          <m.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative flex-1"
          >
            <div className="relative mx-auto aspect-square max-w-md">
              <Image
                src="/.webp"
                alt="Industrial Automation"
                fill
                priority
                sizes="(max-width: 768px) 90vw, 500px"
                className="object-contain"
              />
            </div>
          </m.div>

        </div>
      </section>
    </LazyMotion>
  );
}
