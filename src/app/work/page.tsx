"use client";

import { motion } from "framer-motion";
import WorkCard from "@/components/WorkCard";
import ProjectCard from "@/components/ProjectCard";
import { workHistory } from "@/data/work";
import { projects } from "@/data/projects";

function SectionHeader({ title }: { title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{title}</h2>
      <div className="w-16 h-1 bg-red-500 rounded-full mx-auto" />
    </motion.div>
  );
}

export default function WorkPage() {
  return (
    <div className="pt-24 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Work Experience */}
        <section className="mb-24">
          <SectionHeader title="Work Experience" />
          <div className="flex flex-col gap-6">
            {workHistory.map((entry, i) => (
              <WorkCard key={entry.company} entry={entry} index={i} />
            ))}
          </div>
        </section>

        {/* Projects */}
        <section>
          <SectionHeader title="Projects" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>
          <p className="text-center text-gray-600 text-xs mt-8">
            All logos are trademarks of their respective companies.
          </p>
        </section>
      </div>
    </div>
  );
}
