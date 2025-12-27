import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SessionWrapper from "@/components/SessionWrapper";
import "./globals.css";

// 1. Optimize Fonts (Reduces Render-Blocking Requests)
const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap', // Helps prevent layout shift (CLS)
});

// 2. Comprehensive SEO Metadata (Directly fixes the 82 score issues)
export const metadata: Metadata = {
  // Fixes: "Document doesn't have a <title> element"
  title: "Dynatech Controls | Industrial Automation & SPM Solutions",
  
  // Fixes: "Document does not have a meta description"
  description: "Specializing in SPM Designing, PLC Programming, and Robotic Welding since 2001. Dynatech Controls is your leading automation partner in Manesar, Gurugram.",
  
  keywords: ["Industrial Automation", "SPM Manufacturing", "PLC Programming", "Dynatech Controls", "Gurugram", "Robotic Welding"],
  authors: [{ name: "Dynatech Controls" }],
  viewport: "width=device-width, initial-scale=1", // Essential for mobile SEO
  
  // OpenGraph (How your site looks when shared on social media/WhatsApp)
  openGraph: {
    title: "Dynatech Controls | Automation Excellence",
    description: "Providing cutting-edge industrial automation solutions.",
    url: "https://www.dynatechcontrols.in", 
    siteName: "Dynatech Controls",
    images: [
      {
        url: "/og-image.jpg", // Ensure this image exists in your public folder
        width: 1200,
        height: 630,
        alt: "Dynatech Controls Industrial Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  
  // Robots instructions for Google
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth"> 
      <body className={inter.className}>
        <SessionWrapper>
          <Navbar />
          {/* Use <main> for better Accessibility scores */}
          <main id="main-content" className="min-h-screen">
            {children}
          </main> 
          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}