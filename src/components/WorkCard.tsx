"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { WorkEntry } from "@/data/work";
import styles from "./WorkCard.module.css";

interface WorkCardProps {
  entry: WorkEntry;
  index: number;
}

export default function WorkCard({ entry, index }: WorkCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={styles.card}
    >
      <div className={styles.logoWrapper}>
        <div className={styles.logoBox}>
          <Image
            src={entry.logo}
            alt={`${entry.company} logo`}
            width={80}
            height={80}
            className={styles.imgContain}
          />
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
