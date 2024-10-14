import React from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import { MdOutlineClose } from "react-icons/md";
import { LuUsers } from "react-icons/lu";
import { FaTasks } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import "../styles/Sidebar.css";

const Sidebar = () => {
  const location = useLocation(); // Get the current location

  return (
    <nav className="sidebar">
      <div className="sidebar-top">
        <div className="sidebar-brand">taskify</div>
        <button className="sidebar-close-btn">
          <MdOutlineClose size={24} />
        </button>
      </div>
      <div className="sidebar-body">
        <div className="sidebar-menu">
          <ul className="menu-list">
            <li className="menu-item">
              <Link
                to="/user"
                className={`menu-link ${
                  location.pathname === "/user" ? "active" : ""
                }`}
              >
                <span className="menu-link-icon">
                  <LuUsers />
                </span>
                <span className="menu-link-text">Users</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="sidebar-menu2">
          <ul>
            <li className="menu-item">
              <Link
                to="/task"
                className={`menu-link ${
                  location.pathname === "/task" ? "active" : ""
                }`}
              >
                <span className="menu-link-icon">
                  <FaTasks />
                </span>
                <span className="menu-link-text">Tasks</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="sidebar-footer">
          <ul>
            <li className="menu-item">
              <Link
                to="/"
                className={`menu-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
              >
                <span className="menu-link-icon">
                  <IoIosLogOut />
                </span>
                <span className="menu-link-text">Logout</span>
              </Link>
            </li>
          </ul>
        </div>
    </nav>
  );
};

export default Sidebar;
