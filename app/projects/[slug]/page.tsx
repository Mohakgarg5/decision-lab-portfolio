interface Props {
  params: { slug: string };
}

import Gallery from "../../../components/Gallery";

export default function ProjectDetail({ params }: Props) {
  const slug = params?.slug || "";
  const title = slug ? slug.replace(/-/g, " ") : "Untitled project";

  // Example images (Unsplash) — replace with real assets later
  const images = [
    { src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=0a9b7d8b9a6f7c1b2b1f8f9c3b6a2e2a", alt: "Research whiteboard" },
    { src: "https://images.unsplash.com/photo-1526378722943-9d5b8b3bbb23?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=98f6b4f7a6f5c3e1d2c3b4a5e6f7a8b9", alt: "Team discussion" },
    { src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=3f2a1b4c5d6e7f8g9h0a1b2c3d4e5f6g", alt: "Product mockups" },
  ];

  return (
    <article className="py-8">
      <header className="mb-6 rounded-xl overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-600 via-emerald-400 to-emerald-200 p-8 rounded-xl text-white">
          <h1 className="text-4xl font-extrabold tracking-tight">{title}</h1>
          <p className="mt-2 opacity-90">A detailed case study showing problem, approach, outcomes, and next steps.</p>
          {!slug && (
            <p className="text-sm text-yellow-200 mt-2">No project specified — go back to the projects list.</p>
          )}
        </div>
      </header>

      <section className="mb-8 grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-muted-foreground">This case study explores why we built the feature, who it benefits, and the metrics we tracked. Content will be replaced with the full writeup.</p>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-3">Gallery</h3>
            <Gallery images={images} />
          </div>

          <div className="prose dark:prose-invert mt-8">
            <h3>Problem</h3>
            <p>Describe the user problem this project addressed. Explain constraints and success criteria.</p>

            <h3>Approach</h3>
            <p>Summarize discovery, prototyping, and experiments. Include frameworks used and cross-functional collaboration notes.</p>

            <h3>Outcome</h3>
            <p>List key metrics, learnings, and follow-ups.</p>
          </div>
        </div>

        <aside className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
          <h4 className="text-lg font-semibold mb-4">Key metrics</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-gradient-to-br from-indigo-50 to-emerald-50 dark:from-indigo-900 dark:to-emerald-800 text-center">
              <div className="text-2xl font-bold">+24%</div>
              <div className="text-sm text-muted-foreground">Activation lift</div>
            </div>
            <div className="p-4 rounded-lg bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-900 dark:to-pink-800 text-center">
              <div className="text-2xl font-bold">2.1x</div>
              <div className="text-sm text-muted-foreground">Engagement</div>
            </div>
            <div className="p-4 rounded-lg bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900 dark:to-amber-800 text-center">
              <div className="text-2xl font-bold">-15%</div>
              <div className="text-sm text-muted-foreground">Churn</div>
            </div>
            <div className="p-4 rounded-lg bg-gradient-to-br from-sky-50 to-cyan-50 dark:from-sky-900 dark:to-cyan-800 text-center">
              <div className="text-2xl font-bold">+3.4%</div>
              <div className="text-sm text-muted-foreground">Conversion</div>
            </div>
          </div>
        </aside>
      </section>
    </article>
  );
}
