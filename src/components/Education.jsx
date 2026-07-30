import React, { useState } from 'react';
import '../styles/Section.css';

export default function Education({ data, onSave }) {
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
      <h2>Educational Experience</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>School/University Name:</label>
            <input
              type="text"
              name="school"
              value={formData.school}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Title of Study / Degree:</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Date of Study (e.g. 2020 - 2024):</label>
            <input
              type="text"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn submit-btn">Submit</button>
        </form>
      ) : (
        <div className="display-group">
          <p><strong>School:</strong> {formData.school}</p>
          <p><strong>Title of Study:</strong> {formData.title}</p>
          <p><strong>Date of Study:</strong> {formData.date}</p>
          <button onClick={() => setIsEditing(true)} className="btn edit-btn">Edit</button>
        </div>
      )}
    </div>
  );
}