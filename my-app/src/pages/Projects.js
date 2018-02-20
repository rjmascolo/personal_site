import React from 'react';
import { Icon } from 'react-materialize'
import "../css/Projects.css"

class Projects extends React.Component {

  render() {
    return (
      <section className="projects-section" id="projects">
          <h1 className="skills-header">Projects</h1>
          <div>
            <div className="project-container">
              <div className="project-header-container">
                <div>
                  <h2 className="project-title">Marketr MGMT</h2>
                  <span>
                    <a href="https://github.com/rjmascolo/marketr_MGMT_frontend"><i className="fab fa-github" id="icon"></i></a>
                    <a><i className="fab fa-youtube" id="youtube-icon"></i></a>
                  </span>
                </div>
                <span className="site-arrow">&#8680;</span>
              </div>
              <p className="project-details">
                Marketr MGMT is a project management app for marketing and the process
                of creating assets. Users can create projects, assign them to campaigns,
                assign users to the projects, and give the project a timeline for deliverables.
                On the project, users can upload the files and then comment on the assets,
                provide feedback, and create multiple revisions to the assets.
              </p>
              <div className="languages-container">
                <span className="languages-used-item">React</span>
                <span className="languages-used-item">Redux</span>
                <span className="languages-used-item">Rails</span>
                <span className="languages-used-item">HTML</span>
                <span className="languages-used-item">CSS</span>
                <span className="languages-used-item">Postgres</span>
                <span className="languages-used-item">Semantic UI</span>
                <span className="languages-used-item">AWS</span>
                <span className="languages-used-item">Draft.js</span>
              </div>
            </div>
            <div className="project-container">
              <div className="project-header-container">
                <div>
                  <h2 className="project-title" id="community">Commun_ity</h2>
                  <span>
                    <a href="https://github.com/rjmascolo/commun_ity"><i className="fab fa-github" id="icon"></i></a>
                    <a href=""><i className="fab fa-youtube" id="youtube-icon"></i></a>
                  </span>
                </div>
                <span className="site-arrow">&#8680;</span>
              </div>
              <p className="project-details">Commun_ity is a web app that connects users to different communities they want to be apart of and lets them see different events within that community. It works similarly to MeetUp but with Commun_ity, users can volunteer for tasks they would like to sign up for.</p>
              <div className="languages-container">
                <span className="languages-used-item">React</span>
                <span className="languages-used-item">Rails API</span>
                <span className="languages-used-item">Semantic UI</span>
                <span className="languages-used-item">Postgres</span>
                <span className="languages-used-item">HTML</span>
                <span className="languages-used-item">CSS</span>
              </div>
            </div>
            <div className="project-container">
              <div className="project-header-container">
                <div>
                  <h2 className="project-title" id="really-good">Really Good Photos</h2>
                  <span>
                    <a href="https://github.com/rjmascolo/really_good_photos"><i className="fab fa-github" id="icon"></i></a>
                    <a href=""><i className="fab fa-youtube" id="youtube-icon"></i></a>
                  </span>
                </div>
                <span className="site-arrow">&#8680;</span>
              </div>
              <p class="project-details">Really Good Photos grabs your address and then serves you photos have been taken in your surrounding area. It is great for finding new cool locations that you have never seen before. The app hooks up to the Google Maps API and allows you to see the location the photo was taken at. Also, if you see any photos you like, you can save them to be apart of your own list. Or if you want to see photos that have been in other areas, you can use the search feature to look around.</p>
              <div className="languages-container">
                <span className="languages-used-item">Rails</span>
                <span className="languages-used-item">HTML</span>
                <span className="languages-used-item">CSS</span>
                <span className="languages-used-item">Bootstrap</span>
                <span className="languages-used-item">Postgres</span>
              </div>
            </div>
          </div>
      </section>
    )
  }
}

export default Projects;
