import "../styles/Header.css";

interface SectionLink {
  name: string;
  href: string;
}

const sections: SectionLink[] = [
  { name: "Projects", href: "#Projects" },
  { name: "About Me", href: "#About" },
  { name: "Contact", href: "#Contact" },
];

function Header() {
  return (
    <header className="header intro">
      <h1>
        <b className="poppins">John</b> <span>Ong</span>
      </h1>
      <div className="tabs">
        {sections.map((section, index) => (
          <a key={index} href={section.href}>
            <p>{section.name}</p>
          </a>
        ))}
      </div>
    </header>
  );
}

export default Header;
