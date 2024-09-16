import { useState } from 'react';
import WorkExContent from '../components/WorkExContent';

const WorkExs = () => {
  // State to track which tab is active
  const [activeTab, setActiveTab] = useState(0);

  // Define the job titles as tabs
  const jobTitles = [ 'Frontend Developer','UX Designer','Teaching Assistant'];

  return (
    <>
    <div className="section__title section__title--projects">
          <h3 className="section__header">Work Experience</h3>
        </div>
    <section className="workExs">
       
      <div className="workExs__tab-container">
        <div>
          {jobTitles.map((title, index) => (
            <div
              key={index}
              className={`workExs__tab ${activeTab === index ? 'workExs__tab--active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {title}
            </div>
          ))}
        </div>
        
        <div>
          {activeTab === 0 && <WorkExContent jobIndex={0} />}
          {activeTab === 1 && <WorkExContent jobIndex={1} />}
          {activeTab === 2 && <WorkExContent jobIndex={2} />}
        </div>
      </div>
    </section>
    </>
  );
};

export default WorkExs;
