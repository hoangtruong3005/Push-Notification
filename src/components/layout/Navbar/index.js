import React from "react";

import { Link } from "react-router-dom";

import SignOutLink from "./SignedOutLink";
import SignedInLink from "./SignedInLink";

function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar__logo">
          <Link to="/">Home</Link>
        </div>
        <div className="navbar__nav">
          <SignOutLink />
          <SignedInLink />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
