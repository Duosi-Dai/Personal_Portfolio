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
        contentStyle={{ width: "30rem", fontSize: "15px" }}
        iconStyle={{ background: "rgb(255, 255, 255)", border: "none" }}
        icon={<IoSchool />}
      >
        <h3 className="vertical-timeline-element-title">
          Interactive Media Technology
        </h3>
        <h5 className="vertical-timeline-element-subtitle">Master Degree</h5>
        <p>Dynamic Web development, UX/UI, User evaluation</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2020 - 2023"
        contentStyle={{ width: "30rem", fontSize: "15px" }}
        iconStyle={{ background: "rgb(255, 255, 255)" }}
        icon={<IoSchool />}
      >
        <h3 className="vertical-timeline-element-title">
          Information and communication technology
        </h3>
        <h5 className="vertical-timeline-element-subtitle">Bachelor Degree</h5>
        <p>
          Network construction, hardware circuit design, software programming
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default EducationTimeline;
