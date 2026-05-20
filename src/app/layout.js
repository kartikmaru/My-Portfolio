import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

export const metadata = {
  title: "Kartik Maru | MERN Stack Developer",
  description:
    "Portfolio of Kartik Maru — MERN Stack Developer with 9+ months of hands-on experience in React, Next.js, Node.js, Express, MongoDB, Redux Toolkit, and JWT.",
  keywords: ["MERN Stack", "React", "Next.js", "Node.js", "MongoDB", "Full Stack Developer", "Kartik Maru"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geist.className} bg-gray-950 text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
