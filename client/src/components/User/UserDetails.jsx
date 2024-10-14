import React, { useEffect, useState } from "react";
import { getUsers } from "../../services/userAPI"; // Import the getUsers API
import DynamicTable from "./DynamicTable";
import Form from "./Form";
import Sidebar from "../SideBar/Sidebar";
import Loader from "../loader/Loader"; // Import the Loader component
import "../styles/Home.css";
import { IoMdAddCircle } from "react-icons/io";

function UserDetails() {
  const [users, setUsers] = useState([]);
  const [addSection, setAddSection] = useState(false);
  const [loading, setLoading] = useState(true); // Loader state

  useEffect(() => {
    const fetchUsers = async () => {
      const { data, loading } = await getUsers(); // Call the getUsers API
      setUsers(data); // Set the fetched users
      setLoading(loading.isLoading); // Update loading state
    };

    fetchUsers();
  }, []);

  const tableHeaders =
    users.length > 0
      ? Object.keys(users[0]).slice(1, -3) // Remove the first and last three columns
      : [];

  return (
    <div className="wrapper">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div>
        <div className="table-container">
          {loading ? (
            <Loader /> // Show loader while loading data inside the table
          ) : (
            <>
              {users.length > 0 && (
                <DynamicTable
                  data={users}
                  setUsers={setUsers}
                  headers={tableHeaders}
                />
              )}
            </>
          )}
        </div>
        {/* <button className="btn btn-add" onClick={() => setAddSection(true)}>
          Add
        </button> */}

        {addSection && (
          <Form setAddSection={setAddSection} setUsers={setUsers} />
        )}
      </div>
    </div>
  );
}

export default UserDetails;
