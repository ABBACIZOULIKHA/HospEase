import { useEffect, useRef } from "react";

export default function AlertsPopup({
  alerts,
  isVisible,
  onClose,
}: {
  alerts: string[];
  isVisible: boolean;
  onClose: () => void;
}) {
  const alertsRef = useRef<HTMLDivElement>(null);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        alertsRef.current &&
        !alertsRef.current.contains(event.target as Node)
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
      ref={alertsRef}
      className="absolute right-16 top-10 mt-2 w-80 bg-white border border-gray-300 rounded-xl shadow-2xl z-50"
      style={{
        animation: "fadeIn 0.3s ease-out",
      }}
    >
      <div className="p-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-t-xl">
        Alerts
      </div>
      <ul className="divide-y divide-gray-200">
        {alerts.map((alert, index) => (
          <li
            key={index}
            className="flex items-center p-4 text-sm text-gray-700 hover:bg-gray-100 hover:scale-105 transition-transform duration-200"
          >
            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-500 flex items-center justify-center rounded-full mr-4">
              <span className="font-bold">{index + 1}</span>
            </div>
            <p>{alert}</p>
          </li>
        ))}
      </ul>
      <button
        onClick={onClose}
        className="w-full py-2 bg-blue-500 text-white font-medium rounded-b-xl hover:bg-blue-600 transition duration-200"
      >
        Close
      </button>
    </div>
  );
}
