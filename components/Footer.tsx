export default function Footer() {
  return (
    <footer className="w-full mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-t border-gray-200 dark:border-gray-800">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-600 to-emerald-500 flex items-center justify-center text-white font-semibold">MG</div>
            <div>
              <p className="font-semibold">Mohak Garg</p>
              <p className="text-sm text-muted-foreground">Designer & Engineer</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600">GitHub</a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600">LinkedIn</a>
            <a href="mailto:your@email.com" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600">Email</a>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-muted-foreground">© {new Date().getFullYear()} Mohak Garg. All rights reserved.</div>
      </div>
    </footer>
  );
}
