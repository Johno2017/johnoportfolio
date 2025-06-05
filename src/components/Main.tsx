import '../styles/Main.css';
import Projects from './Projects';

function Main() {
  return (
  <main>
    <section id="introPage">
        <div className="title-section">
            <h2>
                Hi! I'm <span className="poppins emerald">John</span> Ong
                <br />Full Stack
                <span className="poppins emerald"> Developer</span><br></br>
                <span className="poppins emerald">DevOps</span> Engineer
            </h2>
            <p className="description">
                I specialize as a <span className="emerald">.NET developer</span> with many years of 
                practical experience working in <span className="emerald">C#, SQL, and JavaScript.</span>
                I also have experience with CI/CD pipelines and automation in <span className="emerald">Jenkins, GitLab, and Azure DevOps.</span>
            </p>
        </div>
        <div className="head-shot-container blob bg-grey-dark">
            <div className='blob-inner bg-grey-lite'>
                <img
                    alt="Headshot"
                    src="src\assets\PortfolioPhoto.PNG"
                    className="head-shot"
                />
            </div>
        </div>
    </section>
    <Projects></Projects>
  </main>);
}

export default Main;
