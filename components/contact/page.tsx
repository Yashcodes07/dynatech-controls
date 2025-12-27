"use client"; // Required for handling form submission

import Image from "next/image";
import { useState } from "react";
import { sendContactEmail } from "@/app/action"; // Adjust path if needed

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const formData = new FormData(event.currentTarget);
    const result = await sendContactEmail(formData);

    if (result.success) {
      setStatus("success");
      (event.target as HTMLFormElement).reset(); // Clear form
    } else {
      setStatus("error");
    }
  }

  return (
    <section className="relative min-h-screen bg-white py-10">
      {/* WHITE FOREGROUND */}
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-white border-25 border-red-600 shadow-xl">
        <div className="flex flex-col lg:flex-row rounded-4xl">
          {/* LEFT IMAGE SECTION */}
          <div className="relative w-full lg:w-1/2 h-[300px] lg:h-auto">
            <Image
              src="/img-1.jpg" // Ensure this image exists in /public
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

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Company Name */}
                <input
                  type="text"
                  name="company" // Added name attribute
                  placeholder="Company Name *"
                  className="w-full rounded-full px-5 py-3 text-red-500 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />

                {/* Name + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name" // Added name attribute
                    placeholder="Your Name *"
                    className="rounded-full px-5 py-3 text-red-500 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
                  <input
                    type="email"
                    name="email" // Added name attribute
                    placeholder="Your Email *"
                    className="rounded-full px-5 py-3 text-red-500 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
                </div>

                {/* Phone */}
                <div className="grid grid-cols-1 gap-10">
                  <input
                    type="tel"
                    name="phone" // Added name attribute
                    placeholder="Phone Number *"
                    className="rounded-full px-5 py-3 text-red-500 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
                </div>

                {/* Message */}
                <textarea
                  name="message" // Added name attribute
                  placeholder="Your Message"
                  rows={4}
                  className="w-full rounded-2xl px-5 py-3 text-red-500 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                />

                {/* Status Messages */}
                {status === "success" && (
                  <p className="text-green-600 font-medium">Message sent successfully!</p>
                )}
                {status === "error" && (
                  <p className="text-red-600 font-medium">Failed to send message. Please try again.</p>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full rounded-full bg-red-600 py-3 text-white font-semibold transition hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}