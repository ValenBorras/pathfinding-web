import SectionHeader from "@/components/SectionHeader";

export const metadata = {
  title: "MercadoToolkit Extension",
  description:
    "Funciones, disclaimer y cómo instalar MercadoToolkit para Mercado Libre.",
};

export default function MercadoToolkitPage() {
  return (
    <div className="container py-12 sm:py-16">
      <SectionHeader
        eyebrow="Producto"
        title="MercadoToolkit"
        subtitle="Extensión para Mercado Libre con asistencia AI y herramientas prácticas."
      />
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="space-y-4 text-sm text-[#8a8a8a]">
          <h3 className="text-base font-semibold text-foreground">Funciones</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Asistente AI para respuestas y descripciones.</li>
            <li>Atajos para gestión de publicaciones y mensajes.</li>
            <li>Herramientas de análisis y control.</li>
          </ul>
          <p className="text-xs">Disclaimer: La herramienta es independiente y no está afiliada a Mercado Libre. Úsese con responsabilidad y respetando los términos de la plataforma.</p>
          <div className="pt-2">
            <a
              className="inline-flex items-center rounded-md bg-[#ef4444] text-white px-4 py-2 text-sm"
              href="https://mercadotoolkit.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instalar / Probar MercadoToolkit
            </a>
          </div>
        </div>
        <div className="rounded-xl border border-[#303030] h-64 bg-[#1a1a1a]" />
      </div>
      <div className="mt-10 text-sm text-[#8a8a8a]">
        <p>Soporte: <a className="hover:underline" href="mailto:support@mercadotoolkit.com">support@mercadotoolkit.com</a></p>
      </div>
    </div>
  );
}


