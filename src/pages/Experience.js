import React from 'react';
import { VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import "../styles/experience.css";

function Experience() {
  return (
    <div className="experience">
        <VerticalTimeline lineColor="#3e497a">
            <VerticalTimelineElement 
                className="vertical-timeline-element--education"
                date="2010 - 2014"
                iconStyle={{background:"#3e497a", color: "#fff"}}
                icon={<WorkIcon/>}
            >
                <h3 className="vertical-timeline-element-title">
                    Boston University, MA
                </h3>
                <p>...CV Bullet Points...</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement 
                className="vertical-timeline-element--education"
                date="2010 - 2014"
                iconStyle={{background:"#3e497a", color: "#fff"}}
                icon={<WorkIcon/>}
            >
                <h3 className="vertical-timeline-element-title">
                    Boston University, MA
                </h3>
                <p>...CV Bullet Points...</p>
            </VerticalTimelineElement> 
            <VerticalTimelineElement 
                className="vertical-timeline-element--education"
                date="2010 - 2014"
                iconStyle={{background:"#3e497a", color: "#fff"}}
                icon={<WorkIcon/>}
            >
                <h3 className="vertical-timeline-element-title">
                    Boston University, MA
                </h3>
                <p>...CV Bullet Points...</p>
            </VerticalTimelineElement>           
        </VerticalTimeline>        
    </div>
  )
}

export default Experience