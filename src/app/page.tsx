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
        <div className="max-w-3xl mx-auto px-6">
          {/* About */}
          <section className="py-12 border-b border-green-light">
            <p className="text-foreground/80 leading-relaxed max-w-2xl">
              Investor, Collector, and Builder. Crypto native. Building products
              since 2016. Collecting NFTs since 2018. Venture investing since
              2021.
            </p>
          </section>

          {/* Experience */}
          <section className="py-12 border-b border-green-light">
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
          </section>

          {/* Writing */}
          <section className="py-12">
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
                    description={article.description}
                    coverImage={article.coverImage}
                    source="Paragraph"
                  />
                )
              )}
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
