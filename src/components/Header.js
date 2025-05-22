// src/components/Header.js
import React from 'react';

const Header = ({ name }) => {
    return (
        <header className="header">
            <h1 className="header-name">{name}</h1>
            <nav className="header-nav">
                <a href="#about">About</a>
                <a href="#work-experience">Experiences</a>
                <a href="#certifications">Certifications</a>
                <a href="#courses">Courses</a>
                <a href="#projects">Projects</a>
                <a href="#resume">Resume</a>
                <a href="#connect">Connect</a>
            </nav>
        </header>
    );
};

export default Header;
