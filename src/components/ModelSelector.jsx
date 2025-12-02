const MODELS = [
  { id: "openai/gpt-4o-mini", name: "GPT-4o Mini" },
  { id: "anthropic/claude-3.5-sonnet", name: "Claude 3.5 Sonnet" },
  { id: "google/gemini-2.0-pro-exp", name: "Gemini 2.0 Pro Exp" },
  { id: "mistralai/mixtral-8x7b-instruct", name: "Mixtral 8x7B" },
  { id: "meta-llama/llama-3.1-8b-instruct", name: "Llama 3.1 8B" },
];

export default function ModelSelector({ model, setModel }) {
  return (
    <div className="flex gap-2 flex-wrap my-2">
      {MODELS.map((m) => (
        <button
          key={m.id}
          onClick={() => setModel(m.id)}
          className={`px-3 py-1 text-xs rounded-full border transition 
          ${
            model === m.id
              ? "border-sky-400 bg-sky-600/20"
              : "border-slate-600 hover:border-sky-500"
          }`}
        >
          {m.name}
        </button>
      ))}
    </div>
  );
}