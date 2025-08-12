import SectionHeader from "@/components/SectionHeader";

export const metadata = {
  title: "IEU",
  description: "Iniciativa educativa gratuita con misión y actividades.",
};

export default function IEUPage() {
  return (
    <div className="container py-12 sm:py-16">
      <SectionHeader eyebrow="Equipo" title="IEU" subtitle="Iniciativa educativa gratuita" />
      <div className="mt-6 space-y-4 text-[#8a8a8a] max-w-prose">
        <p>
          IEU promueve el aprendizaje abierto en herramientas digitales y
          e‑commerce. Actividades, talleres y recursos abiertos.
        </p>
        <div className="pt-2">
          <a href="#" className="inline-flex items-center rounded-md bg-[#ef4444] px-4 py-2 text-sm text-white">Quiero saber más</a>
        </div>
      </div>
    </div>
  );
}


