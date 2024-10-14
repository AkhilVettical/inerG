import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../services/authAPI"; // Importing the API function
import "../styles/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(email, password) // Calling the API function from authAPI.js
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          navigate("/user");
        } else {
          navigate("/register");
          alert("You are not registered to this service");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="login-title">Sign in</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              id="email"
              autoComplete="off"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="submit-button">
            Login
          </button>
        </form>
        <p>Don't have an account?</p>
        <Link to="/register" className="signup-link">
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Login;
