import "../styles/SkillSection.css";

let skills = [
  { name: "Node.js" },
  { name: "Html" },
  { name: "CSS" },
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "C++" },
  { name: "C#" },
  { name: "Python" },
  { name: "React.js" },
  { name: "Svelte.js" },
  { name: "Sql Server" },
  { name: "Jenkins" },
];

function SkillSection() {
  return (
    <div className="skill-container">
      <h3>Developer Skills</h3>
      <div className="skill-list">
        {skills.map((skill) => (
          <div className="skill">
            <h6>{skill.name}</h6>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillSection;
