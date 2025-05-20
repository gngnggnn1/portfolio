import React from 'react';
import { personalInfo } from '../data/PersonalInfo';

function About() {
  return (
    <>
      {personalInfo.bio.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </>
  );
}

export default About;
