const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const app = express();
app.use(cors());
app.use(bodyParser.json());


let db; 

const url = process.env.DATABASE_URL;
console.log('db url:', url);


console.log('Connecting to MongoDB..');


MongoClient.connect(url, (err, client) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }
  console.log('Connected to MongoDB');
  db = client.db('messages'); 

  db.createCollection("greetings", (err, collection) => {
    if (err) {
      console.error('Error creating collection:', err);
      client.close();
      return;
    }
    console.log('Collection greetings created');
    collection.insertOne({ message: 'hello from server!' }, (err, result) => {
      if (err) {
        console.error('Error inserting document:', err);
        client.close();
        return;
      }
      console.log('initial message inserted');
      client.close();
    });
  });

});





app.get('/getMessage', async (req, res) => {
  try {
    const result = await db.collection('greetings').findOne({});
    res.json(result);
  } catch (err) {
    console.error('Error retrieving message:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/setMessage', async (req, res) => {
  const { message } = req.body;
  try {
    await db.collection('greetings').updateOne({}, { $set: { message } }, { upsert: true });
  
    res.json({ message: `Message set to: [${message}]` });
  } catch (err) {
    console.error('Error setting message:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.put('/clearMessage', async (req, res) => {
  try {
    await db.collection('greetings').deleteOne({});
    res.json({ message: 'Message cleared!' });
  } catch (err) {
    console.error('Error clearing message:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const PORT = 3751;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
