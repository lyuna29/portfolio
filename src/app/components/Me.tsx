import { Luckiest_Guy } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaTrophy,
  FaCertificate,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import coreJS from "@/assets/img/core-js.jpeg";
import reactdd from "@/assets/img/react-dd.jpeg";
import react from "@/assets/img/reactStudy.png";

const luckiestGuy = Luckiest_Guy({
  weight: "400",
  subsets: ["latin"],
});

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const MeSection = () => {
  const handleStudyClick = (link: string) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };
  return (
    <section id="me" className="flex items-center justify-center px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`${luckiestGuy.className} text-5xl font-bold mb-12 text-center`}
        >
          About Me
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="flex space-x-4">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="w-[450px] bg-white/80 rounded-lg p-6 shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">
                  성결대학교 컴퓨터공학과
                </h3>
                <span className="text-purple-600">18.04 ~ 22.07</span>
              </div>
              <p className="text-gray-700">• 학생회 기획국 국장</p>
              <p className="text-gray-700">• 학생회 홍보국 국장</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="w-[450px] bg-white/80 rounded-lg p-6 shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">
                  코딩 봉사 동아리(Tellus)
                </h3>
                <span className="text-purple-600">21.09 ~ 21.11</span>
              </div>
              <p className="text-gray-700">
                평촌초등학교에서 매주 주말마다 초5,6학년 학생들을 대상으로
                스크래치 교육.
              </p>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className={`${luckiestGuy.className} text-2xl font-semibold`}
            >
              Study
            </motion.h3>

            <div className="flex gap-4">
              {[
                {
                  image: react,
                  alt: "리액트공식문서",
                  title: "리액트 공식문서",
                  period: "24.05 ~ 24.06",
                  link: "https://github.com/study-RODAGA/react-study",
                },
                {
                  image: coreJS,
                  alt: "코어자바스크립트",
                  title: "코어 자바스크립트",
                  period: "24.07 ~ 24.08",
                  link: "https://github.com/study-RODAGA/Core-Javascript",
                },
                {
                  image: reactdd,
                  alt: "모던리액트",
                  title: "모던 리액트 Deep Dive",
                  period: "24.11 ~ 24.12",
                  link: "https://github.com/monthly-cs/2024-11-modern-react-deep-dive",
                },
              ].map((study, index) => (
                <motion.div
                  key={study.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="flex w-[300px] bg-white/80 rounded-lg p-6 shadow-lg"
                >
                  <Image
                    src={study.image}
                    alt={study.alt}
                    className="w-[100px] h-[120px] rounded-md"
                  />
                  <div className="flex flex-col justify-between ml-4">
                    <div>
                      <h4 className="text-lg font-semibold">{study.title}</h4>
                      <span className="text-purple-600">{study.period}</span>
                    </div>
                    <div className="flex justify-end">
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => handleStudyClick(study.link)}
                        className="cursor-pointer"
                      >
                        <FaRegArrowAltCircleRight size={22} />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className={`${luckiestGuy.className} text-2xl font-semibold`}
            >
              Award & Certificate
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/80 rounded-lg p-6 shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold flex items-center">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <FaCertificate className="mr-2 text-purple-600" />
                    </motion.div>
                    리눅스마스터 2급
                  </h4>
                  <span className="text-purple-600">2022.09</span>
                </div>
                <p className="text-gray-700">리눅스 마스터 2급 자격증 취득.</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/80 rounded-lg p-6 shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className=" text-md font-semibold flex items-center">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <FaTrophy className="mr-2 text-purple-600" />
                    </motion.div>
                    프론트엔드 개발 부트캠프 최종프로젝트 대상
                  </h4>
                  <span className="text-purple-600">2022.09</span>
                </div>
                <p className="text-gray-700">
                  Urr 프로젝트로 130여명의 수강생의 최종프로젝트 결과물 25개 중
                  1등을 하여 대상 수상.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};