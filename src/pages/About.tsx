import { useState } from 'react';
import profile from '../assets/P.png';
import EducationTimeline from '../components/EducationTimeline';
import Skills from '../components/Skills';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
const About = () => {
  const [content, setContent] = useState(0);

  return (
    <>
      <section className="section section_color" id="about">
        <div className="section__title">
          <div className="section__header">About</div>
        </div>
        <div className="about">
          <div className="about_left">
            <img src={profile} className="about_profile"></img>
            <a
              className="resume"
              target="_blank"
              href="https://duosi-dai-cv.tiiny.site"
            >
              My Resume
            </a>

            <div className="social-links">
              <a href="https://github.com/Duosi-Dai">
                <FaGithub className="icon" />
              </a>
              <a href="https://www.linkedin.com/in/duosi-dai-964218225/">
                <FaLinkedin className="icon" />
              </a>
            </div>
          </div>
          <div className="about_right">
            <div className="about_btn">
              <button
                className={`btn ${content === 0 ? 'active' : ' '}`}
                onClick={() => setContent(0)}
              >
                My Skills
              </button>
              <button
                className={`btn ${content === 1 ? 'active' : ' '}`}
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
