"use client";

import WorkCard from "@/components/WorkCard";
import ProjectCard from "@/components/ProjectCard";
import SectionHeader from "@/components/SectionHeader";
import { workHistory } from "@/data/work";
import { projects } from "@/data/projects";

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
