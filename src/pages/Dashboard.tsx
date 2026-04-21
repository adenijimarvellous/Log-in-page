import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import StatCardsContainer from "../components/StatCardsContainer";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("home");

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const handleNavClick = (itemId: string) => {
    setActiveNav(itemId);
    closeSidebar();
  };

  return (
    <div className={styles.dashboardContainer}>
      <Sidebar
        isOpen={sidebarOpen}
        onClose={closeSidebar}
        activeItem={activeNav}
        onItemClick={handleNavClick}
      />

      <div className={styles.mainContent}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            padding: "16px 20px",
            borderBottom: "1px solid #e5e7eb",
          }}
        >
          <button
            className={styles.toggleButton}
            onClick={toggleSidebar}
            aria-label="Toggle sidebar"
          >
            ☰
          </button>
        </div>
        <Header />

        <main className={styles.contentArea} role="main">
          <section>
            <h2>Dashboard Overview</h2>
            <StatCardsContainer
              cards={[
                {
                  title: "Total Users",
                  value: 12543,
                  icon: "👥",
                  suffix: "users",
                },
                {
                  title: "Total Orders",
                  value: 8234,
                  icon: "📋",
                  suffix: "orders",
                },
                {
                  title: "Revenue",
                  value: 542890,
                  icon: "💰",
                  suffix: "USD",
                },
                {
                  title: "Conversion Rate",
                  value: 342,
                  icon: "📈",
                  suffix: "%",
                },
              ]}
            />
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
