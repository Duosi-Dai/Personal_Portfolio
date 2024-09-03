interface WorkExData {
  id: string | number;
  period: string;
}

interface WorkExTabProps {
  workExData: WorkExData[];
  activeTab: number;
  setActiveTab: (index: number) => void;
}

const WorkExTab = ({ workExData, activeTab, setActiveTab }: WorkExTabProps) => {
  return (
    <div>
      {workExData.map((work, index) => (
        <li
          className={`btn workExs__tab workExs__tab--${index} ${
            activeTab === index ? "workExs__tab--active" : ""
          }`}
          key={work.id}
          onClick={() => setActiveTab(index)}
        >
          {work.period}
        </li>
      ))}
    </div>
  );
};

export default WorkExTab;
