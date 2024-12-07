import React, { useState } from "react";

export default function NotificationsComponent() {
  const [emailNotifications, setEmailNotifications] = useState({
    accountChanges: true,
    groupChanges: true,
    productUpdates: true,
    newProducts: true,
    marketingOffers: false,
    securityAlerts: true,
  });

  const [pushNotifications, setPushNotifications] = useState({
    commentOnPost: true,
    sharePost: false,
    followUser: true,
    newGroupPosts: true,
    privateMessages: true,
  });

  return (
    <div className="max-w-7xl mx-auto p-8">
      {/* Notifications Container - Flex Row */}
      <div className="flex flex-wrap gap-8">
        {/* Email Notifications Section */}
        <div className="flex-1 bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transform transition duration-500 ease-in-out hover:scale-105">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Email Notifications</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm text-gray-600">Default notification email</label>
              <input
                type="email"
                defaultValue="name@example.com"
                className="mt-2 p-4 w-full border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out hover:border-blue-500"
              />
            </div>

            <h3 className="mt-8 text-lg font-semibold text-gray-700">Choose which types of email updates you receive</h3>
            <div className="space-y-4 mt-4">
              {[
                { label: "Changes made to your account", value: "accountChanges" },
                { label: "Changes made to groups you're part of", value: "groupChanges" },
                { label: "Product updates for products you've purchased or starred", value: "productUpdates" },
                { label: "Information on new products and services", value: "newProducts" },
                { label: "Marketing and promotional offers", value: "marketingOffers" },
                { label: "Security alerts", value: "securityAlerts" },
              ].map(({ label, value }) => (
                <label key={value} className="inline-flex items-center text-sm text-gray-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={emailNotifications[value]}
                    onChange={() =>
                      setEmailNotifications({
                        ...emailNotifications,
                        [value]: !emailNotifications[value],
                      })
                    }
                    className="form-checkbox h-5 w-5 text-blue-500 transition-all duration-200 ease-in-out hover:text-blue-600"
                  />
                  <span className="ml-3 text-gray-700 font-medium">{label}</span>
                </label>
              ))}
            </div>
          </form>
        </div>

        {/* Push Notifications Section */}
        <div className="flex-1 bg-gradient-to-r from-green-50 to-yellow-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transform transition duration-500 ease-in-out hover:scale-105">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Push Notifications</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm text-gray-600">Default SMS number</label>
              <input
                type="text"
                defaultValue="123-456-7890"
                className="mt-2 p-4 w-full border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out hover:border-blue-500"
              />
            </div>

            <h3 className="mt-8 text-lg font-semibold text-gray-700">Choose which types of push notifications you receive</h3>
            <div className="space-y-4 mt-4">
              {[
                { label: "Someone comments on your post", value: "commentOnPost" },
                { label: "Someone shares your post", value: "sharePost" },
                { label: "A user follows your account", value: "followUser" },
                { label: "New posts are made in groups you're part of", value: "newGroupPosts" },
                { label: "You receive a private message", value: "privateMessages" },
              ].map(({ label, value }) => (
                <label key={value} className="inline-flex items-center text-sm text-gray-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={pushNotifications[value]}
                    onChange={() =>
                      setPushNotifications({
                        ...pushNotifications,
                        [value]: !pushNotifications[value],
                      })
                    }
                    className="form-checkbox h-5 w-5 text-blue-500 transition-all duration-200 ease-in-out hover:text-blue-600"
                  />
                  <span className="ml-3 text-gray-700 font-medium">{label}</span>
                </label>
              ))}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
