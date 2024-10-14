// taskAPI.js
import axios from "axios";

const API_URL = "http://localhost:3001/task";


export const getTasks = async () => {
  const loading = { isLoading: true }; 
  try {
    const response = await axios.get(`${API_URL}/getTasks`);
    return { data: response.data, loading: { ...loading, isLoading: false } }; 
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return { data: [], loading: { ...loading, isLoading: false, error: error } }; 
  }
};

export const deleteTask = async (id) => {
  const loading = { isLoading: true }; 
  try {
    const response = await axios.delete(`${API_URL}/deleteTask/${id}`);
    return { data: response.data, loading: { ...loading, isLoading: false } }; 
  } catch (error) {
    console.error("Error deleting task:", error);
    return { data: null, loading: { ...loading, isLoading: false, error: error } }; 
  }
};

export const addTask = async (taskData) => {
  const loading = { isLoading: true }; 
  try {
    const response = await axios.post(`${API_URL}/addTask`, taskData);
    return { data: response.data, loading: { ...loading, isLoading: false } }; 
  } catch (error) {
    console.error("Error adding task:", error);
    return { data: null, loading: { ...loading, isLoading: false, error: error } }; 
  }
};


export const updateTask = async (taskData) => {
  const loading = { isLoading: true }; // Initialize loading state
  try {
    const response = await axios.put(`${API_URL}/updateTask`, taskData);
    return { data: response.data, loading: { ...loading, isLoading: false } }; 
  } catch (error) {
    console.error("Error updating task:", error);
    return { data: null, loading: { ...loading, isLoading: false, error: error } }; 
  }
};
