import React, { useState } from 'react';
import { electionData } from '../data/electionData';
import './Timeline.css';

const Timeline = ({ lang }) => {
  const [activeStep, setActiveStep] = useState(null);

  const toggleStep = (id) => {
    setActiveStep(activeStep === id ? null : id);
  };

  return (
    <div className="glass-panel animate-fade-in">
      <h2>{lang === 'en' ? 'Election Process Timeline' : 'चुनाव प्रक्रिया की समयरेखा'}</h2>
      <p style={{ marginBottom: '20px', color: 'var(--text-light)' }}>
        {lang === 'en' ? 'Click on a step to learn more.' : 'अधिक जानने के लिए एक चरण पर क्लिक करें।'}
      </p>

      <div className="timeline-container">
        {electionData.timeline.map((step, index) => (
          <div key={step.id} className="timeline-item">
            <div className="timeline-marker">
              <div className={`marker-dot ${activeStep === step.id ? 'active' : ''}`}>{index + 1}</div>
              {index < electionData.timeline.length - 1 && <div className="marker-line"></div>}
            </div>
            
            <div 
              className={`timeline-content ${activeStep === step.id ? 'expanded' : ''}`}
              onClick={() => toggleStep(step.id)}
            >
              <h3>{step.title[lang]}</h3>
              {activeStep === step.id && (
                <p className="timeline-desc animate-fade-in">{step.description[lang]}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
