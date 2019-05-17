import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <nav>
        <NavLink to="/articles" exact>
          Articles
        </NavLink>
        {" | "}
        <NavLink to="/about" exact>
          About
        </NavLink>
      </nav>
    </>
  );
};

export default Header;
