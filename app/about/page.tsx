"use client";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto mt-24 px-6 py-12">
        <h2 className="text-4xl font-bold mb-6 text-center">About Me</h2>
        <p className="text-lg text-gray-700 mb-4">
          Hi! I’m <strong>Mohak Garg</strong>, a full-stack developer, AI enthusiast, and team lead. I specialize in building **web & mobile apps**, **enterprise platforms**, and **AI-driven solutions**.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Some of my key achievements include:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Built <strong>Alpha Fit</strong>, a fitness tracking Android app used by 50+ students.</li>
          <li>Led <strong>GROWTH-MONITOR</strong>, a platform that reduced manual work by 90% and increased engagement.</li>
          <li>Developed an AI chatbot using OpenAI models, improving response accuracy by 25%.</li>
          <li>Managed teams and projects with Agile methodologies, increasing delivery efficiency by 20%.</li>
          <li>Promoted literacy and empowered children through volunteering programs.</li>
        </ul>
        <p className="text-lg text-gray-700">
          I’m passionate about creating innovative solutions, learning new technologies, and sharing knowledge. Explore my projects and research to see my work in action!
        </p>
      </main>
      <Footer />
    </div>
  );
}
