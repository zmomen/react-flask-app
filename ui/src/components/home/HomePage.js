import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div>
    <h2>Latest News</h2>
    <p>Checkout the latest news and articles!</p>
    <Link to="articles" className="btn btn-primary btn-lg">
      Click here
    </Link>
  </div>
);

export default HomePage;
