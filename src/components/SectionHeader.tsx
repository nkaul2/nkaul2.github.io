"use client";

import { motion } from "framer-motion";
import styles from "./SectionHeader.module.css";

interface SectionHeaderProps {
  title: string;
}

export default function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={styles.wrapper}
    >
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.accent} />
    </motion.div>
  );
}
