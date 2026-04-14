import LoginForm from "../components/LoginForm";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <div className={styles.grid}>
          <aside className={styles.hero}>
            <div className={styles.brand}>
              <div className={styles.logo} aria-hidden="true">
                AC
              </div>
            </div>

            <div className={styles.content}>
              <p className={styles.kicker}>Company</p>
              <h1 className={styles.title}>Welcome back</h1>
              <p className={styles.subtitle}>
                Sign in to your account and continue managing your product
                experience with confidence.
              </p>
            </div>

            <div className={styles.heroMeta}>
              <span>Secure sign in</span>
              <span>Fast authentication</span>
              <span>Team-ready access</span>
            </div>
          </aside>

          <div className={styles.formPanel}>
            <div className={styles.panelHeader}>
              <p className={styles.panelMeta}>
                Welcome back. Enter your details below.
              </p>
            </div>
            <LoginForm />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
