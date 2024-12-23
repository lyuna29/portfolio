import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Menu, X } from "lucide-react";
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

export const Header = ({ activeSection, scrollToSection }: NavBarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {
      href: "https://github.com/lyuna29",
      icon: <Github size={20} className="text-black transition-colors" />,
      label: "Github",
      textColor: "text-black",
    },
    {
      href: "https://lyuna29.tistory.com/",
      icon: (
        <SiTistory size={20} className="text-orange-600 transition-colors" />
      ),
      label: "Blog",
      textColor: "text-orange-600",
    },
  ];

  return (
    <nav className="fixed top-0 w-full h-auto md:h-20 bg-white/60 backdrop-blur-sm border-b border-purple-200 z-50 p-4">
      <div className="px-4 w-full flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <div className="w-full md:w-auto flex justify-between items-center">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-4 gap-2"
          >
            <h1
              className={`${luckiestGuy.className} text-xl md:text-2xl font-bold mt-1 text-purple-900`}
            >
              lyuna&apos;s portfolio
            </h1>
            <div className="hidden md:flex justify-center items-center space-x-3 mt-1">
              {links.map(({ href, icon, label, textColor }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col justify-between items-center"
                >
                  {icon}
                  <p className={`text-xs mt-1 ${textColor}`}>{label}</p>
                </a>
              ))}
            </div>
          </motion.div>

          <button
            className="md:hidden text-purple-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="hidden md:flex space-x-4">
          {["about", "skills", "projects", "me"].map((section) => (
            <motion.button
              key={section}
              whileHover={{ scale: 1.05 }}
              onClick={() =>
                scrollToSection(
                  section as "about" | "skills" | "projects" | "me"
                )
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

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="w-full md:hidden bg-white/90"
            >
              <div className="flex flex-col p-4">
                {["about", "skills", "projects", "me"].map((section) => (
                  <motion.button
                    key={section}
                    onClick={() => {
                      scrollToSection(
                        section as "about" | "skills" | "projects" | "me"
                      );
                      setIsOpen(false);
                    }}
                    className={`py-2 px-4 text-left transition-all ${
                      activeSection === section
                        ? "text-purple-900 font-bold"
                        : "text-purple-600"
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </motion.button>
                ))}
                <div className="flex justify-start space-x-6 mt-4 px-4">
                  {links.map(({ href, icon, label, textColor }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col justify-between items-center"
                    >
                      {icon}
                      <p className={`text-xs mt-1 ${textColor}`}>{label}</p>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
