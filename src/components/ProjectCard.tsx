"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Project } from "@/data/projects";

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
      className="flex flex-col rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-red-500/30 transition-colors duration-300 overflow-hidden"
    >
      <div className="relative h-48 w-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-white mb-1">{project.title}</h3>
        {project.period && (
          <p className="text-red-400 text-xs font-semibold mb-3">{project.period}</p>
        )}
        <p className="text-gray-300 text-sm leading-relaxed flex-1 mb-4">
          {project.description}
        </p>
        {project.comingSoon && project.comingSoonItems && (
          <ul className="space-y-1 mb-4">
            {project.comingSoonItems.map((item, i) => (
              <li key={i} className="flex gap-2 text-gray-400 text-sm">
                <span className="text-red-500 mt-0.5">•</span>
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
            className="inline-block mt-auto px-4 py-2 rounded-lg bg-red-600/20 border border-red-500/40 text-red-400 text-sm font-medium hover:bg-red-600/40 hover:text-red-300 transition-all duration-200 text-center"
          >
            {project.linkLabel || "View Project"}
          </a>
        )}
      </div>
    </motion.div>
  );
}
