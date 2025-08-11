import ProductCard from "@/components/ProductCard";
import SectionHeader from "@/components/SectionHeader";

export const metadata = {
  title: "Productos",
  description: "Suite de herramientas: FBAToolkit, MercadoToolkit y GIT 2.0.",
};

export default function ProductsPage() {
  return (
    <div className="container py-12 sm:py-16">
      <SectionHeader
        eyebrow="Productos"
        title="Todas las herramientas"
        subtitle="Extensiones y sistemas diseñados para vendedores: Amazon FBA, Mercado Libre y retail."
      />
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ProductCard
          title="FBAToolkit"
          description="Suite para vendedores de Amazon FBA: analítica, alertas y automatización."
          hrefSite="https://fbatoolkit.com"
          hrefInstall="https://fbatoolkit.com"
          hrefDetails="/fbatoolkit-extension"
        />
        <ProductCard
          title="MercadoToolkit"
          description="Extensión para Mercado Libre con asistencia AI y herramientas prácticas."
          hrefSite="https://mercadotoolkit.com"
          hrefInstall="https://mercadotoolkit.com"
          hrefDetails="/mercadotoolkit-extension"
        />
        <ProductCard
          title="MercadoToolkit BR"
          description="Versión para Brasil con contenido en portugués."
          hrefSite="https://mercadotoolkit.com"
          hrefInstall="https://mercadotoolkit.com"
          hrefDetails="/mercadotoolkit-extension-br"
          badge="PT"
        />
        <ProductCard
          title="GIT 2.0"
          description="ERP/CRM para retail y distribución; inventario y precios dinámicos."
          hrefSite="https://gitretail.pathfinding.com.ar"
          hrefDetails="/git"
        />
      </div>
    </div>
  );
}


