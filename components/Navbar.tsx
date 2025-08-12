import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-[#303030] sticky top-0 z-40 bg-[#161616]/70 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">Pathfinding S.A.</Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/products" className="hover:text-[#ef4444]">Productos</Link>
          <Link href="/branding" className="hover:text-[#ef4444]">Branding</Link>
          <Link href="/creative" className="hover:text-[#ef4444]">Creative</Link>
          <Link href="/tools" className="hover:text-[#ef4444]">Tools</Link>
          <Link href="/cody" className="hover:text-[#ef4444]">Cody</Link>
          <Link href="/ieu" className="hover:text-[#ef4444]">IEU</Link>
          <Link href="/sla" className="hover:text-[#ef4444]">SLA</Link>
          <Link href="/assistance-request" className="hover:text-[#ef4444]">Contacto</Link>
        </nav>
      </div>
    </header>
  );
}


