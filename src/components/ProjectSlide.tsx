interface ProjectSlideProps {
  title: string;
  description: string;
  date: string;
  videoLink?: string;
  pdfLink?: string;
  repoLink?: string;
  blogLink?: string;
}

const ProjectSlide = ({  
  title,
  description,
  date,
  videoLink,
  pdfLink,
  repoLink,
  blogLink, }: ProjectSlideProps) => {
  return (
    <div className="slide">
      <div className="project">
        <h2 className="project__name">{title}</h2>
        <p className="project__description">{description}</p>
        <p className="project__date">{date}</p>
        <div className="project__links">
          {videoLink && (
            <a href={videoLink} className="project__link" target="_blank" rel="noopener noreferrer">
              Video Demo
            </a>
          )}
          {pdfLink && (
            <a href={pdfLink} className="project__link" target="_blank" rel="noopener noreferrer">
              Thesis PDF
            </a>
          )}
          {repoLink && (
            <a href={repoLink} className="project__link" target="_blank" rel="noopener noreferrer">
              GitHub Repository
            </a>
          )}
          {blogLink && blogLink !== 'placeholder' && (
            <a href={blogLink} className="project__link" target="_blank" rel="noopener noreferrer">
              Blog
              </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectSlide;
