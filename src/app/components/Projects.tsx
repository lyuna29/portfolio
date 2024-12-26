"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Youtube, Github, Globe } from "lucide-react";
import { SiNotion } from "react-icons/si";
import { Luckiest_Guy } from "next/font/google";
import { projects } from "@/data/projects";
import { useRouter } from "next/navigation";

const luckiestGuy = Luckiest_Guy({
  weight: "400",
  subsets: ["latin"],
});

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const projectVariants = {
  initial: {
    scale: 1,
  },
  clicked: {
    scale: 1.1,
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    scale: 0.8,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export const ProjectsSection = () => {
  const push = useRouter().push;

  const handleProjectClick = async (projectId: string) => {
    const element = document.getElementById(projectId);
    if (element) {
      element.classList.add("project-clicked");

      await new Promise((resolve) => setTimeout(resolve, 300));

      push(`/projects/${projectId}`);

      setTimeout(() => {
        element.classList.remove("project-clicked");
      }, 100);
    }
  };
  return (
    <AnimatePresence mode="wait">
      <section id="projects" className="pt-16 min-h-screen bg-purple-50/60">
        <div className="max-w-5xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`${luckiestGuy.className} text-3xl md:text-5xl font-bold text-purple-900 mb-8 md:mb-12 text-center`}
          >
            Projects
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8 cursor-pointer"
          >
            {projects.map((project) => (
              <div key={project.title} className="w-full md:w-1/2">
                <div className="flex justify-end ">
                  <div
                    className={`w-36 h-[42px] flex justify-center items-center gap-3 rounded-t-lg mr-1 ${
                      project.title === "Urr"
                        ? "bg-[#c3cafa]/40"
                        : project.title === "Oeasy"
                        ? "bg-[#e5ffdf]/40"
                        : ""
                    } border-2 border-purple-200 border-b-0`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {project.links?.youtube && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        href={project.links.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-red-500 transition-colors"
                      >
                        <Youtube size={20} />
                      </motion.a>
                    )}
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
                    {project.links?.website && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        href={project.links.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-blue-600 transition-colors"
                      >
                        <Globe size={20} />
                      </motion.a>
                    )}
                  </div>
                </div>
                <motion.div
                  id={project.title}
                  onClick={() => handleProjectClick(project.title)}
                  className="w-full h-auto md:h-[550px] bg-white/80 p-4 md:p-8 rounded-lg shadow-lg"
                  variants={projectVariants}
                  initial="initial"
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  exit="exit"
                >
                  <motion.div
                    className="flex justify-between items-start mb-4"
                    variants={projectVariants}
                  >
                    <div>
                      <motion.h3
                        className={`${luckiestGuy.className} text-3xl text-purple-900 mb-2`}
                        variants={projectVariants}
                      >
                        {project.title}
                      </motion.h3>
                      <p className="text-gray-600">{project.period}</p>
                    </div>
                  </motion.div>
                  <p className="text-purple-950 mb-6">{project.description}</p>
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
                      주요 역할
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
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </AnimatePresence>
  );
};
