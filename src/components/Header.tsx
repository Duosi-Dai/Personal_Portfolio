import profile from "../assets/profile.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <section className="section">
      <div className="header">
        <div className="header__title">
          <h1>
            Hi There,
            <br />
            I'm <span className="highlight">Duosi Dai</span>
            <br />
            {/* <span className="highlight">Career field</span> */}
          </h1>
          <h4>Self-introduction Pitch</h4>
          <button className="btn--text">More about Me</button>
          <div className="social-link">
            <a href="https://github.com/Duosi-Dai">
              <FaGithub className="icon" />
            </a>
            <a href="https://www.linkedin.com/in/duosi-dai-964218225/">
              <FaLinkedin />
            </a>
          </div>
          <img src={profile} className="header__img" alt="Nothing" />
        </div>
      </div>
    </section>
  );
};

export default Header;
