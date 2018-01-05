import React, { Component } from 'react';
import './App.css';
import SideBar from './SideBar'
import Homepage from './pages/Homepage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBar />
        <Homepage />
      </div>
    );
  }
}

export default App;
