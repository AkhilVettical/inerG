import React, { useEffect, useState } from "react";
import { addTask, updateTask } from "../../services/taskAPI"; // Importing the API functions
import { MdClose } from "react-icons/md";
import "../styles/Form.css";

const TaskForm = ({ formData, setAddSection, setTasks }) => {
  const [localFormData, setLocalFormData] = useState({
    taskHeader: "",
    description: "",
    status: "not-completed",
  });

  useEffect(() => {
    if (formData) {
      setLocalFormData(formData);
    }
  }, [formData]);

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setLocalFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData && formData._id) {
        const response = await updateTask(localFormData); // Calling the API function from taskAPI.js
        if (response.data.success) {
          setTasks((prevTasks) =>
            prevTasks.map((task) =>
              task._id === localFormData._id ? localFormData : task
            )
          );
          alert("Task updated successfully");
        }
      } else {
        const response = await addTask(localFormData); // Calling the API function from taskAPI.js
        if (response.data.success) {
          setTasks((prevTasks) => [...prevTasks, response.data.data]);
          alert("Task added successfully");
        }
      }
      setAddSection(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="addContainer">
          <form onSubmit={handleSubmit}>
            <div className="close-btn" onClick={() => setAddSection(false)}>
              <MdClose />
            </div>
            <label htmlFor="taskHeader">Task Header: </label>
            <input
              type="text"
              className="form-control"
              id="taskHeader"
              name="taskHeader"
              value={localFormData.taskHeader}
              onChange={handleOnChange}
              required
            />
            <label htmlFor="description" className="form-label">
              Description:
            </label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              value={localFormData.description}
              onChange={handleOnChange}
              rows="4"
            />
            <label htmlFor="status" className="form-label">
              Status:
            </label>
            <select
              className="form-control"
              id="status"
              name="status"
              value={localFormData.status}
              onChange={handleOnChange}
            >
              <option value="not-completed">Not Completed</option>
              <option value="completed">Completed</option>
            </select>
            <button className="btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TaskForm;
