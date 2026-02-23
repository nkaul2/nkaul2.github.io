"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { WorkEntry } from "@/data/work";

interface WorkCardProps {
  entry: WorkEntry;
  index: number;
}

export default function WorkCard({ entry, index }: WorkCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-red-500/30 transition-colors duration-300"
    >
      <div className="flex-shrink-0 flex items-start justify-center md:justify-start">
        <div className="w-24 h-24 relative rounded-xl overflow-hidden bg-white/10 flex items-center justify-center p-2">
          <Image
            src={entry.logo}
            alt={`${entry.company} logo`}
            width={80}
            height={80}
            className="object-contain"
          />
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold text-white mb-1">{entry.title}</h3>
        <p className="text-red-400 font-semibold text-sm mb-1">{entry.company}</p>
        <p className="text-gray-500 text-sm mb-4">
          {entry.period} &mdash; {entry.location}
        </p>
        <ul className="space-y-2">
          {entry.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-3 text-gray-300 text-sm leading-relaxed">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
