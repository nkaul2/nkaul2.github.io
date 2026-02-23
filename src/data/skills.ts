import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJava,
  FaPython,
  FaAngular,
  FaGitAlt,
} from "react-icons/fa";
import { FaC } from "react-icons/fa6";
import { FaRProject } from "react-icons/fa";
import { SiMysql, SiMongodb, SiPostgresql } from "react-icons/si";
import type { IconType } from "react-icons";

export interface Skill {
  name: string;
  icon: IconType;
}

export const webSkills: Skill[] = [
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJs },
  { name: "Java", icon: FaJava },
  { name: "C", icon: FaC },
  { name: "Python", icon: FaPython },
  { name: "Angular", icon: FaAngular },
  { name: "Git", icon: FaGitAlt },
];

export const statSkills: Skill[] = [
  { name: "R", icon: FaRProject },
  { name: "MySQL", icon: SiMysql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "SQL", icon: SiPostgresql },
];
