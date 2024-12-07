import { useEffect, useRef } from "react";

export default function MessagesPopup({
  messages,
  isVisible,
  onClose,
}: {
  messages: { sender: string; content: string; time: string }[];
  isVisible: boolean;
  onClose: () => void;
}) {
  const messagesRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close the popup
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        messagesRef.current &&
        !messagesRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  if (!isVisible) return null;

  return (
    <div
      ref={messagesRef}
      className="absolute right-5 top-10 mt-2 w-80 bg-white border rounded-lg shadow-lg overflow-hidden z-50"
    >
      <div className="p-4 bg-blue-500 text-white text-center font-bold">
        Messages
      </div>
      <ul className="divide-y divide-gray-200">
        {messages.map((message, index) => (
          <li key={index} className="p-4 hover:bg-gray-100">
            <p className="text-sm font-semibold text-gray-700">
              {message.sender}
            </p>
            <p className="text-xs text-gray-500">{message.content}</p>
            <span className="text-xs text-gray-400">{message.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
