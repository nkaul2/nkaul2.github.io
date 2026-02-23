"use client";

import WorkCard from "@/components/WorkCard";
import ProjectCard from "@/components/ProjectCard";
import SectionHeader from "@/components/SectionHeader";
import { workHistory } from "@/data/work";
import { projects } from "@/data/projects";
import styles from "./work.module.css";

export default function WorkPage() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        {/* Work Experience */}
        <section className={styles.experienceSection}>
          <SectionHeader title="Work Experience" />
          <div className={styles.cardList}>
            {workHistory.map((entry, i) => (
              <WorkCard key={entry.company} entry={entry} index={i} />
            ))}
          </div>
        </section>

        {/* Projects */}
        <section>
          <SectionHeader title="Projects" />
          <div className={styles.projectsGrid}>
            {projects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>
          <p className={styles.disclaimer}>
            All logos are trademarks of their respective companies.
          </p>
        </section>
      </div>
    </div>
  );
}
