import type { Metadata } from "next";
import { Geologica } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geologica = Geologica({
  subsets: ["latin"],
  variable: "--font-geologica",
});

export const metadata: Metadata = {
  title: "Avíspese Spanish | Aprender con Aidan",
  description: "Learn Spanish with Aidan - Your Path to Fluency Starts Here!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geologica.variable}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
