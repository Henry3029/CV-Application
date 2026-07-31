App.jsx

import React, { useState } from 'react';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import './styles/App.css';

export default function App() {
  const [general, setGeneral] = useState({ fullName: '', email: '', phone: '' });
  const [education, setEducation] = useState({ school: '', title: '', date: '' });
  const [experience, setExperience] = useState({
    company: '',
    position: '',
    responsibilities: '',
    dateFrom: '',
    dateUntil: '' 
  });

  return (
    <div className="app-container">
      <header className="header">
        <h1>CV Builder Engine</h1>
      </header>
      <main className="cv-grid">
        <GeneralInfo data={general} onSave={setGeneral} />
        <Education data={education} onSave={setEducation} />
        <Experience data={experience} onSave={setExperience} />
      </main>
    </div>
  );
}