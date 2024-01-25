import React from 'react';
import UniMate from '../assets/unimate.png';
import CaseStudy from '../assets/batdongsan.com.vn.png';
import ProjectItem from '../components/projectItem';
import { projectList } from '../helpers/ProjectList';
import "../styles/project.css";
import { Element } from 'react-scroll';
import SectionWrapper from "../hoc/SectionWrapper.js";

const Projects = () => {
  return (
    <Element name="projects">
    <div className="projects" Element="projects">
        <h1 style={{color:"#ffffff"}}>Projects</h1>
        <div className="projectList">
          {projectList.map((project) => {
            return <a href={project.link} target="_blank" rel="noopener noreferrer"><ProjectItem name={project.name} image={project.image}/></a>;
          })}
        </div>
    </div>
    </Element>
  );
}

export default SectionWrapper(Projects, "projects");