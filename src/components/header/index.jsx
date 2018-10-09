import React, { Component } from 'react';
import './style.scss';

class Header extends Component {
  render() {
    return (
      <header className="header  repsonsive-container">
        <div className="header__logo">
          <h3 className="brand">
          <a href="/">
            <span className="brand--main">Dat | </span>
            <span className="brand--sub">Engineering</span>
            </a>
          </h3>
        </div>
        <nav className="header__nav-bar">
          <a href="/projects">Projects</a>
          <a href="/resume">Resume</a>
          <a href="/about">About</a>
          <button className='btn btn-primary'
              onClick={(e) => {
                  if (document.body.classList.contains('night-mode')){
                    document.body.classList.remove('night-mode')
                    localStorage.setItem('night_mode', 0)
                  } else{
                    document.body.classList.add('night-mode')
                    localStorage.setItem('night_mode', 1)
                  }
              }}>
              Night Mode
          </button>
         </nav>
      </header>
    );
  }
}
export default Header;