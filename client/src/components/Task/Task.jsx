import React, { useEffect, useState } from "react";
import { getTasks } from "../../services/taskAPI"; // Importing the API function
import DynamicTable from "./DynamicTable";
import TaskForm from "./TaskForm";
import Sidebar from "../SideBar/Sidebar";
import "../styles/Home.css";
import { IoMdAddCircle } from "react-icons/io";
import Loader from "../loader/Loader"; // Import the Loader component

function Task() {
  const [tasks, setTasks] = useState([]);
  const [addSection, setAddSection] = useState(false);
  const [loading, setLoading] = useState(true); // Loader state
  // Fetch tasks from the API
  useEffect(() => {
    const fetchTasks = async () => {
      const { data, loading } = await getTasks(); // Call the getUsers API
      setTasks(data); // Set the fetched users
      setLoading(loading.isLoading); // Update loading state
    };

    fetchTasks();
  }, []);

  const tableHeaders =
    tasks.length > 0
      ? Object.keys(tasks[0]).slice(1, -3) // Remove the first and last three columns
      : [];

  return (
    <div className="flex-row">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="table-container">
        {loading ? (
          <Loader /> // Show loader while loading data inside the table
        ) : (
          <>
            {tasks.length > 0 && (
              <DynamicTable
                data={tasks}
                setTasks={setTasks}
                headers={tableHeaders}
              />
            )}
          </>
        )}
      </div>
      <button className="btn btn-add" onClick={() => setAddSection(true)}>
          Add
        </button>
      {addSection && (
        <TaskForm setAddSection={setAddSection} setTasks={setTasks} />
      )}
    </div>
  );
}

export default Task;
