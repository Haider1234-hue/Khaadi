require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('MongoDB connected!');
    
    const hashed = await bcrypt.hash('Haider123', 10);
    
    const admin = await User.create({
      name: 'Haider',
      email: 'Haider@gmail.com',
      password: hashed,
      isAdmin: true
    });

    console.log('Admin ban gaya!', admin.email);
    process.exit();
  })
  .catch(err => {
    console.log('Error:', err);
    process.exit();
  });