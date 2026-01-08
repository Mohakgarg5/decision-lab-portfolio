export default function ResumePage() {
  return (
    <div className="py-12">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow">
        <header className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">Mohak Garg</h1>
            <p className="text-sm text-muted-foreground">Product Manager — strategy, research, and data-driven product development</p>
          </div>
          <div className="text-sm text-right">
            <div>mohak@example.com</div>
            <div>linkedin.com/in/mohak</div>
          </div>
        </header>

        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Summary</h2>
          <p className="text-muted-foreground">Product manager with experience leading cross-functional teams to ship data-informed features and experiments. Skilled in discovery, metrics-driven experiments, and stakeholder alignment.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Experience</h2>
          <div className="space-y-4">
            <div>
              <div className="flex items-baseline justify-between">
                <h3 className="font-semibold">Senior Product Manager — Example Co</h3>
                <span className="text-sm text-muted-foreground">2022 — Present</span>
              </div>
              <p className="text-muted-foreground">Led onboarding and pricing experiments, improving activation and ARPU.</p>
            </div>

            <div>
              <div className="flex items-baseline justify-between">
                <h3 className="font-semibold">Product Manager — Startup</h3>
                <span className="text-sm text-muted-foreground">2019 — 2022</span>
              </div>
              <p className="text-muted-foreground">Built internal tooling and analytics to inform prioritization decisions.</p>
            </div>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Education & Skills</h2>
          <p className="text-muted-foreground">B.S. in Computer Science — Product strategy, experimentation, user research, SQL, analytics, Figma</p>
        </section>

        <div className="mt-6 flex gap-3">
          <a href="/resume.pdf" className="px-4 py-2 bg-indigo-600 text-white rounded">Download PDF</a>
          <button onClick={() => window.print()} className="px-4 py-2 border rounded">Print</button>
        </div>
      </div>
    </div>
  );
}
