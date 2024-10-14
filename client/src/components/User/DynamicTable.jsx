import React from "react";
import "../styles/DynamicTable.css";
import Tablerow from "./Widgets/Tablerow";

const DynamicTable = ({ data, setUsers, headers }) => {
  return (
    <table
      className="table table-striped table-hover align-middle caption-top"
      border="1"
      style={{ marginTop: "20px", width: "100%" }}
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
          <Tablerow
            key={rowIndex}
            row={row}
            setUsers={setUsers} // Pass the setUsers function to Tablerow
          />
        ))}
      </tbody>
    </table>
  );
};

export default DynamicTable;
