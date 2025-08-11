import SectionHeader from "@/components/SectionHeader";

export const metadata = {
  title: "Quality Policy",
  description: "Política de calidad con formato legible.",
};

export default function QualityPolicyPage() {
  return (
    <div className="container py-12 sm:py-16">
      <SectionHeader eyebrow="Legal" title="Quality Policy" subtitle="Declaraciones de calidad (migrar texto completo)" />
      <div className="mt-6 space-y-3 text-[--color-muted]">
        <ul className="list-disc list-inside space-y-2">
          <li>Compromiso con la mejora continua.</li>
          <li>Enfoque en el cliente y resultados medibles.</li>
          <li>Cumplimiento de normas y estándares aplicables.</li>
        </ul>
      </div>
    </div>
  );
}


