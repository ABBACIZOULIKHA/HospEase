import Image from "next/image";
import { useState } from "react";
import { FaBars, FaBell, FaEnvelope } from "react-icons/fa";
import profile from "../images/doctor.jpg";
import AlertsPopup from "./AlertsPopup";
import MessagesPopup from "./MessagesPopup";

export default function TopNavbar({
  toggleLeftNavbar,
}: {
  toggleLeftNavbar: () => void;
}) {
  const [showAlerts, setShowAlerts] = useState(false);
  const [showMessages, setShowMessages] = useState(false);

  const alerts = [
    "New type of material in stock",
    "Doctor became inactive",
    "No bed available",
    "Maintenance scheduled for Operating Room 2",
    "Critical low stock for Paracetamol",
  ];

  const messages = [
    { sender: "Dr. Emily Carter", content: "Can you review my report?", time: "2h ago" },
    { sender: "Dr. Mark Lewis", content: "Meeting rescheduled to 3 PM.", time: "4h ago" },
    { sender: "Admin", content: "Monthly maintenance reminder.", time: "1d ago" },
  ];

  const toggleAlerts = () => {
    setShowAlerts((prev) => !prev);
    setShowMessages(false); // Close messages if open
  };

  const toggleMessages = () => {
    setShowMessages((prev) => !prev);
    setShowAlerts(false); // Close alerts if open
  };

  return (   
    <header className="fixed top-0 left-0 w-full h-16 bg-white flex items-center justify-between px-4 shadow-lg z-50">
      {/* Logo and search field */}
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleLeftNavbar}
          className="text-xl text-gray-700 hover:text-blue-500"
          aria-label="Toggle Left Navbar"
        >
          <FaBars />
        </button>
        <h1 className="text-xl font-bold">HospEase</h1>
        <div className="hidden md:block">
          <input
            className="bg-graybg text-gray-500 py-2 px-4 rounded-md"
            placeholder="Search"
          />
        </div>
      </div>

      {/* Notifications and Profile */}
      <div className="relative flex items-center space-x-4">
        {/* Notifications */}
        <button
          aria-label="Notifications"
          onClick={toggleAlerts}
          className="relative"
        >
          <FaBell className="text-xl text-gray-700 hover:text-blue-500" />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-3 h-3 flex items-center justify-center">
            {alerts.length}
          </span>
        </button>

        {/* Alert Popup */}
        <AlertsPopup
          alerts={alerts}
          isVisible={showAlerts}
          onClose={() => setShowAlerts(false)}
        />

        {/* Messages */}
        <button
          aria-label="Messages"
          onClick={toggleMessages}
          className="relative"
        >
          <FaEnvelope className="text-xl text-gray-700 hover:text-blue-500" />
          <span className="absolute top-0 right-0 bg-green-500 text-white text-xs rounded-full w-3 h-3 flex items-center justify-center">
            {messages.length}
          </span>
        </button>

        {/* Messages Popup */}
        <MessagesPopup
          messages={messages}
          isVisible={showMessages}
          onClose={() => setShowMessages(false)}
        />

        {/* Profile Image */}
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-300">
          <Image
            src={profile}
            alt="Profile"
            width={40}
            height={40}
            className="object-cover"
          />
        </div>
      </div>
    </header>
  );
}
