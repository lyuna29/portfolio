import { motion } from "framer-motion";
import { ChevronsDown } from "lucide-react";
import { Luckiest_Guy } from "next/font/google";
import EmailButton from "./EmailBtn";

const luckiestGuy = Luckiest_Guy({
  weight: "400",
  subsets: ["latin"],
});

type HeroSectionProps = {
  scrollToSection: (section: "skills") => void;
};

export const Intro = ({ scrollToSection }: HeroSectionProps) => (
  <section
    id="about"
    className="min-h-screen pt-20 flex items-center justify-center relative from-purple-50 to-purple-100"
  >
    <div className="max-w-4xl mx-auto text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1
          className={`${luckiestGuy.className} text-7xl font-bold text-[#9937b6] mb-4`}
        >
          Frontend Engineer
        </h1>
        <p className="ria-font text-5xl font-extrabold text-purple-900 mb-20">
          임현아
        </p>
        <p className="text-xl font-bold text-gray-700 mb-2">
          협업을 통해 팀원과 함께 성장하는 과정에서 기술과 소통의 가치를
          이해하는 프론트엔드 개발자입니다.
        </p>
        <p className="text-xl text-gray-700 mb-8">
          끊임없는 학습과 도전을 통해 더 나은 웹 서비스를 만들어 가는 데 관심이
          많습니다.
        </p>
        <div className="flex justify-center">
          <EmailButton />
        </div>
      </motion.div>
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        onClick={() => scrollToSection("skills")}
      >
        <ChevronsDown size={40} className="text-white opacity-90" />
      </motion.div>
    </div>
  </section>
);
