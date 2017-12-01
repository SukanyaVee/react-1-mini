import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const names = ["Aye", "Bee", "See", 'Dee', "Eee"]
    return (
      <div>
        Picture: <input/>
        Name: <input/>
        <button>Save it</button>
      </div>
    );



  }
}

export default App;
