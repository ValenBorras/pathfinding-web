import SectionHeader from "@/components/SectionHeader";

export const metadata = {
  title: "Our team",
  description: "Meet the Pathfinding S.A. team.",
};

export default function OurTeamPage() {
  return (
    <div className="container py-12 sm:py-16">
      <SectionHeader
        eyebrow="Company"
        title="Our team"
        subtitle="We are a multidisciplinary team passionate about building tools for ecommerce and retail."
      />

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded border border-[#303030] p-4">
          <div className="font-semibold">Valentina Borrás</div>
          <div className="text-[#a2a1a1] text-sm">Founder & CEO</div>
          <p className="mt-2 text-sm text-[#a2a1a1]">
            Leads strategy, product and growth.
          </p>
        </div>
        <div className="rounded border border-[#303030] p-4">
          <div className="font-semibold">Gonzalo Piubello</div>
          <div className="text-[#a2a1a1] text-sm">Engineering Lead</div>
          <p className="mt-2 text-sm text-[#a2a1a1]">
            Oversees engineering and platform reliability.
          </p>
        </div>
        <div className="rounded border border-[#303030] p-4">
          <div className="font-semibold">Team</div>
          <div className="text-[#a2a1a1] text-sm">Product & Operations</div>
          <p className="mt-2 text-sm text-[#a2a1a1]">
            Designers, developers and operators across LATAM and EU.
          </p>
        </div>
      </div>
    </div>
  );
}


