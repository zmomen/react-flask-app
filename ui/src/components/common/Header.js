import React from "react";
import { NavLink } from "react-router-dom";
import { ARTICLE_CATEGORIES } from "../../constants/index";
const Header = () => {
  return (
    <>
      <header className="navbar">
        <section className="navbar-section">
          <NavLink className="navbar-brand mr-2" to="/" exact>
            Article Aggregator!
          </NavLink>
        </section>
        <section className="navbar-section">
          {ARTICLE_CATEGORIES.map((article, index) => {
            return (
              <NavLink
                key={index}
                className="btn btn-link"
                to={`/articles/${article.toLowerCase()}`}
                exact
              >
                {article}
              </NavLink>
            );
          })}
        </section>
        <section className="navbar-section">
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
