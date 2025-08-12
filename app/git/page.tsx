import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";

export const metadata = {
  title: "GIT 2.0",
  description:
    "ERP/CRM para retail y distribución; inventario, precios y repricing.",
};

export default function GitPage() {
  return (
    <div className="container py-12 sm:py-16">
      <SectionHeader
        eyebrow="Producto"
        title="GIT 2.0"
        subtitle="ERP/CRM para retail y distribución. Control de inventario, listas de precios y reglas de repricing."
      />
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="space-y-4 text-sm text-[#8a8a8a]">
          <h3 className="text-base font-semibold text-foreground">Características</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Inventario y stock multi-depósito.</li>
            <li>CRM básico para cuentas y oportunidades.</li>
            <li>Listas de precios y reglas de repricing.</li>
            <li>Integraciones con marketplaces.</li>
          </ul>
          <p>
            Más información: {" "}
            <a
              className="hover:underline"
              href="https://gitretail.pathfinding.com.ar"
              target="_blank"
              rel="noopener noreferrer"
            >
              gitretail.pathfinding.com.ar
            </a>
          </p>
        </div>
        <div className="rounded-xl border border-[#303030] h-64 bg-[#1a1a1a]" />
      </div>
      <div className="mt-10">
        <Link href="/assistance-request" className="inline-flex items-center rounded-md bg-[#ef4444] px-4 py-2 text-sm text-white">
          Solicitar implementación
        </Link>
      </div>
    </div>
  );
}


