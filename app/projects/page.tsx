"use client";
import CaseStudyCard from "../../components/CaseStudyCard";
import { motion } from "framer-motion";

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
    <div className="py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold">Case studies</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl">Selected product work and experiments — click a case study to read details. Focused on measurable outcomes and fast iteration.</p>
      </div>

      <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ staggerChildren: 0.05, duration: 0.5 }}>
        {projects.map((p) => (
          <motion.div key={p.slug} whileHover={{ scale: 1.02 }}>
            <CaseStudyCard title={p.title} excerpt={p.excerpt} slug={p.slug} year={p.year} tags={p.tags} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );

}

