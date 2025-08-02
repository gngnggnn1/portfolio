import React, { useState } from 'react';
import portfolioProjects from '../data/ProjectsData';
import PortfolioItem from './PortfolioItem';

function Projects() {
  const [showAll, setShowAll] = useState(false);
  const initialProjects = showAll ? portfolioProjects : portfolioProjects.slice(0, 2);

  return (
    <>
      {initialProjects.length > 0 ? (
        initialProjects.map(project => (
          <PortfolioItem
            key={project.id}
            title={project.title}
            description={project.description}
            liveLink={project.liveLink}
            githubLink={project.githubLink}
          />
        ))
      ) : (
        <p>My projects will be showcased here soon!</p>
      )}
      {portfolioProjects.length > 2 && (
        <button className="button resume-button" onClick={() => setShowAll(!showAll)}>
          {showAll ? "See Less" : "See All"}
        </button>
      )}
    </>
  );
}

export default Projects;
