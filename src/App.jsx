import { useState, useRef, useEffect } from "react";
import ModelSelector from "./components/ModelSelector.jsx";
import ChatWindow from "./components/ChatWindow.jsx";
import { sendChat } from "./api.js";

export default function App() {
  const [model, setModel] = useState("openai/gpt-4o-mini");
  const [messages, setMessages] = useState([
    { id: 1, role: "assistant", content: "Halo! Saya AI. Ada yang bisa dibantu?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSend() {
    if (!input.trim()) return;

    const msg = { id: Date.now(), role: "user", content: input };
    setMessages((prev) => [...prev, msg]);
    setInput("");
    setLoading(true);

    try {
      const res = await sendChat(model, [
        ...messages,
        msg
      ]);

      const reply = res.choices[0].message;

      setMessages((prev) => [...prev, reply]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { id: Date.now(), role: "assistant", content: "⚠️ Error: " + err.message },
      ]);
    }

    setLoading(false);
  }

  return (
    <div className="h-screen flex flex-col max-w-3xl mx-auto">
      <h1 className="text-xl font-bold mt-4">AI Chat – OpenRouter</h1>

      <ModelSelector model={model} setModel={setModel} />

      <div className="flex-1 flex flex-col bg-slate-900/40 rounded-xl border border-slate-700 mt-2">
        <ChatWindow messages={messages} loading={loading} />

        <div className="p-3 border-t border-slate-700">
          <textarea
            className="w-full bg-slate-800 rounded-lg p-2 text-sm outline-none"
            rows="2"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder="Ketik pesan..."
          />
        </div>
      </div>
    </div>
  );
}
