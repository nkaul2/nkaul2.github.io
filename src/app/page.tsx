"use client";

import Hero from "@/components/Hero";
import SkillsGrid from "@/components/SkillsGrid";
import SectionHeader from "@/components/SectionHeader";
import { webSkills, statSkills } from "@/data/skills";

export default function Home() {
  return (
    <>
      <Hero
        title="Nikhil Kaul"
        subtitle="Coding & Data Enthusiast"
        fullHeight
      >
        <p className="mt-2">
          Software Development Engineer at Amazon &nbsp;&middot;&nbsp; B.S. Computer Science &amp; Statistics
          &nbsp;&middot;&nbsp; NC State University
        </p>
      </Hero>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeader title="I have experience with" />

          <SkillsGrid skills={webSkills} label="Web Development" />
          <SkillsGrid skills={statSkills} label="Statistical Programming & Software" />
        </div>
      </section>
    </>
  );
}
