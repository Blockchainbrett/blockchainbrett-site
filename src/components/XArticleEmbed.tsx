import { getTweet } from "react-tweet/api";

type XArticleEmbedProps = {
  id: string;
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

export async function XArticleEmbed({ id }: XArticleEmbedProps) {
  let tweet;
  try {
    tweet = await getTweet(id);
  } catch {
    tweet = undefined;
  }

  // @ts-expect-error - `article` is present on X Article posts but typings may be stale
  const article = tweet?.article;
  const createdAt = tweet?.created_at;

  // Prefer the direct article URL (from the post's URL entity), fall back to the status URL.
  const expandedUrl = tweet?.entities?.urls?.[0]?.expanded_url;
  const articleUrl = expandedUrl
    ? expandedUrl.replace(/^http:\/\//, "https://")
    : `https://x.com/blockchainbrett/status/${id}`;

  if (!article) {
    return (
      <a
        href={articleUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block group border border-green-light rounded-lg p-5 hover:border-sage transition-colors"
      >
        <div className="flex items-baseline justify-between gap-4 mb-2">
          <h3 className="text-lg font-medium text-forest group-hover:text-olive transition-colors">
            X Article
            <span className="text-sage ml-1">&#8599;</span>
          </h3>
          {createdAt && (
            <span className="text-xs text-green-muted whitespace-nowrap">
              {formatDate(createdAt)}
            </span>
          )}
        </div>
        <span className="text-xs uppercase tracking-widest text-olive">X</span>
      </a>
    );
  }

  const coverUrl: string | undefined =
    article.cover_media?.media_info?.original_img_url;

  return (
    <a
      href={articleUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block group border border-green-light rounded-lg overflow-hidden hover:border-sage transition-colors"
    >
      {coverUrl && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={coverUrl}
          alt={article.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-5">
        <div className="flex items-baseline justify-between gap-4 mb-2">
          <h3 className="text-lg font-medium text-forest group-hover:text-olive transition-colors">
            {article.title}
            <span className="text-sage ml-1">&#8599;</span>
          </h3>
          {createdAt && (
            <span className="text-xs text-green-muted whitespace-nowrap">
              {formatDate(createdAt)}
            </span>
          )}
        </div>
        {article.preview_text && (
          <p className="text-foreground/70 text-sm leading-relaxed mb-3">
            {article.preview_text.trim()}
            {article.preview_text.trim().endsWith(".") ? "" : "…"}
          </p>
        )}
        <span className="text-xs uppercase tracking-widest text-olive">X</span>
      </div>
    </a>
  );
}
