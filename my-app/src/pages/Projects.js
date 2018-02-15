import React from 'react';
import { Icon } from 'react-materialize'
import "../css/Projects.css"

class Projects extends React.Component {

  render() {
    return (
      <section class="projects-section" id="projects">
          <h1>Projects</h1>
          <div>
            <h2>Marketr MGMT</h2>
            <p>Marketing specific project management app for creative deliverables.</p>
            <div>
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
          <div>
            <h2>Commun_ity</h2>
            <p>An event based app that delegates tasks to users for upcoming events.</p>
            <div>
              <span class="languages-used-item">React</span>
              <span class="languages-used-item">Rails API</span>
              <span class="languages-used-item">Semantic UI</span>
              <span class="languages-used-item">Postgres</span>
              <span class="languages-used-item">HTML</span>
              <span class="languages-used-item">CSS</span>
            </div>
          </div>
          <div>
            <h2>Really Good Photos</h2>
            <p>A  photo gathering app that uses the user’s coordinates to show them photos in their area.</p>
            <div class="languages-used">
              <span>React</span>
              <span>Redux</span>
              <span>Rails</span>
              <span>Semantic UI</span>
              <span>AWS</span>
              <span>Draft.js</span>
            </div>
          </div>
      </section>
    )
  }
}

export default Projects;
