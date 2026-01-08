"use client";
import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="md:hidden fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/60 dark:bg-black/50 border-b border-transparent dark:border-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-600 to-emerald-500 flex items-center justify-center text-white font-semibold">MG</div>
            <span className="font-semibold text-lg text-gray-900 dark:text-gray-100">Mohak Garg</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600">About</Link>
            <Link href="/projects" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600">Projects</Link>
            <Link href="/research" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600">Research</Link>
            <Link href="/contact" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600">Contact</Link>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              aria-label="Toggle menu"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-200/50 dark:hover:bg-white/5"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-2 mb-4 space-y-2 bg-white/60 dark:bg-black/60 p-3 rounded-md">
            <Link href="/about" onClick={() => setIsOpen(false)} className="block px-2 py-2 rounded hover:bg-gray-100 dark:hover:bg-white/5">About</Link>
            <Link href="/projects" onClick={() => setIsOpen(false)} className="block px-2 py-2 rounded hover:bg-gray-100 dark:hover:bg-white/5">Projects</Link>
            <Link href="/research" onClick={() => setIsOpen(false)} className="block px-2 py-2 rounded hover:bg-gray-100 dark:hover:bg-white/5">Research</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="block px-2 py-2 rounded hover:bg-gray-100 dark:hover:bg-white/5">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
