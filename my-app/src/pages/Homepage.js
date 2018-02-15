import React from 'react';
import { Icon } from 'react-materialize'
import "../css/Homepage.css"
import image from "../images/andre-benz-257878.jpg"

class Homepage extends React.Component {

  render() {
    return (
      <section class="main-section" id="homepage">
        <img src={image} width="100%" />
          <h1 class="home homepage-h1" >Ryan Mascolo</h1>
          <p class="home homepage-p">Full stack web developer based out of Brooklyn</p>
      </section>
    )
  }
}

export default Homepage;
