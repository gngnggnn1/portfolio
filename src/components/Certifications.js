import React from 'react';
import certificationsData from '../data/CertificationsData';
import CertificationItem from './CertificationItem';

function Certifications() {
  return (
    <>
      {certificationsData.length > 0 ? (
        certificationsData.map(cert => (
          <CertificationItem
            key={cert.id}
            name={cert.name}
            issuer={cert.issuer}
            date={cert.date}
            link={cert.link}
          />
        ))
      ) : (
        <p>My certifications will be listed here.</p>
      )}
    </>
  );
}

export default Certifications;
