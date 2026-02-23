"use client";

import Hero from "@/components/Hero";
import SkillsGrid from "@/components/SkillsGrid";
import SectionHeader from "@/components/SectionHeader";
import { webSkills, statSkills } from "@/data/skills";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Hero
        title="Nikhil Kaul"
        subtitle="Coding & Data Enthusiast"
        fullHeight
      >
        <p className={styles.heroParagraph}>
          Software Development Engineer at Amazon &nbsp;&middot;&nbsp; B.S. Computer Science &amp; Statistics
          &nbsp;&middot;&nbsp; NC State University
        </p>
      </Hero>

      <section className={styles.skillsSection}>
        <div className={styles.skillsInner}>
          <SectionHeader title="I have experience with" />

          <SkillsGrid skills={webSkills} label="Web Development" />
          <SkillsGrid skills={statSkills} label="Statistical Programming & Software" />
        </div>
      </section>
    </>
  );
}
