import React from 'react';
import { Icon } from 'react-materialize'
import "./css/SideBar.css"

class SideBar extends React.Component {

  render() {
    return (
      <section id="sidebar">
          <ul class="collection nav-ul">
  	         <li class="collection-item" id="nav-li"><i class="material-icons icon" >home</i><span id="nav-text">Home</span></li>
  	         <li class="collection-item" id="nav-li"><i class="material-icons icon" >person</i><span id="nav-text">About Me</span></li>
             <li class="collection-item" id="nav-li"><i class="material-icons icon" >code</i><span id="nav-text">Skills</span></li>
  	         <li class="collection-item" id="nav-li"><i class="material-icons icon" >laptop</i><span id="nav-text">Projects</span></li>
  	         <li class="collection-item" id="nav-li"><i class="material-icons icon" >work</i><span id="nav-text">Experience</span></li>
             <li class="last"></li>
          </ul>
      </section>
    )
  }
}

export default SideBar;
