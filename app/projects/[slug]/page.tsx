interface Props {
  params: { slug: string };
}

import Gallery from "../../../components/Gallery";

export default function ProjectDetail({ params }: Props) {
  const { slug } = params;

  // Example images (Unsplash) — replace with real assets later
  const images = [
    { src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=0a9b7d8b9a6f7c1b2b1f8f9c3b6a2e2a", alt: "Research whiteboard" },
    { src: "https://images.unsplash.com/photo-1526378722943-9d5b8b3bbb23?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=98f6b4f7a6f5c3e1d2c3b4a5e6f7a8b9", alt: "Team discussion" },
    { src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=3f2a1b4c5d6e7f8g9h0a1b2c3d4e5f6g", alt: "Product mockups" },
  ];

  return (
    <article className="py-8">
      <header className="mb-6">
        <h1 className="text-3xl font-extrabold">{slug.replace(/-/g, " ")}</h1>
        <p className="text-muted-foreground mt-2">A detailed case study showing problem, approach, outcomes, and next steps.</p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Overview</h2>
        <p className="text-muted-foreground">This case study explores why we built the feature, who it benefits, and the metrics we tracked. Content will be replaced with the full writeup.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
        <Gallery images={images} />
      </section>

      <section className="prose dark:prose-invert">
        <h3>Problem</h3>
        <p>Describe the user problem this project addressed. Explain constraints and success criteria.</p>

        <h3>Approach</h3>
        <p>Summarize discovery, prototyping, and experiments. Include frameworks used and cross-functional collaboration notes.</p>

        <h3>Outcome</h3>
        <p>List key metrics, learnings, and follow-ups.</p>
      </section>
    </article>
  );
}
