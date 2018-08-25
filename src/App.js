import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Upload from './Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to dPanc</h1>
        </header>
        <p className="App-intro">
          dPanc is a tool that allows individuals with Type 1 Diabetes
          to be able to gain more insight around their own data.
        </p>

        <Upload />

      </div>
    );
  }
}

export default App;
