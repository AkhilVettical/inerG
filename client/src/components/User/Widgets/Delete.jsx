import React from "react";
import { FaTrash } from "react-icons/fa";
import { deleteUser } from "../../../services/userAPI"; // Import deleteUser API

const Delete = ({ id, setUsers }) => {
  const handleDelete = async () => {
    try {
      const response = await deleteUser(id);
      if (response.success) {
        setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
        alert("User deleted successfully");
      }
    } catch (error) {
      console.error("Error deleting user", error);
    }
  };

  return (
    <button className="delete" onClick={handleDelete}>
      <FaTrash />
    </button>
  );
};

export default Delete;
