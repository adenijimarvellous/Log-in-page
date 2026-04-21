import React from "react";
import styles from "./StatCard.module.css";

export interface StatCardProps {
  title: string;
  value: number;
  icon?: string;
  suffix?: string;
  variant?: 1 | 2 | 3 | 4;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  suffix,
  variant = 1,
}) => {
  const formatValue = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num.toString();
  };

  return (
    <div className={`${styles.card} ${styles[`variant${variant}`]}`}>
      <div className={styles.cardHeader}>
        <h3 className={styles.title}>{title}</h3>
        {icon && <div className={styles.icon}>{icon}</div>}
      </div>
      <div>
        <p className={styles.value}>{formatValue(value)}</p>
        {suffix && <p className={styles.suffix}>{suffix}</p>}
      </div>
    </div>
  );
};

export default StatCard;
