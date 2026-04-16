import { type FormEvent, type ChangeEvent, useState } from "react";
import { FaGoogle, FaGithub, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import styles from "./LoginForm.module.css";

type LoginErrors = {
  email: string;
  password: string;
};

const validateEmail = (value: string) => {
  if (!value.trim()) {
    return "Email is required.";
  }

  const gmailPattern = /^[A-Za-z0-9._%+-]+@gmail\.com$/i;
  return gmailPattern.test(value) ? "" : "Please enter a valid Gmail address.";
};

const validatePassword = (value: string) => {
  if (!value.trim()) {
    return "Password is required.";
  }

  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])\S+$/;
  return passwordPattern.test(value)
    ? ""
    : "Password must include uppercase, lowercase, number, and special character with no spaces.";
};

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<LoginErrors>({
    email: "",
    password: "",
  });

  const emailError = validateEmail(email);
  const passwordError = validatePassword(password);
  const isFormValid = !emailError && !passwordError;

  const validate = () => {
    const nextErrors: LoginErrors = {
      email: validateEmail(email),
      password: validatePassword(password),
    };

    setErrors(nextErrors);
    return !nextErrors.email && !nextErrors.password;
  };

  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    console.log("Signing in", { email, password, rememberMe });

    //  1. Save login state
    localStorage.setItem("isAuth", "true");

    //  2. Redirect to dashboard
    navigate("/dashboard");
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEmail(value);
    setErrors((current) => ({
      ...current,
      email: validateEmail(value),
    }));
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPassword(value);
    setErrors((current) => ({
      ...current,
      password: validatePassword(value),
    }));
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
          onBlur={() =>
            setErrors((current) => ({
              ...current,
              email: validateEmail(email),
            }))
          }
          placeholder="your@example.com"
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
            onBlur={() =>
              setErrors((current) => ({
                ...current,
                password: validatePassword(password),
              }))
            }
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
            {showPassword ? <FaEyeSlash /> : <FaEye />}
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

      <button
        type="submit"
        className={styles.primaryButton}
        disabled={!isFormValid}
      >
        Sign in
      </button>

      <div className={styles.divider}>
        <span>or</span>
      </div>

      <div className={styles.socialGrid}>
        <button type="button" className={styles.socialButton}>
          <span className={`${styles.socialIcon} ${styles.googleIcon}`}>
            <FaGoogle />
          </span>
          Continue with Google
        </button>
        <button type="button" className={styles.socialButton}>
          <span className={`${styles.socialIcon} ${styles.githubIcon}`}>
            <FaGithub />
          </span>
          Continue with GitHub
        </button>
      </div>

      <p className={styles.footer}>
        Don't have an account?{" "}
        <Link to="/signup" className={styles.signupLink}>
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
