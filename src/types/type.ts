// types.ts
export type SectionId = "about" | "skills" | "projects";

export type ProjectLinks = {
  youtube?: string;
  github?: string;
  notion?: string;
  website?: string;
};

export type Project = {
  title: string;
  period: string;
  description: string;
  tech: string[];
  achievements: string[];
  links?: ProjectLinks;
};

import { IconType } from "react-icons";

export type SkillItem = {
  name: string;
  icon?: IconType;
  color?: string;
};
export type Skill = {
  category: string;
  items: SkillItem[];
};
