import { useState } from "react";
import ProjectSlide from "../components/ProjectSlide";
import profile from "../assets/profile.png";

const Projects = () => {
  const data = [
    {
      id: 1,
      name: "Project 1",
      description: "Project 1 description",
      image: profile,
      date: "Aug 2022",
      link: "http://localhost:5173/#experience",
    },
    {
      id: 2,
      name: "Project 2",
      description: "Project 2 description",
      image: profile,
      date: "Aug 2022",
      link: "http://localhost:5173/#experience",
    },
    {
      id: 3,
      name: "Project 3",
      description: "Project 3 description",
      image: profile,
      date: "Aug 2022",
      link: "http://localhost:5173/#experience",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = function () {
    if (currentSlide === data.length - 1) {
      setCurrentSlide(currentSlide - data.length + 1);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = function () {
    if (currentSlide === 0) {
      setCurrentSlide(currentSlide + data.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <>
      <section className="section" id="projects">
        <div className="section__title section__title--projects">
          <h3 className="section__header">Projects</h3>
        </div>

        <div className="slider">
          <ProjectSlide projectData={data} currentSlide={currentSlide} />

          <button className="slider__btn slider__btn--left" onClick={prevSlide}>
            &larr;
          </button>

          <button
            className="slider__btn slider__btn--right"
            onClick={nextSlide}
          >
            &rarr;
          </button>
        </div>
      </section>
    </>
  );
};

export default Projects;
