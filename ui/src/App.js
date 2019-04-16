import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';

class App extends Component {
  render() {
    const myName = "Zaid";
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
