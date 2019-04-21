import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/common/Header";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import Article from "./components/Article";
import "./App.css";
import Header from "./components/common/Header";
import PageNotFound from "./PageNotFound";
import CoursesPage from "./components/courses/CoursesPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container grid-lg">
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/courses" component={CoursesPage} />
            <Route component={PageNotFound} />
          </Switch>
          {/* <div class="columns">
            <Article title="Title1"
              subtitle="sub1"
              body="BBBODYYY"
              imgPath={require("./img/news-pic.jpg")}
            />

            <Article title="title2"
              subtitle="sub"
              body="lorem ipsum"
              imgPath={require("./img/news-pic.jpg")}
            />
          </div> */}
        </div>
      </div>
    );
  }
}

export default App;
