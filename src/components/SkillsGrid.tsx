"use client";

import { motion } from "framer-motion";
import type { Skill } from "@/data/skills";
import styles from "./SkillsGrid.module.css";

interface SkillsGridProps {
  skills: Skill[];
  label: string;
}

export default function SkillsGrid({ skills, label }: SkillsGridProps) {
  return (
    <div className={styles.group}>
      <p className={styles.label}>{label}</p>
      <div className={styles.grid}>
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            whileHover={{ scale: 1.08, y: -4 }}
            className={styles.card}
          >
            <skill.icon className={styles.icon} />
            <span className={styles.name}>{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
