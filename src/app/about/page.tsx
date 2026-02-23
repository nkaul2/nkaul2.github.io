"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Page title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">About Me</h1>
          <div className="w-16 h-1 bg-red-500 rounded-full mx-auto" />
        </motion.div>

        {/* Bio section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col md:flex-row gap-8 mb-16 p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10"
        >
          <div className="flex-shrink-0 flex justify-center">
            <div className="relative w-48 h-48 rounded-2xl overflow-hidden border-2 border-red-500/30">
              <Image
                src="/images/Main.png"
                alt="Nikhil Kaul"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex-1 text-gray-300 space-y-4 text-sm md:text-base leading-relaxed">
            <h2 className="text-2xl font-bold text-white">My name is Nikhil Kaul</h2>
            <p>
              I am currently a Software Engineer at Amazon, and have obtained a B.S. in Computer
              Science and a minor in Statistics from NC State University. I was born in Noida, India,
              but moved to Cary, North Carolina in 2001, and have lived here ever since.
            </p>
            <p>
              When I am not coding or looking at data, I enjoy playing sports, dancing (I was on NC
              State&apos;s Bhangra team!), and hanging out with my family (particularly my dog
              Bonzo!). My favorite teams are: Carolina Hurricanes, NC State sports, Carolina Panthers,
              and Team Solomid. I also enjoy listening and making music. I have been a percussionist
              for over 15 years, and played snare drum in the marching band throughout high school.
            </p>
            <p>When it comes to life, I live by the mantra:</p>
            <p className="italic text-red-300 border-l-2 border-red-500 pl-4">
              &ldquo;Be a better you than you were yesterday...&rdquo;
            </p>
            <p>
              I just love to learn, and I will never stop learning. I try to surround myself with
              good company so I can learn and grow as much as I can every day! My goal is to use data
              and analytics to solve tomorrow&apos;s problems so our posterity can live in a
              tech-driven and sustainable world!
            </p>
          </div>
        </motion.div>

        {/* Photo grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["/images/pic1.jpg", "/images/pic2.jpg", "/images/pic3.jpg"].map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative h-64 rounded-2xl overflow-hidden border border-white/10"
            >
              <Image src={src} alt={`Photo ${i + 1}`} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
