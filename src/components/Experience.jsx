Experience.jsx

import React, { useState } from 'react';
import '../styles/Section.css';

export default function Experience({ data, onSave }) {
  const [isEditing, setIsEditing] = useState(true);
  const [formData, setFormData] = useState(data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    setIsEditing(false);
  };

  return (
    <div className="section-card">
      <h2>Practical Experience</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Company Name:</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Position Title:</label>
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Main Responsibilities:</label>
            <textarea
              name="responsibilities"
              rows="4"
              value={formData.responsibilities}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>From Date:</label>
              <input
                type="date"
                name="dateFrom"
                value={formData.dateFrom}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Until Date:</label>
              <input
                type="date"
                name="dateUntil"
                value={formData.dateUntil}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <button type="submit" className="btn submit-btn">Submit</button>
        </form>
      ) : (
        <div className="display-group">
          <p><strong>Company:</strong> {formData.company}</p>
          <p><strong>Position:</strong> {formData.position}</p>
          <p><strong>Responsibilities:</strong> {formData.responsibilities}</p>
          <p><strong>Dates Worked:</strong> {formData.dateFrom} to {formData.dateUntil}</p>
          <button onClick={() => setIsEditing(true)} className="btn edit-btn">Edit</button>
        </div>
      )}
    </div>
  );
}