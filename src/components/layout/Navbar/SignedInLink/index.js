import React from "react";
import { NavLink } from "react-router-dom";

function SignedInLink() {
  return (
    <ul>
      <li>
        <NavLink to="/create">Create Project</NavLink>
      </li>
      <li>
        <NavLink to="/">Log Out</NavLink>
      </li>
      <li className="nav--avatar">
        <NavLink to="/">HH</NavLink>
      </li>
    </ul>
  );
}

export default SignedInLink;
