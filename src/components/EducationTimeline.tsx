import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoSchool } from 'react-icons/io5';

const EducationTimeline = () => {
  return (
    <VerticalTimeline
      layout="1-column-left"
      lineColor="#365486"
      animate={false}
      className="timelineItem"
    >
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2023 - present"
        contentStyle={{
          fontStyle: 'italic',
          color: ' #365486;',
          fontWeight: 'bold',
        }}
        iconStyle={{
          background: 'white',
          color: ' #365486',
        }}
        icon={<IoSchool />}
      >
        <h3 className="vertical-timeline-element-title">
          Master Degree : Interactive Media Technology
        </h3>
        <p>Dynamic Web development, UX/UI, User evaluation</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2020 - 2023"
        contentStyle={{
          fontStyle: 'italic',
          color: ' #365486;',
          fontWeight: 'bold',
        }}
        iconStyle={{ background: 'white', color: ' #365486' }}
        icon={<IoSchool />}
      >
        <h3 className="vertical-timeline-element-title">
          Bachelor Degree : Information and communication technology
        </h3>
        <p>
          Network construction, hardware circuit design, software programming
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default EducationTimeline;
