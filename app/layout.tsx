import type { Metadata, Viewport } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
        <header className="border-b border-[--color-border] sticky top-0 z-40 bg-background/70 backdrop-blur">
          <div className="container flex h-16 items-center justify-between">
            <Link href="/" className="font-semibold tracking-tight">Pathfinding S.A.</Link>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <Link href="/products" className="hover:text-[--accent]">Productos</Link>
              <Link href="/branding" className="hover:text-[--accent]">Branding</Link>
              <Link href="/creative" className="hover:text-[--accent]">Creative</Link>
              <Link href="/tools" className="hover:text-[--accent]">Tools</Link>
              <Link href="/cody" className="hover:text-[--accent]">Cody</Link>
              <Link href="/ieu" className="hover:text-[--accent]">IEU</Link>
              <Link href="/sla" className="hover:text-[--accent]">SLA</Link>
              <Link href="/assistance-request" className="hover:text-[--accent]">Contacto</Link>
            </nav>
          </div>
        </header>
        <main className="min-h-[calc(100vh-8rem)]">{children}</main>
        <footer className="border-t border-[--color-border] mt-24">
          <div className="container py-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-sm">
            <div>
              <div className="font-semibold mb-2">Pathfinding S.A.</div>
              <p className="text-[--color-muted]">O’Higgins 105, Paraná, Entre Ríos (3100), Argentina</p>
              <p className="mt-2"><a className="hover:underline" href="mailto:contact@pathfinding.com.ar">contact@pathfinding.com.ar</a></p>
            </div>
            <div>
              <div className="font-semibold mb-2">Productos</div>
              <ul className="space-y-1">
                <li><a className="hover:underline" href="https://fbatoolkit.com" target="_blank" rel="noopener noreferrer">FBAToolkit</a></li>
                <li><a className="hover:underline" href="https://mercadotoolkit.com" target="_blank" rel="noopener noreferrer">MercadoToolkit</a></li>
                <li><a className="hover:underline" href="https://gitretail.pathfinding.com.ar" target="_blank" rel="noopener noreferrer">GIT 2.0</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-2">Soporte</div>
              <ul className="space-y-1">
                <li><Link className="hover:underline" href="/sla">SLA</Link></li>
                <li><Link className="hover:underline" href="/assistance-request">Solicitud de asistencia</Link></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-2">Legal</div>
              <ul className="space-y-1">
                <li><Link className="hover:underline" href="/gp-privacy-policy">GP Privacy Policy</Link></li>
                <li><Link className="hover:underline" href="/qualitypolicy">Quality Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[--color-border]">
            <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[--color-muted]">
              <p>© {new Date().getFullYear()} Pathfinding S.A.</p>
              <div className="flex items-center gap-4">
                <a className="hover:underline" href="/gp-privacy-policy">Privacy</a>
                <a className="hover:underline" href="/qualitypolicy">Quality</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
