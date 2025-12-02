const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;

export async function sendChat(model, messages) {
  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
      "HTTP-Referer": window.location.origin,
      "X-Title": "React OpenRouter Chat",
    },
    body: JSON.stringify({
      model,
      messages,
    }),
  });

  if (!res.ok) {
    throw new Error(await res.text());
  }

  return res.json();
}