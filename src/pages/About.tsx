import { useState } from "react";
import profile from "../assets/profile.png";
import EducationTimeline from "../components/EducationTimeline";
import Skills from "../components/skills";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const About = () => {
  const [content, setContent] = useState(0);

  return (
    <>
      <section className="section" id="about">
        <div className="section__title">
          <div className="section__header">About</div>
        </div>
        <div className="about">
          <div className="about_left">
            <img src={profile} className="about_profile"></img>
            <a className="resume">My Resume</a>
            <div className="social-link">
              <a href="https://github.com/Duosi-Dai">
                <FaGithub className="icon" />
              </a>
              <a href="https://www.linkedin.com/in/duosi-dai-964218225/">
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className="about_right">
            <div className="about_btn">
              <button
                className={`btn ${content === 0 ? "active" : " "}`}
                onClick={() => setContent(0)}
              >
                My Skills
              </button>
              <button
                className={`btn ${content === 1 ? "active" : " "}`}
                onClick={() => setContent(1)}
              >
                My Education
              </button>
            </div>
            <div className="about_content">
              {content === 0 ? <Skills /> : <EducationTimeline />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
