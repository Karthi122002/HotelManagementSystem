import React, { useState } from "react";
import "./SettingsPage.css";

const SettingsPage = () => {
  // State for user settings
  const [userSettings, setUserSettings] = useState({
    username: "admin",
    email: "admin@hotel.com",
    password: "",
    language: "English",
  });

  // State for system preferences
  const [preferences, setPreferences] = useState({
    theme: "Light",
    timeZone: "UTC",
    dateFormat: "YYYY-MM-DD",
  });

  // State for notification settings
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
  });

  const handleInputChange = (e, category) => {
    const { name, value, type, checked } = e.target;
    if (category === "user") {
      setUserSettings({ ...userSettings, [name]: value });
    } else if (category === "preferences") {
      setPreferences({ ...preferences, [name]: value });
    } else if (category === "notifications") {
      setNotifications({ ...notifications, [name]: type === "checkbox" ? checked : value });
    }
  };

  const handleSave = () => {
    alert("Settings saved successfully!");
    // Add functionality to save settings to a database or API here.
  };

  return (
    <div className="settings-page">
      <h1>Settings</h1>

      {/* User Account Settings */}
      <div className="settings-section">
        <h2>User Account</h2>
        <div className="settings-item">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={userSettings.username}
            onChange={(e) => handleInputChange(e, "user")}
          />
        </div>
        <div className="settings-item">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={userSettings.email}
            onChange={(e) => handleInputChange(e, "user")}
          />
        </div>
        <div className="settings-item">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter new password"
            value={userSettings.password}
            onChange={(e) => handleInputChange(e, "user")}
          />
        </div>
        <div className="settings-item">
          <label>Language</label>
          <select
            name="language"
            value={userSettings.language}
            onChange={(e) => handleInputChange(e, "user")}
          >
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="German">German</option>
          </select>
        </div>
      </div>

      {/* System Preferences */}
      <div className="settings-section">
        <h2>System Preferences</h2>
        <div className="settings-item">
          <label>Theme</label>
          <select
            name="theme"
            value={preferences.theme}
            onChange={(e) => handleInputChange(e, "preferences")}
          >
            <option value="Light">Light</option>
            <option value="Dark">Dark</option>
          </select>
        </div>
        <div className="settings-item">
          <label>Time Zone</label>
          <input
            type="text"
            name="timeZone"
            value={preferences.timeZone}
            onChange={(e) => handleInputChange(e, "preferences")}
          />
        </div>
        <div className="settings-item">
          <label>Date Format</label>
          <select
            name="dateFormat"
            value={preferences.dateFormat}
            onChange={(e) => handleInputChange(e, "preferences")}
          >
            <option value="YYYY-MM-DD">YYYY-MM-DD</option>
            <option value="MM-DD-YYYY">MM-DD-YYYY</option>
            <option value="DD-MM-YYYY">DD-MM-YYYY</option>
          </select>
        </div>
      </div>

      {/* Notifications */}
      <div className="settings-section">
        <h2>Notifications</h2>
        <div className="settings-item">
          <label>
            <input
              type="checkbox"
              name="email"
              checked={notifications.email}
              onChange={(e) => handleInputChange(e, "notifications")}
            />
            Email Notifications
          </label>
        </div>
        <div className="settings-item">
          <label>
            <input
              type="checkbox"
              name="sms"
              checked={notifications.sms}
              onChange={(e) => handleInputChange(e, "notifications")}
            />
            SMS Notifications
          </label>
        </div>
        <div className="settings-item">
          <label>
            <input
              type="checkbox"
              name="push"
              checked={notifications.push}
              onChange={(e) => handleInputChange(e, "notifications")}
            />
            Push Notifications
          </label>
        </div>
      </div>

      {/* Save Button */}
      <div className="settings-footer">
        <button className="save-btn" onClick={handleSave}>
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
