import React from "react";
import { FaTrash } from "react-icons/fa";
import { deleteTask } from "../../../services/taskAPI"; // Importing the API function
import "./styles/Delete.css";

const Delete = ({ id, setTasks }) => {
  const handleDelete = () => {
    deleteTask(id) // Calling the API function from taskAPI.js
      .then(() => {
        setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <button className="delete" onClick={handleDelete}>
      <FaTrash />
    </button>
  );
};

export default Delete;
