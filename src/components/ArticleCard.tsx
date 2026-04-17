type ArticleCardProps = {
  title: string;
  date: string;
  url: string;
};

const formatDate = (iso: string) => {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export function ArticleCard({ title, date, url }: ArticleCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block group border border-green-light rounded-lg p-4 hover:border-sage transition-colors"
    >
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-base font-medium text-forest group-hover:text-olive transition-colors">
          {title}
          <span className="text-sage ml-1">&#8599;</span>
        </h3>
        <span className="text-xs text-green-muted whitespace-nowrap">
          {formatDate(date)}
        </span>
      </div>
    </a>
  );
}
