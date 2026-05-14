import React from 'react';
import { Heart, Plus } from 'lucide-react';
import '../../styles/shop.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.title} className="product-main-img" />
        
        {/* Wishlist Heart Icon (Top Right) */}
        <button className="wishlist-overlay-btn">
          <Heart size={18} strokeWidth={1} />
        </button>

        {/* Add to Bag Icon (Bottom Left) */}
        <div className="add-bag-overlay">
          <div className="add-bag-circle">
            <Plus size={16} />
          </div>
          <span className="add-text">ADD</span>
        </div>
      </div>

      <div className="product-details">
        <p className="product-meta">{product.meta}</p> {/* e.g. Embroidered | Cambric */}
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price-tag">PKR {product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;