import SectionHeader from "@/components/SectionHeader";

export const metadata = {
  title: "SLA",
  description: "Tiempos de respuesta, canales y alcance por producto.",
};

export default function SLAPage() {
  return (
    <div className="container py-12 sm:py-16">
      <SectionHeader
        eyebrow="Soporte"
        title="SLA"
        subtitle="Tiempos de respuesta y canales de soporte."
      />
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div className="rounded-lg border border-[#303030] p-4">
          <div className="font-medium">FBAToolkit</div>
          <ul className="mt-2 text-sm text-[#8a8a8a] list-disc list-inside space-y-1">
            <li>Soporte por email: support@fbatoolkit.com</li>
            <li>Tiempo de respuesta: 1-2 días hábiles</li>
          </ul>
        </div>
        <div className="rounded-lg border border-[#303030] p-4">
          <div className="font-medium">MercadoToolkit</div>
          <ul className="mt-2 text-sm text-[#8a8a8a] list-disc list-inside space-y-1">
            <li>Soporte por email: support@mercadotoolkit.com</li>
            <li>Tiempo de respuesta: 1-2 días hábiles</li>
          </ul>
        </div>
        <div className="rounded-lg border border-[#303030] p-4">
          <div className="font-medium">GIT 2.0</div>
          <ul className="mt-2 text-sm text-[#8a8a8a] list-disc list-inside space-y-1">
            <li>Soporte por email: contact@pathfinding.com.ar</li>
            <li>Tiempo de respuesta: 2-3 días hábiles</li>
          </ul>
        </div>
      </div>
    </div>
  );
}


