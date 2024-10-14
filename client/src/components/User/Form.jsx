import React, { useState, useEffect } from "react";
import { createUser, updateUser } from "../../services/userAPI"; // Import the necessary API functions
import "../styles/Form.css";
import { MdClose } from "react-icons/md";

const Form = ({ formData, setAddSection, setUsers }) => {
  const [localFormData, setLocalFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  useEffect(() => {
    if (formData) {
      setLocalFormData(formData);
    }
  }, [formData]);

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setLocalFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData && formData._id) {
        const response = await updateUser(localFormData);
        if (response.success) {
          setUsers((prevUsers) =>
            prevUsers.map((user) =>
              user._id === localFormData._id ? localFormData : user
            )
          );
          alert("User updated successfully");
        }
      } else {
        const response = await createUser(localFormData);
        if (response.success) {
          setUsers((prevUsers) => [...prevUsers, response.data]);
        }
        alert("User added successfully");
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
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={localFormData.name}
              onChange={handleOnChange}
              required
            />
            <label htmlFor="email" className="form-label">
              Email:{" "}
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="name@example.com"
              value={localFormData.email}
              onChange={handleOnChange}
              required
            />
            <label htmlFor="mobile">Mobile: </label>
            <input
              type="number"
              id="mobile"
              className="form-control"
              name="mobile"
              value={localFormData.mobile}
              onChange={handleOnChange}
              required
            />
            <button className="btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
