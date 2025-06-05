import "../styles/BackgroundInfo.css";

let quality = [
  {
    name: "An experienced Web Developer",
    description:
      "I’ve been working professionally as a full-stack developer since graduating in 2020, building solutions that range from fixing critical bugs to full front-end and API redesigns. " +
      "Over the past five years, I’ve developed a strong command of modern development practices and code quality standards—both as a contributor and as a reviewer." +
        "This experience has helped me write maintainable, scalable code while also fostering team-wide productivity and collaboration.",
  },
  {
    name: "A well-versed DevOps Engineer",
    description:
      "In addition to full-stack development, I’ve contributed extensively to build and DevOps workflows. As a member of the build team, I managed patch coordination and parallel development cycles while leveraging Jenkins to automate and streamline critical tasks. This included automating Jira ticket creation from security scan results, analyzing log files across dev, test, and production environments, and running unit tests on code submissions with automated approval or rejection logic. " +
      "These efforts helped reduce manual overhead and keep the development team focused on delivering features.",
  },
  {
    name: "A Passionate Creative",
    description:
      "Outside of work, I’m deeply passionate about music and video games. In my free time, I love creating personal game projects—often composing original music to go along with them. Along the way, I’ve explored everything from pixel art fundamentals to music theory, driven by a genuine love for learning and creative expression. " +
      "What draws me to game development is the blend of art, technology, and storytelling—it is a space where I can build, experiment, and share meaningful experiences with others.",
  },
];

function BackgroundInfo() {
  return (
    <section id="about" className="section-header">
      <h6>Want to know more?</h6>
      <h3>
        A bit <span className="poppins emerald">about</span> me.
      </h3>
      <p>I am . . .</p>
      {quality.map((quality, index) => (
        <div className="quality">
          <p className="poppins">
            0{index + 1}
          </p>
          <div className="quality-info">
            <h3 className="quality-title">{quality.name}</h3>
            <p>{quality.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default BackgroundInfo;
