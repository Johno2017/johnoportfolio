import "../styles/Step.css";
import { motion } from "motion/react";

interface Props {
  href: string;
  src: string;
  name: string;
  description: string;
}

const stepVariants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition : {
      type: 'spring',
      stiffness: 120
    }
  },
};

function Step({ href, src, name, description }: Props) {
  return (
    <motion.a
      href={href}
      target="_blank"
      className="step"
      variants={stepVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{
        scale: 1.05,
        borderColor: "#31d097",
        boxShadow: "5px 5px 10px #31d097"
      }}
    >
      <div className="screenshot">
        <img alt="Game Screenshot" src={src} className="screenshot" />
      </div>
      <div className="info">
        <h3 className="poppins emerald project-name">{name}</h3>
        <p>{description}</p>
        <div className="go-to-container">
          <p>Go to &rarr;</p>
        </div>
      </div>
    </motion.a>
  );
}

export default Step;
