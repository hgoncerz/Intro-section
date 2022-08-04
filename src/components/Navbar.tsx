import React, { useState } from "react";

import "../scss/navbar/navbar.scss";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import DropDownFeatures from "./DropDownFeatures";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <nav className="navbar">
      <h1>snap</h1>
      {/* <a
        href="#"
        style={{ display: "flex" }}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        Features{" "}
        {isOpen ? (
          <FiChevronDown
            size="18px"
            style={{ display: "flex", marginLeft: "2px" }}
          />
        ) : (
          <FiChevronUp
            size="18px"
            style={{ display: "flex", marginLeft: "2px" }}
          />
        )}
      </a>
      {isOpen && <DropDownFeatures />} */}
      <DropDownFeatures isOpen={isOpen} setIsOpen={setIsOpen} />
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
