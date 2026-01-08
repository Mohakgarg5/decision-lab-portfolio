"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Footer from "../../components/Footer";
import ProjectCard from "../../components/ProjectCard";
import UploadGate from "../../components/UploadGate";

export default function ResearchPage() {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState<Array<{ name: string; url: string }>>([]);

  // Fetch uploaded files (do not call setState synchronously in effect body)
  useEffect(() => {
    let mounted = true;
    (async () => {
      await fetchFiles();
    })();
    return () => {
      mounted = false;
    };
  }, []);

  async function fetchFiles() {
    try {
      const secret = typeof window !== "undefined" ? sessionStorage.getItem("research_upload_secret") || "" : "";
      const headers: Record<string, string> = {};
      if (secret) headers["x-upload-secret"] = secret;
      const res = await fetch("/api/upload", { headers });
      if (!res.ok) return;
      const data = await res.json();
      setFiles(data.files || []);
    } catch {
      // ignore
    }
  }

  const handleUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);

    try {
      const secret = typeof window !== "undefined" ? sessionStorage.getItem("research_upload_secret") || "" : "";
      const headers: Record<string, string> = {};
      if (secret) headers["x-upload-secret"] = secret;

      const res = await fetch("/api/upload", { method: "POST", body: formData, headers });
      const data = await res.json();
      if (!res.ok) {
        setMessage(data.error || "Upload failed");
      } else {
        setMessage(data.message || "Uploaded");
        setFile(null);
        fetchFiles();
      }
    } catch {
      setMessage("Upload failed. Try again!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-emerald-50 dark:from-slate-900 dark:to-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold mb-2">Research & experiments</h2>
          <p className="text-muted-foreground">A small collection of notes, datasets, and writeups exploring product and ML ideas.</p>
        </div>

        {/* Upload card - gated */}
        <section className="mb-8">
          <UploadGate>
            <div className="p-6 rounded-xl bg-white/60 dark:bg-slate-800/60 border border-gray-100 dark:border-gray-800 backdrop-blur">
              <h3 className="text-lg font-semibold mb-3">Share a file</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="file"
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                  className="border p-2 rounded w-full sm:w-auto"
                />
                <button
                  onClick={handleUpload}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500 transition"
                >
                  Upload
                </button>
              </div>
              {message && <p className="mt-3 text-sm text-green-600">{message}</p>}
            </div>
          </UploadGate>
        </section>

        {/* Research cards grid */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ProjectCard
              title="Prototype: Human-AI Labeling"
              description="Investigating fast label collection for fine-tuning models with active prompts and UI trials."
              tags={["ml", "ui", "experiment"]}
            />
            <ProjectCard
              title="Study: Decision Patterns"
              description="A short writeup about how users trade off speed vs. accuracy in decision tasks."
              tags={["research", "paper"]}
            />
            <ProjectCard
              title="Dataset: Annotated Interactions"
              description="Synthetic dataset gathered from prototype interactions for early model evaluations."
              tags={["dataset"]}
            />
            <ProjectCard
              title="Tooling: Upload Flow"
              description="Small utility for uploading and storing research artifacts to `public/uploads`."
              tags={["infra", "tooling"]}
            />
          </div>
        </section>

        {/* Uploaded files list (if any) */}
        <section className="mt-8">
          <h4 className="text-lg font-semibold mb-3">Uploaded files</h4>
          {files.length === 0 ? (
            <p className="text-muted-foreground">No files uploaded yet.</p>
          ) : (
            <ul className="list-disc list-inside space-y-2">
              {files.map((f, idx) => (
                <li key={idx}>
                  <a href={f.url} target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">{f.name || f.url.split("/").pop()}</a>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
}
