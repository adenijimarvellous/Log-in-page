import { Link } from "react-router-dom";
import styles from "./Login.module.css";

const Dashboard = () => {
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
                This page is only visible when the user is authenticated.
                Authentication is simulated for now.
              </p>
            </div>

            <div className={styles.heroMeta}>
              <span>Account overview</span>
              <span>Secure area</span>
              <span>Coming soon</span>
            </div>
          </aside>

          <div className={styles.formPanel}>
            <div className={styles.panelHeader}>
              <p className={styles.panelMeta} style={{ textAlign: "center" }}>
                You are being protected by the route guard.
              </p>
            </div>
            <div className={styles.form}>
              <p className={styles.subtitle}>
                Since authentication is currently disabled, you will be
                redirected to login. Once you have real auth logic, this page
                will become accessible.
              </p>
              <Link to="/login" className={styles.primaryButton}>
                Return to log in
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
