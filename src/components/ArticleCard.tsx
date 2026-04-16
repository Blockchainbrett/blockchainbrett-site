type ArticleCardProps = {
  title: string;
  date: string;
  url: string;
  description?: string;
  source: string;
  coverImage?: string;
};

const formatDate = (iso: string) => {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export function ArticleCard({
  title,
  date,
  url,
  description,
  source,
  coverImage,
}: ArticleCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block group border border-green-light rounded-lg overflow-hidden hover:border-sage transition-colors"
    >
      {coverImage && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={coverImage}
          alt={title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-5">
        <div className="flex items-baseline justify-between gap-4 mb-2">
          <h3 className="text-lg font-medium text-forest group-hover:text-olive transition-colors">
            {title}
            <span className="text-sage ml-1">&#8599;</span>
          </h3>
          <span className="text-xs text-green-muted whitespace-nowrap">
            {formatDate(date)}
          </span>
        </div>
        {description && (
          <p className="text-foreground/70 text-sm leading-relaxed mb-3">
            {description}
          </p>
        )}
        <span className="text-xs uppercase tracking-widest text-olive">
          {source}
        </span>
      </div>
    </a>
  );
}
