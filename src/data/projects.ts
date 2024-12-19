export interface Project {
  id: string;
  title: string;
  period: string;
  description: string;
  tech: string[];
  role: string;
  achievements: string[];
  links?: {
    website?: string;
    youtube?: string;
    github?: string;
    notion?: string;
  };
}

export const projects: Project[] = [
  {
    id: "weather-wear",
    title: "Weather Wear",
    period: "24.06 - 24.07",
    description: "날씨 기반 의류 추천 웹사이트",
    tech: [
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Supabase",
      "Zustand",
    ],
    role: "마이페이지 담당",
    achievements: ["프로필 정보 변경", "내가 올린 코디 목록 관리"],
    links: {
      website: "https://team-a09-project.vercel.app/",
      youtube: "https://www.youtube.com/watch?v=cMRLmsE_yiU",
      github: "https://github.com/naebaecam-team-a09/team-project",
      notion:
        "https://bevel-beluga-e0c.notion.site/A9-161c89013a52807da128f097b7541e5b?pvs=4",
    },
  },
  {
    id: "urr",
    title: "Urr(우르르)",
    period: "24.07 - 24.08",
    description: "인플루언서 공구 플랫폼",
    tech: [
      "Next.js",
      "TypeScript",
      "Tanstack Query",
      "Tailwind CSS",
      "Zustand",
      "Supabase",
    ],
    role: "팀 리더",
    achievements: [
      "팀 리더",
      "프로젝트 초기 셋팅",
      "결제 시스템 구현",
      "상품 목록, 상세 페이지",
    ],
    links: {
      website: "https://www.urr.today/",
      youtube: "https://www.youtube.com/watch?v=18qPjB9XgyY",
      github: "https://github.com/URR-A-4/URR-final",
      notion:
        "https://bevel-beluga-e0c.notion.site/WRR-A04-161c89013a52809cb8c6d701168aa298?pvs=4",
    },
  },
  {
    id: "oeasy",
    title: "Oeasy",
    period: "24.10 - 24.12",
    description: "호불호가 강한 오이에게 쉽게 접근할 수 있도록 제작한 웹사이트",
    tech: [
      "React",
      "TypeScript",
      "React Query",
      "Tailwind css",
      "Zustand",
      "STOMP",
    ],
    role: "FE 리더",
    achievements: [
      "FE리더",
      "프로젝트 초기 셋팅",
      "실시간 채팅, 실시간 투표",
      "커뮤니티 CRUD",
      "오이백과 페이지",
    ],
    links: {
      website: "https://oeasy.world/",
      youtube: "https://youtube.com/demo3",
      github: "https://github.com/OEasy-for-Cucumber/-FE-Oeasy",
    },
  },
];
