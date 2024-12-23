import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { SiTistory } from "react-icons/si";
import { Luckiest_Guy } from "next/font/google";

const luckiestGuy = Luckiest_Guy({
  weight: "400",
  subsets: ["latin"],
});

type NavBarProps = {
  activeSection: string;
  scrollToSection: (section: "about" | "skills" | "projects" | "me") => void;
};

export const Header = ({ activeSection, scrollToSection }: NavBarProps) => (
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
            className="flex flex-col justify-between items-center"
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
        {["about", "skills", "projects", "me"].map((section) => (
          <motion.button
            key={section}
            whileHover={{ scale: 1.05 }}
            onClick={() =>
              scrollToSection(section as "about" | "skills" | "projects" | "me")
            }
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
);
