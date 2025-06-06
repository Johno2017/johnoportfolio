import "../styles/Header.css";
import { motion } from "motion/react";

interface SectionLink {
  name: string;
  id: string;
}

const sections: SectionLink[] = [
  { name: "Projects", id: "projects" },
  { name: "About", id: "about" },
  { name: "Contact", id: "contact" },
];

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({
    behavior: "smooth",
  });
};

function Header() {
  return (
    <header className="header intro">
      <h1>
        <b className="poppins">John</b> <span>Ong</span>
      </h1>
      <div className="tabs">
        {sections.map((section, index) => (
          <motion.button
            key={index}
            onClick={() => {
              scrollToSection(section.id);
            }}
            whileHover={{
              scale: 1.05,
              color: "#000000",
              boxShadow: "5px 5px 5px  #31d097"
            }}
          >
            {section.name}
          </motion.button>
        ))}
      </div>
    </header>
  );
}

export default Header;
