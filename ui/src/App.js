import React, { Component } from 'react';
import Nav from './components/Nav';
import Article from './components/Article';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="container grid-lg">
        <Nav />
          <div class="columns">
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
          </div>
        </div>
      </div>
    );
  }
}

export default App;
