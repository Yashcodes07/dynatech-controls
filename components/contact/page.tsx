"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Loader2, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    // Simulating an API call
    setTimeout(() => {
      setStatus("success");
      // Reset after 3 seconds
      setTimeout(() => setStatus("idle"), 3000);
    }, 2000);
  };

  return (
    <section className="relative min-h-screen bg-white py-10">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-white border-red-600 shadow-xl">
        <div className="flex flex-col lg:flex-row">
          
          {/* LEFT IMAGE SECTION */}
          <div className="relative w-full lg:w-1/2 h-[300px] lg:h-auto">
            <Image
              src="/img-1.jpg"
              alt="Customer Support"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-red-600/10" />
          </div>

          {/* RIGHT FORM SECTION */}
          <div className="w-full lg:w-1/2 flex items-center justify-center px-8 lg:px-16 py-14 bg-red-50">
            <div className="w-full max-w-lg">
              <h1 className="text-3xl font-bold text-red-600 mb-2">Contact Us</h1>
              <p className="text-gray-600 mb-8">
                Any questions or suggestions? Please feel free to get in touch.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Floating Label Input: Company */}
                <div className="relative">
                  <input
                    type="text"
                    id="company"
                    placeholder=" "
                    required
                    className="peer w-full rounded-full px-5 py-4 text-slate-800 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-transparent transition-all"
                  />
                  <label 
                    htmlFor="company"
                    className="absolute left-5 top-4 text-gray-400 text-sm transition-all pointer-events-none
                               peer-placeholder-shown:text-base peer-placeholder-shown:top-4
                               peer-focus:-top-2 peer-focus:left-4 peer-focus:text-xs peer-focus:text-red-600 peer-focus:bg-white peer-focus:px-1
                               peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1"
                  >
                    Company Name *
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Floating Label Input: Name */}
                  <div className="relative">
                    <input type="text" id="name" placeholder=" " required className="peer w-full rounded-full px-5 py-4 text-slate-800 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-transparent" />
                    <label htmlFor="name" className="absolute left-5 top-4 text-gray-400 text-sm transition-all pointer-events-none peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-red-600 peer-focus:bg-white peer-focus:px-1 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white">
                      Your Name *
                    </label>
                  </div>

                  {/* Floating Label Input: Email */}
                  <div className="relative">
                    <input type="email" id="email" placeholder=" " required className="peer w-full rounded-full px-5 py-4 text-slate-800 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-transparent" />
                    <label htmlFor="email" className="absolute left-5 top-4 text-gray-400 text-sm transition-all pointer-events-none peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-red-600 peer-focus:bg-white peer-focus:px-1 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white">
                      Your Email *
                    </label>
                  </div>
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea id="message" rows={4} placeholder=" " className="peer w-full rounded-2xl px-5 py-4 text-slate-800 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-transparent" />
                  <label htmlFor="message" className="absolute left-5 top-4 text-gray-400 text-sm transition-all pointer-events-none peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-red-600 peer-focus:bg-white peer-focus:px-1 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white">
                    Your Message
                  </label>
                </div>

                {/* Submit Button with Loading/Success States */}
                <button
                  type="submit"
                  disabled={status !== "idle"}
                  className="w-full flex items-center justify-center gap-2 rounded-full bg-red-600 py-4 font-semibold text-white transition hover:bg-red-700 disabled:bg-gray-400"
                >
                  {status === "idle" && "Send Message"}
                  {status === "loading" && (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      Sending...
                    </>
                  )}
                  {status === "success" && (
                    <>
                      <CheckCircle size={20} className="animate-bounce" />
                      Message Sent!
                    </>
                  )}
                </button>

                {/* Success Message Popup */}
                {status === "success" && (
                  <p className="text-center text-green-600 font-medium animate-in fade-in slide-in-from-top-2">
                    Thanks! We'll get back to you shortly.
                  </p>
                )}

              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}