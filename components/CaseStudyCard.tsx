"use client";
import Link from "next/link";

interface CaseStudyCardProps {
  title: string;
  excerpt: string;
  slug?: string;
  year?: string;
  tags?: string[];
}

export default function CaseStudyCard({ title, excerpt, slug = "#", year, tags = [] }: CaseStudyCardProps) {
  return (
    <article className="group border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden">
      <Link href={`/projects/${slug}`} className="block">
        <div className="p-6 bg-white/60 dark:bg-slate-800/60 backdrop-blur">
          <div className="flex items-start justify-between">
            <h3 className="text-lg font-semibold">{title}</h3>
            {year && <span className="text-sm text-muted-foreground">{year}</span>}
          </div>
          <p className="mt-3 text-sm text-muted-foreground">{excerpt}</p>

          {tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((t) => (
                <span key={t} className="text-xs px-2 py-1 bg-gray-100 dark:bg-white/5 rounded-full text-muted-foreground">{t}</span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </article>
  );
}
