"use client";
import { useState, useEffect } from "react";

export default function UploadGate({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);
  const [pass, setPass] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const flag = sessionStorage.getItem("research_unlocked");
    if (flag === "1") setUnlocked(true);
  }, []);

  const check = () => {
    const expected = (process.env.NEXT_PUBLIC_UPLOAD_PASS as string) || "changeme";
    if (pass === expected) {
      sessionStorage.setItem("research_unlocked", "1");
      // store the pass locally so client fetches can present it to the server
      sessionStorage.setItem("research_upload_secret", pass);
      setUnlocked(true);
    } else {
      alert("Incorrect passphrase.");
    }
  };

  if (unlocked) return <>{children}</>;

  return (
    <div className="p-6 rounded-xl bg-white/60 dark:bg-slate-800/60 border border-gray-100 dark:border-gray-800">
      <h3 className="text-lg font-semibold mb-2">Restricted upload</h3>
      <p className="text-sm text-muted-foreground mb-4">This upload area is private. Enter the passphrase to unlock.</p>

      <div className="flex gap-2">
        <input value={pass} onChange={(e) => setPass(e.target.value)} placeholder="Passphrase" className="border p-2 rounded w-full" />
        <button onClick={check} className="px-4 py-2 bg-indigo-600 text-white rounded">Unlock</button>
      </div>
    </div>
  );
}
