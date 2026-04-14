import { useState } from "react";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });

  const validate = () => {
    const nextErrors = { email: "", password: "" };

    if (!email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!password.trim()) {
      nextErrors.password = "Password is required.";
    }

    setErrors(nextErrors);
    return !nextErrors.email && !nextErrors.password;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    console.log("Signing in", { email, password, rememberMe });
    // TODO: wire up authentication logic
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setErrors((current) => ({ ...current, email: "" }));
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setErrors((current) => ({ ...current, password: "" }));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.field}>
        <label htmlFor="email" className={styles.label}>
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="you@example.com"
          className={`${styles.input} ${errors.email ? styles.invalid : ""}`}
          required
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p className={styles.error} id="email-error">
            {errors.email}
          </p>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="password" className={styles.label}>
          Password
        </label>
        <div className={styles.passwordWrapper}>
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
            className={`${styles.input} ${errors.password ? styles.invalid : ""}`}
            required
            aria-describedby={errors.password ? "password-error" : undefined}
          />
          <button
            type="button"
            className={styles.toggleButton}
            onClick={() => setShowPassword((current) => !current)}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        {errors.password && (
          <p className={styles.error} id="password-error">
            {errors.password}
          </p>
        )}
      </div>

      <div className={styles.row}>
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(event) => setRememberMe(event.target.checked)}
            className={styles.checkbox}
          />
          Remember me
        </label>

        <a href="#" className={styles.forgotLink}>
          Forgot password?
        </a>
      </div>

      <button type="submit" className={styles.primaryButton}>
        Sign in
      </button>

      <div className={styles.divider}>
        <span>or</span>
      </div>

      <div className={styles.socialGrid}>
        <button type="button" className={styles.socialButton}>
          <span className={styles.socialIcon}>G</span>
          Continue with Google
        </button>
        <button type="button" className={styles.socialButton}>
          <span className={styles.socialIcon}>GH</span>
          Continue with GitHub
        </button>
      </div>

      <p className={styles.footer}>
        Don't have an account?{" "}
        <a href="#" className={styles.signupLink}>
          Sign up
        </a>
      </p>
    </form>
  );
};

export default LoginForm;
