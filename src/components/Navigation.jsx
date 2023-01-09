import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  let activeStyle = {
    textDecoration: "underline",
  };

  return (
    <div className="navigation">
      <img src="/asset/logo.png" alt="" />
      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            A Propos
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
