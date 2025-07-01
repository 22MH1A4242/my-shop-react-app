import React from "react";
import { Link } from "react-router-dom";

export default function Cart({ cartItems, removeFromCart }) {
  return (
    <div>
      <header>
        <img src="/img/logo.png" alt="Logo" style={{ height: "50px" }} />
        <h1>Your Cart</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
        </nav>
      </header>
      <section>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price}
                <button onClick={() => removeFromCart(item)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
