"use client";

import { useEffect, useState } from "react";

export default function AdminAfterRegistrationsPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const run = async () => {
      try {
        const token = window.prompt("Enter admin password:") || "";
        const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:5000";
        const resp = await fetch(`${API_BASE}/api/after-registrations`, {
          headers: {
            "x-admin-token": token,
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
        setItems(Array.isArray(data?.data) ? data.data : []);
        setError("");
      } catch (err) {
        setError(err?.message || "Failed to load records");
      } finally {
        setLoading(false);
      }
    };

    run();
  }, []);

  return (
    <main className="min-h-screen bg-gray-950 text-white p-6">
      <div className="mx-auto max-w-[1200px]">
        <h1 className="text-2xl font-bold">Admin · After Registrations</h1>
        <p className="text-white/70 mt-1">Protected list of team registrations</p>

        {loading && <div className="mt-6">Loading…</div>}

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
                  <th className="px-4 py-3 text-left font-semibold">Team</th>
                  <th className="px-4 py-3 text-left font-semibold">Players</th>
                  <th className="px-4 py-3 text-left font-semibold">Emails</th>
                  <th className="px-4 py-3 text-left font-semibold">T-shirt Sizes</th>
                  <th className="px-4 py-3 text-left font-semibold">Codeforces IDs</th>
                  <th className="px-4 py-3 text-left font-semibold">Payment</th>
                  <th className="px-4 py-3 text-left font-semibold">Created</th>
                </tr>
              </thead>
              <tbody>
                {items.length === 0 && (
                  <tr>
                    <td colSpan={7} className="px-4 py-6 text-center text-white/70">
                      No records found
                    </td>
                  </tr>
                )}
                {items.map((r) => (
                  <tr key={r._id} className="odd:bg-white/0 even:bg-white/[0.02] align-top">
                    <td className="px-4 py-3">{r.teamName}</td>
                    <td className="px-4 py-3 whitespace-pre-wrap">
                      {[
                        r.playerName1 && `1) ${r.playerName1}`,
                        r.playerName2 && `2) ${r.playerName2}`,
                        r.playerName3 && `3) ${r.playerName3}`,
                      ]
                        .filter(Boolean)
                        .join("\n")}
                    </td>
                    <td className="px-4 py-3 whitespace-pre-wrap">
                      {[
                        r.emailPlayer1 && `1) ${r.emailPlayer1}`,
                        r.emailPlayer2 && `2) ${r.emailPlayer2}`,
                        r.emailPlayer3 && `3) ${r.emailPlayer3}`,
                      ]
                        .filter(Boolean)
                        .join("\n")}
                    </td>
                    <td className="px-4 py-3 whitespace-pre-wrap">
                      {[
                        r.tshirtSize1 && `1) ${r.tshirtSize1}`,
                        r.tshirtSize2 && `2) ${r.tshirtSize2}`,
                        r.tshirtSize3 && `3) ${r.tshirtSize3}`,
                      ]
                        .filter(Boolean)
                        .join("\n")}
                    </td>
                    <td className="px-4 py-3 whitespace-pre-wrap">
                      {[
                        r.codeforceid1 && `1) ${r.codeforceid1}`,
                        r.codeforceid2 && `2) ${r.codeforceid2}`,
                        r.codeforceid3 && `3) ${r.codeforceid3}`,
                      ]
                        .filter(Boolean)
                        .join("\n") || '-'}
                    </td>
                    <td className="px-4 py-3">
                      {r.paymentScreenshotBase64 ? (
                        <div className="flex items-center gap-3">
                          <a
                            href={r.paymentScreenshotBase64}
                            target="_blank"
                            rel="noreferrer"
                            className="text-cyan-300 hover:text-cyan-200 underline"
                          >
                            Open
                          </a>
                          <img
                            src={r.paymentScreenshotBase64}
                            alt="Payment"
                            className="h-10 w-10 object-cover rounded border border-white/10"
                          />
                        </div>
                      ) : (
                        <span className="text-white/50">-</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-white/70">
                      {r.createdAt ? new Date(r.createdAt).toLocaleString() : "-"}
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
