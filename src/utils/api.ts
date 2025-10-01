export const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:5000';

export async function postJson(path: string, body: unknown) {
  const response = await fetch(`${API_BASE}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error((data && (data.error || data.message)) || 'Request failed');
  }
  return data;
}


