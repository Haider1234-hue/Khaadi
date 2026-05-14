const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/products', require('./routes/products'));

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'Khaadi Backend chal raha hai!' });
});

// MongoDB connect karke server shuru karo
mongoose.connect(process.env.MONGO_URI, {
  serverSelectionTimeoutMS: 10000,
  family: 4
})  .then(() => {
    console.log('MongoDB connected!');
    app.listen(process.env.PORT, () => {
      console.log(`Server port ${process.env.PORT} pe chal raha hai`);
    });
  })
  .catch(err => console.log('MongoDB Error:', err));