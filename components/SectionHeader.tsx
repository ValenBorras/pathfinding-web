type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function SectionHeader({ eyebrow, title, subtitle, align = "left" }: Props) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow ? (
        <div className="text-xs uppercase tracking-wide text-[#a2a1a1]">{eyebrow}</div>
      ) : null}
      <h2 className="mt-1 text-xl sm:text-2xl font-semibold">{title}</h2>
      {subtitle ? (
        <p className="mt-2 text-[#a2a1a1] max-w-prose mx-auto">{subtitle}</p>
      ) : null}
    </div>
  );
}


