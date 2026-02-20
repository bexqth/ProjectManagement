import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState("Loading...");

  useEffect(() => {
    // Voláme tvoj backend
    axios.get('http://localhost:3001/')
      .then(res => {
        setData(res.data.message);
      })
      .catch(err => {
        console.error("Error:", err);
        setData("Backend is not available");
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>project management</h1>
        <div style={{ 
          padding: '20px', 
          border: '2px solid #61dafb', 
          borderRadius: '10px',
          backgroundColor: '#282c34' 
        }}>
          <p>server answer:</p>
          <h2 style={{ color: '#61dafb' }}>{data}</h2>
        </div>
      </header>
    </div>
  );
}

export default App;