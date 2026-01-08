import Gallery from "../../../components/Gallery";

export default function PricingAB() {
  const images = [
    { src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=0f1e2d3c4b5a69788796a5b4c3d2e1f0", alt: "Experiment dashboard" },
  ];

  return (
    <article className="py-8">
      <header className="mb-6">
        <h1 className="text-3xl font-extrabold">Experiment: Pricing Model A/B</h1>
        <p className="text-muted-foreground mt-2">Measured willingness to pay and retention across price points to inform pricing strategy.</p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Hypothesis</h2>
        <p className="text-muted-foreground">Minor price increases for premium tiers will not significantly reduce conversion but will increase ARPU.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Method</h2>
        <p className="text-muted-foreground">Randomized experiment with tracking for conversion, churn, and revenue per user over a 30‑day period.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Key findings</h2>
        <ul className="list-disc list-inside">
          <li>Small price increase raised ARPU by 12% with insignificant change to conversion.</li>
          <li>Segments with high trial engagement were price-insensitive.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-3">Artifacts</h3>
        <Gallery images={images} />
      </section>
      <aside className="mt-8 p-6 bg-white/60 dark:bg-slate-800/60 border border-gray-100 dark:border-gray-800 rounded-lg">
        <h4 className="text-sm font-semibold mb-2">Key metrics</h4>
        <div className="flex gap-4">
          <div>
            <div className="text-2xl font-bold">+12%</div>
            <div className="text-sm text-muted-foreground">ARPU</div>
          </div>
          <div>
            <div className="text-2xl font-bold">0.8%</div>
            <div className="text-sm text-muted-foreground">Delta conversion</div>
          </div>
        </div>
      </aside>
    </article>
  );
}
