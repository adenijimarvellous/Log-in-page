import React from "react";
import StatCard, { type StatCardProps } from "./StatCard";
import styles from "./StatCard.module.css";

interface StatCardsContainerProps {
  cards: StatCardProps[];
}

const StatCardsContainer: React.FC<StatCardsContainerProps> = ({ cards }) => {
  return (
    <div className={styles.cardsGrid}>
      {cards.map((card, index) => (
        <StatCard
          key={index}
          {...card}
          variant={((index % 4) + 1) as 1 | 2 | 3 | 4}
        />
      ))}
    </div>
  );
};

export default StatCardsContainer;
