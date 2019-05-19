import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header className="navbar">
        <section className="navbar-section">
          <NavLink className="navbar-brand mr-2" to="/" exact>
            Article Aggregator!
          </NavLink>
          <NavLink className="btn btn-link" to="/articles" exact>
            Articles
          </NavLink>
          <NavLink className="btn btn-link" to="/saved" exact>
            View Saved
          </NavLink>
          <NavLink className="btn btn-link" to="/about" exact>
            About
          </NavLink>
        </section>
      </header>
    </>
  );
};

export default Header;
