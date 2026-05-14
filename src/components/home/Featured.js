import { products } from "../../data/products";

const Featured = () => {
  return (
    <div className="featured">

      <h2>New Arrivals</h2>

      <div className="product-grid">

        {products.map((item) => (

          <div className="product-card" key={item.id}>

            <img src={item.image} alt="" />

            <h4>{item.name}</h4>

            <p>Rs {item.price}</p>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Featured;