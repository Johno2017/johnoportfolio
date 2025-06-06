import { motion } from "motion/react";
import "../styles/SkillSection.css";

const scrollVariants = {
  hidden: {
    opacity: 0
  },
  visible : {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
}

const skillVariants = {
  hidden: {
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring'
    }
  }
}

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
  { name: "Unreal Engine 5" },
  { name: "Godot" },
];

function SkillSection() {
  return (
    <motion.div className="skill-container"
    variants={scrollVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{once: true, amount: 0.5}}>
      <h3>Developer Skills</h3>
      <div className="skill-list">
        {skills.map((skill) => (
          <motion.div className="skill" 
          variants={skillVariants}>
            <h6>{skill.name}</h6>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default SkillSection;
