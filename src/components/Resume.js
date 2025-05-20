import React from 'react';
import { personalInfo } from '../data/PersonalInfo';

function Resume() {
  return (
    <>
      <p>You can view or download my full resume by clicking the button below.</p>
      <a href={personalInfo.resumePdf} target="_blank" rel="noopener noreferrer" className="button resume-button">
        View Resume (PDF)
      </a>
    </>
  );
}

export default Resume;
