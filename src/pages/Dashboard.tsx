import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <main className={styles.page} aria-label="Dashboard page">
      <section className={styles.card}>
        <div className={styles.grid}>
          <aside className={styles.hero}>
            <div className={styles.brand}>
              <div className={styles.logo} aria-hidden="true">
                MC
              </div>
            </div>

            <div className={styles.content}>
              <p className={styles.kicker}>Dashboard</p>
              <h1 className={styles.title}>Protected access</h1>
              <p className={styles.subtitle}>
                This page is only visible when the user is authenticated. You
                are logged in with JWT token.
              </p>
            </div>

            <div className={styles.heroMeta}>
              <span>Account overview</span>
              <span>Secure area</span>
              <span>Token expires in 1 hour</span>
            </div>
          </aside>

          <div className={styles.formPanel}>
            <div className={styles.panelHeader}>
              <p className={styles.panelMeta} style={{ textAlign: "center" }}>
                Welcome to your dashboard.
              </p>
            </div>
            <div className={styles.form}>
              <p className={styles.subtitle}>
                You are authenticated. Your session is secure with JWT.
              </p>
              <button onClick={handleLogout} className={styles.primaryButton}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
