import { IconType } from "react-icons";

import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiStyledcomponents,
  SiReactquery,
  SiGithub,
  SiSlack,
  SiNotion,
  SiAmazon,
  SiVercel,
  SiGithubactions,
} from "react-icons/si";
import { GiBootStomp, GiBearFace } from "react-icons/gi";

interface SkillItem {
  name: string;
  icon?: IconType;
  color?: string;
}

export const skills: { category: string; items: SkillItem[] }[] = [
  {
    category: "Language",
    items: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    ],
  },
  {
    category: "Framework",
    items: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    ],
  },
  {
    category: "Styling",
    items: [
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Styled Components", icon: SiStyledcomponents, color: "#DB7093" },
    ],
  },
  {
    category: "Library",
    items: [
      { name: "Zustand", icon: GiBearFace, color: "#644539" },
      { name: "Tanstack Query", icon: SiReactquery, color: "#FF4154" },
      { name: "STOMP", icon: GiBootStomp, color: "#000000" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Github", icon: SiGithub, color: "#000000" },
      { name: "Slack", icon: SiSlack, color: "#61DAFB" },
      { name: "Notion", icon: SiNotion, color: "#000000" },
    ],
  },
  {
    category: "Deploy",
    items: [
      { name: "AWS", icon: SiAmazon, color: "#FF9900" },
      { name: "Vercel", icon: SiVercel, color: "#000000" },
    ],
  },

  {
    category: "CI/CD",
    items: [
      { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
    ],
  },
];
