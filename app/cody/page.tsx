import SectionHeader from "@/components/SectionHeader";

export const metadata = {
  title: "Cody AI",
  description: "Chatbot con lenguaje claro y disclaimers de uso responsable.",
};

export default function CodyPage() {
  return (
    <div className="container py-12 sm:py-16">
      <SectionHeader
        eyebrow="Bot"
        title="Cody AI"
        subtitle="Asistente conversacional para consultas rápidas."
      />
      <div className="mt-6 space-y-4 text-sm text-[#8a8a8a] max-w-prose">
        <p>
          Cody AI es un chatbot experimental. Puede equivocarse. Verifica
          información crítica antes de tomar decisiones. No compartas
          información sensible.
        </p>
        <div>
          <a
            href="#"
            className="inline-flex items-center rounded-md bg-[#ef4444] px-4 py-2 text-sm text-white"
          >
            Probar en WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}


