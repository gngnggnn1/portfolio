// src/components/CertificationItem.js
import React from 'react';

const CertificationItem = ({ name, issuer, date, link }) => {
    return (
        <div className="certification-item">
            <h3>{name}</h3>
            <p className="certification-issuer">
                <strong>Issued by:</strong> {issuer}
            </p>
            <p className="certification-date">
                <strong>Date:</strong> {date}
            </p>
            {link && (
                <p className="certification-link">
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        View Credential
                    </a>
                </p>
            )}
        </div>
    );
};

export default CertificationItem;