
import React from 'react';
import './App.css'; // Main stylesheet
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import Experiences from './components/WorkExperience';
import Header from './components/Header';
import Section from './components/Section';
import Resume from './components/Resume';
import About from './components/About';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import CoursesSection from './components/CoursesSection';
import { personalInfo } from './data/PersonalInfo';

function App() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);

    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      <Header name={personalInfo.name} />

      <main>
        <Section id="hero">
          <p style={{ fontSize: '1.4rem', textAlign: 'center', fontWeight: '500', marginTop: '-10px', marginBottom: '30px' }}>
            {personalInfo.tagline}
          </p>
        </Section>

          <Section title="About Me" id="about">
            <About />
          </Section>

          <Section title="Experiences" id="work-experience">
            <Experiences />
          </Section>

          <Section title="Certifications" id="certifications">
            <Certifications />
          </Section>

          <Section title="Courses" id="courses">
            <CoursesSection />
          </Section>

          <Section title="Projects" id="projects">
            <Projects />
          </Section>

          <Section title="My Resume" id="resume">
            <Resume />
          </Section>

        <Section title="Connect With Me" id="connect">
          <p>I'm always open to new opportunities and collaborations. Feel free to reach out!</p>
          <ul>
            <li><a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href={personalInfo.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href={`mailto:${personalInfo.email}`} >Email Me</a></li>
          </ul>
        </Section>
      </main>

        <footer className="footer">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <p>Built with React and Microsoft Clarity. Powered by Cloudflare.</p>
        </footer>
        {showScroll && (
          <div className="return-to-top" onClick={scrollTop}>
            <FontAwesomeIcon icon={faArrowUp} />
          </div>
        )}
      </div>
  );
}

export default App;
