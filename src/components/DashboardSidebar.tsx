import React from "react";
import styles from "../pages/Dashboard.module.css";

interface DashboardSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
      <div className={styles.sidebarHeader}>
        <div className={styles.logo}>MC</div>
        <div className={styles.brandName}>Dashboard</div>
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close sidebar"
          color="#000"
        >
          ✕
        </button>
      </div>
      ...
      <nav className={styles.sidebarNav}>
        <button className={`${styles.navItem} ${styles.active}`}>
          Overview
        </button>
        <button className={styles.navItem}>Analytics</button>
        <button className={styles.navItem}>Settings</button>
        <button className={styles.navItem}>Profile</button>
      </nav>
    </aside>
  );
};

export default DashboardSidebar;
