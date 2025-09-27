export async function postSubmission({ name, email, message }) {
  const API_BASE = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:5000';
  const resp = await fetch(`${API_BASE}/api/submissions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, message }),
  });
  if (!resp.ok) {
    const errText = await resp.text();
    throw new Error(`Request failed: ${resp.status} ${errText}`);
  }
  return resp.json();
}

// Use this to send data to the backend's existing route: POST /api/after-registrations
// Expected payload includes fields like teamName, playerName1..3, emailPlayer1..3, tshirtSize1..3
export async function postAfterRegistration(payload) {
  const API_BASE = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:5000';
  const resp = await fetch(`${API_BASE}/api/after-registrations`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload || {}),
  });
  if (!resp.ok) {
    const errText = await resp.text();
    throw new Error(`Request failed: ${resp.status} ${errText}`);
  }
  return resp.json();
}
