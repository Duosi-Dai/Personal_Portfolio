import { useState } from "react";
import ProjectSlide from "../components/ProjectSlide";


const Projects = () => {
  const projects= [
    {
      title: 'EmoCanvas',
      description: 'EmoCanvas is an innovative multimodal interface designed to enhance user interaction by capturing input from various modalities and delivering highly personalized, emotionally resonant output. By leveraging the power of Large Language Models (LLMs), EmoCanvas transforms user speech into vivid, custom-generated images, interpreting facial expressions and emotions in real-time.',
      date: 'Oct 2023 - Jan 2024',
      videoLink: 'https://www.youtube.com/watch?v=FJzWE-XxcVw',
    },
    {
      title: 'LoRa Radio Performance Analysis',
      description: 'This thesis is dedicated to measuring the communication performance of LoRa technology in an indoor environment, assessing transmission parameters such as SF, BW, and PL, and analyzing its effectiveness as a solution for indoor IoT applications.',
      date: 'Jan 2023 - Jun 2023',
      pdfLink: 'https://www.diva-portal.org/smash/get/diva2:1792968/FULLTEXT01.pdf',
    },
    {
      title: 'Book-Keeper',
      description: 'This is a live bookkeeping software website allowing users to store and manage bookkeeping records, including income and expenses, with real-time editing, price comparisons, and product tracking features.',
      date: 'Oct 2021 - Jan 2023',
      repoLink: 'https://github.com/Dynamic-Web-Project/Book-keeper',
    },
    {
      title: 'Project Lost in Translatopia',
      description: 'An RPG adventure game where the player is a non-human animal exploring an open-world with different language regions.',
      date: 'Mar 2024 - Jun 2024',
      videoLink: 'https://youtu.be/xXCMSbCrndI',
      blogLink: 'https://lost-in-translatopia.webflow.io/',
    },
    {
      title: 'Real-Time Hand-Tracking Interaction with GPU-Based SPH Fluid in VR',
      description: 'Explores real-time hand-tracking interactions with GPU-based fluid simulation in VR, simulating realistic fluid behaviors using Unity and the Meta XR SDK for VR development.',
      date: 'Aug 2023 - Present',
      videoLink: 'https://www.youtube.com/watch?v=GQpZb-ERgT8',
      blogLink: 'https://interactive-sph-fluidsim-ingpu.webflow.io/'
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0); // Track the currently active slide

  const nextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide + 1) % projects.length); // Loop to the first slide if at the last one
  };

  const prevSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide === 0 ? projects.length - 1 : prevSlide - 1)); // Loop to the last slide if at the first one
  };

  return (
    <>
      <section className="section" id="projects">
        <div className="section__title section__title--projects">
          <h3 className="section__header">Projects</h3>
        </div>

        <div className="slider">
        <ProjectSlide
          title={projects[activeSlide].title}
          description={projects[activeSlide].description}
          date={projects[activeSlide].date}
          videoLink={projects[activeSlide].videoLink}
          pdfLink={projects[activeSlide].pdfLink}
          repoLink={projects[activeSlide].repoLink}
          blogLink={projects[activeSlide].blogLink}
        />

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
