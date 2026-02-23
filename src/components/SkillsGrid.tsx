"use client";

import { motion } from "framer-motion";
import type { Skill } from "@/data/skills";

interface SkillsGridProps {
  skills: Skill[];
  label: string;
}

export default function SkillsGrid({ skills, label }: SkillsGridProps) {
  return (
    <div className="mb-12">
      <p className="text-red-400 text-sm font-semibold uppercase tracking-widest mb-6 text-center">
        {label}
      </p>
      <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 gap-4">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            whileHover={{ scale: 1.08, y: -4 }}
            className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 cursor-default group"
          >
            <skill.icon className="text-4xl text-gray-300 group-hover:text-red-400 transition-colors duration-200" />
            <span className="text-xs text-gray-400 group-hover:text-white transition-colors duration-200 font-medium">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
