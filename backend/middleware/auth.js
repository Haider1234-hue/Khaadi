const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  // Header se token lo
  const token = req.header('Authorization')?.replace('Bearer ', '');
  
  // Token hai hi nahi
  if (!token) {
    return res.status(401).json({ message: 'Login first' });
  }

  try {
    // Token verify karo
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // user info request mein save karo
    next(); // aage jao
  } catch {
    res.status(401).json({ message: 'Wrong Token ' });
  }
};