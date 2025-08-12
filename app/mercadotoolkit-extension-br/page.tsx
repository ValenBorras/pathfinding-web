import SectionHeader from "@/components/SectionHeader";

export const metadata = {
  title: "MercadoToolkit BR (Português)",
  description: "Página em português para a extensão MercadoToolkit BR.",
  alternates: { languages: { pt: "/mercadotoolkit-extension-br" } },
};

export default function MercadoToolkitBRPage() {
  return (
    <div className="container py-12 sm:py-16">
      <SectionHeader
        eyebrow="Produto"
        title="MercadoToolkit BR"
        subtitle="Extensão para Mercado Livre no Brasil com assistente de IA e ferramentas práticas."
      />
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="space-y-4 text-sm text-[#a2a1a1]">
          <h3 className="text-base font-semibold text-foreground">Recursos</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Assistente de IA para respostas e descrições.</li>
            <li>Atalhos para gestão de anúncios e mensagens.</li>
            <li>Ferramentas de análise e controle.</li>
          </ul>
          <p className="text-xs">Aviso: Ferramenta independente, não afiliada ao Mercado Livre. Use com responsabilidade e respeitando os termos da plataforma.</p>
          <div className="pt-2">
            <a
              className="inline-flex items-center rounded-md bg-[#e30414] text-white px-4 py-2 text-sm"
              href="https://mercadotoolkit.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instalar / Testar
            </a>
          </div>
        </div>
        <div className="rounded-xl border border-[#303030] h-64 bg-[#1a1a1a]" />
      </div>
    </div>
  );
}


