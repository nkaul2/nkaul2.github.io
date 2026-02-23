"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";

const links = [
  {
    icon: FaFileAlt,
    label: "Resume",
    href: "/images/Nikhil_Kaul_Resume.pdf",
    desc: "References & Transcripts Available Upon Request",
    external: false,
  },
  {
    icon: FaEnvelope,
    label: "Email Me",
    href: "mailto:nikhil.kaul98@gmail.com",
    desc: "nikhil.kaul98@gmail.com",
    external: false,
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nikhil-kaul-00298a115",
    desc: "Connect with me",
    external: true,
  },
  {
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/nkaul2",
    desc: "Check out my projects",
    external: true,
  },
];

export default function RecruitersPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-16 relative">
      {/* Red glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-700/15 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-2xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Recruiters,
          </h1>
          <p className="text-xl text-gray-300 mb-2">
            Thank you for visiting my website!
          </p>
          <p className="text-gray-400 mb-12">
            I am no longer looking for full-time opportunities, but please browse my portfolio!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {links.map(({ icon: Icon, label, href, desc, external }, i) => (
            <motion.a
              key={label}
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              whileHover={{ scale: 1.03, y: -2 }}
              className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-red-500/40 hover:bg-white/8 transition-all duration-200 text-left group"
            >
              <div className="w-11 h-11 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center flex-shrink-0">
                <Icon className="text-red-400 text-xl" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm group-hover:text-red-300 transition-colors">
                  {label}
                </p>
                <p className="text-gray-500 text-xs mt-0.5">{desc}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
