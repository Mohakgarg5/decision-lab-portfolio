import CaseStudyCard from "../../components/CaseStudyCard";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Redesign: Onboarding Flow",
      excerpt: "Improved activation by redesigning the first‑time user experience and guided setup.",
      slug: "onboarding-flow",
      year: "2025",
      tags: ["product", "ux"],
    },
    {
      title: "Experiment: Pricing Model A/B",
      excerpt: "A controlled experiment measuring willingness to pay and retention across price points.",
      slug: "pricing-ab",
      year: "2024",
      tags: ["growth", "analytics"],
    },
    {
      title: "Tool: Internal Analytics Dashboard",
      excerpt: "Built lightweight analytics to help PMs make weekly prioritization decisions.",
      slug: "analytics-dashboard",
      year: "2023",
      tags: ["infra", "data"],
    },
  ];

  return (
    <div className="py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold">Case studies</h1>
        <p className="text-muted-foreground">Selected product work and experiments — click a case study to read details.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((p) => (
          <CaseStudyCard key={p.slug} title={p.title} excerpt={p.excerpt} slug={p.slug} year={p.year} tags={p.tags} />
        ))}
      </div>
    </div>
  );


  }

