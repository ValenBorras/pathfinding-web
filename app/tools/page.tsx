import SectionHeader from "@/components/SectionHeader";
import ProductCard from "@/components/ProductCard";

export const metadata = {
  title: "Tools",
  description: "Vista general de FBAToolkit, MercadoToolkit y GIT 2.0.",
};

export default function ToolsPage() {
  return (
    <div className="container py-12 sm:py-16">
      <SectionHeader
        eyebrow="Suite"
        title="Herramientas Pathfinding"
        subtitle="Integraciones y automatización para vendedores."
      />
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ProductCard
          title="FBAToolkit"
          description="Amazon FBA: analítica y automatización."
          hrefSite="https://fbatoolkit.com"
          hrefDetails="/fbatoolkit-extension"
        />
        <ProductCard
          title="MercadoToolkit"
          description="Asistente AI y herramientas para Mercado Libre."
          hrefSite="https://mercadotoolkit.com"
          hrefDetails="/mercadotoolkit-extension"
        />
        <ProductCard
          title="GIT 2.0"
          description="ERP/CRM para retail y distribución."
          hrefSite="https://gitretail.pathfinding.com.ar"
          hrefDetails="/git"
        />
      </div>
    </div>
  );
}


