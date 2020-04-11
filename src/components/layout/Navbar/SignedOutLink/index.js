import React from "react";
import { NavLink } from "react-router-dom";

function SignedOutLink() {
  return (
    <ul>
      <li>
        <NavLink to="/signup">Sign Up</NavLink>
      </li>
      <li>
        <NavLink to="/signin">Log In</NavLink>
      </li>
    </ul>
  );
}

export default SignedOutLink;
