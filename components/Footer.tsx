import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#303030] mt-24">
      <div className="container py-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-sm">
        <div>
          <div className="font-semibold mb-2">Pathfinding S.A.</div>
          <p className="text-[#a2a1a1]">O’Higgins 105, Paraná, Entre Ríos (3100), Argentina</p>
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
      <div className="border-t border-[#303030]">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#a2a1a1]">
          <p>© {new Date().getFullYear()} Pathfinding S.A.</p>
          <div className="flex items-center gap-4">
            <a className="hover:underline" href="/gp-privacy-policy">Privacy</a>
            <a className="hover:underline" href="/qualitypolicy">Quality</a>
          </div>
        </div>
      </div>
    </footer>
  );
}


