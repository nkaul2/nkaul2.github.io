"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Project } from "@/data/projects";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={styles.card}
    >
      <div className={styles.imageWrapper}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={styles.imgCover}
        />
        <div className={styles.imageOverlay} />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{project.title}</h3>
        {project.period && (
          <p className={styles.period}>{project.period}</p>
        )}
        <p className={styles.description}>{project.description}</p>
        {project.comingSoon && project.comingSoonItems && (
          <ul className={styles.comingSoonList}>
            {project.comingSoonItems.map((item, i) => (
              <li key={i} className={styles.comingSoonItem}>
                <span className={styles.comingSoonBullet}>•</span>
                {item}
              </li>
            ))}
          </ul>
        )}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            {project.linkLabel || "View Project"}
          </a>
        )}
      </div>
    </motion.div>
  );
}
