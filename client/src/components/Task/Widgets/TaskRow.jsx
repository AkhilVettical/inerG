import React, { useState } from "react";
import Edit from "./Edit"; // Component to handle task edit logic
import Delete from "./Delete"; // Component to handle task deletion
import TaskForm from "../TaskForm"; // Import the TaskForm component

const TaskRow = ({ row, setTasks }) => {
  const [isEditing, setIsEditing] = useState(false); // Toggle edit mode
  const [editedRow, setEditedRow] = useState({ ...row }); // Hold the updated task data

  const handleInputChange = (key, value) => {
    setEditedRow((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <>
    {isEditing ? (
      <TaskForm
        formData={editedRow}
        setAddSection={setIsEditing}
        setTasks={setTasks}
      />
    ) : (
    <tr>
          {Object.keys(row).slice(1,-3).map((key, cellIndex) => (
            <td key={cellIndex}>
              {typeof row[key] === "boolean" ? (row[key] ? "Yes" : "No") : row[key]}
            </td>
          ))}
      <td>
        <Edit
          editedRow={editedRow}
          setTasks={setTasks}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
      </td>
      <td>
        <Delete id={row._id} setTasks={setTasks} />
      </td>
    </tr>
    )}
  </>
  );
};

export default TaskRow;
