import React from "react";

import "../scss/navbar/navbar.scss";
import { FiChevronDown } from "react-icons/fi";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <h1>snap</h1>
      <a href="#" style={{ display: "flex" }}>
        Features{" "}
        <FiChevronDown
          size="18px"
          style={{ display: "flex", marginLeft: "2px" }}
        />
      </a>
      <a href="#" style={{ display: "flex" }}>
        Company{" "}
        <FiChevronDown
          size="18px"
          style={{ display: "flex", marginLeft: "2px" }}
        />
      </a>
      <a href="#">Careers</a>
      <a href="#">About</a>

      <div className="navbar__login">
        <a href="#">Login</a>
      </div>
      <div className="navbar__register">
        <a href="#">Register</a>
      </div>
    </nav>
  );
};

export default Navbar;
