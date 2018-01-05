import React, { Component } from 'react';
import './App.css';
import SideBar from './SideBar'
import Homepage from './pages/Homepage'
import AboutMe from './pages/AboutMe'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Experience from './pages/Experience'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBar />
        <Homepage />
        <AboutMe />
        <Skills />
        <Projects />
        <Experience />
      </div>
    );
  }
}

export default App;
