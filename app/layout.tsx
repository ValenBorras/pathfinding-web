import type { Metadata, Viewport } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ variable: "--font-geist-sans", subsets: ["latin"] });
const newsreader = Newsreader({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pathfinding.com.ar"),
  title: {
    default: "Pathfinding S.A. — E‑commerce tooling & integrations",
    template: "%s | Pathfinding S.A.",
  },
  description:
    "Pathfinding S.A. is an Argentine software company focused on e‑commerce tooling and integrations. Products: FBAToolkit, MercadoToolkit, and GIT 2.0.",
  alternates: {
    canonical: "/",
    languages: {
      es: "/",
      en: "/en",
      pt: "/pt",
    },
  },
  openGraph: {
    title: "Pathfinding S.A.",
    description:
      "E‑commerce tooling and integrations for Amazon FBA and Mercado Libre. Extensions and ERP to run your retail ops.",
    url: "https://www.pathfinding.com.ar",
    siteName: "Pathfinding S.A.",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pathfinding S.A.",
    description:
      "E‑commerce tooling and integrations for Amazon FBA and Mercado Libre.",
  },
};

export const viewport: Viewport = {
  themeColor: "#10b981",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full">
      <body className={`${inter.variable} ${newsreader.variable} antialiased min-h-screen bg-background text-foreground`}> 
        <Navbar />
        <main className="min-h-[calc(100vh-8rem)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
