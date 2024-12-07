"use client"
import React, { useState } from "react";
import ProfileComponent from "@/app/(components)/(account)/Profile";
import SecurityComponent from "@/app/(components)/(account)/Security";
import NotificationsComponent from "@/app/(components)/(account)/Notifications";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("profile"); // State to track the active tab

  const handleTabClick = (tab: string) => {
    setActiveTab(tab); // Update active tab when a tab is clicked
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
        {/* Dynamic title based on active tab */}
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} {/* Capitalize first letter */}
        </h1>

        {/* Tabs */}
        <ul className="flex space-x-6 border-b pb-4 text-sm text-gray-600">
          <li
            className={`font-semibold cursor-pointer ${activeTab === "profile" ? "text-blue-500" : "hover:text-blue-500"}`}
            onClick={() => handleTabClick("profile")}
          >
            Profile
          </li>
          <li
            className={`cursor-pointer ${activeTab === "security" ? "text-blue-500" : "hover:text-blue-500"}`}
            onClick={() => handleTabClick("security")}
          >
            Security
          </li>
          <li
            className={`cursor-pointer ${activeTab === "notifications" ? "text-blue-500" : "hover:text-blue-500"}`}
            onClick={() => handleTabClick("notifications")}
          >
            Notifications
          </li>
        </ul>

        {/* Conditionally render the components based on the active tab */}
        <div className="mt-8">
          {activeTab === "profile" && <ProfileComponent />}
          {activeTab === "security" && <SecurityComponent />}
          {activeTab === "notifications" && <NotificationsComponent />}
        </div>
      </div>
    </div>
  );
}
