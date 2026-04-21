import React from "react";
import styles from "./Sidebar.module.css";
import { useNavigate } from "react-router-dom";

export interface SidebarItem {
  id: string;
  label: string;
  icon: string;
  path?: string;
}

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
  activeItem?: string;
  onItemClick?: (itemId: string) => void;
}

const defaultItems: SidebarItem[] = [
  { id: "home", label: "Home", icon: "🏠" },
  { id: "products", label: "Products", icon: "📦" },
  { id: "users", label: "Users", icon: "👥" },
  { id: "orders", label: "Orders", icon: "📋" },
  { id: "account", label: "Account", icon: "⚙️" },
];

const Sidebar: React.FC<SidebarProps> = ({
  isOpen = true,
  onClose,
  activeItem = "home",
  onItemClick,
}) => {
  const navigate = useNavigate();

  const handleItemClick = (itemId: string) => {
    onItemClick?.(itemId);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    navigate("/login");
  };

  return (
    <>
      {/* Mobile Overlay */}
      <div
        className={`${styles.sidebarOverlay} ${isOpen ? styles.active : ""}`}
        onClick={onClose}
        role="presentation"
      />

      {/* Sidebar */}
      <aside
        className={`${styles.sidebarWrapper} ${isOpen ? styles.open : ""}`}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Header */}
        <div className={styles.sidebarHeader}>
          <div className={styles.logoIcon}>MC</div>
          <div className={styles.brandText}>MARVEL</div>
        </div>

        {/* Navigation Menu */}
        <nav className={styles.navMenu}>
          {defaultItems.map((item) => (
            <button
              key={item.id}
              className={`${styles.navItem} ${
                activeItem === item.id ? styles.active : ""
              }`}
              onClick={() => handleItemClick(item.id)}
              aria-current={activeItem === item.id ? "page" : undefined}
            >
              <span className={styles.iconPlaceholder}>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Footer */}
        <div className={styles.sidebarFooter}>
          <button
            className={styles.navItem}
            style={{ width: "100%", justifyContent: "center" }}
            onClick={handleLogout}
            aria-label="Logout"
          >
            <span className={styles.iconPlaceholder}>🚪</span>
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
