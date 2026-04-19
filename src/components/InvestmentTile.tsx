import type { Investment } from "@/lib/investments";

export function InvestmentTile({ investment }: { investment: Investment }) {
  return (
    <a
      href={investment.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={investment.name}
      title={investment.name}
      className="group aspect-square flex items-center justify-center border border-green-light rounded-md p-4 hover:border-sage transition-colors"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={investment.logo}
        alt={`${investment.name} logo`}
        className="max-w-full max-h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
      />
    </a>
  );
}
