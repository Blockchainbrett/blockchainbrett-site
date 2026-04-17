import Link from "next/link";
import { articles } from "@/lib/articles";
import { experience } from "@/lib/experience";
import { ArticleCard } from "@/components/ArticleCard";
import { XArticleEmbed } from "@/components/XArticleEmbed";
import { ExperienceItem } from "@/components/ExperienceItem";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <SiteHeader activePath="/" />

      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-6">
          {/* About */}
          <section className="py-12 border-b border-green-light">
            <p className="text-foreground/80 leading-relaxed max-w-2xl">
              Investor, Collector, and Builder. Crypto native. Building products
              since 2016. Collecting NFTs since 2018. Venture investing since
              2021.
            </p>
          </section>

          {/* Two-column grid (room for a third column later) */}
          <section className="py-12 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            {/* Experience column */}
            <div>
              <div className="flex items-baseline justify-between mb-8">
                <h2 className="text-sm font-medium uppercase tracking-widest text-olive">
                  Experience
                </h2>
                <Link
                  href="/experience"
                  className="text-xs text-green-muted hover:text-forest transition-colors"
                >
                  View all &rarr;
                </Link>
              </div>
              <div className="space-y-10">
                {experience.slice(0, 3).map((item) => (
                  <ExperienceItem key={item.name} item={item} />
                ))}
              </div>
            </div>

            {/* Writing column */}
            <div>
              <div className="flex items-baseline justify-between mb-8">
                <h2 className="text-sm font-medium uppercase tracking-widest text-olive">
                  Writing
                </h2>
                <Link
                  href="/writing"
                  className="text-xs text-green-muted hover:text-forest transition-colors"
                >
                  View all &rarr;
                </Link>
              </div>
              <div className="space-y-6">
                {articles.slice(0, 3).map((article) =>
                  article.type === "x" ? (
                    <XArticleEmbed key={article.id} id={article.id} />
                  ) : (
                    <ArticleCard
                      key={article.url}
                      title={article.title}
                      date={article.date}
                      url={article.url}
                      coverImage={article.coverImage}
                    />
                  )
                )}
              </div>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
