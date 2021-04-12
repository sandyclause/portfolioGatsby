import React, { useState } from "react";
import colorCircles from '../static/colorCircles.png';
import PolygonWithPhoto from '../static/PolygonWithPhoto.png';
import Particles from 'react-particles-js';
import { particleJSConfig } from '../constants';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  const [open, toggleOpen] = useState(false);
  const handleToggle = () => toggleOpen(!open);
  const closeNav = () => toggleOpen(false);

  return (
    <header id='home'>
      <Particles
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
        }}
        params={particleJSConfig}
      />
      <div className='wrapper'>
        <nav className={open ? 'navbar navbarOpen' : 'navbar'}>
          <span
            className='open-slide'
            onClick={handleToggle}
          >
            <a href='#'>
              <i className='fas fa-bars'></i>
              <FontAwesomeIcon icon={faBars} size='1x' className='fab' />
            </a>
          </span>
        
          <ul className='navbar-nav'>
            <li>
              <a href='#home'>Home</a>
            </li>
            <li>
              <a href='#skills'>Skills</a>
            </li>
            <li>
              <a href='#work'>Portfolio</a>
            </li>
            <li>
              <a href='#blog'>Blog</a>
            </li>
            <li>
              <a href='#contact'>Contact</a>
            </li>
          </ul>

          <a href='#contact' className='button'>Contact me</a>
        </nav>
        
        <div id='side-menu' className={open ? 'side-nav sideNavOpen' : 'side-nav sideNavClose'}>
          <a href='#' className='btn-close' onClick={closeNav}>&times;</a>
          <a href='#home' className='link'>Home</a>
          <a href='#skills' className='link'>Skills</a>
          <a href='#work' className='link'>Portfolio</a>
          <a href='#blog' className='link'>Blog</a>
          <a href='#contact' className='link'>Contact</a>
        </div>
        <div className='headerImgContainer'>
          <img id='colorCircles' src={colorCircles} alt='colorful circles' />
          <img id='headshot' src={PolygonWithPhoto} alt='picture of sandy tian' />
        </div>
      </div>
    </header>
  )
}

export default Header;