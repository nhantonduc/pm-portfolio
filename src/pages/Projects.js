import React from 'react';
import UniMate from '../assets/unimate.png';
import CaseStudy from '../assets/batdongsan.com.vn.png';
import ProjectItem from '../components/projectItem';
import { projectList } from '../helpers/ProjectList';
import "../styles/project.css";

function Projects() {
  return (
    <div className="projects">
        <h1>My Personal Projects</h1>
        <div className="projectList">
          {projectList.map((project) => {
            return <ProjectItem name={project.name} image={project.image}/>;
          })}
        </div>
    </div>
  );
}

export default Projects