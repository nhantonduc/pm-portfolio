import React from 'react';
import { VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import { Element } from 'react-scroll';
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@mui/icons-material/Work";
import "../styles/experience.css";
import SectionWrapper from "../hoc/SectionWrapper.js";

function Experience() {
  return (
    <Element name="experience">
    <div className="experience">
        <h1 className='titler'>Experience</h1>
        <VerticalTimeline lineColor="gold">
            <VerticalTimelineElement 
                className="vertical-timeline-element--education"
                date="October 2023 - Present"
                iconStyle={{background:"#fff", color: "gold"}}
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
                    Cinema Product Management Intern at <a href="https://momo.careers/about/">MoMo (M_Service)</a>
                </h3>
                <p>
                    <ul>
                        <li>Launched 2 features with an increase of 20% in Average Order Value and online concession transactions
                            </li>
                        <li>Conducted 15+ user interviews, crafted the job-to-be-done framework, and 
                            proficiently utilized Figma for prototyping</li>
                        <li>Performed data analysis and identified a $1 million market opportunity for the cinema delivery-to-seat service, created
                            the service blueprint, and outlined the development phases for implementation and 
                            respective success metrics</li>
                        <li>Collaborated closely with cross-functional teams including 10+ developers, product designers, and business development
                            professionals to define sprint goals & scope, and prioritize delivering tasks 
                            based on costs and customer impacts</li>
                    </ul>
                </p>
            </VerticalTimelineElement>           
        </VerticalTimeline>        
    </div>
    </Element>
  )
}

export default SectionWrapper(Experience, "work");