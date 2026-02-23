"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
}

export default function SectionHeader({ title }: SectionHeaderProps) {
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
