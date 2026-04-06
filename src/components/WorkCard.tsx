"use client";

import { motion } from "framer-motion";
import type { WorkEntry } from "@/data/work";
import AmazonLogo from "./AmazonLogo";
import styles from "./WorkCard.module.css";

interface WorkCardProps {
  entry: WorkEntry;
  index: number;
}

export default function WorkCard({ entry, index }: WorkCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={styles.card}
    >
      <div className={styles.logoWrapper}>
        <div className={styles.logoBox}>
          <AmazonLogo className={styles.imgContain} />
        </div>
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{entry.title}</h3>
        <p className={styles.role}>{entry.company}</p>
        <p className={styles.meta}>
          {entry.period} &mdash; {entry.location}
        </p>
        <ul className={styles.bullets}>
          {entry.bullets.map((bullet, i) => (
            <li key={i} className={styles.bulletItem}>
              <span className={styles.bulletDot} />
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
