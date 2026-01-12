// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Mail, Phone, Clock } from "lucide-react";

// const sections = ["home", "about", "services", "products", "team", "contact"];

// export default function Navbar() {
//   const [active, setActive] = useState("home");

//   useEffect(() => {
//     const onScroll = () => {
//       const offset = 150; // navbar + top strip height

//       let current = "home";

//       sections.forEach((id) => {
//         const el = document.getElementById(id);
//         if (!el) return;

//         const rect = el.getBoundingClientRect();

//         if (rect.top - offset <= 0 && rect.bottom - offset > 0) {
//           current = id;
//         }
//       });

//       setActive(current);
//     };

//     window.addEventListener("scroll", onScroll, { passive: true });
//     onScroll();

//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <>
//       {/* CONTACT STRIP */}
//       <div className="fixed top-0 z-50 w-full bg-red-600 text-white">
//         <div className="mx-auto flex max-w-7xl justify-between px-6 py-2 text-sm">
//           <div className="flex gap-6">
//             <span className="flex items-center gap-2">
//               <Mail size={14} /> shubhankar.singh@dynatechcontrols.in
//             </span>
//             <span className="flex items-center gap-2">
//               <Phone size={14} /> +91-81301-11432 || +91-72899-89683
//             </span>
//           </div>
//           <span className="hidden md:flex items-center gap-2">
//             <Clock size={14} /> Mon – Sat 09:00 – 06:00
//           </span>
//         </div>
//       </div>

//       {/* NAVBAR */}
//       <div className="fixed top-[30px] z-40 w-full bg-white shadow-sm">
//         <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

//           {/* LOGO */}
//           <div className="flex items-center gap-3">
//             <Image src="/dc logo.webp" alt="Logo" width={70} height={65} />
//             <div>
//               <p className="font-bold text-xl text-red-600">Dynatech</p>
//               <p className="font-semibold text-xl  text-black">Controls</p>
//             </div>
//           </div>

//           {/* NAV LINKS */}
//           <nav className="relative hidden md:flex gap-8 text-sm font-medium">
//             {sections.map((item) => (
//               <a
//                 key={item}
//                 href={`#${item}`}
//                 className={`relative pb-2 transition ${active === item
//                     ? "text-red-600"
//                     : "text-gray-700 hover:text-red-600"
//                   }`}
//               >
//                 {item.charAt(0).toUpperCase() + item.slice(1)}

//                 <span
//                   className={`absolute left-0 -bottom-0.5 h-[2px] w-full bg-red-600 transition-transform duration-300 origin-left ${active === item ? "scale-x-100" : "scale-x-0"
//                     }`}
//                 />
//               </a>
//             ))}
//           </nav>

//           {/* CTA */}
//           <a
//             href="/DYNATECH BROCHURE.pdf"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="rounded-full bg-red-600 px-6 py-2 text-md font-semibold text-white hover:bg-red-700"
//           >
//             Download Brochure
//           </a>
//         </div>
//       </div>

//       {/* SPACER */}
//       <div className="h-[110px]" />
//     </>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Mail, Phone, Clock, Menu, X } from "lucide-react";

const sections = ["home", "about", "services", "products", "team", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const offset = 140;
      let current = "home";

      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        if (rect.top - offset <= 0 && rect.bottom - offset > 0) {
          current = id;
          break;
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* TOP INFO BAR */}
      <div className="fixed top-0 z-50 w-full bg-gradient-to-tl from-black via-red-900 to-red-600 text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-6 py-2 text-xs sm:text-sm">
          <div className="flex flex-wrap gap-4">
            <span className="flex items-center gap-2">
              <Mail size={14} /> shubhankar.singh@dynatechcontrols.in
            </span>
            <span className="flex items-center gap-2">
              <Phone size={14} /> +91-81301-11432 | +91-72899-89683
            </span>
          </div>
          <span className="hidden md:flex items-center gap-2">
            <Clock size={14} /> Mon – Sat 09:00 – 06:00
          </span>
        </div>
      </div>

      {/* NAVBAR */}
       <header className="fixed top-[56px] sm:top-[32px] z-40 w-full bg-white backdrop-blur-md shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <Image
              src="/dc logo.webp"
              alt="Dynatech Controls Logo"
              width={56}
              height={56}
              priority
            />
            <div className="leading-tight">
              <p className="text-lg font-bold text-red-600">Dynatech</p>
              <p className="text-lg font-semibold text-gray-900">Controls</p>
            </div>
          </div>

          {/* DESKTOP NAV */}
          <nav className="relative hidden md:flex items-center gap-8 text-sm font-medium">
            {sections.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`relative pb-1 transition-colors duration-200 ${
                  active === item
                    ? "text-black"
                    : "text-gray-800 hover:text-red-800"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}

                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-tl from-black via-red-900 to-red-600 transition-transform duration-300 origin-left ${
                    active === item ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* DESKTOP CTA */}
          <a
            href="/DYNATECH BROCHURE.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex rounded-full bg-gradient-to-tl from-black via-red-900 to-red-600 px-6 py-2 text-sm font-semibold text-white hover:opacity-90"
          >
            Download Brochure
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden rounded-lg p-2 hover:bg-gray-100"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden border-t bg-white shadow-lg">
            <nav className="flex flex-col px-6 py-4 gap-4 text-sm font-medium">
              {sections.map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setOpen(false)}
                  className={`py-2 ${
                    active === item
                      ? "text-red-600 font-semibold"
                      : "text-gray-800"
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}

              <a
                href="/DYNATECH BROCHURE.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex justify-center rounded-full bg-gradient-to-tl from-black via-red-900 to-red-600 px-5 py-2 text-white"
              >
                Download Brochure
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* SPACER */}
     <div className="h-[120px] sm:h-[96px]" />
    </>
  );
}
