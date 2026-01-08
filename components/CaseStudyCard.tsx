"use client";
import Link from "next/link";
import { motion } from "framer-motion";

interface CaseStudyCardProps {
  title: string;
  excerpt: string;
  slug?: string;
  year?: string;
  tags?: string[];
}

export default function CaseStudyCard({ title, excerpt, slug = "#", year, tags = [] }: CaseStudyCardProps) {
  return (
    <motion.article whileHover={{ translateY: -6 }} className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
      <Link href={`/projects/${slug}`} className="block">
        <div className="relative h-40 bg-gradient-to-tr from-indigo-600 to-emerald-400 overflow-hidden rounded-t-2xl">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.15),transparent)]" />
          <div className="absolute bottom-3 left-4 text-white">
            <h3 className="text-xl font-bold drop-shadow-sm">{title}</h3>
            {year && <div className="text-sm opacity-90 mt-1">{year}</div>}
          </div>
        </div>

        <div className="p-6 bg-white dark:bg-slate-800 border border-t-0 dark:border-gray-700 rounded-b-2xl">
          <p className="text-sm text-muted-foreground mb-4">{excerpt}</p>

          {tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {tags.map((t) => (
                <span key={t} className="text-xs px-2 py-1 bg-gray-100 dark:bg-white/5 rounded-full text-muted-foreground">{t}</span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </motion.article>
  );
}
