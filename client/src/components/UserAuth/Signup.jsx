import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../services/authAPI"; // Importing the API function
import "../styles/Signup.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(name, email, password) // Calling the API function from authAPI.js
      .then((response) => {
        if (response.data.token) {
          // Store the JWT token in localStorage
          localStorage.setItem("token", response.data.token);
          console.log("Registration successful. Token stored:", response.data.token);
          
          // Navigate to user dashboard or another protected route
          navigate("/user");
        } else {
          alert("Registration failed. Please try again.");
        }
      })
      .catch((err) => {
        console.error("Error during registration:", err);
        alert("An error occurred. Please try again.");
      });
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2 className="signup-title">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              autoComplete="off"
              name="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Register
          </button>
        </form>
        <p>Already have an account?</p>
        <Link to="/" className="btn btn-secondary w-100">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Signup;
