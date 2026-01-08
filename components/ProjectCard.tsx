"use client";

import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  link?: string; // external link
  tags?: string[];
}

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function ProjectCard({ title, description, link, tags = [] }: ProjectCardProps) {
  const internalHref = `/projects/${slugify(title)}`;

  return (
    <Link href={internalHref} className="group block">
      <article className="bg-gradient-to-b from-white/60 to-white/40 dark:from-slate-800/60 dark:to-slate-800/40 p-1 rounded-2xl">
        <div className="rounded-xl bg-card p-6 shadow-md hover:shadow-xl transform transition will-change-transform group-hover:-translate-y-1">
          <div className="h-40 w-full rounded-md bg-gradient-to-tr from-indigo-500 to-emerald-400 mb-4 flex items-end justify-between p-4 text-white">
            <span className="font-bold text-lg">{title}</span>
            {link && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(link, "_blank", "noopener,noreferrer");
                }}
                className="bg-white/20 px-3 py-1 rounded text-sm backdrop-blur"
                aria-label={`Open external link for ${title}`}
              >
                Open
              </button>
            )}
          </div>

          <p className="text-sm text-muted-foreground mb-4">{description}</p>

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((t) => (
                <span key={t} className="text-xs px-2 py-1 bg-gray-100 dark:bg-white/5 rounded-full text-muted-foreground">{t}</span>
              ))}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}
