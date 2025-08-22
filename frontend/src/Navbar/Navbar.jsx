import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">zLink</div>
      <div className="navbar-search">
        <span className="search-icon" aria-label="search" role="img">
          🔍
        </span>
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          aria-label="Search"
        />
      </div>
      <div className="navbar-account">
        <span className="account-pic">
          <img src="/images/user.png" alt="User" />
        </span>
        <span className="account-name">Alex</span>
      </div>
    </nav>
  );
};

export default Navbar;
