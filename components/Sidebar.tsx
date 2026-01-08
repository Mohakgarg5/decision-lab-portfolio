"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Sidebar() {
  return (
    <aside className="hidden md:block md:col-span-3 sticky top-24 h-[calc(100vh-6rem)]">
      <div className="p-6 rounded-2xl bg-white/60 dark:bg-slate-800/60 backdrop-blur border border-gray-100 dark:border-gray-800 h-full flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-600 to-emerald-500 flex items-center justify-center text-white font-semibold">MG</div>
            <div>
              <h3 className="text-lg font-bold">Mohak Garg</h3>
              <p className="text-sm text-muted-foreground">Product Manager</p>
            </div>
          </div>

          <nav className="flex flex-col gap-2 mt-4">
            <Link href="/" className="text-sm text-gray-700 dark:text-gray-200 hover:text-indigo-600">Home</Link>
            <Link href="/projects" className="text-sm text-gray-700 dark:text-gray-200 hover:text-indigo-600">Case studies</Link>
            <Link href="/research" className="text-sm text-gray-700 dark:text-gray-200 hover:text-indigo-600">Research</Link>
            <Link href="/contact" className="text-sm text-gray-700 dark:text-gray-200 hover:text-indigo-600">Contact</Link>
          </nav>

          <div className="mt-5 flex items-center gap-2">
            <a href="/uploads/resume.pdf" download className="px-3 py-2 bg-indigo-600 text-white rounded text-sm">Download resume</a>
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>
        </div>

        <div className="text-sm text-muted-foreground">
          <p className="mb-2">Available for product leadership, strategy, and research collaborations.</p>
          <a href="/contact" className="inline-block mt-2 px-3 py-2 bg-indigo-600 text-white rounded">Get in touch</a>
        </div>
      </div>
    </aside>
  );
}
