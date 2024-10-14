// authAPI.js
import axios from "axios";

const API_URL = "http://localhost:3001/auth";

// Login API call
export const loginUser = (email, password) => {
  
  return axios.post(`${API_URL}/login`, { email, password });
};

// Signup API call
export const registerUser = (name, email, password) => {
  return axios.post(`${API_URL}/register`, { name, email, password });
};
