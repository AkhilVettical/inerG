import React from "react";
import "../styles/DynamicTable.css";
import TaskRow from "./Widgets/TaskRow"; // Import TaskRow component

const DynamicTable = ({ data, setTasks, headers }) => {
  return (
      <table
        className="table table-striped table-hover align-middle caption-top"
        border="1"
      >
        <thead>
          <tr className="header">
            {/* Dynamically generate table headers */}
            {headers.map((header, index) => (
              <th key={index}>
                {header.charAt(0).toUpperCase() + header.slice(1)}
              </th>
            ))}
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {data.map((row, rowIndex) => (
            <TaskRow
              key={rowIndex}
              row={row}
              setTasks={setTasks}
            />
          ))}
        </tbody>
      </table>
  );
};

export default DynamicTable;
