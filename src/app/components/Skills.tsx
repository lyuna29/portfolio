import { motion } from "framer-motion";
import { Luckiest_Guy } from "next/font/google";
import { skills } from "@/data/skiils";

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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const SkillsSection = () => (
  <section id="skills" className="min-h-screen py-16">
    <div className="max-w-4xl mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`${luckiestGuy.className} text-3xl md:text-5xl font-bold text-purple-900 mb-8 md:mb-12 text-center`}
      >
        Skills
      </motion.h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
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
                  <span className="text-gray-600 font-bold">{item.name}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);
