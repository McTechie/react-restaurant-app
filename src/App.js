import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';

class App extends Component {

  render() {
    console.log("App render() is invoked");
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default App;
