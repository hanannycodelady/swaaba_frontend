
import React, { useState } from "react";
import axios from "axios";
import '../styles/Login.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:5000/api/v1/user/login", {
        email,
        password,
      });

      const { access_token, user_id } = response.data;
      localStorage.setItem("token", response.data.token);
      
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("user_id", user_id);
      setError("");
      setSuccessMessage("Login successful!");

    
      setTimeout(() => {
        setSuccessMessage("");
      }, 2000); 

    } catch (error) {
      setError("Invalid email or password");
      setSuccessMessage("");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <form onSubmit={handleSubmit}>
          <div className="text_area">
            <input
              type="email"
              placeholder="Email"
              className="text_input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="text_area">
            <input
              type="password"
              placeholder="Password"
              className="text_input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn">
            Login
          </button>
          {error && <div className="swaaba">{error}</div>}
          {successMessage && <div className="swaaba success">{successMessage}</div>}
        </form>
      </div>
    </div>
  );
};

export default Login;
