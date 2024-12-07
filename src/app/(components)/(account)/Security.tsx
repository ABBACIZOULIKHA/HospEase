import React, { useState } from "react";

export default function SecurityComponent() {
  const [accountPrivacy, setAccountPrivacy] = useState("public");
  const [dataSharing, setDataSharing] = useState(false);
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const [smsNumber, setSmsNumber] = useState("555-123-4567");

  return (
    <div className="space-y-8">
      {/* Change Password Section */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold text-gray-700">Change Password</h2>
        <form className="mt-4 space-y-4">
          <div>
            <label className="text-sm text-gray-600">Current Password</label>
            <input
              type="password"
              placeholder="Enter current password"
              className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">New Password</label>
            <input
              type="password"
              placeholder="Enter new password"
              className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm new password"
              className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </form>
      </div>

      {/* Security Preferences Section */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold text-gray-700">Security Preferences</h2>
        
        {/* Account Privacy */}
        <div className="mt-6">
          <h3 className="text-md font-medium text-gray-700">Account Privacy</h3>
          <p className="text-sm text-gray-500">
            By setting your account to private, your profile information and posts will not be visible to users outside of your user groups.
          </p>
          <div className="mt-2 space-x-4">
            <button
              className={`px-4 py-2 rounded-md ${accountPrivacy === "public" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
              onClick={() => setAccountPrivacy("public")}
            >
              Public (posts are available to all users)
            </button>
            <button
              className={`px-4 py-2 rounded-md ${accountPrivacy === "private" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
              onClick={() => setAccountPrivacy("private")}
            >
              Private (posts are available to only users in your groups)
            </button>
          </div>
        </div>

        {/* Data Sharing */}
        <div className="mt-6">
          <h3 className="text-md font-medium text-gray-700">Data Sharing</h3>
          <p className="text-sm text-gray-500">
            Sharing usage data can help us to improve our products and better serve our users as they navigate through our application. When you agree to share usage data with us, crash reports and usage analytics will be automatically sent to our development team for investigation.
          </p>
          <div className="mt-4">
            <label className="inline-flex items-center text-sm text-gray-600">
              <input
                type="checkbox"
                checked={dataSharing}
                onChange={() => setDataSharing(!dataSharing)}
                className="form-checkbox h-4 w-4 text-blue-500"
              />
              <span className="ml-2">Yes, share data and crash reports with app developers</span>
            </label>
            <label className="inline-flex items-center text-sm text-gray-600 ml-6">
              <input
                type="checkbox"
                checked={!dataSharing}
                onChange={() => setDataSharing(!dataSharing)}
                className="form-checkbox h-4 w-4 text-blue-500"
              />
              <span className="ml-2">No, limit my data sharing with app developers</span>
            </label>
          </div>
        </div>

        {/* Two-Factor Authentication */}
        <div className="mt-6">
          <h3 className="text-md font-medium text-gray-700">Two-Factor Authentication</h3>
          <p className="text-sm text-gray-500">
            Add another level of security to your account by enabling two-factor authentication. We will send you a text message to verify your login attempts on unrecognized devices and browsers.
          </p>
          <div className="mt-2 space-x-4">
            <button
              className={`px-4 py-2 rounded-md ${twoFactorAuth ? "bg-blue-500 text-white" : "bg-gray-200"}`}
              onClick={() => setTwoFactorAuth(true)}
            >
              On
            </button>
            <button
              className={`px-4 py-2 rounded-md ${!twoFactorAuth ? "bg-blue-500 text-white" : "bg-gray-200"}`}
              onClick={() => setTwoFactorAuth(false)}
            >
              Off
            </button>
          </div>
          {twoFactorAuth && (
            <div className="mt-4">
              <label className="text-sm text-gray-600">SMS Number</label>
              <input
                type="text"
                value={smsNumber}
                onChange={(e) => setSmsNumber(e.target.value)}
                className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}
        </div>

        {/* Delete Account */}
        <div className="mt-6 bg-red-100 p-4 rounded-md">
          <h3 className="text-md font-medium text-red-600">Delete Account</h3>
          <p className="text-sm text-gray-500">
            Deleting your account is a permanent action and cannot be undone. If you are sure you want to delete your account, select the button below.
          </p>
          <button className="mt-4 px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all duration-200 ease-in-out">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}
