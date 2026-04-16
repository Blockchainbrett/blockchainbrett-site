import { articles } from "@/lib/articles";
import { ArticleCard } from "@/components/ArticleCard";
import { XArticleEmbed } from "@/components/XArticleEmbed";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function WritingPage() {
  return (
    <div className="flex flex-col flex-1">
      <SiteHeader activePath="/writing" />
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <h2 className="text-sm font-medium uppercase tracking-widest text-olive mb-8">
            Writing
          </h2>
          <div className="space-y-6">
            {articles.map((article) =>
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
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
