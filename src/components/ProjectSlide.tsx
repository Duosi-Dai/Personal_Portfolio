interface projectData {
  id: number;
  name: string;
  description: string;
  image: string;
  date: string;
  link: string;
}

interface projectProps {
  projectData: projectData[];
  currentSlide: number;
}

const ProjectSlide = ({ projectData, currentSlide }: projectProps) => {
  return (
    <div>
      {projectData.map((item, index) => (
        <div
          key={item.id}
          className="slide"
          style={{
            transform: `translateX(${100 * (index - currentSlide)}%)`,
          }}
        >
          <div className="project">
            <img src={item.image} alt="" className="project__photo" />
            <h5 className="project__name">{item.name}</h5>
            <h6 className="project__date"> {item.date}</h6>
            <p className="project__link"> {item.link}</p>
            <span className="project__description">{item.description}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectSlide;
