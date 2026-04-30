import React, { useState } from 'react';
import { electionData } from '../data/electionData';
import './Quiz.css';

const Quiz = ({ lang }) => {
  const [mode, setMode] = useState('menu'); // 'menu', 'quiz'
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleAnswerClick = (index) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(index);
    const correct = index === questions[currentQuestion].correctAnswer;
    setIsCorrect(correct);

    if (correct) setScore(score + 1);

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedAnswer(null);
        setIsCorrect(null);
      } else {
        setShowScore(true);
      }
    }, 3500);
  };

  const startQuiz = () => {
    // Shuffle and pick 5 random questions
    const shuffled = [...electionData.quiz].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 5);
    
    setQuestions(selected);
    resetQuizState();
    setMode('quiz');
  };

  const resetQuizState = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setIsCorrect(null);
  };

  const returnToMenu = () => {
    setMode('menu');
    setQuestions([]);
  };

  if (mode === 'menu') {
    return (
      <div className="glass-panel animate-fade-in quiz-container text-center">
        <h2>{lang === 'en' ? 'Test Your Knowledge' : 'अपने ज्ञान का परीक्षण करें'}</h2>
        <p style={{ margin: '20px 0', color: 'var(--text-light)' }}>
          {lang === 'en' 
            ? 'Take a quick quiz to see how much you know about the Indian election process.' 
            : 'भारतीय चुनाव प्रक्रिया के बारे में आप कितना जानते हैं, यह देखने के लिए एक त्वरित प्रश्नोत्तरी लें।'}
        </p>
        <button className="btn btn-primary" onClick={startQuiz} style={{ padding: '15px 40px', fontSize: '1.1rem' }}>
          {lang === 'en' ? 'Start Quiz' : 'प्रश्नोत्तरी शुरू करें'}
        </button>
      </div>
    );
  }

  return (
    <div className="glass-panel animate-fade-in quiz-container">
      {showScore ? (
        <div className="score-section animate-fade-in">
          <h2>{lang === 'en' ? 'Quiz Completed!' : 'प्रश्नोत्तरी पूरी हुई!'}</h2>
          <div className="score-circle">
            <span>{score}</span> / {questions.length}
          </div>
          <p className="score-msg">
            {score === questions.length 
              ? (lang === 'en' ? 'Excellent! You are an Election Expert. 🏆' : 'बहुत बढ़िया! आप चुनाव विशेषज्ञ हैं। 🏆')
              : (lang === 'en' ? 'Good effort! Keep learning. 📚' : 'अच्छा प्रयास! सीखते रहें। 📚')
            }
          </p>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '20px' }}>
            <button className="btn btn-primary" onClick={startQuiz}>
              {lang === 'en' ? 'Restart Quiz' : 'प्रश्नोत्तरी फिर से शुरू करें'}
            </button>
            <button className="btn btn-outline" onClick={returnToMenu}>
              {lang === 'en' ? 'Main Menu' : 'मुख्य मेनू'}
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>{lang === 'en' ? 'Question' : 'प्रश्न'} {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">{questions[currentQuestion]?.question[lang]}</div>
          </div>
          
          <div className="answer-section">
            {questions[currentQuestion]?.options[lang].map((option, index) => {
              let buttonClass = 'quiz-btn';
              if (selectedAnswer !== null) {
                if (index === questions[currentQuestion].correctAnswer) {
                  buttonClass += ' correct';
                } else if (index === selectedAnswer && !isCorrect) {
                  buttonClass += ' incorrect';
                }
              }

              return (
                <button 
                  key={index} 
                  className={buttonClass}
                  onClick={() => handleAnswerClick(index)}
                  disabled={selectedAnswer !== null}
                >
                  {option}
                </button>
              );
            })}
          </div>

          {selectedAnswer !== null && (
            <div className="explanation-box animate-fade-in">
              <strong>{lang === 'en' ? 'Explanation:' : 'स्पष्टीकरण:'}</strong>
              <p>{questions[currentQuestion].explanation[lang]}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Quiz;
