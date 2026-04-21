import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";

interface HeaderProps {
  onNotificationClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNotificationClick }) => {
  const [currentDateTime, setCurrentDateTime] = useState<string>("");

  // Get username from localStorage
  const getUserName = (): string => {
    return localStorage.getItem("userName") || "User";
  };

  // Format and update current date/time
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      const formattedTime = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      });
      setCurrentDateTime(`${formattedDate} at ${formattedTime}`);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  const userName = getUserName();
  const initials = userName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <header className={styles.header}>
      <div className={styles.greetingSection}>
        <h1 className={styles.welcomeText}>Welcome, {userName}</h1>
        {currentDateTime && (
          <p className={styles.dateTime}>{currentDateTime}</p>
        )}
      </div>

      <div className={styles.headerActions}>
        <button
          className={styles.notificationIcon}
          onClick={onNotificationClick}
          aria-label="Notifications"
        >
          🔔
        </button>
        <div className={styles.userProfile} title={userName}>
          {initials}
        </div>
      </div>
    </header>
  );
};

export default Header;
