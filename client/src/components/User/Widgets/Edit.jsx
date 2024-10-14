import React from "react";
import { MdEdit } from "react-icons/md";
import { IoSaveSharp } from "react-icons/io5";
import { updateUser } from "../../../services/userAPI"; // Import updateUser API

const Edit = ({ editedRow, setUsers, isEditing, setIsEditing }) => {
  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    try {
      const response = await updateUser(editedRow);
      if (response.success) {
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user._id === editedRow._id ? editedRow : user
          )
        );
        setIsEditing(false);
        alert("User updated successfully");
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <>
      {isEditing ? (
        <button onClick={handleSaveClick}>
          <IoSaveSharp />
        </button>
      ) : (
        <button className="edit" onClick={handleEditClick}>
          <MdEdit />
        </button>
      )}
    </>
  );
};

export default Edit;
