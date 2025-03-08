"use client";

import { useState } from "react";

export default function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState({ email: true, sms: false, push: true });
  const [profile, setProfile] = useState({ name: "John Doe", email: "johndoe@example.com" });
  const [password, setPassword] = useState("");
  const [fontSize, setFontSize] = useState(16);
  const [language, setLanguage] = useState("English");

  const resetSettings = () => {
    setDarkMode(false);
    setNotifications({ email: true, sms: false, push: true });
    setProfile({ name: "John Doe", email: "johndoe@example.com" });
    setPassword("");
    setFontSize(16);
    setLanguage("English");
  };

  return (
    <div
      className={`min-h-screen p-6 transition-all ${
        darkMode ? "bg-gray-900 text-gray-400" : "bg-gray-100 text-gray-900"
      }`}
    >
      <h2 className="text-3xl font-bold mb-6">Settings</h2>

      {/* Dark Mode Toggle */}
      <div className="mb-5 flex items-center justify-between bg-gray-200 p-4 rounded-lg shadow-md cursor-pointer hover:scale-105 transition">
        <span className="text-lg font-semibold">Dark Mode</span>
        <button
          className={`w-12 h-6 rounded-full flex items-center p-1 transition ${
            darkMode ? "bg-gray-700" : "bg-gray-400"
          }`}
          onClick={() => setDarkMode(!darkMode)}
        >
          <div
            className={`w-5 h-5 rounded-full bg-white shadow-md transform transition ${
              darkMode ? "translate-x-6" : "translate-x-0"
            }`}
          ></div>
        </button>
      </div>

      {/* Profile Settings */}
      <div className="mb-5 bg-gray-200 p-5 rounded-lg shadow-md hover:scale-105 transition">
        <h3 className="text-xl font-semibold mb-3">Profile Settings</h3>
        <input
          type="text"
          value={profile.name}
          onChange={(e) => setProfile({ ...profile, name: e.target.value })}
          className="w-full p-2 border rounded mb-2"
          placeholder="Name"
        />
        <input
          type="email"
          value={profile.email}
          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          className="w-full p-2 border rounded"
          placeholder="Email"
        />
      </div>

      {/* Notification Preferences */}
      <div className="mb-5 bg-gray-200 p-5 rounded-lg shadow-md hover:scale-105 transition">
        <h3 className="text-xl font-semibold mb-3">Notification Preferences</h3>
        {Object.keys(notifications).map((type) => (
          <label key={type} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={notifications[type]}
              onChange={() => setNotifications({ ...notifications, [type]: !notifications[type] })}
              className="mr-2"
            />
            {type.toUpperCase()}
          </label>
        ))}
      </div>

      {/* Change Password */}
      <div className="mb-5 bg-gray-200 p-5 rounded-lg shadow-md hover:scale-105 transition">
        <h3 className="text-xl font-semibold mb-3">Change Password</h3>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="New Password"
        />
      </div>

      {/* Font Size Adjuster */}
      <div className="mb-5 bg-gray-200 p-5 rounded-lg shadow-md hover:scale-105 transition">
        <h3 className="text-xl font-semibold mb-3">Font Size</h3>
        <div className="flex items-center">
          <button
            className="px-3 py-1 bg-gray-400 text-white rounded-lg mr-2"
            onClick={() => setFontSize((prev) => Math.max(prev - 2, 12))}
          >
            -
          </button>
          <span className="text-lg">{fontSize}px</span>
          <button
            className="px-3 py-1 bg-gray-400 text-white rounded-lg ml-2"
            onClick={() => setFontSize((prev) => Math.min(prev + 2, 24))}
          >
            +
          </button>
        </div>
      </div>

      {/* Language Selection */}
      <div className="mb-5 bg-gray-200 p-5 rounded-lg shadow-md hover:scale-105 transition">
        <h3 className="text-xl font-semibold mb-3">Language</h3>
        <select
          className="w-full p-2 border rounded"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
        </select>
      </div>

      {/* Buttons */}
      <div className="flex justify-between">
        <button className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500" onClick={resetSettings}>
          Reset to Default
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Save Changes
        </button>
      </div>
    </div>
  );
}
