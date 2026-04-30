import { useState, useEffect } from 'react';
import ChatAssistant from './components/ChatAssistant';
import Timeline from './components/Timeline';
import Quiz from './components/Quiz';
import Glossary from './components/Glossary';

function App() {
  const [activeTab, setActiveTab] = useState('chat');
  const [lang, setLang] = useState('en');
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleLang = () => {
    setLang(lang === 'en' ? 'hi' : 'en');
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <header className="main-header">
        <div className="header-logo">
          <svg width="24" height="16" viewBox="0 0 900 600" style={{ marginRight: '10px', borderRadius: '2px' }}>
            <rect width="900" height="600" fill="#f15b25" />
            <rect width="900" height="400" y="200" fill="#fff" />
            <rect width="900" height="200" y="400" fill="#006400" />
            <circle cx="450" cy="300" r="80" fill="none" stroke="#000080" strokeWidth="10" />
            <circle cx="450" cy="300" r="10" fill="#000080" />
            {[...Array(24)].map((_, i) => (
              <line 
                key={i}
                x1="450" y1="300" 
                x2={450 + 80 * Math.cos((i * 15 * Math.PI) / 180)} 
                y2={300 + 80 * Math.sin((i * 15 * Math.PI) / 180)} 
                stroke="#000080" strokeWidth="2" 
              />
            ))}
          </svg>
          <span className="logo-text">{lang === 'en' ? 'ElectionGuideAI' : 'चुनावगाइडएआई'}</span>
        </div>
        <div className="header-controls">
          <button className="lang-toggle" onClick={toggleLang}>
            {lang === 'en' ? 'हिन्दी' : 'English'}
          </button>
          <button className="theme-toggle" onClick={toggleTheme} title={lang === 'en' ? 'Toggle Theme' : 'थीम बदलें'}>
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </header>

      <div className="content-wrapper">
        <div className="app-header">
          <h1>{lang === 'en' ? 'Election Guide AI' : 'इलेक्शन गाइड एआई'}</h1>
        </div>

        <div className="nav-tabs">
          <button className={`nav-tab ${activeTab === 'chat' ? 'active' : ''}`} onClick={() => setActiveTab('chat')}>
            {lang === 'en' ? 'Assistant' : 'सहायक'}
          </button>
          <button className={`nav-tab ${activeTab === 'timeline' ? 'active' : ''}`} onClick={() => setActiveTab('timeline')}>
            {lang === 'en' ? 'Timeline' : 'समयरेखा'}
          </button>
          <button className={`nav-tab ${activeTab === 'quiz' ? 'active' : ''}`} onClick={() => setActiveTab('quiz')}>
            {lang === 'en' ? 'Quiz' : 'प्रश्नोत्तरी'}
          </button>
          <button className={`nav-tab ${activeTab === 'glossary' ? 'active' : ''}`} onClick={() => setActiveTab('glossary')}>
            {lang === 'en' ? 'Glossary' : 'शब्दकोष'}
          </button>
        </div>

        <main>
          {activeTab === 'chat' && <ChatAssistant lang={lang} />}
          {activeTab === 'timeline' && <Timeline lang={lang} />}
          {activeTab === 'quiz' && <Quiz lang={lang} />}
          {activeTab === 'glossary' && <Glossary lang={lang} />}
        </main>
      </div>

      <footer className="main-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>{lang === 'en' ? 'About' : 'के बारे में'}</h4>
            <p>
              {lang === 'en' 
                ? 'Election Guide AI is an educational platform designed to help Indian citizens understand the voting process, registration, and democratic rights.'
                : 'इलेक्शन गाइड एआई एक शैक्षिक मंच है जिसे भारतीय नागरिकों को मतदान प्रक्रिया, पंजीकरण और लोकतांत्रिक अधिकारों को समझने में मदद करने के लिए डिज़ाइन किया गया है।'}
            </p>
          </div>
          <div className="footer-section">
            <h4>{lang === 'en' ? 'Resources' : 'संसाधन'}</h4>
            <ul>
              <li><a href="https://eci.gov.in" target="_blank" rel="noreferrer">Election Commission of India</a></li>
              <li><a href="https://voters.eci.gov.in" target="_blank" rel="noreferrer">Voter Service Portal</a></li>
              <li><a href="https://voterportal.eci.gov.in" target="_blank" rel="noreferrer">NVSP Portal</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>{lang === 'en' ? 'Contact' : 'संपर्क'}</h4>
            <p>Email: support@electionguideai.in</p>
            <p>{lang === 'en' ? 'Feedback is always welcome.' : 'प्रतिक्रिया का हमेशा स्वागत है।'}</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} {lang === 'en' ? 'Election Guide AI. Made with ❤️ for Indian Democracy.' : 'इलेक्शन गाइड एआई। भारतीय लोकतंत्र के लिए ❤️ के साथ बनाया गया।'}
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
