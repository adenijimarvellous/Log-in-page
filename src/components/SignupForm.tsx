import { type ChangeEvent, type FormEvent, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./SignupForm.module.css";

type SignupErrors = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const validateFullName = (value: string) => {
  if (!value.trim()) {
    return "Full name is required.";
  }

  return "";
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

const validateConfirmPassword = (password: string, confirmPassword: string) => {
  if (!confirmPassword.trim()) {
    return "Confirm password is required.";
  }

  return password === confirmPassword ? "" : "Passwords do not match.";
};

const SignupForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<SignupErrors>({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const fullNameError = validateFullName(fullName);
  const emailError = validateEmail(email);
  const passwordError = validatePassword(password);
  const confirmPasswordError = validateConfirmPassword(
    password,
    confirmPassword,
  );
  const isFormValid =
    !fullNameError && !emailError && !passwordError && !confirmPasswordError;

  const validate = () => {
    const nextErrors: SignupErrors = {
      fullName: validateFullName(fullName),
      email: validateEmail(email),
      password: validatePassword(password),
      confirmPassword: validateConfirmPassword(password, confirmPassword),
    };

    setErrors(nextErrors);
    return (
      !nextErrors.fullName &&
      !nextErrors.email &&
      !nextErrors.password &&
      !nextErrors.confirmPassword
    );
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    console.log("Signing up", { fullName, email, password });
    // TODO: wire up signup logic
  };

  const handleFullNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFullName(value);
    setErrors((current) => ({
      ...current,
      fullName: validateFullName(value),
    }));
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
      confirmPassword: validateConfirmPassword(value, confirmPassword),
    }));
  };

  const handleConfirmPasswordChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const value = event.target.value;
    setConfirmPassword(value);
    setErrors((current) => ({
      ...current,
      confirmPassword: validateConfirmPassword(password, value),
    }));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.field}>
        <label htmlFor="fullName" className={styles.label}>
          Full Name
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          value={fullName}
          onChange={handleFullNameChange}
          onBlur={() =>
            setErrors((current) => ({
              ...current,
              fullName: validateFullName(fullName),
            }))
          }
          placeholder="Enter your full name"
          className={`${styles.input} ${errors.fullName ? styles.invalid : ""}`}
          required
          aria-describedby={errors.fullName ? "fullName-error" : undefined}
        />
        {errors.fullName && (
          <p className={styles.error} id="fullName-error">
            {errors.fullName}
          </p>
        )}
      </div>

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
          placeholder="you@gmail.com"
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
            placeholder="Create a password"
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

      <div className={styles.field}>
        <label htmlFor="confirmPassword" className={styles.label}>
          Confirm Password
        </label>
        <div className={styles.passwordWrapper}>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type={showPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            onBlur={() =>
              setErrors((current) => ({
                ...current,
                confirmPassword: validateConfirmPassword(
                  password,
                  confirmPassword,
                ),
              }))
            }
            placeholder="Confirm your password"
            className={`${styles.input} ${errors.confirmPassword ? styles.invalid : ""}`}
            required
            aria-describedby={
              errors.confirmPassword ? "confirmPassword-error" : undefined
            }
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
        {errors.confirmPassword && (
          <p className={styles.error} id="confirmPassword-error">
            {errors.confirmPassword}
          </p>
        )}
      </div>

      <button
        type="submit"
        className={styles.primaryButton}
        disabled={!isFormValid}
      >
        Sign up
      </button>

      <p className={styles.footer}>
        Already have an account?{" "}
        <Link to="/login" className={styles.signupLink}>
          Log in
        </Link>
      </p>
    </form>
  );
};

export default SignupForm;
