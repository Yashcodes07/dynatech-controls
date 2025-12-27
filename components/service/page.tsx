"use client";

const services = [
  {
    title: "Special Purpose Machines",
    description:
      "Special Purpose Machines (SPM) are custom-built machines designed as per customer requirements. Applications include Leak Testing, Light Testing, EOL Machines, Robotic dispensing & Assembly Machines.",
  },
  {
    title: "Machine Vision",
    description:
      "Machine Vision solutions including Guidance, Identification, Gauging, Inspection (GIGI). Applications include Lamp Inspection, OCR, Robo Guidance, Cannula Inspection, etc.",
  },
  {
    title: "Data Traceability",
    description:
      "Data Traceability enables companies to track products across processes, providing impact, insights, and added value. We offer end-to-end traceability solutions.",
  },
  {
    title: "Laser Marking & Barcode",
    description:
      "We provide laser marking and pin marking solutions with high-quality barcode scanners for paper stickers and DPM (Direct Part Marking), integrated with PC applications.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center text-4xl font-bold text-gray-700 mb-12">
          Featured Services
        </h2>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                group
                rounded-2xl
                bg-white
                p-8
                shadow-lg
                transition-all
                duration-300
                hover:bg-red-600
                hover:shadow-2xl
              "
            >
              <h3 className="
                mb-4
                text-lg
                font-semibold
                text-gray-800
                group-hover:text-white
                transition
              ">
                {service.title}
              </h3>

              <p className="
                text-sm
                leading-relaxed
                text-gray-600
                group-hover:text-red-100
                transition
              ">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
