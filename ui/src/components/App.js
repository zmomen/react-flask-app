import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
// // import CoursesPage from "./courses/CoursesPage";
// // import ArticlesPage from "./articles/ArticlesPage";
import HomePage from "./home/HomePage";
import PageNotFound from "./PageNotFound";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container grid-lg">
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutPage} />
            {/* <Route exact path="/courses" component={CoursesPage} /> */}
            {/* <Route exact path="/articles" component={ArticlesPage} /> */}
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
