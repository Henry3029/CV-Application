import React from 'react';
import '../styles/Preview.css';

export default function CVPreview({ general, education, experience }) {
  return (
    <div className="cv-preview-container">
      {/* Header / Contact Info */}
      <header className="cv-header">
        <h1>{general.fullName || 'Your Name'}</h1>
        <div className="contact-info">
          <span>{general.email || 'email@example.com'}</span> | 
          <span> {general.phone || '(123) 456-7890'}</span>
        </div>
      </header> 

      <hr className="divider" />

      {/* Education Section */}
      <section className="cv-section">
        <h2>Education</h2>
        <div className="cv-item">
          <div className="item-header">
            <strong>{education.school || 'University / School Name'}</strong>
            <span className="date">{education.date || '2020 - 2024'}</span>
          </div>
          <p className="item-subtitle">{education.title || 'Degree / Field of Study'}</p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="cv-section">
        <h2>Experience</h2>
        <div className="cv-item">
          <div className="item-header">
            <strong>{experience.company || 'Company Name'}</strong>
            <span className="date">
              {experience.dateFrom && experience.dateUntil 
                ? `${experience.dateFrom} - ${experience.dateUntil}` 
                : '2024 - Present'}
            </span>
          </div>
          <p className="item-subtitle"><em>{experience.position || 'Position Title'}</em></p>
          <p className="item-body">
            {experience.responsibilities || 'Key responsibilities and achievements listed here...'}
          </p>
        </div>
      </section>
    </div>
  );
}