"use client"
import { useState, useEffect, memo } from "react";
import Image from "next/image";

// Memoize sub-components to prevent unnecessary re-renders
const DecorativeBg = memo(() => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10" aria-hidden="true">
    <div className="absolute -left-10 top-10 h-32 w-8 rotate-45 bg-pink-500/20" />
    <div className="absolute -left-5 top-20 h-32 w-4 rotate-45 bg-pink-600/10" />
    <div className="absolute -right-10 bottom-10 h-40 w-12 -rotate-45 bg-pink-500/20" />
    <div className="absolute -right-5 bottom-24 h-40 w-6 -rotate-45 bg-pink-600/10" />
    <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-pink-200/30 blur-[120px]" />
  </div>
));
DecorativeBg.displayName = "DecorativeBg";

export default function HeroLanding() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay ensures the browser has finished initial paint
    const timer = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-br from-pink-50  to-pink-50 content-visibility-auto">
      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-pink-100/50 via-white to-white -z-20" />
      
      <DecorativeBg />

      <style>{`
        /* Optimized for GPU - only using Transform/Opacity */
        @keyframes slideInLeft { from { opacity: 0; transform: translate3d(-30px, 0, 0); } to { opacity: 1; transform: translate3d(0, 0, 0); } }
        @keyframes slideInRight { from { opacity: 0; transform: translate3d(30px, 0, 0); } to { opacity: 1; transform: translate3d(0, 0, 0); } }
        @keyframes slideUp { from { opacity: 0; transform: translate3d(0, 20px, 0); } to { opacity: 1; transform: translate3d(0, 0, 0); } }
        @keyframes expandWidth { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        
        .anim-left { opacity: 0; will-change: transform, opacity; }
        .anim-right { opacity: 0; will-change: transform, opacity; }
        .anim-up { opacity: 0; will-change: transform, opacity; }
        
        .active .anim-left { animation: slideInLeft 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .active .anim-right { animation: slideInRight 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .active .anim-up { animation: slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        
        .active .anim-expand { 
          transform-origin: left;
          animation: expandWidth 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; 
        }
      `}</style>

      <div className={`relative mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-6 py-20 md:flex-row ${isVisible ? 'active' : ''}`}>
        
        {/* LEFT CONTENT */}
        <div className="flex-1 text-center md:text-left">
          <div className="anim-up mb-6 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50 px-4 py-2 text-sm font-medium text-red-700" style={{ animationDelay: "100ms" }}>
            <span className="h-2 w-2 rounded-full bg-red-400" />
            Industry Leading Solutions
          </div>

          <h1 className="text-4xl font-extrabold leading-tight md:text-6xl text-gray-900">
            <span className="anim-up block text-red-600" style={{ animationDelay: "200ms" }}>Welcome To Dynatech</span>
            <span className="anim-up block" style={{ animationDelay: "300ms" }}>Controls</span>
          </h1>

          <p className="anim-up mt-6 max-w-xl text-2xl text-gray-600" style={{ animationDelay: "400ms" }}>
            Automation <span className="relative inline-block">
              <span className="relative z-10 font-semibold text-red-600">a better approach</span>
              <span className="anim-expand absolute bottom-1 left-0 h-3 w-full bg-pink-100" style={{ animationDelay: "800ms" }} />
            </span>
          </p>

          <div className="anim-up mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start" style={{ animationDelay: "500ms" }}>
            <a href="#about" className="rounded-full bg-red-600 px-8 py-3 text-sm font-semibold text-white transition-transform active:scale-95 hover:shadow-lg">
              Get Started
            </a>
            <a href="#contact" className="rounded-full border-2 border-pink-200 px-8 py-3 text-sm font-semibold text-gray-800 transition-colors hover:border-pink-500">
              Contact Us
            </a>
          </div>

          <div className="anim-up mt-12 grid grid-cols-3 gap-6 border-t border-pink-100 pt-8" style={{ animationDelay: "600ms" }}>
            {[{ value: "25+", label: "Years Experience" }, { value: "500+", label: "Projects Done" }, { value: "24/7", label: "Support" }].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-red-600">{stat.value}</div>
                <div className="mt-1 text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE - OPTIMIZED NEXT/IMAGE */}
        <div className="anim-right relative flex-1">
          <div className="relative mx-auto aspect-square max-w-md">
            {/* Background decorative circles (Static for performance) */}
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full border-4 border-red-500/10" />
            <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full border-4 border-red-600/10" />

            <div className="relative h-full w-full overflow-hidden rounded-3xl bg-gradient-to-br from-red-500 to-red-600 p-1 shadow-xl shadow-red-600/30">
              <div className="relative h-full w-full overflow-hidden rounded-3xl bg-white">
                <Image
                  src="/landing.webp"
                  alt="Industrial Automation"
                  fill
                  priority // Tells Next.js to load this immediately
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-contain p-8"
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
// import { useState, useEffect } from "react";

// export default function HeroLanding() {
//   const [imageLoaded, setImageLoaded] = useState(false);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     // Trigger animations after mount
//     setIsVisible(true);
//   }, []);

//   return (
//     <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-br from-red-50 via-red-200 to-white">
//       {/* Simplified background - reduced blur for performance */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
//         <div className="absolute -left-4 top-20 h-72 w-72 rounded-full bg-red-500/5 blur-2xl opacity-50" />
//         <div className="absolute -right-4 bottom-20 h-96 w-96 rounded-full bg-red-600/5 blur-2xl opacity-50" />
//       </div>

//       <style>{`
//         @keyframes slideInLeft {
//           to { opacity: 1; transform: translateX(0); }
//         }
        
//         @keyframes slideInRight {
//           to { opacity: 1; transform: translateX(0); }
//         }
        
//         @keyframes slideUp {
//           to { opacity: 1; transform: translateY(0); }
//         }
        
//         @keyframes expandWidth {
//           to { width: 100%; }
//         }
        
//         @keyframes bounce {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(8px); }
//         }
        
//         @keyframes ping {
//           75%, 100% { transform: scale(2); opacity: 0; }
//         }
        
//         .animate-slide-in-left {
//           opacity: 0;
//           transform: translateX(-40px);
//           animation: slideInLeft 0.6s ease-out forwards;
//         }
        
//         .animate-slide-in-right {
//           opacity: 0;
//           transform: translateX(40px);
//           animation: slideInRight 0.6s ease-out forwards;
//         }
        
//         .animate-slide-up {
//           opacity: 0;
//           transform: translateY(20px);
//           animation: slideUp 0.5s ease-out forwards;
//         }
        
//         .animate-expand {
//           width: 0;
//           animation: expandWidth 0.6s ease-out forwards;
//         }
        
//         .animate-bounce-slow {
//           animation: bounce 2s ease-in-out infinite;
//         }
        
//         .ping-effect {
//           animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
//         }
        
//         /* Hardware acceleration */
//         .hw-accelerate {
//           transform: translateZ(0);
//           will-change: transform;
//         }
        
//         /* Remove animations on reduced motion preference */
//         @media (prefers-reduced-motion: reduce) {
//           *, *::before, *::after {
//             animation-duration: 0.01ms !important;
//             animation-iteration-count: 1 !important;
//             transition-duration: 0.01ms !important;
//           }
//         }
//       `}</style>

//       <div className="relative mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-6 py-20 md:flex-row">
//         {/* LEFT CONTENT */}
//         <div className={`flex-1 text-center md:text-left ${isVisible ? 'animate-slide-in-left' : ''}`}>
//           {/* Badge */}
//           <div
//             className={`mb-6 inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-red-700 ${isVisible ? 'animate-slide-up' : ''}`}
//             style={{ animationDelay: "0.1s" }}
//           >
//             <span className="relative flex h-2 w-2">
//               <span className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75 ping-effect"></span>
//               <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
//             </span>
//             Industry Leading Solutions
//           </div>

//           {/* Main Heading */}
//           <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
//             <span
//               className={`block text-red-600 ${isVisible ? 'animate-slide-up' : ''}`}
//               style={{ animationDelay: "0.2s" }}
//             >
//               Welcome To Dynatech
//             </span>
//             <span
//               className={`block bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent ${isVisible ? 'animate-slide-up' : ''}`}
//               style={{ animationDelay: "0.3s" }}
//             >
//               Controls
//             </span>
//           </h1>

//           <p
//             className={`mt-6 max-w-xl text-2xl text-gray-600 ${isVisible ? 'animate-slide-up' : ''}`}
//             style={{ animationDelay: "0.4s" }}
//           >
//             Automation{" "}
//             <span className="relative inline-block">
//               <span className="relative z-10 font-semibold text-red-600">
//                 a better approach
//               </span>
//               <span
//                 className={`absolute bottom-1 left-0 h-3 bg-red-200/50 ${isVisible ? 'animate-expand' : ''}`}
//                 style={{ animationDelay: "0.8s" }}
//               />
//             </span>
//           </p>

//           <div
//             className={`mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start ${isVisible ? 'animate-slide-up' : ''}`}
//             style={{ animationDelay: "0.5s" }}
//           >
//             <a
//               href="#about"
//               className="group relative overflow-hidden rounded-full bg-red-600 px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-red-600/50 hw-accelerate"
//             >
//               <span className="relative z-10">Get Started</span>
//               <span className="absolute inset-0 bg-red-700 scale-0 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
//             </a>

//             <a
//               href="#contact"
//               className="group rounded-full border-2 border-gray-300 px-8 py-3 text-sm font-semibold text-gray-800 transition-all duration-300 hover:border-red-600 hover:shadow-lg hw-accelerate"
//             >
//               <span className="transition-colors duration-300 group-hover:text-red-600">
//                 Contact Us
//               </span>
//             </a>
//           </div>

//           {/* Stats */}
//           <div
//             className={`mt-12 grid grid-cols-3 gap-6 border-t border-gray-200 pt-8 ${isVisible ? 'animate-slide-up' : ''}`}
//             style={{ animationDelay: "0.6s" }}
//           >
//             {[
//               { value: "15+", label: "Years Experience" },
//               { value: "500+", label: "Projects Done" },
//               { value: "24/7", label: "Support" },
//             ].map((stat) => (
//               <div key={stat.label} className="text-center">
//                 <div className="text-2xl font-bold text-red-600">
//                   {stat.value}
//                 </div>
//                 <div className="mt-1 text-sm text-gray-600">
//                   {stat.label}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* RIGHT IMAGE */}
//         <div className={`relative flex-1 ${isVisible ? 'animate-slide-in-right' : ''}`}>
//           <div className="relative mx-auto aspect-square max-w-md transition-transform duration-300 hover:scale-105 hw-accelerate">
//             {/* Simplified decorative elements - removed continuous animations */}
//             <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full border-4 border-red-500/20" />
//             <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full border-4 border-red-600/20" />

//             {/* Image container */}
//             <div className="relative h-full w-full overflow-hidden rounded-3xl bg-gradient-to-br from-red-500 to-red-600 p-1 shadow-xl shadow-red-600/30">
//               <div className="relative h-full w-full overflow-hidden rounded-3xl bg-white">
//                 <img
//                   src="/landing.webp"
//                   alt="Industrial Automation"
//                   width={500}
//                   height={500}
//                   loading="eager"
//                   decoding="async"
//                   className="h-full w-full object-contain p-8"
//                 />

//               </div>
//             </div>

//             {/* Floating badge */}
//             <div
//               className={`absolute -bottom-4 -right-4 rounded-2xl bg-white p-4 shadow-xl transition-transform duration-300 hover:scale-110 hw-accelerate ${isVisible ? 'animate-slide-up' : ''}`}
//               style={{ animationDelay: "0.7s" }}
//             >
//               <div className="flex items-center gap-3">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
//                   <svg
//                     className="h-6 w-6 text-red-600"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     aria-hidden="true"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M13 10V3L4 14h7v7l9-11h-7z"
//                     />
//                   </svg>
//                 </div>
//                 <div>
//                   <div className="text-xs text-gray-500">Powered by</div>
//                   <div className="text-sm font-bold text-gray-900">
//                     Innovation
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Scroll indicator */}
//       <div
//         className={`absolute bottom-8 left-1/2 -translate-x-1/2 ${isVisible ? 'animate-slide-up' : ''}`}
//         style={{ animationDelay: "0.8s" }}
//       >
//         <div className="flex flex-col items-center gap-2 animate-bounce-slow">
//           <span className="text-sm text-gray-500">Scroll to explore</span>
//           <svg
//             className="h-6 w-6 text-red-600"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             aria-hidden="true"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M19 14l-7 7m0 0l-7-7m7 7V3"
//             />
//           </svg>
//         </div>
//       </div>
//     </section>
//   );
// }