import SignupForm from "../components/SignupForm";
import styles from "./Signup.module.css";

const Signup = () => {
  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <div className={styles.grid}>
          <aside className={styles.hero}>
            <div className={styles.brand}>
              <div className={styles.logo} aria-hidden="true">
                MC
              </div>
            </div>

            <div className={styles.content}>
              <p className={styles.kicker}>Marvellous</p>
              <h1 className={styles.title}>Create your account</h1>
              <p className={styles.subtitle}>
                Start your secure account and manage product access with the same
                confidence and speed.
              </p>
            </div>

            <div className={styles.heroMeta}>
              <span>Secure sign up</span>
              <span>Easy onboarding</span>
              <span>Team-ready access</span>
            </div>
          </aside>

          <div className={styles.formPanel}>
            <div className={styles.panelHeader}>
              <p className={styles.panelMeta} style={{ textAlign: "center" }}>
                Create a new account with your details below.
              </p>
            </div>
            <SignupForm />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Signup;
