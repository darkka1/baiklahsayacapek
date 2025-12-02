export default function MessageBubble({ msg }) {
  const isUser = msg.role === "user";

  return (
    <div
      className={`flex w-full ${
        isUser ? "justify-end" : "justify-start"
      } animate-fadeIn`}
    >
      <div
        className={`max-w-[75%] rounded-2xl px-4 py-2 text-sm shadow-lg ${
          isUser
            ? "bg-sky-500 text-white"
            : "bg-slate-800/70 border border-slate-700"
        }`}
      >
        {msg.content}
      </div>
    </div>
  );
}