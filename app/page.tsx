"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CaseStudyCard from "../components/CaseStudyCard";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-indigo-50 via-white to-emerald-50 dark:from-slate-900 dark:via-slate-950">
      <Navbar />

      <main className="flex-1 flex flex-col justify-center items-center text-center mt-24 px-4">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-emerald-500"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          Hi — I’m Mohak Garg
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-2xl mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Product manager & designer — I ship experiments, build analytics tooling, and collaborate with engineers to launch features.
        </motion.p>

        <motion.p className="text-sm text-muted-foreground max-w-2xl mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
          Currently open to product/PM roles and freelance collaborations.
        </motion.p>

        <div className="flex gap-4 items-center">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link href="/projects" className="inline-flex items-center gap-3 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-indigo-500 transition">See Projects</Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link href="/contact" className="inline-flex items-center gap-3 border border-gray-200 dark:border-gray-700 px-6 py-3 rounded-lg font-medium text-gray-700 dark:text-gray-200 hover:shadow-md transition">Get in touch</Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <a href="/resume.pdf" className="inline-flex items-center gap-2 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-lg font-medium text-gray-700 dark:text-gray-200 hover:shadow-md transition">Resume</a>
          </motion.div>
        </div>
        
        <section className="mt-16 w-full max-w-4xl">
          <h2 className="text-2xl font-extrabold mb-4">Featured work</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <CaseStudyCard title="Redesign: Onboarding Flow" excerpt="Improved activation with guided setup and A/B testing." slug="onboarding-flow" year="2025" tags={["product","ux"]} />
            <CaseStudyCard title="Pricing Model A/B" excerpt="Experimented across price points to increase ARPU." slug="pricing-ab" year="2024" tags={["growth","analytics"]} />
            <CaseStudyCard title="Analytics Dashboard" excerpt="Internal tool to speed up PM decision making." slug="analytics-dashboard" year="2023" tags={["data","tooling"]} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
