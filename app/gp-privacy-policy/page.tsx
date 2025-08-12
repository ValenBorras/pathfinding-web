import SectionHeader from "@/components/SectionHeader";

export const metadata = {
  title: "GP Privacy Policy",
  description: "Política de privacidad. Texto íntegro con mejor legibilidad.",
};

export default function PrivacyPolicyPage() {
  // Placeholder: migrate full text later; maintain headings/TOC for readability
  return (
    <div className="container py-12 sm:py-16">
      <SectionHeader eyebrow="Legal" title="GP Privacy Policy" subtitle="Esta política describe el tratamiento de datos. (Migrar texto completo)" />
      <div className="mt-6 grid gap-8 lg:grid-cols-[240px_1fr]">
        <nav className="text-sm text-[#8a8a8a]">
          <ol className="space-y-2 sticky top-24">
            <li><a href="#intro" className="hover:underline">Introducción</a></li>
            <li><a href="#data" className="hover:underline">Datos recolectados</a></li>
            <li><a href="#rights" className="hover:underline">Derechos</a></li>
          </ol>
        </nav>
        <article className="prose prose-invert max-w-none text-[#8a8a8a]">
          <section id="intro"><h3>Introducción</h3><p>Contenido a migrar desde el sitio actual.</p></section>
          <section id="data" className="mt-8"><h3>Datos recolectados</h3><p>Contenido a migrar.</p></section>
          <section id="rights" className="mt-8"><h3>Derechos</h3><p>Contenido a migrar.</p></section>
        </article>
      </div>
    </div>
  );
}


