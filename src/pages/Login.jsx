import LoginForm from "../components/LoginForm";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <div className={styles.brand}>
          <div className={styles.logo} aria-hidden="true">
            AC
          </div>
        </div>

        <div className={styles.content}>
          <p className={styles.kicker}>Company</p>
          <h1 className={styles.title}>Welcome back</h1>
          <p className={styles.subtitle}>Sign in to your account</p>
        </div>

        <LoginForm />
      </section>
    </main>
  );
};

export default Login;
