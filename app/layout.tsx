import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Juan D. Carranza | Portfolio",
  description:
    "Civil Engineer pursuing an M.S. in Construction Management and Technology at Arizona State University, focused on construction, project management, and emerging technology.",
  authors: [{ name: "Juan D. Carranza" }],
  creator: "Juan D. Carranza",
  keywords: [
    "Juan D. Carranza",
    "Civil Engineer",
    "Construction Management",
    "Construction Technology",
    "Project Management",
    "Construction Engineering",
    "BIM",
    "Artificial Intelligence",
    "Arizona State University",
    "Panama",
  ],
  openGraph: {
    title: "Juan D. Carranza | Construction Management & Technology",
    description:
      "Civil Engineer exploring construction, project management, and emerging technology.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}