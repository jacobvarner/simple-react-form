import React, { Component } from 'react';
import logo from './logo.svg';
import './main.min.css';
import Form from './Form.js';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="header-pane">
          <header className="app-header">
            <img src={logo} className="app-logo" alt="Giant Robot Ltd. Logo" />
            <h1 className="app-heading">Welcome</h1>
            <p className="app-intro">
              Please tell us a bit about yourself to get started.
            </p>
          </header>
        </div>
        <div className="form-pane">
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
