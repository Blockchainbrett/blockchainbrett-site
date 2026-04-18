import { experience } from "@/lib/experience";
import { ExperienceItem } from "@/components/ExperienceItem";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function ExperiencePage() {
  return (
    <div className="flex flex-col flex-1">
      <SiteHeader activePath="/experience" />
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 py-8 sm:py-12">
          <h2 className="text-sm font-medium uppercase tracking-widest text-olive mb-6 sm:mb-8">
            Experience
          </h2>
          <div className="space-y-10">
            {experience.map((item) => (
              <ExperienceItem key={item.name} item={item} />
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
