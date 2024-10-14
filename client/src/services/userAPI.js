// userAPI.js
import axios from "axios";

const API_URL = "http://localhost:3001/user";

// Fetch all users
export const getUsers = async () => {
    const loading = { isLoading: true }; 
    try {
      const response = await axios.get(`${API_URL}/getUsers`);
      return { data: response.data, loading: { ...loading, isLoading: false } }; 
    } catch (error) {
      console.error("Error fetching users:", error);
      return { data: [], loading: { ...loading, isLoading: false, error: error } }; 
    }
  };

// Add a new user
export const createUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/create`, userData);
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

// Update an existing user
export const updateUser = async (userData) => {
  try {
    const response = await axios.put(`${API_URL}/update`, userData);
    return response.data;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};

// Delete a user
export const deleteUser = async (userId) => {
  try {
    const response = await axios.delete(`${API_URL}/delete/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
};
