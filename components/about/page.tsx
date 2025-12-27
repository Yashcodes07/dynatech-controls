import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="bg-gray-50 py-10">
      <div className="mx-auto max-w-7xl px-6">

        {/* TOP HEADING */}
        <div className="mb-14 text-center">
          <span className="inline-block rounded-full bg-red-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-red-600">
            About
          </span>

          <h1 className="mt-4 text-4xl font-bold text-gray-900">
            A Brief <span className="text-red-600">Overview</span>
          </h1>

          <p className="mt-3 text-sm font-semibold tracking-wide text-gray-600">
            A COMPLETE INDUSTRIAL AUTOMATION SOLUTION PROVIDER
          </p>

          <p className="mx-auto mt-6 max-w-3xl italic text-gray-500">
            "It has always been our priority to enable manufacturing industries
            and machine manufacturers to realize the full potential of
            Automation." – Mr.Ns Kushawaha
          </p>
        </div>

        {/* CONTENT SECTION */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

          {/* LEFT IMAGE */}
          <div className="relative flex justify-center border-15 border-red-500 rounded-2xl">
            <Image
              src="/img-2.jpg" // put image in public folder
              alt="About Dynatech Controls"
              width={590}
              height={520}
              className="object-contain rounded-xl"
              priority
            />
          </div>

          {/* RIGHT TEXT */}
          <div className="space-y-6 text-gray-700">
            <p>
              Founded in 2001 by <strong>Mr.N S Kushawaha</strong> and{" "}
              <strong>Mrs. Bhawna Kushwaha</strong>,Dynatech Controls have a
              strong passion for Industrial Automation. The company geared up
              from the beginning by providing low-cost automation solutions
              using microcontrollers to industries such as Pad Printing,
              Automobiles, and other Manufacturing Industries.
            </p>

            <p>
              Our core strength lies in delivering automation solutions in the
              field of <strong>Programmable Logic Controllers (PLC)</strong>,
              SPM Manufacturing,Pneumatics, and reliable End-of-Line
              Testing Machines and Vision Inspection Machines.
            </p>

            <p>
              We have been a reliable automation partner for decades with many
              esteemed clients including{" "}
              <strong>
                Lumax Industries Ltd., FIEM Industries Ltd., Hella Electronics,
                Padmini
              </strong>{" "}
              and many more.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
