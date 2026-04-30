import React, { useState } from 'react';
import { electionData } from '../data/electionData';
import './Glossary.css';

const Glossary = ({ lang }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredGlossary = electionData.glossary.filter(item => 
    item.term[lang].toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.definition[lang].toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="glass-panel animate-fade-in">
      <h2>{lang === 'en' ? 'Election Glossary' : 'चुनाव शब्दावली'}</h2>
      
      <input 
        type="text" 
        className="search-input"
        placeholder={lang === 'en' ? 'Search terms (e.g., EVM)...' : 'शब्द खोजें (जैसे, EVM)...'}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="glossary-list">
        {filteredGlossary.length > 0 ? (
          filteredGlossary.map((item, index) => (
            <div key={index} className="glossary-item animate-fade-in">
              <h3 className="glossary-term">{item.term[lang]}</h3>
              <p className="glossary-def">{item.definition[lang]}</p>
            </div>
          ))
        ) : (
          <p className="no-results">
            {lang === 'en' ? 'No terms found.' : 'कोई शब्द नहीं मिला।'}
          </p>
        )}
      </div>
    </div>
  );
};

export default Glossary;
