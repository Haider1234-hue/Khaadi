const router = require('express').Router();
const Product = require('../models/Product');
const auth = require('../middleware/auth');

// ================================
// GET ALL PRODUCTS — Sab products lo
// ================================
router.get('/', async (req, res) => {
  try {
    const filter = {};
    
    // Category filter — /api/products?category=women
    if (req.query.category) {
      filter.category = req.query.category;
    }
    
    // Featured filter — /api/products?featured=true
    if (req.query.featured) {
      filter.featured = true;
    }

    const products = await Product.find(filter);
    res.json(products);

  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// ================================
// GET SINGLE PRODUCT — Ek product lo
// ================================
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    
    if (!product) {
      return res.status(404).json({ message: 'Product nahi mila' });
    }
    
    res.json(product);

  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// ================================
// ADD PRODUCT — Naya product banao (Admin only)
// ================================
router.post('/', auth, async (req, res) => {
  try {
    // Sirf admin add kar sakta hai
    if (!req.user.isAdmin) {
      return res.status(403).json({ message: 'Sirf admin yeh kar sakta hai' });
    }

    const { name, description, price, category, image, sizes, stock, featured } = req.body;

    const product = await Product.create({
      name,
      description,
      price,
      category,
      image,
      sizes,
      stock,
      featured
    });

    res.status(201).json(product);

  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// ================================
// UPDATE PRODUCT — Product update karo (Admin only)
// ================================
router.put('/:id', auth, async (req, res) => {
  try {
    // Sirf admin update kar sakta hai
    if (!req.user.isAdmin) {
      return res.status(403).json({ message: 'Sirf admin yeh kar sakta hai' });
    }

    const product = await Product.findByIdAndUpdate(
      req.params.id, 
      req.body,
      { new: true } // updated product wapas bhejo
    );

    if (!product) {
      return res.status(404).json({ message: 'Product nahi mila' });
    }

    res.json(product);

  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// ================================
// DELETE PRODUCT — Product delete karo (Admin only)
// ================================
router.delete('/:id', auth, async (req, res) => {
  try {
    // Sirf admin delete kar sakta hai
    if (!req.user.isAdmin) {
      return res.status(403).json({ message: 'Sirf admin yeh kar sakta hai' });
    }

    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({ message: 'Product nahi mila' });
    }

    res.json({ message: 'Product delete ho gaya' });

  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;