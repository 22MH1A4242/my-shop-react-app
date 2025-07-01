import React from "react";
import { Link } from "react-router-dom";
import productsData from "../data/Products";

export default function Products({ addToCart, cartItems }) {
  return (
    <div>
      <header>
        <img src="/img/logo.png" alt="Logo" style={{ height: "50px" }} />
        <h1>Our Products</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/cart">Cart ({cartItems.length})</Link>
        </nav>
      </header>
      <section>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {productsData.map((product) => (
            <li key={product.id} style={{ marginBottom: "20px" }}>
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "cover",
                  display: "block",
                  marginBottom: "10px",
                }}
              />
              <div>{product.name} - ${product.price}</div>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
