import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./GitHubAuth.module.css";

const GitHubAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      localStorage.setItem("isAuth", "true");
      navigate("/dashboard", { replace: true });
    }, 2400);

    return () => window.clearTimeout(timeout);
  }, [navigate]);

  return (
    <main className={styles.page} aria-label="GitHub authentication page">
      <section className={styles.card}>
        <div className={styles.grid}>
          <aside className={styles.hero}>
            <div className={styles.brand}>
              <div className={styles.logo} aria-hidden="true">
                GH
              </div>
            </div>

            <div className={styles.content}>
              <p className={styles.kicker}>Continue with GitHub</p>
              <h1 className={styles.title}>You are being redirected</h1>
              <p className={styles.subtitle}>
                You are being redirected to GitHub authentication.
              </p>
            </div>

            <div className={styles.heroMeta}>
              <span>GitHub OAuth</span>
              <span>Secure flow</span>
              <span>Authentication</span>
            </div>
          </aside>

          <div className={styles.formPanel}>
            <div className={styles.panelHeader}>
              <p className={styles.panelMeta} style={{ textAlign: "center" }}>
                Please wait while we connect to GitHub.
              </p>
            </div>
            <div className={styles.statusPanel}>
              <div className={styles.spinner} aria-hidden="true" />
              <p className={styles.statusText}>Please wait...</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default GitHubAuth;
