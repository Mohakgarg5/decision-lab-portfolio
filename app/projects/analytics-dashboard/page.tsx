import Gallery from "../../../components/Gallery";

export default function AnalyticsDashboard() {
  const images = [
    { src: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=5d6c7b8a9e0f1a2b3c4d5e6f7a8b9c0d", alt: "Dashboard mockup" },
  ];

  return (
    <article className="py-8">
      <header className="mb-6">
        <h1 className="text-3xl font-extrabold">Tool: Internal Analytics Dashboard</h1>
        <p className="text-muted-foreground mt-2">A lightweight analytics tool to help PMs make prioritization decisions with weekly reports.</p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Overview</h2>
        <p className="text-muted-foreground">Built fast charts and slices of the funnel to highlight weekly opportunities and risks.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Impact</h2>
        <p className="text-muted-foreground">Reduced time-to-insight for PMs from hours to minutes and improved prioritization discussions.</p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-3">Preview</h3>
        <Gallery images={images} />
      </section>
      <aside className="mt-8 p-6 bg-white/60 dark:bg-slate-800/60 border border-gray-100 dark:border-gray-800 rounded-lg">
        <h4 className="text-sm font-semibold mb-2">Impact</h4>
        <div className="flex gap-4">
          <div>
            <div className="text-2xl font-bold">-80%</div>
            <div className="text-sm text-muted-foreground">Manual reporting time</div>
          </div>
          <div>
            <div className="text-2xl font-bold">+3x</div>
            <div className="text-sm text-muted-foreground">Insights generated</div>
          </div>
        </div>
      </aside>
    </article>
  );
}
