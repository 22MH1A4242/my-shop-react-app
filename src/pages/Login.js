import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ onLogin }) {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      onLogin(name);
      navigate("/");
    } else {
      alert("Please enter your name.");
    }
  };

  return (
    <div>
      <header>
        <img src="/img/logo.png" alt="Logo" style={{ height: "50px" }} />
        <h1>Login</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <label>
          Your Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
