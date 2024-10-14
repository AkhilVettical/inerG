import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import { IoSaveSharp } from "react-icons/io5";
import { updateTask } from "../../../services/taskAPI"; // Importing the API function
import TaskForm from "../TaskForm";
import "./styles/Edit.css";

const Edit = ({ editedRow, setTasks, isEditing, setIsEditing }) => {
  const [showForm, setShowForm] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
    setShowForm(true);
  };

  const handleSaveClick = async () => {
    try {
      const response = await updateTask(editedRow); // Calling the API function from taskAPI.js
      if (response.data.success) {
        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task._id === editedRow._id ? editedRow : task
          )
        );
        setIsEditing(false);
        setShowForm(false);
        alert("Task updated successfully");
      }
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <>
      {showForm ? (
        <TaskForm
          formData={editedRow}
          setAddSection={setShowForm}
          setTasks={setTasks}
        />
      ) : (
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
      )}
    </>
  );
};

export default Edit;
