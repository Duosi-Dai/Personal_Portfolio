import profile from "../assets/profile.png";
const About = () => {
  return (
    <>
      <section className="section" id="about">
        <div className="section__title">
          <div className="section__header">About</div>
        </div>
        <div className="about">
          <div className="about_left">
            <img src={profile} className="about_profile"></img>
            <a>My Resume</a>
            <div className="social-link">
              <a>Github</a>
              <a>Linkedin</a>
            </div>
          </div>
          <div className="about_right">
            <div>tab</div>
            <div>tabcontent</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
