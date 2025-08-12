import SectionHeader from "@/components/SectionHeader";

export const metadata = {
  title: "Quiénes somos — Creative",
  description: "Filosofía creativa y perspectiva sobre la transformación en e‑commerce.",
};

export default function CreativePage() {
  return (
    <div className="container py-12 sm:py-16">
      <SectionHeader
        eyebrow="Quiénes somos"
        title="Creative"
        subtitle="Filosofía creativa aplicada a e‑commerce"
      />
      <figure className="mt-6 border-l-4 border-[#ef4444] pl-4">
        <blockquote className="text-lg font-serif">
          &ldquo;La disciplina es el puente entre metas y logros.&rdquo;
        </blockquote>
        <figcaption className="text-sm text-[#8a8a8a] mt-1">— Jim Rohn</figcaption>
      </figure>
      <div className="mt-6 space-y-4 text-[#8a8a8a] max-w-prose">
        <p>
          Pensamos el diseño como una herramienta para simplificar decisiones y
          mejorar los flujos cotidianos de venta.
        </p>
      </div>
    </div>
  );
}


