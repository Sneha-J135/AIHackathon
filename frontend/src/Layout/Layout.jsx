import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";

const Layout = () => {
  return (
    <div className="layout-container">
      <header className="layout-header">
        <Navbar />
      </header>
      <div className="layout-body">
        <Sidebar />
        <main className="layout-main"></main>
      </div>
      <footer className="layout-footer"></footer>
    </div>
  );
};

export default Layout;
