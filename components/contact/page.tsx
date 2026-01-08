"use client"
import { useState, useEffect } from "react";
import { Loader2, CheckCircle, Mail, User, Building, MessageSquare } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  const [status, setStatus] = useState("idle");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("success");
      setFormData({ company: "", name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
      setStatus("idle");
    }
  };

  return (
    <section className="relative min-h-[100svh] bg-gradient-to-br from-gray-50 via-red-50 to-white py-8 px-3 sm:px-4">
      <style>{`
        @keyframes slideInLeft { to { opacity: 1; transform: translateX(0); } }
        @keyframes slideInRight { to { opacity: 1; transform: translateX(0); } }
        @keyframes slideUp { to { opacity: 1; transform: translateY(0); } }
        @keyframes scaleIn { to { opacity: 1; transform: scale(1); } }

        .animate-slide-in-left {
          opacity: 0;
          transform: translateX(-30px);
          animation: slideInLeft 0.6s ease-out forwards;
        }
        .animate-slide-in-right {
          opacity: 0;
          transform: translateX(30px);
          animation: slideInRight 0.6s ease-out forwards;
        }
        .animate-slide-up {
          opacity: 0;
          transform: translateY(20px);
          animation: slideUp 0.5s ease-out forwards;
        }
        .animate-scale-in {
          opacity: 0;
          transform: scale(0.95);
          animation: scaleIn 0.5s ease-out forwards;
        }
        .input-focus-ring {
          transition: all 0.3s ease;
        }
        .input-focus-ring:focus {
          transform: translateY(-2px);
        }
      `}</style>

      {/* Floating background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 h-64 w-64 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-20 -right-20 h-80 w-80 rounded-full bg-white blur-3xl" />
      </div>

      <div className={`relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-white shadow-2xl ${isVisible ? "animate-scale-in" : ""}`}>
        <div className="flex flex-col lg:flex-row">

          {/* LEFT IMAGE */}
          <div className={`relative w-full lg:w-1/2 h-[240px] sm:h-[300px] lg:h-auto ${isVisible ? "animate-slide-in-left" : ""}`}>
            <Image
              src="/uzbek.webp"
              alt="Customer Support"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tl from-black via-red-900 to-red-600 opacity-90 backdrop-blur-md" />

            <div className="absolute inset-0 flex flex-col justify-center px-5 sm:px-8 lg:px-12 text-white">
              <div className={isVisible ? "animate-slide-up" : ""} style={{ animationDelay: "0.2s" }}>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-3 py-1.5 text-xs sm:text-sm mb-5">
                  <span className="h-2 w-2 rounded-full bg-white" />
                  24/7 Support Available
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
                  Let's Start a Conversation
                </h2>

                <p className="text-sm sm:text-lg text-white/90 max-w-md">
                  Our team is ready to help you with innovative automation solutions tailored to your needs.
                </p>
              </div>

              <div className={`mt-6 space-y-3 ${isVisible ? "animate-slide-up" : ""}`} style={{ animationDelay: "0.4s" }}>
                {[Mail, Building].map((Icon, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/90 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3">
                    <Icon className="h-5 w-5" />
                    <span className="text-sm font-medium">
                      {i === 0 ? "shubhankar.singh@dynatechcontrols.in" : "Visit Our Office"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>


          {/* RIGHT FORM SECTION */}
          <div className={`w-full lg:w-1/2 flex items-center justify-center px-6 lg:px-12 py-12 bg-gradient-to-br from-white to-red-50/30 ${isVisible ? 'animate-slide-in-right' : ''}`}>
            <div className="w-full max-w-lg">
              <div className={`mb-8 ${isVisible ? 'animate-slide-up' : ''}`} style={{ animationDelay: '0.1s' }}>
                <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-tl from-black via-red-900 to-red-600 bg-clip-text text-transparent mb-2">
                  Contact Us
                </h1>
                <p className="text-gray-600">
                  Any questions or suggestions? Please feel free to get in touch.
                </p>
              </div>

              <div className="space-y-5">

                {/* Company Name */}
                <div className={`relative ${isVisible ? 'animate-slide-up' : ''}`} style={{ animationDelay: '0.2s' }}>
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <Building className="h-5 w-5" />
                  </div>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    placeholder=" "
                    required
                   className="peer w-full rounded-2xl pl-12 pr-5 py-4 text-slate-800 bg-white
                    border-2 border-gray-200 focus:outline-none focus:border-red-500
                    focus:ring-2 focus:ring-red-500/20 placeholder-transparent transition-all input-focus-ring"
                  />

                  <label
                    htmlFor="company"
                    className="absolute left-12 top-4 text-gray-400 text-sm transition-all pointer-events-none
                               peer-placeholder-shown:text-base peer-placeholder-shown:top-4
                               peer-focus:-top-2.5 peer-focus:left-4 peer-focus:text-xs peer-focus:text-red-600 peer-focus:bg-white peer-focus:px-2
                               peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:text-red-600"
                  >
                    Company Name *
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className={`relative ${isVisible ? 'animate-slide-up' : ''}`} style={{ animationDelay: '0.3s' }}>
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <User className="h-5 w-5" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder=" "
                      required
                      className="peer w-full rounded-2xl pl-12 pr-5 py-4 text-slate-800 bg-white
                        border-2 border-gray-200 focus:outline-none focus:border-red-500
                        focus:ring-2 focus:ring-red-500/20 placeholder-transparent transition-all input-focus-ring"
                    />

                    <label
                      htmlFor="name"
                      className="absolute left-12 top-4 text-gray-400 text-sm transition-all pointer-events-none peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:left-4 peer-focus:text-xs peer-focus:text-red-600 peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:text-red-600"
                    >
                      Your Name *
                    </label>
                  </div>

                  {/* Email */}
                  <div className={`relative ${isVisible ? 'animate-slide-up' : ''}`} style={{ animationDelay: '0.35s' }}>
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <Mail className="h-5 w-5" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder=" "
                      required
                       className="peer w-full rounded-2xl pl-12 pr-5 py-4 text-slate-800 bg-white
             border-2 border-gray-200 focus:outline-none focus:border-red-500
             focus:ring-2 focus:ring-red-500/20 placeholder-transparent transition-all input-focus-ring"
                    />

                    <label
                      htmlFor="email"
                      className="absolute left-12 top-4 text-gray-400 text-sm transition-all pointer-events-none peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:left-4 peer-focus:text-xs peer-focus:text-red-600 peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:text-red-600"
                    >
                      Your Email *
                    </label>
                  </div>
                </div>

                {/* Message */}
                <div className={`relative ${isVisible ? 'animate-slide-up' : ''}`} style={{ animationDelay: '0.4s' }}>
                  <div className="absolute left-4 top-4 text-gray-400">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder=" "
                     className="peer w-full rounded-2xl pl-12 pr-5 py-4 text-slate-800 bg-white
             border-2 border-gray-200 focus:outline-none focus:border-red-500
             focus:ring-2 focus:ring-red-500/20 placeholder-transparent transition-all resize-none"
                  />

                  <label
                    htmlFor="message"
                    className="absolute left-12 top-4 text-gray-400 text-sm transition-all pointer-events-none peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:left-4 peer-focus:text-xs peer-focus:text-red-600 peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:text-red-600"
                  >
                    Your Message
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={status !== "idle"}
                  className={`w-full flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-tl from-black via-red-900 to-red-600  py-4 font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-red-600/50 hover:scale-[1.02] disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none ${isVisible ? 'animate-slide-up' : ''}`}
                  style={{ animationDelay: '0.5s' }}
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
                      <CheckCircle size={20} />
                      Message Sent!
                    </>
                  )}
                </button>

                {/* Success Message */}
                {status === "success" && (
                  <div className="flex items-center justify-center gap-2 text-green-600 font-medium bg-green-50 border border-green-200 rounded-2xl py-3 px-4 animate-slide-up">
                    <CheckCircle size={18} />
                    <span>Thanks! We'll get back to you shortly.</span>
                  </div>
                )}

              </div>

              {/* Trust indicators */}
              <div className={`mt-8 flex items-center justify-center gap-6 text-sm text-gray-500 ${isVisible ? 'animate-slide-up' : ''}`} style={{ animationDelay: '0.6s' }}>
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Secure</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>Fast Response</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}