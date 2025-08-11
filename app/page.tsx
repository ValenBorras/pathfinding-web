import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="container py-20 sm:py-28">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-6xl font-semibold leading-[1.1] tracking-tight">
            Software que acelera tu operativa
          </h1>
          <p className="mt-5 text-lg text-[--muted] max-w-prose">
            Herramientas y extensiones prácticas para vendedores: FBAToolkit,
            MercadoToolkit y GIT 2.0. Integraciones reales, automatización y
            soporte claro.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/products" className="btn btn-primary">Ver productos</Link>
            <Link href="/assistance-request" className="btn btn-outline">Contacto</Link>
          </div>
        </div>
      </section>

      <section className="container py-8 sm:py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ProductCard
            title="FBAToolkit"
            description="Amazon FBA: analítica, alertas y automatización."
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
      </section>

      <section className="container py-20">
        <div className="max-w-3xl space-y-3">
          <h2 className="text-2xl font-semibold">Garantías</h2>
          <ul className="text-[--muted] space-y-2 list-disc list-inside">
            <li>Precios claros en implementaciones; sin sorpresas.</li>
            <li>Corrección de bugs sin cargo.</li>
            <li>SLA con tiempos de respuesta definidos.</li>
          </ul>
        </div>
      </section>

      <section className="container py-10">
        <figure className="max-w-2xl">
          <blockquote className="text-xl leading-relaxed font-medium">
            &ldquo;Encontramos soluciones creativas donde otros dijeron que no se
            podía. Comunicación directa, foco en resultados.&rdquo;
          </blockquote>
          <figcaption className="mt-2 text-sm text-[--muted]">Cliente de retail</figcaption>
        </figure>
      </section>
    </div>
  );
}

function ProductCard({
  title,
  description,
  hrefSite,
  hrefDetails,
}: {
  title: string;
  description: string;
  hrefSite: string;
  hrefDetails: string;
}) {
  return (
    <div className="rounded-lg border border-[--color-border] p-6 bg-[--color-gray-100]">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <a href={hrefSite} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-[--accent]">
          Abrir sitio ↗
        </a>
      </div>
      <p className="mt-2 text-sm text-[--color-muted]">{description}</p>
      <div className="mt-4">
        <Link href={hrefDetails} className="text-sm hover:text-[--accent]">
          Ver detalles
        </Link>
      </div>
    </div>
  );
}

