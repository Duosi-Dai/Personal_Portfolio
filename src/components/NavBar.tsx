import { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import ContactModal from './ContactModal';
import { createPortal } from 'react-dom';

const NavBar = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 550);
      console.log(window.scrollY);
    });
  });

  return (
    <nav className={`nav ${scroll ? 'sticky' : ''}`}>
      <img src={logo} alt="logo" className="nav__logo" id="logo" />
      <ul className="nav__links">
        <li className="nav__item">
          <a className="nav__link" href="#experience">
            Experience
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#projects">
            Projects
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#about">
            About
          </a>
        </li>
        <li className="nav__item">
          <a
            className="btn--show-modal"
            href="#contact"
            onClick={() => setModalOpen(true)}
          >
            Contact me
          </a>
          {modalOpen &&
            createPortal(
              <ContactModal setModalOpen={setModalOpen} />,
              document.body
            )}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
