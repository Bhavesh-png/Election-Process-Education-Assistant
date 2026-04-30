import React, { useState, useEffect, useRef } from 'react';
import { electionData } from '../data/electionData';
import './ChatAssistant.css';

const ChatAssistant = ({ lang }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: lang === 'en' 
        ? "Hello! I am Election Guide AI. I can help you understand the election process. Ask me anything or use the quick buttons below!"
        : "नमस्ते! मैं इलेक्शन गाइड एआई हूं। मैं आपको चुनाव प्रक्रिया समझने में मदद कर सकता हूं। मुझसे कुछ भी पूछें या नीचे दिए गए त्वरित बटन का उपयोग करें!"
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatMessagesRef = useRef(null);

  const quickQuestions = lang === 'en' 
    ? ["How to vote?", "What is EVM?", "Who can vote?", "What is NOTA?"]
    : ["मतदान कैसे करें?", "EVM क्या है?", "कौन वोट दे सकता है?", "नोटा क्या है?"];

  const scrollToBottom = () => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    // Reset chat when language changes
    setMessages([{
      id: 1,
      sender: 'bot',
      text: lang === 'en' 
        ? "Hello! I am Election Guide AI. I can help you understand the election process. Ask me anything or use the quick buttons below!"
        : "नमस्ते! मैं इलेक्शन गाइड एआई हूं। मैं आपको चुनाव प्रक्रिया समझने में मदद कर सकता हूं। मुझसे कुछ भी पूछें या नीचे दिए गए त्वरित बटन का उपयोग करें!"
    }]);
  }, [lang]);

  const processResponseStatic = (userInput) => {
    const query = userInput.toLowerCase();
    let responseText = lang === 'en'
      ? "I'm not sure about that. Try asking about 'how to vote', 'EVM', or 'eligibility'."
      : "मुझे इसके बारे में निश्चित रूप से नहीं पता। 'मतदान कैसे करें', 'EVM', या 'योग्यता' के बारे में पूछने का प्रयास करें।";

    for (const intent of electionData.intents) {
      if (intent.keywords.some(keyword => query.includes(keyword))) {
        responseText = intent.response[lang];
        break;
      }
    }
    return responseText;
  };

  const handleSend = (text) => {
    if (!text.trim()) return;

    const newMsgId = messages.length + 1;
    setMessages(prev => [...prev, { id: newMsgId, sender: 'user', text }]);
    setInput('');
    setIsTyping(true);

    // Static response simulation
    setTimeout(() => {
      const botResponse = processResponseStatic(text);
      setMessages(prev => [...prev, { id: newMsgId + 1, sender: 'bot', text: botResponse }]);
      setIsTyping(false);
    }, 800);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSend(input);
  };

  return (
    <div className="glass-panel chat-container animate-fade-in">
      <div className="chat-messages" ref={chatMessagesRef}>
        {messages.map(msg => (
          <div key={msg.id} className={`chat-bubble-wrapper ${msg.sender}`}>
            <div className={`chat-bubble ${msg.sender} animate-fade-in`}>
              {msg.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="chat-bubble-wrapper bot">
            <div className="chat-bubble bot typing-indicator">
              <span></span><span></span><span></span>
            </div>
          </div>
        )}
      </div>

      <div className="quick-questions">
        {quickQuestions.map((q, idx) => (
          <button 
            key={idx} 
            className="quick-btn"
            onClick={() => handleSend(q)}
            disabled={isTyping}
          >
            {q}
          </button>
        ))}
      </div>

      <form className="chat-input-area" onSubmit={handleSubmit}>
        <input 
          type="text" 
          className="chat-input"
          placeholder={lang === 'en' ? "Ask a question..." : "एक प्रश्न पूछें..."}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={isTyping}
        />
        <button type="submit" className="btn btn-primary send-btn" disabled={!input.trim() || isTyping}>
          {lang === 'en' ? "Send" : "भेजें"}
        </button>
      </form>
    </div>
  );
};

export default ChatAssistant;
