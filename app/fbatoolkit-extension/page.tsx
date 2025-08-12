import SectionHeader from "@/components/SectionHeader";

export const metadata = {
  title: "FBAToolkit Extension",
  description: "Cómo funciona FBAToolkit y cómo instalarla.",
};

export default function FBAToolkitPage() {
  return (
    <div className="container py-12 sm:py-16">
      <SectionHeader
        eyebrow="Producto"
        title="FBAToolkit"
        subtitle="Suite para vendedores de Amazon FBA: analítica, alertas y automatización."
      />
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="space-y-4 text-sm text-[#a2a1a1]">
          <h3 className="text-base font-semibold text-foreground">Cómo funciona</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>Instala la extensión desde el sitio de FBAToolkit.</li>
            <li>Conecta tu cuenta de Amazon Seller Central.</li>
            <li>Configura alertas, reportes y automatizaciones.</li>
          </ol>
          <div className="pt-2">
            <a
              className="inline-flex items-center rounded-md bg-[#e30414] text-white px-4 py-2 text-sm"
              href="https://fbatoolkit.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instalar / Probar FBAToolkit
            </a>
          </div>
        </div>
        <div className="rounded-xl border border-[#303030] h-64 bg-[#1a1a1a]" />
      </div>
    </div>
  );
}


