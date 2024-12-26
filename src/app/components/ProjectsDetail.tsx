// ProjectDetail.tsx
"use client";

import { motion } from "framer-motion";
import { Luckiest_Guy } from "next/font/google";
import { projects } from "@/data/projects";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const luckiestGuy = Luckiest_Guy({
  weight: "400",
  subsets: ["latin"],
});

interface ProjectDetailProps {
  projectId: string;
}

export const ProjectDetail = ({ projectId }: ProjectDetailProps) => {
  const router = useRouter();
  const project = projects.find((p) => p.title === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  const handleBack = () => {
    router.push("/#projects"); // projects 섹션으로 이동
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-purple-50/60 py-16"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.button
          onClick={handleBack}
          whileHover={{ x: -5 }}
          className="flex items-center text-purple-700 mb-8"
        >
          <ArrowLeft className="mr-2" />
        </motion.button>

        <motion.h1
          className={`${luckiestGuy.className} text-4xl md:text-6xl text-purple-900 mb-8`}
        >
          {project.title}
        </motion.h1>

        <div className="grid grid-cols-1 md:md:grid-cols-12 gap-8">
          <div className="md:col-span-8 bg-white rounded-lg p-6 shadow-lg">
            {project.links?.youtube && (
              <div className="aspect-video mb-6">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${getYoutubeId(
                    project.links.youtube
                  )}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
            )}

            <p className="text-purple-700 pt-2">{project.period}</p>

            <p className="text-purple-950 py-2">{project.description}</p>

            <div className=" pt-2">
              <h2
                className={`${luckiestGuy.className} text-lg md:text-2xl font-bold text-purple-900 mb-4`}
              >
                Tech Stack
              </h2>
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
            </div>
          </div>

          <div className="md:col-span-4 space-y-6">
            {project.additionalContent && (
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h2
                  className={`${luckiestGuy.className}  text-lg md:text-2xl font-bold text-purple-900 mb-4`}
                >
                  role
                </h2>
                <ul className="space-y-3">
                  {project.additionalContent.map((content, index) => (
                    <li
                      key={index}
                      className="flex items-center space-x-2 text-purple-700"
                    >
                      <span className="w-2 h-2 bg-purple-400 rounded-full" />
                      <span>{content}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Helper function to extract YouTube video ID
const getYoutubeId = (url: string): string => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match?.[2] ?? "";
};
