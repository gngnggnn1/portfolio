import React from 'react';
import portfolioProjects from '../data/ProjectsData';
import PortfolioItem from './PortfolioItem';

function Projects() {
  return (
    <>
      {portfolioProjects.length > 0 ? (
        portfolioProjects.map(project => (
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
    </>
  );
}

export default Projects;
