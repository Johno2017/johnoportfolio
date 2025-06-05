import "../styles/Step.css";

interface Props {
  href: string;
  src: string;
  name: string;
  description: string;
}

function Step({ href, src, name, description }: Props) {
  return (
    <a href={href} target="_blank" className="step">
      <div className="content">
          <img alt="Game Screenshot" src={src} className="screenshot" />
        <div className="info">
          <h3 className="poppins emerald project-name">{name}</h3>
          <p>{description}</p>
          <div className="go-to-container">
            <div>
              <p className="z-4">Go to &rarr;</p>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default Step;
