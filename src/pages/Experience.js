import React from 'react';
import { VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import { Element } from 'react-scroll';
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import "../styles/experience.css";
import SectionWrapper from "../hoc/SectionWrapper.js";

const Experience = () => {
  return (
    <Element name="experience">
    <div className="experience">
        <h1 className='titler'>Experience</h1>
        <VerticalTimeline lineColor="white">
            <VerticalTimelineElement 
                className="vertical-timeline-element--education"
                date="October 2023 - Present"
                iconStyle={{background:"#3e497a", color: "#fff"}}
                icon={<WorkIcon/>}
            >
                <h3 className="vertical-timeline-element-title">
                    Founder at UniMate
                </h3>
                <p>
                    <ul>
                        <li>Pitched and raised $5000+ in total funding, 
                        and secured entry to the selective Spark! Innovation Fellowship program</li>
                        <li>Lead a 7-people startup team through conducting market research and user interviews, designing experiments to validate key
                        assumptions, and overseeing the social media initiatives</li>
                        <li>Develop the Minimum Viable Product along with 4 engineers and 
                        UI/UX designers using React and HTML/CSS</li>
                    </ul>
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement 
                className="vertical-timeline-element--education"
                date="September 2023 - Present"
                iconStyle={{background:"#3e497a", color: "#fff"}}
                icon={<WorkIcon/>}
            >
                <h3 className="vertical-timeline-element-title">
                    Founding Product Manager at BU Hack4Impact
                </h3>
                <p>
                    <ul>
                        <li>Pioneer the establishment of the product team, set visions and goals, 
                            and develop a structured program to onboard future PMs</li>
                        <li>Drive a 30% improvement in team efficiently by spearheading the adoption of agile practices, orchestrating sprint planning,
                            user story creation, and backlog grooming</li>
                        <li>Closely manage non-profit clients, gather product requirements, craft 
                            project timeline, and conduct bi-weekly check-ins</li>
                    </ul>
                </p>
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
    </Element>
  )
}

export default SectionWrapper(Experience, "work");