"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";
import styles from "./recruiters.module.css";

const links = [
  {
    icon: FaFileAlt,
    label: "Resume",
    href: "/images/Nikhil_Kaul_Resume.pdf",
    desc: "References & Transcripts Available Upon Request",
    external: false,
  },
  {
    icon: FaEnvelope,
    label: "Email Me",
    href: "mailto:nikhil.kaul98@gmail.com",
    desc: "nikhil.kaul98@gmail.com",
    external: false,
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nikhil-kaul-00298a115",
    desc: "Connect with me",
    external: true,
  },
  {
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/nkaul2",
    desc: "Check out my projects",
    external: true,
  },
];

export default function RecruitersPage() {
  return (
    <div className={styles.page}>
      {/* Red glow */}
      <div className={styles.glowWrapper}>
        <div className={styles.glowOrb} />
      </div>

      <div className={styles.content}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className={styles.heading}>Recruiters,</h1>
          <p className={styles.intro}>Thank you for visiting my website!</p>
          <p className={styles.subIntro}>
            I am no longer looking for full-time opportunities, but please browse my portfolio!
          </p>
        </motion.div>

        <div className={styles.linksGrid}>
          {links.map(({ icon: Icon, label, href, desc, external }, i) => (
            <motion.a
              key={label}
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              whileHover={{ scale: 1.03, y: -2 }}
              className={styles.linkCard}
            >
              <div className={styles.iconBox}>
                <Icon className={styles.icon} />
              </div>
              <div className={styles.linkMeta}>
                <p className={styles.linkLabel}>{label}</p>
                <p className={styles.linkDesc}>{desc}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
