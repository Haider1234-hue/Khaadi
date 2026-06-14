const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/khaadi';

app.use(cors());
app.use(express.json());

const requireDb = (req, res, next) => {
  if (mongoose.connection.readyState === 1) {
    return next();
  }

  return res.status(503).json({
    message: 'Database is not connected. Start MongoDB or check MONGO_URI.'
  });
};

// Routes
app.use('/api/auth', requireDb, require('./routes/auth'));
app.use('/api/products', requireDb, require('./routes/products'));

app.get('/', (req, res) => {
  res.json({
    message: 'Backend started!',
    database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
  });
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

mongoose.connect(MONGO_URI, {
  serverSelectionTimeoutMS: 10000,
  family: 4
})
  .then(() => {
    console.log('MongoDB connected!');
  })
  .catch(err => {
    console.log('MongoDB Error:', err.message);
    console.log('Backend is still running. Database routes will return 503 until MongoDB is available.');
  });
