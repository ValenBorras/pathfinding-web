"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const triggerBase =
    "relative px-2 py-1 text-sm text-[#a2a1a1] transition-colors after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#e30414] after:transition-all hover:text-[#dcdcdc] hover:after:w-full";

  const isAboutActive = ["/branding", "/creative", "/our-team"].some((p) => pathname?.startsWith(p));
  const isProductsActive = ["/products", "/tools", "/cody", "/sla"].some((p) => pathname?.startsWith(p));
  const isMoreActive = ["/qualitypolicy", "/gp-privacy-policy", "/ieu"].some((p) => pathname?.startsWith(p));

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header>
      <div className="container flex items-center min-h-[88px] border-b-[0.6px] border-[#303030] py-3 justify-between">
        {/* Left: Logo */}
        <div>
          <Link href="/" className="flex items-center gap-4 p-2" aria-label="Pathfinding S.A. home">
            <Image
              src="/new_pf_logo_blanco2.png"
              alt="Pathfinding S.A."
              width={200}
              height={78}
              priority
            />
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center justify-end text-sm pt-6">
          <div className="relative group">
            <Link href="/" className={`${triggerBase} ${isAboutActive ? "text-[#dcdcdc] after:w-full" : "text-[#a2a1a1]"}`}>Sobre nosotros</Link>
            <div className="absolute left-1/2 -translate-x-1/2 text-[#a2a1a1] top-full z-40 p-2 w-max opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity">
              <Link href="/branding" className="block px-3 py-2 whitespace-nowrap hover:text-[#dcdcdc] backdrop-blur-sm ">Branding</Link>
              <Link href="/creative" className="block px-3 py-2 whitespace-nowrap hover:text-[#dcdcdc] backdrop-blur-sm ">Creative</Link>
              <Link href="/our-team" className="block px-3 py-2 whitespace-nowrap hover:text-[#dcdcdc] backdrop-blur-sm ">Our team</Link>
            </div>
          </div>
          <span className="mx-1 text-[#a2a1a1] select-none">/</span>
          <div className="relative group">
            <Link href="/tools" className={`${triggerBase} ${isProductsActive ? "text-[#dcdcdc] after:w-full" : "text-[#a2a1a1]"}`}>Productos</Link>
            <div className="absolute left-1/2 -translate-x-1/2 text-[#a2a1a1] top-full z-40 p-2 w-max opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity">
              <Link href="/cody" className="block px-3 py-2 whitespace-nowrap hover:text-[#dcdcdc] backdrop-blur-sm ">Cody</Link>
              <Link href="/sla" className="block px-3 py-2 whitespace-nowrap hover:text-[#dcdcdc] backdrop-blur-sm ">SLA</Link>
            </div>
          </div>
          <span className="mx-1 text-[#a2a1a1] select-none">/</span>
          <div className="relative group">
            <Link href="/qualitypolicy" className={`${triggerBase} ${isMoreActive ? "text-[#dcdcdc] after:w-full" : "text-[#a2a1a1]"}`}>Más</Link>
            <div className="absolute left-1/2 -translate-x-1/2 text-[#a2a1a1] top-full z-40 p-2 w-max opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity">
              <Link href="/qualitypolicy" className="block px-3 py-2 whitespace-nowrap hover:text-[#dcdcdc] backdrop-blur-sm ">Quality Policy</Link>
              <Link href="/gp-privacy-policy" className="block px-3 py-2 whitespace-nowrap hover:text-[#dcdcdc] backdrop-blur-sm ">Privacy Policy</Link>
              <Link href="/ieu" className="block px-3 py-2 hover:text-[#dcdcdc] backdrop-blur-sm ">IEU</Link>
            </div>
          </div>
        </nav>

        {/* Mobile: hamburger */}
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded border border-[#303030] text-[#a2a1a1] hover:text-[#dcdcdc]"
          aria-label="Abrir menú"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>

      {/* Mobile panel */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-opacity ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
        <div className="absolute top-0 left-0 right-0 bg-[#161616] border-b border-[#303030] pt-24 pb-6">
          <div className="container space-y-4 text-sm">
            <div>
              <Link href="/" className={`block ${isAboutActive ? "text-[#dcdcdc]" : "text-[#a2a1a1]"}`}>Sobre nosotros</Link>
              <div className="mt-2 pl-3 space-y-2 text-[#a2a1a1]">
                <Link href="/branding" className="block">Branding</Link>
                <Link href="/creative" className="block">Creative</Link>
                <Link href="/our-team" className="block">Our team</Link>
              </div>
            </div>
            <div className="border-t border-[#303030] pt-4">
              <Link href="/tools" className={`block ${isProductsActive ? "text-[#dcdcdc]" : "text-[#a2a1a1]"}`}>Productos</Link>
              <div className="mt-2 pl-3 space-y-2 text-[#a2a1a1]">
                <Link href="/cody" className="block">Cody</Link>
                <Link href="/sla" className="block">SLA</Link>
              </div>
            </div>
            <div className="border-t border-[#303030] pt-4">
              <Link href="/qualitypolicy" className={`block ${isMoreActive ? "text-[#dcdcdc]" : "text-[#a2a1a1]"}`}>Más</Link>
              <div className="mt-2 pl-3 space-y-2 text-[#a2a1a1]">
                <Link href="/qualitypolicy" className="block whitespace-nowrap">Quality Policy</Link>
                <Link href="/gp-privacy-policy" className="block whitespace-nowrap">Privacy Policy</Link>
                <Link href="/ieu" className="block">IEU</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}


