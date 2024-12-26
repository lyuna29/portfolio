// types.ts
export type SectionId = "about" | "skills" | "projects";

export type ProjectLinks = {
  youtube?: string;
  github?: string;
  notion?: string;
  website?: string;
};

export interface Project {
  id: string;
  title: string;
  period: string;
  description: string;
  role: string;
  tech: string[];
  achievements: string[];
  links?: ProjectLinks;
  additionalContent?: string[];
  image?: string;
}
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
