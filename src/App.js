import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Products from "./pages/Products"; // <<=== Uppercase "P"
import Cart from "./pages/Cart";         // <<=== Uppercase "C"

function App() {
  const [cart, setCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  const addToCart = (product) => {
    // Check if already in cart
    if (cart.find((item) => item.id === product.id)) {
      alert("This product is already in your cart.");
      return;
    }
    setCart([...cart, product]);
  };

  const handleLogin = (name) => {
    setUserName(name);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setUserName("");
    setIsLoggedIn(false);
    setCart([]); // Clear cart on logout
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home isLoggedIn={isLoggedIn} userName={userName} />}
        />
        <Route
          path="/login"
          element={<Login onLogin={handleLogin} />}
        />
        <Route
          path="/logout"
          element={<Logout onLogout={handleLogout} />}
        />
        <Route
          path="/products"
          element={
            isLoggedIn ? (
              <Products addToCart={addToCart} cartItems={cart} />
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />
        <Route
          path="/cart"
          element={
            isLoggedIn ? (
              <Cart cartItems={cart} />
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
