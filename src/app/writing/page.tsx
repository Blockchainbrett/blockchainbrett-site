import Image from "next/image";
import Link from "next/link";
import { articles } from "@/lib/articles";
import { ArticleCard } from "@/components/ArticleCard";
import { XArticleEmbed } from "@/components/XArticleEmbed";

const socials = [
  { name: "Twitter", url: "https://twitter.com/BlockchainBrett" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/brett-shear-8b553199/",
  },
  { name: "GitHub", url: "https://github.com/Blockchainbrett" },
];

export default function WritingPage() {
  return (
    <div className="flex flex-col flex-1">
      <header className="border-b border-green-light">
        <div className="max-w-3xl mx-auto px-6 py-8 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-4 group">
            <Image
              src="/cryptopunk.png"
              alt="CryptoPunk avatar"
              width={56}
              height={56}
              className="rounded-md"
            />
            <div>
              <h1 className="text-2xl font-semibold tracking-tight text-forest group-hover:text-olive transition-colors">
                Brett Shear
              </h1>
              <p className="mt-1 text-green-muted text-sm">
                GP at 1confirmation
              </p>
            </div>
          </Link>
          <nav className="flex gap-5">
            <Link
              href="/"
              className="text-sm text-green-muted hover:text-forest transition-colors"
            >
              Home
            </Link>
            <Link
              href="/writing"
              className="text-sm text-forest font-medium"
            >
              Writing
            </Link>
          </nav>
        </div>
      </header>

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

      <footer className="border-t border-green-light">
        <div className="max-w-3xl mx-auto px-6 py-8 flex items-center justify-between">
          <span className="text-xs text-green-muted">
            &copy; {new Date().getFullYear()} Brett Shear
          </span>
          <div className="flex gap-5">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-green-muted hover:text-forest transition-colors"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
