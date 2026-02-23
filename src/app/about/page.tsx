"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        {/* Page title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.pageHeader}
        >
          <h1 className={styles.pageTitle}>About Me</h1>
          <div className={styles.accentBar} />
        </motion.div>

        {/* Bio section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={styles.bioCard}
        >
          <div className={styles.photoWrapper}>
            <div className={styles.photo}>
              <Image
                src="/images/Main.png"
                alt="Nikhil Kaul"
                fill
                className={styles.imgCover}
              />
            </div>
          </div>
          <div className={styles.bioText}>
            <h2 className={styles.bioHeading}>My name is Nikhil Kaul</h2>
            <p>
              I am currently a Software Engineer at Amazon, and have obtained a B.S. in Computer
              Science and a minor in Statistics from NC State University. I was born in Noida, India,
              but moved to Cary, North Carolina in 2001, and have lived here ever since.
            </p>
            <p>
              When I am not coding or looking at data, I enjoy playing sports, dancing (I was on NC
              State&apos;s Bhangra team!), and hanging out with my family (particularly my dog
              Bonzo!). My favorite teams are: Carolina Hurricanes, NC State sports, Carolina Panthers,
              and Team Solomid. I also enjoy listening and making music. I have been a percussionist
              for over 15 years, and played snare drum in the marching band throughout high school.
            </p>
            <p>When it comes to life, I live by the mantra:</p>
            <p className={styles.quote}>
              &ldquo;Be a better you than you were yesterday...&rdquo;
            </p>
            <p>
              I just love to learn, and I will never stop learning. I try to surround myself with
              good company so I can learn and grow as much as I can every day! My goal is to use data
              and analytics to solve tomorrow&apos;s problems so our posterity can live in a
              tech-driven and sustainable world!
            </p>
          </div>
        </motion.div>

        {/* Photo grid */}
        <div className={styles.photoGrid}>
          {["/images/pic1.jpg", "/images/pic2.jpg", "/images/pic3.jpg"].map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={styles.photoGridItem}
            >
              <Image src={src} alt={`Photo ${i + 1}`} fill className={styles.imgCover} />
              <div className={styles.photoGridOverlay} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
