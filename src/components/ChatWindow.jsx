import MessageBubble from "./MessageBubble.jsx";

export default function ChatWindow({ messages, loading }) {
  return (
    <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
      {messages.map((m) => (
        <MessageBubble key={m.id} msg={m} />
      ))}

      {loading && (
        <div className="flex items-center gap-2 text-slate-400 text-xs">
          <div className="animate-pulse">AI sedang mengetik…</div>
        </div>
      )}
    </div>
  );
}
