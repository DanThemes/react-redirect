import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="">
      <div className="container">
        <ul>
          <li>
            <NavLink to="/" className="text-lg">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/add-url" className="text-lg">
              Add URL
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
