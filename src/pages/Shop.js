import React from 'react';
import CategoryCircles from '../components/shop/CategoryCircles';
import FilterBar from '../components/shop/FilterBar';
import ProductCard from '../components/shop/ProductCard';
import '../styles/shop.css';

const Shop = () => {
  // 2. Exact data jo image_bccfb8.jpg mein nazar aa raha hai
  const products = [
    {
      id: 1,
      meta: "Embroidered | Cambric",
      name: "2-Piece Co-ords Set",
      price: "15,000",
      image: "/assets/p1.jpg" // Purple suit
    },
    {
      id: 2,
      meta: "Embroidered | Cambric",
      name: "Cambric Co-ords Set",
      price: "15,000",
      image: "/assets/p2.jpg" // Blue suit
    },
    {
      id: 3,
      meta: "Embroidered | Cambric",
      name: "Cambric 3-Piece Co-ord",
      price: "25,000",
      image: "/assets/p3.jpg" // Orange suit
    },
    {
      id: 4,
      meta: "Embroidered | Cambric",
      name: "Cambric 3-Piece Co-ord",
      price: "25,000",
      image: "/assets/p4.jpg" // Green suit
    },
    {
      id: 5,
      meta: "Embroidered | Cambric",
      name: "Cambric 3-Piece Co-ord",
      price: "25,000",
      image: "/assets/p4.jpg" // Green suit
    },
    {
      id: 5,
      meta: "Embroidered | Cambric",
      name: "Cambric 3-Piece Co-ord",
      price: "25,000",
      image: "/assets/p4.jpg" // Green suit
    },
    {
      id: 6,
      meta: "Embroidered | Cambric",
      name: "Cambric Co-ords Set",
      price: "15,000",
      image: "/assets/p2.jpg" // Blue suit
    },
    {
      id: 7,
      meta: "Embroidered | Cambric",
      name: "Cambric Co-ords Set",
      price: "15,000",
      image: "/assets/p2.jpg" // Blue suit
    },
    {
      id: 8,
      meta: "Embroidered | Cambric",
      name: "Cambric Co-ords Set",
      price: "15,000",
      image: "/assets/p2.jpg" // Blue suit
    },
    {
      id: 9,
      meta: "Embroidered | Cambric",
      name: "Cambric Co-ords Set",
      price: "15,000",
      image: "/assets/p2.jpg" // Blue suit
    },
    {
      id: 10,
      meta: "Embroidered | Cambric",
      name: "Cambric Co-ords Set",
      price: "15,000",
      image: "/assets/p2.jpg" // Blue suit
    }
  ];

  return (
    <div className="shop-page">
      <div className="container">
        <CategoryCircles />
        <FilterBar />
        
        {/* 3. "Product Grid Content" ki jagah ye mapping add karein */}
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;