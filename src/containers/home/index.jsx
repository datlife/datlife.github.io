import React from 'react'
import "./style.scss"

class Home extends React.Component {
  render() {
    return (
      <div class="home repsonsive-container" id="home">
        <h1 class="cover-heading"></h1>
        <p class="lead">Hi, I am currently a Computer Science Student @ UC Davis.</p>
        <a href="resume.pdf" class="btn btn-lg btn-secondary">Resume</a>
      </div>
    )
  }
}

export default Home;