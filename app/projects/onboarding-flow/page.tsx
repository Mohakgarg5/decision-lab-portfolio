import Gallery from "../../../components/Gallery";

export default function OnboardingFlow() {
  const images = [
    { src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=9a3d0c6f0a1b2e3c4d5e6f7a8b9c0d1e", alt: "Onboarding wireframes" },
    { src: "https://images.unsplash.com/photo-1520254892330-3f6a7b6a8f7a?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=abcd1234ef567890abcd1234ef567890", alt: "User testing" },
  ];

  return (
    <article className="py-8">
      <header className="mb-6">
        <h1 className="text-3xl font-extrabold">Redesign: Onboarding Flow</h1>
        <p className="text-muted-foreground mt-2">Improved activation by redesigning the first‑time user experience and guided setup.</p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Context</h2>
        <p className="text-muted-foreground">New user activation was low — users dropped off during account setup. We ran discovery to identify friction points and test prototypes.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Approach</h2>
        <ul className="list-disc list-inside">
          <li>Conducted 12 user interviews to surface confusion points.</li>
          <li>Built a guided setup with progressive disclosure.</li>
          <li>Run A/B tests measuring activation and 7‑day retention.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Outcome</h2>
        <p className="text-muted-foreground">Activation improved by 18% and 7‑day retention increased by 6 percentage points. Qualitative feedback showed users appreciated the guidance.</p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-3">Gallery</h3>
        <Gallery images={images} />
      </section>

      <aside className="mt-8 p-6 bg-white/60 dark:bg-slate-800/60 border border-gray-100 dark:border-gray-800 rounded-lg">
        <h4 className="text-sm font-semibold mb-2">Metrics</h4>
        <div className="flex gap-4">
          <div>
            <div className="text-2xl font-bold">+18%</div>
            <div className="text-sm text-muted-foreground">Activation</div>
          </div>
          <div>
            <div className="text-2xl font-bold">+6ppt</div>
            <div className="text-sm text-muted-foreground">7-day retention</div>
          </div>
        </div>
      </aside>
    </article>
  );
}
