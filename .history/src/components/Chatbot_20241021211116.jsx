import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (input.trim() === '') return;

    const userMessage = { role: 'user', content: input };
    setMessages([...messages, userMessage]);

    try {
      const response = await axios.post('/api/chat', { prompt: input });
      const botMessage = { role: 'bot', content: response.data.content };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error(error);
      setMessages((prevMessages) => [...prevMessages, { role: 'bot', content: 'Error occurred' }]);
    }

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