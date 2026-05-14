const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String 
  },
  price: { 
    type: Number, 
    required: true 
  },
  category: { 
    type: String, 
    required: true,
    enum: ['women', 'men', 'kids', 'home'] // sirf yeh categories allowed
  },
  image: { 
    type: String   // image ka URL store hoga
  },
  sizes: [String], // jaise ['XS', 'S', 'M', 'L', 'XL']
  stock: { 
    type: Number, 
    default: 0 
  },
  featured: { 
    type: Boolean, 
    default: false  // home page pe dikhana ho toh true
  }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);