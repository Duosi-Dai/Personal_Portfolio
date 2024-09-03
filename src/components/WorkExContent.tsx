interface WorkEx {
  id: string | number;
  title: string;
  description: string;
}

interface WorkExContentProps {
  workExData: WorkEx[];
  activeTab: number;
}

const WorkExContent = ({ workExData, activeTab }: WorkExContentProps) => {
  return (
    <div>
      {workExData.map((work, index) => (
        <div
          key={work.id}
          className={`workExs__content ${
            activeTab === index ? "workExs__content--active" : ""
          } `}
        >
          <h5 className="workExs__header">{work.title}</h5>
          <p>{work.description}</p>
        </div>
      ))}
    </div>
  );
};

export default WorkExContent;
