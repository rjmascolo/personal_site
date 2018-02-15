import React from 'react';
import { Icon } from 'react-materialize'
import "./css/SideBar.css"

class SideBar extends React.Component {

  render() {
    return (
      <section id="sidebar">
          <ul class="collection nav-ul">
  	         <li class="collection-item" id="nav-li"><a href="#homepage"><i class="material-icons icon" >home</i><span id="nav-text">Home</span></a></li>
  	         <li class="collection-item" id="nav-li"><a href="#about-section"><i class="material-icons icon" >person</i><span id="nav-text">About Me</span></a></li>
             <li class="collection-item" id="nav-li"><a href="#skills"><i class="material-icons icon" >code</i><span id="nav-text">Skills</span></a></li>
  	         <li class="collection-item" id="nav-li"><a href="#projects"><i class="material-icons icon" >laptop</i><span id="nav-text">Projects</span></a></li>
  	         <li class="collection-item" id="nav-li"><a href="#experience"><i class="material-icons icon" >work</i><span id="nav-text">Experience</span></a></li>
             <li class="last"></li>
          </ul>
      </section>
    )
  }
}

export default SideBar;
