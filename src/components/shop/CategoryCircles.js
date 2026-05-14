import React from 'react';
import '../../styles/shop.css';

const categories = [
  { id: 1, name: "Basics: Bloomscape", img: "path_to_img" },
  { id: 2, name: "Studio: Styled & Spotted", img: "path_to_img" },
  { id: 3, name: "Studio: Peek and Slay", img: "path_to_img" },
  { id: 4, name: "Studio: Serving Looks", img: "path_to_img" },
  { id: 5, name: "Basics: Sunny Tides", img: "path_to_img" },
  { id: 6, name: "Best Sellers", img: "path_to_img" },
];

const CategoryCircles = () => {
  return (
    <div className="category-circles-container">
      {categories.map(cat => (
        <div key={cat.id} className="circle-item">
          <div className="img-wrapper">
            <img src={cat.img} alt={cat.name} />
          </div>
          <p>{cat.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryCircles;