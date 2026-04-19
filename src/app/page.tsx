import Link from "next/link";
import { highlightedArticles } from "@/lib/articles";
import { experience } from "@/lib/experience";
import { investments } from "@/lib/investments";
import { ArticleCard } from "@/components/ArticleCard";
import { XArticleEmbed } from "@/components/XArticleEmbed";
import { ExperienceItem } from "@/components/ExperienceItem";
import { InvestmentTile } from "@/components/InvestmentTile";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <SiteHeader activePath="/" />

      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          {/* About */}
          <section className="py-8 sm:py-12 border-b border-green-light">
            <p className="text-foreground/80 leading-relaxed max-w-2xl">
              Investor, Collector, and Builder. Crypto native. Building products
              since 2016. Collecting NFTs since 2018. Venture investing since
              2021.
            </p>
          </section>

          {/* Three-column grid */}
          <section className="py-8 sm:py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
            {/* Experience column */}
            <div>
              <div className="flex items-baseline justify-between mb-6 sm:mb-8">
                <h2 className="text-sm font-medium uppercase tracking-widest text-olive">
                  Experience
                </h2>
                <Link
                  href="/experience"
                  className="text-xs text-green-muted hover:text-forest transition-colors"
                >
                  View more &rarr;
                </Link>
              </div>
              <div className="space-y-5">
                {experience.map((item) => (
                  <ExperienceItem key={item.name} item={item} compact />
                ))}
              </div>
            </div>

            {/* Writings column */}
            <div>
              <div className="flex items-baseline justify-between mb-6 sm:mb-8">
                <h2 className="text-sm font-medium uppercase tracking-widest text-olive">
                  Writings
                </h2>
                <Link
                  href="/writing"
                  className="text-xs text-green-muted hover:text-forest transition-colors"
                >
                  View more &rarr;
                </Link>
              </div>
              <div className="space-y-2">
                {highlightedArticles.map((article) =>
                  article.type === "x" ? (
                    <XArticleEmbed key={article.id} id={article.id} />
                  ) : (
                    <ArticleCard
                      key={article.url}
                      title={article.title}
                      date={article.date}
                      url={article.url}
                    />
                  )
                )}
              </div>
            </div>

            {/* Investments column */}
            <div>
              <div className="flex items-baseline justify-between mb-6 sm:mb-8">
                <h2 className="text-sm font-medium uppercase tracking-widest text-olive">
                  Investments
                </h2>
                <Link
                  href="/investments"
                  className="text-xs text-green-muted hover:text-forest transition-colors"
                >
                  View more &rarr;
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {investments.map((investment) => (
                  <InvestmentTile key={investment.name} investment={investment} />
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
