"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Youtube, Github, Globe, ChevronsDown } from "lucide-react";
import { skills } from "@/data/skiils";
import { projects } from "@/data/projects";
import EmailButton from "./components/EmailBtn";
import { SiNotion } from "react-icons/si";
import { SiTistory } from "react-icons/si";
import { Luckiest_Guy } from "next/font/google";
import { useRouter } from "next/navigation";

const luckiestGuy = Luckiest_Guy({
  weight: "400",
  subsets: ["latin"],
});

type SectionId = "about" | "skills" | "projects";

export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionId>("about");
  const [isScrolling, setIsScrolling] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const router = useRouter();

  const scrollToSection = (sectionId: SectionId) => {
    if (isScrolling) return;

    setIsScrolling(true);
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.offsetTop - navHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });

      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    }
    setActiveSection(sectionId);
  };

  const handleWheelEvent = (e: WheelEvent) => {
    if (isScrolling) {
      e.preventDefault();
      return;
    }

    const sections = ["about", "skills", "projects"];
    const currentIndex = sections.indexOf(activeSection);

    if (e.deltaY > 0 && currentIndex < sections.length - 1) {
      // Scrolling down
      scrollToSection(sections[currentIndex + 1] as SectionId);
    } else if (e.deltaY < 0 && currentIndex > 0) {
      // Scrolling up
      scrollToSection(sections[currentIndex - 1] as SectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return;

      const sections = ["about", "skills", "projects"];
      const navHeight = 80;

      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= navHeight && rect.bottom > navHeight;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection as SectionId);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("wheel", handleWheelEvent, { passive: false });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheelEvent);
    };
  }, [isScrolling, activeSection]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };
  const handleProjectClick = (projectId: string) => {
    setExpandedId(projectId); // 확장 애니메이션 시작
    setTimeout(() => {
      router.push(`/projects/${projectId.toLowerCase().replace(/\s+/g, "-")}`);
    }, 800); // 애니메이션 시간과 동일하게 설정
  };

  return (
    <main className="min-h-screen gradient-animation text-purple-900">
      {/* Header */}
      <nav className="fixed top-0 w-full h-20 bg-white/60 backdrop-blur-sm border-b border-purple-200 z-50 p-4">
        <div className="px-4 w-full flex justify-between items-center">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center space-x-4 gap-2"
          >
            <h1
              className={`${luckiestGuy.className} text-2xl font-bold mt-1 text-purple-900`}
            >
              lyuna's portfolio
            </h1>
            <div className="flex justify-center items-center space-x-3 mt-1">
              <a
                href="https://github.com/lyuna29"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col justify-between items-center"
              >
                <Github size={20} className="text-black transition-colors" />
                <p className="text-xs mt-1 text-black">Github</p>
              </a>
              <a
                href="https://lyuna29.tistory.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col justify-between  items-center"
              >
                <SiTistory
                  size={20}
                  className="text-orange-600 transition-colors"
                />
                <p className="text-xs mt-1 text-orange-600">Blog</p>
              </a>
            </div>
          </motion.div>
          <div className="space-x-4">
            {["about", "skills", "projects"].map((section) => (
              <motion.button
                key={section}
                whileHover={{ scale: 1.05 }}
                onClick={() => scrollToSection(section as SectionId)}
                className={`px-4 py-2 transition-all ${
                  activeSection === section
                    ? "text-purple-900 font-bold border-b-2 border-purple-400"
                    : "text-purple-600 hover:text-purple-800"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </motion.button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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
              className={`${luckiestGuy.className} text-7xl font-bold  text-[#9937b6] mb-4`}
            >
              Frontend Engineer
            </h1>
            <p className="ria-font text-5xl font-extrabold text-purple-900 mb-12">
              임현아
            </p>
            <p className="text-xl font-bold text-gray-700 mb-2">
              팀을 이끌며 함께 성장하는 과정에서 기술과 소통의 가치를 이해하는
              프론트엔드 개발자입니다.
            </p>
            <p className="text-xl  text-gray-700 mb-8">
              끊임없는 학습과 도전을 통해 더 나은 웹 서비스를 만들어 가는 데
              관심이 많습니다.
            </p>
            <div className="flex justify-center">
              <EmailButton />
            </div>
          </motion.div>
          <motion.div
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            onClick={() => scrollToSection("skills")}
          >
            <ChevronsDown size={40} className="text-white opacity-90" />
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="h-screen py-16">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`${luckiestGuy.className} text-5xl font-bold text-purple-900 mb-12 text-center`}
          >
            Skills
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 gap-6"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.category}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  rotate: [0, 1, -1, 1],
                  transition: { duration: 0.3 },
                }}
                className="post-it relative bg-yellow-100 p-6 rounded-lg shadow-md border border-yellow-100"
              >
                <h3
                  className={`${luckiestGuy.className} font-bold text-2xl text-purple-900 mb-4`}
                >
                  {skill.category}
                </h3>
                <ul className="space-y-3">
                  {skill.items.map((item) => (
                    <motion.li
                      key={item.name}
                      className="flex items-center space-x-2 gap-2"
                      whileHover={{ x: 5 }}
                    >
                      {item.icon && <item.icon size={35} color={item.color} />}
                      <span className="text-gray-600 font-bold">
                        {item.name}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}

      <section id="projects" className="py-16 bg-purple-50/60">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`${luckiestGuy.className} text-5xl font-bold text-purple-900 mb-12 text-center`}
          >
            Projects
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {projects.map((project) => (
              <AnimatePresence key={project.title}>
                {expandedId === project.title ? (
                  <motion.div
                    layoutId={project.title}
                    className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center px-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <h3
                      className={`${luckiestGuy.className} text-5xl text-purple-900 mb-4`}
                    >
                      {project.title}
                    </h3>
                  </motion.div>
                ) : (
                  <motion.div
                    layoutId={project.title}
                    onClick={() => handleProjectClick(project.title)}
                    className="relative bg-white p-8 rounded-lg shadow-lg border border-purple-200 cursor-pointer"
                    initial={false}
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3
                          className={`${luckiestGuy.className} text-3xl text-purple-900 mb-2`}
                        >
                          {project.title}
                        </h3>
                        <p className="text-gray-600">{project.period}</p>
                      </div>
                      <div
                        className="flex gap-3"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {project.links?.github && (
                          <motion.a
                            whileHover={{ scale: 1.1 }}
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-600 hover:text-purple-900 transition-colors"
                          >
                            <Github size={20} />
                          </motion.a>
                        )}
                        {project.links?.notion && (
                          <motion.a
                            whileHover={{ scale: 1.1 }}
                            href={project.links.notion}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-600 hover:text-purple-900 transition-colors"
                          >
                            <SiNotion size={20} />
                          </motion.a>
                        )}
                      </div>
                    </div>
                    <p className="text-purple-950 mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.05 }}
                          className="bg-purple-50 text-purple-800 px-4 py-2 rounded-lg text-sm"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                    <div className="border-t border-purple-100 pt-4">
                      <p className="font-medium text-purple-900 mb-3">
                        Key Roles
                      </p>
                      <ul className="space-y-2">
                        {project.achievements.map((achievement) => (
                          <motion.li
                            key={achievement}
                            whileHover={{ x: 5 }}
                            className="flex items-center space-x-2 text-purple-700"
                          >
                            <span className="w-2 h-2 bg-purple-400 rounded-full" />
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8 border-t border-purple-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-purple-600">
            © 임현아. Frontend Developer Portfolio
          </p>
        </div>
      </footer>
    </main>
  );
}
