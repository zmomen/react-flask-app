import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "spectre.css";
import AboutPage from "./about/AboutPage";
import "./App.css";
import ArticlesPage from "./articles/ArticlesPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";

function ArticlesRedirect(props) {
  return <Redirect to="/articles" />;
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container grid-lg">
          <Header />
          <Switch>
            <Route exact path="/" component={ArticlesRedirect} />
            <Route exact path="/about" component={AboutPage} />
            {[
              "/articles",
              "/articles/general/",
              "/articles/business/",
              "/articles/entertainment/",
              "/articles/health/",
              "/articles/science/",
              "/articles/sports/",
              "/articles/technology/",
              "/saved"
            ].map((path, index) => (
              <Route path={path} component={ArticlesPage} key={index} />
            ))}
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
