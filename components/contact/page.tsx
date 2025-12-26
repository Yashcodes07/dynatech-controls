import Image from "next/image";

export default function ContactPage() {
  return (
    <section className="relative min-h-screen bg-white py-10">
      
      {/* WHITE FOREGROUND */}
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-white border-25 border-red-600 shadow-xl">
        <div className="flex flex-col lg:flex-row rounded-4xl">

          {/* LEFT IMAGE SECTION */}
          <div className="relative w-full lg:w-1/2 h-[300px] lg:h-auto">
            <Image
              src="/img-1.jpg" // put image in public folder
              alt="Customer Support"
              fill
              className="object-cover"
              priority
            />

            {/* subtle red overlay */}
            <div className="absolute inset-0 bg-red-600/10" />
          </div>

          {/* RIGHT FORM SECTION */}
          <div className="w-full lg:w-1/2 flex items-center justify-center px-8 lg:px-16 py-14 bg-red-50">
            <div className="w-full max-w-lg">
              
              <h1 className="text-3xl font-bold text-red-600 mb-2">
                Contact Us
              </h1>
              <p className="text-gray-600 mb-8">
                Any questions or suggestions? Please feel free to get in touch by
                filling out the form below.
              </p>

              <form className="space-y-5">
                
                {/* Company Name */}
                <input
                  type="text"
                  placeholder="Company Name *"
                  className="w-full rounded-full px-5 py-3 text-red-500 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />

                {/* Name + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name *"
                    className="rounded-full px-5 py-3 text-red-500 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Your Email *"
                    className="rounded-full px-5 py-3 text-red-500 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
                </div>

                {/* Phone + Fax */}
                <div className="grid grid-cols-1  gap-10">
                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    className="rounded-full px-5 py-3 text-red-500 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
               
                </div>

                {/* Message */}
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full rounded-2xl px-5 py-3 text-red-500 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                />

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full rounded-full bg-red-600 py-3 text-red-500 font-semibold text-white transition hover:bg-red-700"
                >
                  Send Message
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
