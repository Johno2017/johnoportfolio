import { motion } from "motion/react";
import "../styles/SkillSection.css";

const scrollVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const skillVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
    },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

let skills = [
  { name: "Node.js" },
  { name: "Html" },
  { name: "CSS" },
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "Playwright Unit Testing" },
  { name: "C++" },
  { name: "C#" },
  { name: "C# Unit Testing" },
  { name: "Python" },
  { name: "React.js" },
  { name: "Svelte.js" },
  { name: "Sql Server" },
  { name: "Jenkins" },
  { name: "PowerShell" },
  { name: "Bash" },
  { name: "Git" },
  { name: "Unity" },
  { name: "Unreal Engine 5" },
  { name: "Godot" },
];

function SkillSection() {
  return (
    <motion.div
      className="skill-container"
      variants={scrollVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="skill-title">
        <motion.svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Code">
            <motion.path
              variants={pathVariants}
              id="Icon"
              d="M68 72L80 60L68 48M52 48L40 60L52 72"
              stroke="#FFFFFF"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </motion.svg>
        <h3>Developer Skills</h3>
        <motion.svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Code">
            <motion.path
              variants={pathVariants}
              id="Icon"
              d="M68 72L80 60L68 48M52 48L40 60L52 72"
              stroke="#FFFFFF"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </motion.svg>
      </div>

      <div className="skill-list">
        {skills.map((skill) => (
          <motion.div
            className="skill emerald-shadow"
            variants={skillVariants}
            whileHover={{
              scale: 1.1,
              boxShadow: "5px 5px 5px  #31d097",
            }}
          >
            <h6>{skill.name}</h6>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default SkillSection;
