const router = require('express').Router();
const Product = require('../models/Product');
const auth = require('../middleware/auth');

// ================================
// GET ALL PRODUCTS 
// ================================
router.get('/', async (req, res) => {
  try {
    const filter = {};
    
    if (req.query.category) {
      filter.category = req.query.category;
    }
    
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
// GET SINGLE PRODUCT 
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
// ADD PRODUCT 
// ================================
router.post('/', auth, async (req, res) => {
  try {
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
// UPDATE PRODUCT
// ================================
router.put('/:id', auth, async (req, res) => {
  try {
    if (!req.user.isAdmin) {
      return res.status(403).json({ message: 'only admin can access' });
    }

    const product = await Product.findByIdAndUpdate(
      req.params.id, 
      req.body,
      { new: true } 
    );

    if (!product) {
      return res.status(404).json({ message: 'Product Not found' });
    }

    res.json(product);

  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// ================================
// DELETE PRODUCT (Admin only)
// ================================
router.delete('/:id', auth, async (req, res) => {
  try {
    if (!req.user.isAdmin) {
      return res.status(403).json({ message: 'Only admin can delete' });
    }

    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({ message: 'No Product found' });
    }

    res.json({ message: 'Product deleted' });

  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;