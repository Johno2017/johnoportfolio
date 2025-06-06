import "../styles/Main.css";
import BackgroundInfo from "./BackgroundInfo";
import Projects from "./Projects";
import Footer from "./Footer";
import SkillSection from "./SkillSection";
import { motion } from "motion/react";


const greetingDivVariants = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
        mass: 0.5,
        damp: 10,
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.25
    }
  },
};

function Main() {
  return (
    <main>
      <section id="introPage">
        <motion.div
          className="title-section"
          variants={greetingDivVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 variants={greetingDivVariants}>
            Hi! I'm <span className="poppins emerald">John</span> Ong
            <br />
            Full Stack
            <span className="poppins emerald"> Developer</span>
            <br></br>
            <span className="poppins emerald">DevOps</span> Engineer
          </motion.h2>
          <motion.p className="description" variants={greetingDivVariants}>
            I specialize as a <span className="emerald">.NET developer</span>{" "}
            with many years of practical experience working in{" "}
            <span className="emerald">C#, SQL, and JavaScript.</span> I also have
            experience with CI/CD pipelines and automation in{" "}
            <span className="emerald">Jenkins, GitLab, and Azure DevOps.</span>
          </motion.p>
        </motion.div>
        <motion.div
          className="head-shot-container blob bg-grey-dark"
        >
          <motion.div className="blob-inner bg-grey-lite">
            <motion.img
              alt="Headshot"
              src='/PortfolioPhoto.PNG'
              className="head-shot"
            />
          </motion.div>
        </motion.div>
      </section>
      <SkillSection />
      <Projects />
      <BackgroundInfo />
      <Footer />
    </main>
  );
}

export default Main;
