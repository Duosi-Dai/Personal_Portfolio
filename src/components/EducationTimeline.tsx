import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoSchool } from "react-icons/io5";

const EducationTimeline = () => {
  return (
    <VerticalTimeline layout="1-column-left" lineColor="black" animate={false}>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2023 - present"
        iconStyle={{ background: "rgb(255, 255, 255)", border: "none" }}
        icon={<IoSchool />}
      >
        <h3 className="vertical-timeline-element-title">
          Interactive Media Technology
        </h3>
        <h5 className="vertical-timeline-element-subtitle">Master Degree</h5>
        <p>Creative Direction, User Experience, Visual Design</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2020 - 2023"
        iconStyle={{ background: "rgb(255, 255, 255)" }}
        icon={<IoSchool />}
      >
        <h3 className="vertical-timeline-element-title">
          Information and communication technology
        </h3>
        <h5 className="vertical-timeline-element-subtitle">Bachelor Degree</h5>
        <p>Creative Direction, Visual Design</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default EducationTimeline;
