import { Project } from "@/types/type";

export const projects: Project[] = [
  {
    id: "oeasy",
    title: "Oeasy",
    period: "24.10 - 24.12",
    description:
      "호불호가 강한 오이에게 쉽게 접근할 수 있도록 제작한 웹사이트로, Oeasy 오 ! 오이 알고보니 쉽네 라는 의미를 담고 있다",
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
      "STOMP를 활용한 양방향 실시간 채팅, 실시간 투표 구현",
      "커뮤니티 CRUD",
      "오이백과 페이지",
    ],
    links: {
      notion:
        "https://gentle-baryonyx-bf4.notion.site/11cedee0214880e8baece311bb09fce5?pvs=4",
      youtube: "https://youtu.be/vepDVXoJ0x4?si=5Gu3-GtpKs49Cw78",
      github: "https://github.com/OEasy-for-Cucumber/-FE-Oeasy",
    },
    additionalContent: [
      "FE리더",
      "Github, Discord로 팀원 진행상황 관리",
      "프로젝트 초기 셋팅",
      "MetaData 삽입, Axios instance 설정",
      "STOMP를 활용한 양방향 실시간 채팅, 실시간 투표 구현",
      "커뮤니티 CRUD",
      "커뮤니티 좋아요 및 조회수",
      "댓글 시스템 및 게시글 검색 기능",
      "Context API - 공용 alert, confirm",
      "AWS S3+CloudFront를 사용하여 프로젝트 배포",
      "Github Actions로 배포 자동화",
      "오이백과 페이지",
    ],
  },
  {
    id: "urr",
    title: "Urr",
    period: "24.07 - 24.08",
    description:
      "인플루언서를 구독하고, 인플루언서와 채팅하며,  공구 상품을 구매할 수 있는 플랫폼으로, URR(우르르) 우르르 몰려와서 구매하라는 의미를 담고 있다.",
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
      "PortOne을 활용한 결제 시스템 구현",
      "상품 목록 카테고리화 및 정렬",
      "상품 상세페이지 - 상품 후기 및 문의사항 구현",
    ],
    links: {
      website: "https://www.urr.today/",
      youtube: "https://www.youtube.com/watch?v=18qPjB9XgyY",
      github: "https://github.com/URR-A-4/URR-final",
      notion:
        "https://bevel-beluga-e0c.notion.site/WRR-A04-161c89013a52809cb8c6d701168aa298?pvs=4",
    },
    additionalContent: [
      "팀 리더",
      "Github, Notion으로 팀원 진행상황 관리",
      "회의 진행 및 의견 조율",
      "프로젝트 초기 셋팅",
      "MetaData , Supabase 연동 및 Tailwindcss 설치",
      "PortOne을 활용한 결제 시스템 구현",
      "결제 프로세스 에러 핸들링 구현",
      "상품 목록 카테고리화 및 정렬",
      "상품 상세페이지 - 상품 후기 및 문의사항 구현",
      "Vercel을 사용하여 프로젝트 배포",
    ],
  },
];
