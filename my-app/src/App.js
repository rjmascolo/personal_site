import React, { Component } from 'react';
import './App.css';
import SideBar from './SideBar'
import Homepage from './pages/Homepage'
import AboutMe from './pages/AboutMe'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBar />
        <Homepage />
        <AboutMe />
      </div>
    );
  }
}

export default App;
