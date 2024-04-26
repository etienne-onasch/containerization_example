import React, { useState } from 'react';
import Button from '@mui/material/Button';

function App() {
  const [message, setMessage] = useState('');
  const fetchMessage = async () => {
    setMessage('...');
    try {
      const url = `http://USS-Enterprise.fritz.box:3751/getMessage`;
      const response = await fetch(url);
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error('Error fetching message:', error);
      setMessage('<FETCHING ERROR>');
    }
  };

  const clearMessage = () => {
    setMessage('');
  };

  return (
    <div style={{ backgroundColor: 'black', color: 'limegreen', padding: '20px', fontFamily: 'monospace', height:'100vh' }}>
      <h2>CONTAINERIZATION EXAMPLE FRONTEND</h2>
        <div>
          <hr />
          <p>MESSAGE: {message}</p>
          <hr />
        </div>

      <Button variant="outlined" sx={{ color: 'green', borderColor: 'green', margin: '10px' }} onClick={fetchMessage}>
        Fetch Message
      </Button>

      <Button variant="outlined" sx={{ color: 'red', borderColor: 'red' }} onClick={clearMessage}>
        Clear
      </Button>
    </div>
  );
}

export default App;
