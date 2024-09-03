import { useState } from "react";
import WorkExTab from "../components/WorkExTab";
import WorkExContent from "../components/WorkExContent";

const WorkExs = () => {
  const workExData = [
    {
      id: "1",
      period: "1",
      title: "UX designer",
      description: "discriptionaaaaa",
    },
    {
      id: "2",
      period: "2",
      title: "Teaching Assistant",
      description: "discriptionaaaaa",
    },
    {
      id: "3",
      period: "3",
      title: "Frontend Developer",
      description: "discriptionaaaaa",
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <section className="section" id="experience">
        <div className="section__title">
          <h3 className="section__header">WORK EXPERIENCE</h3>
        </div>
        <div className="workExs">
          <div className="workExs__tab-container">
            <WorkExTab
              workExData={workExData}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <WorkExContent workExData={workExData} activeTab={activeTab} />
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkExs;
