"use client";

import Link from "next/link";

export type ProductCardProps = {
  title: string;
  description: string;
  hrefSite?: string;
  hrefInstall?: string;
  hrefDetails?: string;
  badge?: string;
};

export default function ProductCard({
  title,
  description,
  hrefSite,
  hrefInstall,
  hrefDetails,
  badge,
}: ProductCardProps) {
  return (
    <div className="rounded-xl border border-[#303030] p-6 bg-[#1a1a1a] h-full flex flex-col">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        {badge ? (
          <span className="text-[10px] uppercase tracking-wide rounded bg-[#1a1a1a] px-2 py-1 text-[#a2a1a1]">
            {badge}
          </span>
        ) : null}
      </div>
      <p className="mt-2 text-sm text-[#a2a1a1] flex-1">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {hrefSite ? (
          <a
            href={hrefSite}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm rounded-md border border-[#303030] px-3 py-1.5 hover:bg-[#1a1a1a]"
          >
            Abrir sitio
          </a>
        ) : null}
        {hrefInstall ? (
          <a
            href={hrefInstall}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm rounded-md bg-[#e30414] text-white px-3 py-1.5 hover:opacity-90"
          >
            Instalar extensión
          </a>
        ) : null}
        {hrefDetails ? (
          <Link
            href={hrefDetails}
            className="text-sm rounded-md px-3 py-1.5 hover:underline"
          >
            Ver detalles
          </Link>
        ) : null}
      </div>
    </div>
  );
}


