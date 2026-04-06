"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AmazonLogo from "@/components/AmazonLogo";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={styles.intro}
        >
          <div className={styles.introText}>
            <h1 className={styles.name}>Nikhil Kaul</h1>
            <p className={styles.bio}>
              Building GenAI products at Amazon.
            </p>
            <p className={styles.bio}>
              Expertise in GenAI testing and building highly scalable systems and services for millions of users worldwide.
            </p>
            <p className={styles.bio}>
              Technical lead for new GenAI testing framework, translating hundreds of use-cases in plain English into 
              maintable and iterable use cases in code. 
            </p>
          </div>
          <div className={styles.photoWrapper}>
            <div className={styles.photo}>
              <Image
                src="/images/Main.png"
                alt="Nikhil Kaul"
                fill
                className={styles.imgCover}
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Current role */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={styles.section}
        >
          <h2 className={styles.sectionLabel}>Currently</h2>
          <div className={styles.currentCard}>
            <div className={styles.currentLogo}>
              <AmazonLogo className={styles.imgContain} />
            </div>
            <div>
              <p className={styles.currentTitle}>Software Engineer II</p>
              <p className={styles.currentMeta}>Amazon &middot; June 2020 – Present &middot; Seattle, WA</p>
              <p className={styles.currentDesc}>
                Building GenAI-powered customer service experiences — tech lead for accelerating AI development and launches. 
              </p>
            </div>
          </div>
        </motion.section>

        {/* Earlier experience */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className={styles.section}
        >
          <h2 className={styles.sectionLabel}>Earlier</h2>
          <ul className={styles.prevList}>
            <li className={styles.prevItem}>
              <span className={styles.prevRole}>Undergraduate Researcher</span>
              <span className={styles.prevCompany}>MXR Lab, NC State</span>
              <span className={styles.prevPeriod}>Jan 2019 – May 2020</span>
            </li>
            <li className={styles.prevItem}>
              <span className={styles.prevRole}>Clinical Ops &amp; Biometrics Intern</span>
              <span className={styles.prevCompany}>Roche</span>
              <span className={styles.prevPeriod}>May – Aug 2019</span>
            </li>
          </ul>
        </motion.section>

      </div>
    </div>
  );
}
