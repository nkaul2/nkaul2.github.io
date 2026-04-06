"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import styles from "./Hero.module.css";

interface HeroProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  fullHeight?: boolean;
}

export default function Hero({ title, subtitle, children, fullHeight = true }: HeroProps) {
  return (
    <section className={clsx(styles.section, fullHeight ? styles.sectionFull : styles.sectionCompact)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={styles.content}
      >
        <h1 className={styles.title}>{title}</h1>

        {subtitle && (
          <p className={styles.subtitle}>{subtitle}</p>
        )}

        {children && (
          <div className={styles.children}>{children}</div>
        )}
      </motion.div>
    </section>
  );
}
