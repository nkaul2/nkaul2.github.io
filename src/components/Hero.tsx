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
      {/* Red glow backdrop */}
      <div className={styles.glowWrapper}>
        <div className={styles.glowOrb} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={styles.content}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className={styles.title}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className={styles.subtitle}
          >
            {subtitle}
          </motion.p>
        )}

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className={styles.children}
          >
            {children}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
