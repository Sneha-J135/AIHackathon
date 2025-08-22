import React from "react";
import "./Sidebar.css";
import { FaCog, FaPlus, FaEdit } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar-options">
        <li className="sidebar-option active">
          <span className="sidebar-icon">
            <FaCog />
          </span>
          <span className="sidebar-label">Settings</span>
        </li>
        <li className="sidebar-option">
          <span className="sidebar-icon">
            <FaPlus />
          </span>
          <span className="sidebar-label">Add</span>
        </li>
        <li className="sidebar-option">
          <span className="sidebar-icon">
            <FaEdit />
          </span>
          <span className="sidebar-label">Edit</span>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
