import React, { Component } from 'react';
import './App.css';

import Article from './components/Article'
class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="container grid-lg">
          <div class="columns">
            <Article title="my tiels"
              subtitle="imere"
              body="BBBODYYY"
              imgPath={require("./img/news-pic.jpg")}
            />

            <Article title="totle2"
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
