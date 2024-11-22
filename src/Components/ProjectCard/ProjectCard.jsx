import React from "react";
import "./ProjectCard.css"; // Optional CSS for styling

const ProjectCard = ({ projectTitle, projectImage, projectLink ,projectSkills }) => {
  return (
    
    <div className="project-card">
      <a href={projectLink} target="_blank" rel="noopener noreferrer">
        <img src={projectImage} alt={projectTitle} className="project-image" />
      </a>
      <h3 className="project-title">{projectTitle}</h3>
      <h3 className="project-skills">{projectSkills}</h3>
      <h3 className="project-title">{}</h3>
    </div>
    
    
  
  );
};

export default ProjectCard;