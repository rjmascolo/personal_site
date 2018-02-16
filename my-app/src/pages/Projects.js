import React from 'react';
import { Icon } from 'react-materialize'
import "../css/Projects.css"

class Projects extends React.Component {

  render() {
    return (
      <section class="projects-section" id="projects">
          <h1 class="skills-header">Projects</h1>
          <div>
            <div class="project-container">
              <div class="project-header-container">
                <div>
                  <h2 class="project-title">Marketr MGMT</h2>
                  <span>
                    <i class="fa fa-github" id="icon"></i>
                    <i class="fa fa-youtube-play" id="youtube-icon"></i>
                  </span>
                </div>
                <span class="site-arrow">&#8680;</span>
              </div>
              <p class="project-details">
                Marketr MGMT is a project management app for marketing and the process
                of creating assets. Users can create projects, assign them to campaigns,
                assign users to the projects, and give the project a timeline for deliverables.
                On the project, users can upload the files and then comment on the assets,
                provide feedback, and create multiple revisions to the assets.
              </p>
              <div class="languages-container">
                <span class="languages-used-item">React</span>
                <span class="languages-used-item">Redux</span>
                <span class="languages-used-item">Rails</span>
                <span class="languages-used-item">HTML</span>
                <span class="languages-used-item">CSS</span>
                <span class="languages-used-item">Postgres</span>
                <span class="languages-used-item">Semantic UI</span>
                <span class="languages-used-item">AWS</span>
                <span class="languages-used-item">Draft.js</span>
              </div>
            </div>
            <div class="project-container">
              <div class="project-header-container">
                <div>
                  <h2 class="project-title">Commun_ity</h2>
                  <span>
                    <i class="fa fa-github" id="icon"></i>
                    <i class="fa fa-youtube-play" id="youtube-icon"></i>
                  </span>
                </div>
                <span class="site-arrow">&#8680;</span>
              </div>
              <p class="project-details">Commun_ity is a web app that connects users to different communities they want to be apart of and lets them see different events within that community. It works similarly to MeetUp but with Commun_ity, users can volunteer for tasks they would like to sign up for.</p>
              <div class="languages-container">
                <span class="languages-used-item">React</span>
                <span class="languages-used-item">Rails API</span>
                <span class="languages-used-item">Semantic UI</span>
                <span class="languages-used-item">Postgres</span>
                <span class="languages-used-item">HTML</span>
                <span class="languages-used-item">CSS</span>
              </div>
            </div>
            <div class="project-container">
              <div class="project-header-container">
                <div>
                  <h2 class="project-title">Really Good Photos</h2>
                  <span>
                    <i class="fa fa-github" id="icon"></i>
                    <i class="fa fa-youtube-play" id="youtube-icon"></i>
                  </span>
                </div>
                <span class="site-arrow">&#8680;</span>
              </div>
              <p class="project-details">Really Good Photos grabs your address and then serves you photos have been taken in your surrounding area. It is great for finding new cool locations that you have never seen before. The app hooks up to the Google Maps API and allows you to see the location the photo was taken at. Also, if you see any photos you like, you can save them to be apart of your own list. Or if you want to see photos that have been in other areas, you can use the search feature to look around.</p>
              <div class="languages-container">
                <span class="languages-used-item">Rails</span>
                <span class="languages-used-item">HTML</span>
                <span class="languages-used-item">CSS</span>
                <span class="languages-used-item">Bootstrap</span>
                <span class="languages-used-item">Postgres</span>
              </div>
            </div>
          </div>
      </section>
    )
  }
}

export default Projects;
