const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// database
let setMessage = '';

app.get('/getMessage', (req, res) => {
  res.json({ message: setMessage || 'hello from server!' });
});

app.post('/setMessage', (req, res) => {
  setMessage = req.body?.message;
  res.json({ message: `message: [${setMessage}] set!` });
});

app.put('/clearMessage', (req, res) => {
  setMessage = '';
  res.json({ message: 'message cleared!' });
});

const PORT = 3751;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});