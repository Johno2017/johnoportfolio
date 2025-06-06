import "../styles/Footer.css";
import {motion} from 'motion/react';

function Footer() {
  return (
    <footer id="contact">
      <p className="black-text">Connect with me &darr;</p>
      <div className="contact-links">
        <p>
          <b>Email:</b> john.ong135@gmail.com
        </p>
        <p>
          <b>GitHub:</b>
          <a
            href="https://github.com/Johno2017"
            target="_blank"
            className="emerald"
          >
            Johno2017
            <span className="material-symbols-outlined">open_in_new</span>
          </a>
        </p>
        <p>
          <b>LinkedIn:</b>
          <a
            href="https://www.linkedin.com/in/john-ong-349640148/"
            target="_blank"
            className="emerald"
          >
            John Ong Profile
            <span className="material-symbols-outlined">open_in_new</span>
          </a>
        </p>
      </div>
      <div>
        <motion.svg></motion.svg>
      </div>
    </footer>
  );
}

export default Footer;
