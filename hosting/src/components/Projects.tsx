import "../styles/Projects.css";
import Step from "./Step.tsx";
import { motion } from "motion/react";

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

interface Projects {
  href: string;
  src: string;
  name: string;
  description: string;
}

let projects: Projects[] = [
  {
    href: "https://github.com/Johno2017/SamuraiQuickDraw",
    name: "Quick Draw Samurai",
    src: "/SamuraiGrab.png",

    description:
      "Developed a 2D reflex-based minigame using the Unreal Engine Paper2D and Blueprint systems.",
  },
  {
    href: "https://github.com/Johno2017/TwinStickWizard",
    name: "Twin Stick Wizards",
    src: "/TwinWizardsGrab.png",
    description:
      "Designed and implemented a top-down twin-stick shooter emphasizing dynamic combat, survival mechanics, and upgradeable player abilities.",
  },
  {
    href: "https://github.com/Johno2017/Unity-Prototype-5",
    name: "Unity Junior Programmer + Essentials",
    src: "/UnityRoadmap.png",
    description:
      "Completed the Unity Essentials and Unity Junior Programmer courses provided by Unity to learn game development fundamentals. (UI, Programming, Game Design, etc.)",
  },
];

function Projects() {
  return (
    <section id="projects">
      <motion.div
        className="section-title"
        variants={scrollVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 1.0 }}
      >
        <h6>A few of my creative endeavors.</h6>
        <h3>
          Curious to <span className="poppins emerald">see</span> my work?
        </h3>
      </motion.div>
      <div className="step-section">
        {projects.map((project) => (
          <Step
            href={project.href}
            src={project.src}
            name={project.name}
            description={project.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
