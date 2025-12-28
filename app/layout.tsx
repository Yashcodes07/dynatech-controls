import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Dynatech Automation | Industrial Hardware & Automation Solutions",
    template: "%s | Dynatech Automation",
  },
  description:
    "Dynatech Automation delivers cutting-edge industrial hardware, automation solutions, robotics integration, and manufacturing technology.",
  metadataBase: new URL("https://www.dynatechautomation.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
