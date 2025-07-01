import React from "react";
import { Link } from "react-router-dom";

function Home({ isLoggedIn, userName }) {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="/img/logo.png"
          alt="Logo"
          style={{ height: "60px", marginBottom: "20px" }}
        />
        <h1>Welcome to MyShop</h1>
        {isLoggedIn ? (
          <p>Hello, {userName}!</p>
        ) : (
          <p>Please login to start shopping.</p>
        )}
        <nav>
          <div>
            <Link className="App-link" to="/login">
              Login
            </Link>
          </div>
          {isLoggedIn && (
            <>
              <div>
                <Link className="App-link" to="/products">
                  View Products
                </Link>
              </div>
              <div>
                <Link className="App-link" to="/cart">
                  View Cart
                </Link>
              </div>
              <div>
                <Link className="App-link" to="/logout">
                  Logout
                </Link>
              </div>
            </>
          )}
        </nav>
      </header>

      {isLoggedIn && (
        <main style={{ marginTop: "40px" }}>
          <h2>Features</h2>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <img src="/img/features/f1.png" alt="Feature 1" style={{ width: "150px" }} />
            <img src="/img/features/f2.png" alt="Feature 2" style={{ width: "150px" }} />
            <img src="/img/features/f3.png" alt="Feature 3" style={{ width: "150px" }} />
            <img src="/img/features/f4.png" alt="Feature 4" style={{ width: "150px" }} />
            <img src="/img/features/f5.png" alt="Feature 5" style={{ width: "150px" }} />
            <img src="/img/features/f6.png" alt="Feature 6" style={{ width: "150px" }} />
          </div>

          <h2 style={{ marginTop: "40px" }}>Blog Preview</h2>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <img src="/img/blog/b1.jpg" alt="Blog 1" style={{ width: "200px" }} />
            <img src="/img/blog/b2.jpg" alt="Blog 2" style={{ width: "200px" }} />
            <img src="/img/blog/b3.jpg" alt="Blog 3" style={{ width: "200px" }} />
            <img src="/img/blog/b4.jpg" alt="Blog 4" style={{ width: "200px" }} />
            <img src="/img/blog/b5.jpg" alt="Blog 5" style={{ width: "200px" }} />
            <img src="/img/blog/b6.jpg" alt="Blog 6" style={{ width: "200px" }} />
          </div>

          <h2 style={{ marginTop: "40px" }}>Meet Our People</h2>
          <div style={{ display: "flex", gap: "10px" }}>
            <img src="/img/people/1.png" alt="Person 1" style={{ width: "100px" }} />
            <img src="/img/people/2.png" alt="Person 2" style={{ width: "100px" }} />
            <img src="/img/people/3.png" alt="Person 3" style={{ width: "100px" }} />
          </div>
        </main>
      )}
    </div>
  );
}

export default Home;
