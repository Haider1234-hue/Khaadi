const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// ================================
// REGISTER — Naya user banao
// ================================
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // 1. Email pehle se registered hai?
    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(400).json({ message: 'Email pehle se registered hai' });
    }

    // 2. Password encrypt karo
    const hashed = await bcrypt.hash(password, 10);

    // 3. User database mein save karo
    const user = await User.create({ 
      name, 
      email, 
      password: hashed 
    });

    // 4. Token banao
    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    // 5. Token aur user info wapas bhejo
    res.status(201).json({ 
      token, 
      user: { 
        id: user._id, 
        name: user.name, 
        email: user.email, 
        isAdmin: user.isAdmin 
      } 
    });

  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// ================================
// LOGIN — Existing user login karo
// ================================
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. User dhundo
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Email ya password galat hai' });
    }

    // 2. Password check karo
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ message: 'Email ya password galat hai' });
    }

    // 3. Token banao
    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    // 4. Token aur user info wapas bhejo
    res.json({ 
      token, 
      user: { 
        id: user._id, 
        name: user.name, 
        email: user.email, 
        isAdmin: user.isAdmin 
      } 
    });

  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;