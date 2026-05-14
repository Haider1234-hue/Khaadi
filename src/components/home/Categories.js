const Categories = () => {
  const data = ["Women", "Men", "Kids", "Sale"];

  return (
    <div className="categories">
      {data.map((item, index) => (
        <div key={index} className="category-card">
          {item}
        </div>
      ))}
    </div>
  );
};

export default Categories;