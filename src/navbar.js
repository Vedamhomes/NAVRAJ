import React from "react";
import style from "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar_container">
      <div className="image_container">
        <img
          className="image_logo"
          src="https://navrajindia.com/wp-content/uploads/2023/12/Navraj-logo-Gold-1.png"
          alt="Navraj-logo-Gold"
        />
      </div>

      <nav className="navbar_item">
        <ul className="navbar_list">
          <li className="navbar_list_home">Home</li>
          <li className="navbar_list_contact">Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
