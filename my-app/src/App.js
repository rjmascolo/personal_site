import React, { Component } from 'react';
import './App.css';
import './mobile-site.css';
import NavBar from './NavBar'
import Homepage from './pages/Homepage'
import AboutMe from './pages/AboutMe'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Experience from './pages/Experience'

class App extends Component {

  state = {
    currentPosition:'home'
  }

  componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    let scroll = document.documentElement.scrollTop
    if (scroll >= 0 && scroll < 857) {
      this.setState({currentPosition:'home'})
    }else if(scroll > 857 && scroll < 1276){
      this.setState({currentPosition:'about-me'})
    }else if(scroll >= 1276 && scroll < 1697){
      this.setState({currentPosition:'skills'})
    } else if(scroll >= 1697){
      this.setState({currentPosition:'projects'})
    }
  }

  render() {
    return (
      <div className="App">
        <NavBar currentPosition={this.state.currentPosition} />
        <Homepage  />
        <AboutMe />
        <Skills />
        <Projects />
        {/* <Experience /> */}
      </div>
    );
  }
}

export default App;
