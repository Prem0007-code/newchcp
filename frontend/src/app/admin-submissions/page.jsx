"use client";

import { useEffect, useState } from "react";

export default function AdminSubmissionsPage() {
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const run = async () => {
      try {
        // Prompt admin for password/token
        const entered = window.prompt("Enter admin password:") || "";
        setToken(entered);

        const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:5000";
        const resp = await fetch(`${API_BASE}/api/submissions`, {
          headers: {
            "x-admin-token": entered,
          },
          cache: "no-store",
        });

        if (resp.status === 401) {
          throw new Error("Unauthorized: Invalid admin token");
        }
        if (!resp.ok) {
          const txt = await resp.text();
          throw new Error(`Request failed: ${resp.status} ${txt}`);
        }

        const data = await resp.json();
        setSubmissions(Array.isArray(data?.data) ? data.data : []);
        setError("");
      } catch (err) {
        setError(err?.message || "Failed to load submissions");
      } finally {
        setLoading(false);
      }
    };

    run();
  }, []);

  return (
    <main className="min-h-screen bg-gray-950 text-white p-6">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-2xl font-bold">Admin Submissions</h1>
        <p className="text-white/70 mt-1">Protected view of contact form submissions</p>

        {loading && (
          <div className="mt-6">Loading…</div>
        )}

        {!loading && error && (
          <div className="mt-6 rounded-md border border-red-500/30 bg-red-500/10 p-4 text-red-300">
            {error}
          </div>
        )}

        {!loading && !error && (
          <div className="mt-6 overflow-x-auto rounded-lg border border-white/10">
            <table className="min-w-full text-sm">
              <thead className="bg-white/5">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Name</th>
                  <th className="px-4 py-3 text-left font-semibold">Email</th>
                  <th className="px-4 py-3 text-left font-semibold">Message</th>
                  <th className="px-4 py-3 text-left font-semibold">Created</th>
                </tr>
              </thead>
              <tbody>
                {submissions.length === 0 && (
                  <tr>
                    <td colSpan={4} className="px-4 py-6 text-center text-white/70">
                      No submissions found
                    </td>
                  </tr>
                )}
                {submissions.map((s) => (
                  <tr key={s._id} className="odd:bg-white/0 even:bg-white/[0.02]">
                    <td className="px-4 py-3 align-top">{s.name}</td>
                    <td className="px-4 py-3 align-top">{s.email}</td>
                    <td className="px-4 py-3 align-top whitespace-pre-wrap max-w-xl">{s.message}</td>
                    <td className="px-4 py-3 align-top text-white/70">
                      {s.createdAt ? new Date(s.createdAt).toLocaleString() : "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}
