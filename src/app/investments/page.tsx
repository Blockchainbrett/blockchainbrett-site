import { investments } from "@/lib/investments";
import { InvestmentTile } from "@/components/InvestmentTile";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function InvestmentsPage() {
  return (
    <div className="flex flex-col flex-1">
      <SiteHeader activePath="/investments" />

      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-8 sm:py-12">
          <h2 className="text-sm font-medium uppercase tracking-widest text-olive mb-6 sm:mb-8">
            Investments
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4">
            {investments.map((investment) => (
              <InvestmentTile key={investment.name} investment={investment} />
            ))}
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
