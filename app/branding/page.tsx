import SectionHeader from "@/components/SectionHeader";

export const metadata = {
  title: "Quiénes somos — Branding",
  description:
    "Narrativa de marca, experiencia y enfoque en innovación para e‑commerce.",
};

export default function BrandingPage() {
  return (
    <div className="container py-12 sm:py-16">
      <SectionHeader
        eyebrow="Quiénes somos"
        title="Branding"
        subtitle="Experiencia en diseño, innovación y herramientas para vendedores."
      />
      <div className="mt-6 space-y-4 text-[--color-muted] max-w-prose">
        <p>
          Pathfinding S.A. es una empresa argentina dedicada a investigación,
          diseño, soporte, desarrollo de software y consultoría.
        </p>
        <p>
          Combinamos pasión por lo que hacemos con conocimiento actualizado de
          tecnologías y herramientas.
        </p>
      </div>
    </div>
  );
}


