// src/components/PortfolioItem.js
import React from 'react';

const PortfolioItem = ({ title, description, liveLink, githubLink }) => {
    return (
        <div className="portfolio-item">
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="portfolio-links">
                {liveLink && <a href={liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>}
                {githubLink && <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>}
            </div>
        </div>
    );
};

export default PortfolioItem;