
"use client";

import { useState, useEffect, memo } from "react";
import Image from "next/image";

/* Decorative background shapes */
const DecorativeBg = memo(() => (
  <div
    className="absolute inset-0 overflow-hidden pointer-events-none -z-10"
    aria-hidden="true"
  >
    <div className="absolute -left-10 top-10 h-32 w-8 rotate-45 bg-purple-400/20" />
    <div className="absolute -left-5 top-20 h-32 w-4 rotate-45 bg-purple-500/10" />
    <div className="absolute -right-10 bottom-10 h-40 w-12 -rotate-45 bg-indigo-400/20" />
    <div className="absolute -right-5 bottom-24 h-40 w-6 -rotate-45 bg-indigo-500/10" />
    <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-purple-300/20 blur-[140px]" />
  </div>
));
DecorativeBg.displayName = "DecorativeBg";

export default function HeroLanding() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden text-white content-visibility-auto pt-[60px]">

      {/* BACKGROUND IMAGE */}
     <div className="absolute inset-0 -z-30">
        <Image
          src="/img-10.webp"
          alt="Hero Background"
          fill
          priority // <--- Add this
           fetchPriority="high"
          quality={60}
          className="object-cover blur opacity-90"
        />
      </div>
      {/* GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-tl from-black via-red-900 to-red-600 opacity-90 mix-blend-multiply -z-20" />

      <DecorativeBg />

      {/* ANIMATIONS */}
      <style>{`
        @keyframes slideInLeft {
          from { opacity: 0; transform: translate3d(-30px, 0, 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translate3d(30px, 0, 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translate3d(0, 20px, 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        @keyframes expandWidth {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        .anim-left, .anim-right, .anim-up { opacity: 0; }
        .active .anim-left { animation: slideInLeft 0.6s cubic-bezier(0.16,1,0.3,1) forwards; }
        .active .anim-right { animation: slideInRight 0.6s cubic-bezier(0.16,1,0.3,1) forwards; }
        .active .anim-up { animation: slideUp 0.5s cubic-bezier(0.16,1,0.3,1) forwards; }
        .active .anim-expand {
          transform-origin: left;
          animation: expandWidth 0.6s cubic-bezier(0.16,1,0.3,1) forwards;
        }
      `}</style>

      <div
        className={`relative mx-auto flex max-w-7xl flex-col-reverse items-center gap-10 px-4 py-10 md:gap-12 md:px-6 md:py-16 md:flex-row ${
          isVisible ? "active" : ""
        }`}
      >

        {/* LEFT CONTENT */}
        <div className="flex-1 text-center md:text-left">
          <div
            className="anim-up mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium"
            style={{ animationDelay: "100ms" }}
          >
            <span className="h-2 w-2 rounded-full bg-white" />
            Industry Leading Solutions
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight md:text-6xl">
            <span className="anim-up block" style={{ animationDelay: "200ms" }}>
              Welcome To Dynatech
            </span>
            <span className="anim-up block" style={{ animationDelay: "300ms" }}>
              Controls
            </span>
          </h1>

          <p
            className="anim-up mt-5 max-w-xl text-lg sm:text-2xl text-white/80"
            style={{ animationDelay: "400ms" }}
          >
            Automation{" "}
            <span className="relative inline-block">
              <span className="relative z-10 font-semibold text-white">
                a better approach......
              </span>
              <span
                className="anim-expand absolute bottom-1 left-0 h-3 w-full bg-white/30"
                style={{ animationDelay: "800ms" }}
              />
            </span>
          </p>

          <div
            className="anim-up mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start"
            style={{ animationDelay: "500ms" }}
          >
            <a
              href="#about"
              className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition-transform hover:scale-105"
            >
              Get Started
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/40 px-8 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Contact Us
            </a>
          </div>

          <div
            className="anim-up mt-10 grid grid-cols-3 gap-4 border-t border-white/20 pt-6"
            style={{ animationDelay: "600ms" }}
          >
            {[
              { value: "25+", label: "Years Experience" },
              { value: "500+", label: "Projects Done" },
              { value: "24/7", label: "Support" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="mt-1 text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="anim-right relative flex-1">
          <div className="relative mx-auto aspect-square max-w-[260px] sm:max-w-md">
            <div className="relative h-full w-full overflow-hidden rounded-3xl bg-white/10 backdrop-blur-md p-1 shadow-2xl">
              <div className="relative h-full w-full overflow-hidden rounded-3xl bg-white">
                <Image
                  src="/landing.webp"
                  alt="Industrial Automation"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-contain p-4 sm:p-8"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

// "use client"
// import { useState, useEffect, memo } from "react";
// import Image from "next/image";

// // Memoize sub-components to prevent unnecessary re-renders
// const DecorativeBg = memo(() => (
//   <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10" aria-hidden="true">
//     <div className="absolute -left-10 top-10 h-32 w-8 rotate-45 bg-pink-500/20" />
//     <div className="absolute -left-5 top-20 h-32 w-4 rotate-45 bg-pink-600/10" />
//     <div className="absolute -right-10 bottom-10 h-40 w-12 -rotate-45 bg-pink-500/20" />
//     <div className="absolute -right-5 bottom-24 h-40 w-6 -rotate-45 bg-pink-600/10" />
//     <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-pink-200/30 blur-[120px]" />
//   </div>
// ));
// DecorativeBg.displayName = "DecorativeBg";

// export default function HeroLanding() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     // Small delay ensures the browser has finished initial paint
//     const timer = requestAnimationFrame(() => setIsVisible(true));
//     return () => cancelAnimationFrame(timer);
//   }, []);

//   return (
//     <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-br from-pink-50  to-pink-50 content-visibility-auto">
//       {/* BACKGROUND LAYER */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-pink-100/50 via-white to-white -z-20" />

//       <DecorativeBg />

//       <style>{`
//         /* Optimized for GPU - only using Transform/Opacity */
//         @keyframes slideInLeft { from { opacity: 0; transform: translate3d(-30px, 0, 0); } to { opacity: 1; transform: translate3d(0, 0, 0); } }
//         @keyframes slideInRight { from { opacity: 0; transform: translate3d(30px, 0, 0); } to { opacity: 1; transform: translate3d(0, 0, 0); } }
//         @keyframes slideUp { from { opacity: 0; transform: translate3d(0, 20px, 0); } to { opacity: 1; transform: translate3d(0, 0, 0); } }
//         @keyframes expandWidth { from { transform: scaleX(0); } to { transform: scaleX(1); } }

//         .anim-left { opacity: 0; will-change: transform, opacity; }
//         .anim-right { opacity: 0; will-change: transform, opacity; }
//         .anim-up { opacity: 0; will-change: transform, opacity; }

//         .active .anim-left { animation: slideInLeft 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
//         .active .anim-right { animation: slideInRight 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
//         .active .anim-up { animation: slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

//         .active .anim-expand { 
//           transform-origin: left;
//           animation: expandWidth 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; 
//         }
//       `}</style>

//       <div className={`relative mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-6 py-20 md:flex-row ${isVisible ? 'active' : ''}`}>

//         {/* LEFT CONTENT */}
//         <div className="flex-1 text-center md:text-left">
//           <div className="anim-up mb-6 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50 px-4 py-2 text-sm font-medium text-red-700" style={{ animationDelay: "100ms" }}>
//             <span className="h-2 w-2 rounded-full bg-red-400" />
//             Industry Leading Solutions
//           </div>

//           <h1 className="text-4xl font-extrabold leading-tight md:text-6xl text-gray-900">
//             <span className="anim-up block text-red-600" style={{ animationDelay: "200ms" }}>Welcome To Dynatech</span>
//             <span className="anim-up block" style={{ animationDelay: "300ms" }}>Controls</span>
//           </h1>

//           <p className="anim-up mt-6 max-w-xl text-2xl text-gray-600" style={{ animationDelay: "400ms" }}>
//             Automation <span className="relative inline-block">
//               <span className="relative z-10 font-semibold text-red-600">a better approach......</span>
//               <span className="anim-expand absolute bottom-1 left-0 h-3 w-full bg-pink-100" style={{ animationDelay: "800ms" }} />
//             </span>
//           </p>

//           <div className="anim-up mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start" style={{ animationDelay: "500ms" }}>
//             <a href="#about" className="rounded-full bg-red-600 px-8 py-3 text-sm font-semibold text-white transition-transform active:scale-95 hover:shadow-lg">
//               Get Started
//             </a>
//             <a href="#contact" className="rounded-full border-2 border-pink-200 px-8 py-3 text-sm font-semibold text-gray-800 transition-colors hover:border-pink-500">
//               Contact Us
//             </a>
//           </div>

//           <div className="anim-up mt-12 grid grid-cols-3 gap-6 border-t border-pink-100 pt-8" style={{ animationDelay: "600ms" }}>
//             {[{ value: "25+", label: "Years Experience" }, { value: "500+", label: "Projects Done" }, { value: "24/7", label: "Support" }].map((stat) => (
//               <div key={stat.label} className="text-center">
//                 <div className="text-2xl font-bold text-red-600">{stat.value}</div>
//                 <div className="mt-1 text-sm text-gray-500">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* RIGHT IMAGE - OPTIMIZED NEXT/IMAGE */}
//         <div className="anim-right relative flex-1">
//           <div className="relative mx-auto aspect-square max-w-md">
//             {/* Background decorative circles (Static for performance) */}
//             <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full border-4 border-red-500/10" />
//             <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full border-4 border-red-600/10" />

//             <div className="relative h-full w-full overflow-hidden rounded-3xl bg-gradient-to-br from-red-500 to-red-600 p-1 shadow-xl shadow-red-600/30">
//               <div className="relative h-full w-full overflow-hidden rounded-3xl bg-white">
//                 <Image
//                   src="/landing.webp"
//                   alt="Industrial Automation"
//                   fill
//                   priority // Tells Next.js to load this immediately
//                   sizes="(max-width: 768px) 100vw, 500px"
//                   className="object-contain p-8"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// bg-gradient-to-b from-[#e91e8c] via-[#8b5ac7] to-[#4a90e2]-pinkish and blue 
// bg-gradient-to-t from-[rgb(141,17,17)] via-[#db382c] to-[#000000] black to red 