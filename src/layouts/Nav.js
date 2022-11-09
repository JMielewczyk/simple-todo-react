import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Nav.css";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink className="navigationLink" to={"/"}>
            START
          </NavLink>
        </li>
        <li>
          <NavLink className="navigationLink" to={"/products"}>
            Products
          </NavLink>
        </li>
        <li>
          <NavLink className="navigationLink" to={"/contact"}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink className="navigationLink" to={"/admin"}>
            Admin's Panel
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
