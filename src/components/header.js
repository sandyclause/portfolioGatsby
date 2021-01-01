import * as React from 'react';
import colorCircles from '../assets/images/colorCircles.png';
import PolygonWithPhoto from '../assets/images/PolygonWithPhoto.png';

const Header = () => {
  return (
    <header id='home'>
      {/* <div id='particles-js'></div> */}
      <div className='wrapper'>
        <nav className='navbar'>
          <span className='open-slide'>
            <a href='#'>
              <i className='fas fa-bars'></i>
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
        
        <div id='side-menu' className='side-nav'>
          <a href='#' className='btn-close'>&times;</a>
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