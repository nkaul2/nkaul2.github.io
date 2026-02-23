import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.heading}>Let&apos;s Talk.</p>
      <ul className={styles.linkList}>
        <li>
          <a href="mailto:nikhil.kaul98@gmail.com" className={styles.contactLink}>
            nikhil.kaul98@gmail.com
          </a>
        </li>
        <li aria-hidden="true" className={styles.separator}>|</li>
        <li>
          <a
            href="https://www.linkedin.com/in/nikhil-kaul-00298a115"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
          >
            LinkedIn
          </a>
        </li>
        <li aria-hidden="true" className={styles.separator}>|</li>
        <li>
          <a
            href="https://github.com/nkaul2"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
          >
            GitHub
          </a>
        </li>
      </ul>
    </footer>
  );
}
