"use client";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.heading}>Let&apos;s Talk.</p>
      <ul className={styles.linkList}>
        <li>
          <a
            href="https://www.linkedin.com/in/nikhil-kaul-00298a115"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/nkaul2"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </li>
      </ul>
    </footer>
  );
}
