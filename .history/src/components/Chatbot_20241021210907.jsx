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

  // Define styles as a style object
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f0f0f0',
    },
    chatContainer: {
      width: '400px',
      maxWidth: '100%',
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
    },
    messages: {
      flexGrow: 1,
      overflowY: 'auto',
      maxHeight: '300px',
    },
    message: (role) => ({
      alignSelf: role === 'user' ? 'flex-end' : 'flex-start',
      backgroundColor: role === 'user' ? '#d1e7dd' : '#f8d7da',
      padding: '10px',
      margin: '5px 0',
      borderRadius: '5px',
    }),
    input: {
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      marginTop: '10px',
    },
    button: {
      marginTop: '10px',
      padding: '10px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.chatContainer}>
        <div style={styles.messages}>
          {messages.map((msg, index) => (
            <div key={index} style={styles.message(msg.role)}>
              {msg.content}
            </div>
          ))}
        </div>
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Ask me anything..."
          style={styles.input}
        />
        <button onClick={sendMessage} style={styles.button}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
