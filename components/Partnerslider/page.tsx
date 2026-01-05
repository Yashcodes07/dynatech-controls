"use client";

import Image from "next/image";

const partners = [
  { name: "Honda", src: "/honda.webp" },
  { name: "Hindware Atlantic", src: "/hindware.png" },
  { name: "Tata", src: "/Tata.webp" },
  { name: "JCAT", src: "/ICAT.png" },
  { name: "Lumax", src: "/lumax.png" },
  { name: "Motherson", src: "/mothersun.webp" },
  { name: "Huber Suhner", src: "/huber.jpeg" },
  { name: "Hero", src: "/hero.png" },
  { name: "Omron", src: "/omron.jpeg" },
  { name: "UNO Minda", src: "/uno minda.png" },
  { name: "Varroc", src: "/varroc.png" },
  { name: "Honeywell", src: "/honeywell.png" },
];

export default function PartnerSlider() {
  // We use a single map and duplicate the array content to ensure a seamless loop
  const allLogos = [...partners, ...partners];

  return (
    <div className="w-full bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Modern Header for the section */}
        <div className="flex flex-col items-center mb-12">
          <span className="text-red-600 font-bold text-3xl uppercase tracking-[0.4em] mb-2">Dynatech Network</span>
          <h2 className="text-xl font-bold text-gray-900">OUR FEATURED PARTNERS</h2>
        </div>

        {/* LOGO VIEWPORT */}
        <div 
          className="relative overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
        >
          <div className="flex w-max animate-partner-scroll gap-12 py-4 group hover:[animation-play-state:paused]">
            {allLogos.map((partner, index) => (
              <div 
                key={`${partner.name}-${index}`} 
                className="flex w-[175px] items-center justify-center transition-all duration-hover:opacity-100 hover:scale-110"
              >
                <div className="relative h-20 w-full flex items-center justify-center px-4">
                  <Image
                    src={partner.src}
                    alt={`${partner.name} logo`}
                    width={170}
                    height={90}
                    className="h-auto w-full object-contain pointer-events-none"
                    // Performance: priority only for the first few logos if they are above the fold
                    loading={index < 6 ? "eager" : "lazy"}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}