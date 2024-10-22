import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  // Information about you
  const portfolioInfo = {
    name: "Juan Cuzcano",
    experience: "Senior at Kean University",
    education: "Purusing an Bachelor's Degree of Science in Information Technology.",
    skills: ["HTML", "CSS", "Javascript", "Cybersecurity"],
  };

  const sendMessage = async () => {
    if (input.trim() === '') return;

    const userMessage = { role: 'user', content: input };
    setMessages([...messages, userMessage]);

    let botResponse = '';

    // Check for specific keywords
    if (input.toLowerCase().includes('name')) {
      botResponse = `My name is ${portfolioInfo.name}.`;
    } else if (input.toLowerCase().includes('experience')) {
      botResponse = `You have ${portfolioInfo.experience}.`;
    } else if (input.toLowerCase().includes('education')) {
      botResponse = `You have a ${portfolioInfo.education}.`;
    } else {
      // Fallback to API call for other questions
      try {
        const response = await axios.post('/api/chat', { prompt: input });
        botResponse = response.data.content;
      } catch (error) {
        console.error(error);
        botResponse = 'Error occurred while fetching a response.';
      }
    }

    const botMessage = { role: 'bot', content: botResponse };
    setMessages((prevMessages) => [...prevMessages, botMessage]);
    
    setInput('');
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={msg.role === 'user' ? 'user-message' : 'bot-message'}>
            {msg.content}
          </div>
        ))}
      </div>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Ask me anything..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chatbot;
