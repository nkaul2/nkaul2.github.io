"use client";

import WorkCard from "@/components/WorkCard";
import ProjectCard from "@/components/ProjectCard";
import SectionHeader from "@/components/SectionHeader";
import { workHistory } from "@/data/work";
import { projects } from "@/data/projects";
import styles from "./work.module.css";

const amazon = workHistory.find((e) => e.company === "Amazon")!;

const earlierRoles = [
  {
    title: "Undergraduate Researcher",
    company: "MXR Lab, NC State",
    period: "Jan 2019 - May 2020",
    location: "Raleigh, NC",
    bullets: [
      "Implemented VR body haptics with Arduino, vibration motors, and C# in Unity; authored an SDK for the lab.",
      "Presented at NC State's Spring Undergraduate Research Symposium and the East Coast Games Conference.",
    ],
  },
  {
    title: "Clinical Ops & Biometrics Intern",
    company: "Roche",
    period: "May 2019 - Aug 2019",
    location: "Pleasanton, CA",
    bullets: [
      "Data analysis and Tableau dashboards for Roche Diagnostics clinical trial datasets using Python, R, and SAS.",
    ],
  },
];

export default function WorkPage() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>

        {/* Amazon — featured */}
        <section className={styles.featuredSection}>
          <SectionHeader title="Experience" />
          <WorkCard entry={amazon} index={0} />
        </section>

        {/* Earlier technical roles */}
        <section className={styles.earlierSection}>
          <h2 className={styles.earlierHeading}>Earlier</h2>
          <div className={styles.earlierList}>
            {earlierRoles.map((role) => (
              <div key={role.company} className={styles.earlierCard}>
                <div className={styles.earlierHeader}>
                  <div>
                    <p className={styles.earlierTitle}>{role.title}</p>
                    <p className={styles.earlierCompany}>{role.company} &middot; {role.location}</p>
                  </div>
                  <p className={styles.earlierPeriod}>{role.period}</p>
                </div>
                <ul className={styles.earlierBullets}>
                  {role.bullets.map((b, i) => (
                    <li key={i} className={styles.earlierBulletItem}>
                      <span className={styles.bulletDot} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
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
