import profile from "../assets/profile.png";

const Header = () => {
  return (
    <section className="section">
      <div className="header">
        <div className="header__title">
          <h1>
            <span className="highlight">Name</span>
            : I am a
            <br />
            <span className="highlight">Career field</span>
          </h1>
          <h4>Self-introduction Pitch</h4>
          <button className="btn--text">More about Me</button>
          <img src={profile} className="header__img" alt="Nothing" />
        </div>
      </div>
    </section>
  );
};

export default Header;
