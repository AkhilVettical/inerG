import React, { useState } from 'react';
import Edit from "./Edit";
import Delete from "./Delete";
import Form from "../Form"; // Import the Form component

const Tablerow = ({ row, setUsers }) => {
  const [isEditing, setIsEditing] = useState(false); // To toggle edit mode
  const [editedRow, setEditedRow] = useState({ ...row }); // Holds the updated row data

  const handleInputChange = (key, value) => {
    setEditedRow((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <>
      {isEditing ? (
        // Render the form when editing is true
        <Form
          formData={editedRow} // Pass the row data to the form as pre-filled values
          setAddSection={setIsEditing} // To toggle edit mode back to false after saving
          setUsers={setUsers}
        />
      ) : (
        // Otherwise, render the table row
        <tr>
          {/* Render each cell of the row */}
          {Object.keys(row).slice(1,-3).map((key, cellIndex) => (
            <td key={cellIndex}>
              {typeof row[key] === "boolean" ? (row[key] ? "Yes" : "No") : row[key]}
            </td>
          ))}
          <td>
            <Edit
              editedRow={editedRow}
              setUsers={setUsers}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
            />
          </td>
          <td>
            <Delete id={row._id} setUsers={setUsers} />
          </td>
        </tr>
      )}
    </>
  );
};

export default Tablerow;
