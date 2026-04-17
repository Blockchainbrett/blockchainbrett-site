import Image from "next/image";
import type { ExperienceItem as ExperienceItemType } from "@/lib/experience";

export function ExperienceItem({
  item,
  compact = false,
}: {
  item: ExperienceItemType;
  compact?: boolean;
}) {
  return (
    <div className="group flex gap-4">
      {item.logo ? (
        <Image
          src={item.logo}
          alt={`${item.name} logo`}
          width={36}
          height={36}
          className="rounded-md mt-1 object-contain shrink-0"
        />
      ) : (
        <div className="w-9 h-9 rounded-md bg-green-light shrink-0 mt-1" />
      )}
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline justify-between gap-4">
          <div className="flex items-baseline gap-3 flex-wrap">
            {item.url ? (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-medium text-forest hover:text-olive transition-colors"
              >
                {item.name}
                <span className="text-sage ml-1">&#8599;</span>
              </a>
            ) : (
              <h3 className="text-base font-medium text-forest">{item.name}</h3>
            )}
            <span className="text-sm text-green-muted">{item.role}</span>
          </div>
          <span className="text-xs text-green-muted whitespace-nowrap">
            {item.period}
          </span>
        </div>
        {!compact && (
          <p className="mt-2 text-foreground/70 text-sm leading-relaxed max-w-xl">
            {item.description}
          </p>
        )}
      </div>
    </div>
  );
}
