import React, { useState } from 'react';
import colorCircles from '../static/colorCircles.png';
import PolygonWithPhoto from '../static/PolygonWithPhoto.png';
import Particles from 'react-particles-js';
import { particleJSConfig } from '../constants';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, animateScroll as scroll } from 'react-scroll';

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
            <FontAwesomeIcon icon={faBars} size='1x' className='fab' />
          </span>
          <ul className='navbar-nav'>
            <li>
              <Link
                to='home'
                spy={true}
                smooth={true}
                duration={500}
                className='navlink'
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to='skills'
                spy={true}
                smooth={true}
                duration={500}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to='work'
                spy={true}
                smooth={true}
                duration={500}
                className='navlink'
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to='blog'
                spy={true}
                smooth={true}
                duration={500}
                className='navlink'
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to='contact'
                spy={true}
                smooth={true}
                duration={500}
                className='navlink'
              >
                Contact
              </Link>
            </li>
          </ul>

          <a href='#contact' className='button'>Contact me</a>
        </nav>
        
        <div id='side-menu' className={open ? 'side-nav sideNavOpen' : 'side-nav sideNavClose'}>
          <a href='#' className='btn-close' onClick={closeNav}>&times;</a>
          
          <Link
            to='home'
            spy={true}
            smooth={true}
            duration={500}
            className='navlink'
            onClick={closeNav}
          >
            Home
          </Link>
          <Link
            to='skills'
            spy={true}
            smooth={true}
            duration={500}
            className='navlink'
            onClick={closeNav}
          >
            Skills
          </Link>
          <Link
            to='work'
            spy={true}
            smooth={true}
            duration={500}
            className='navlink'
            onClick={closeNav}
          >
            Portfolio
          </Link>
          <Link
            to='blog'
            spy={true}
            smooth={true}
            duration={500}
            className='navlink'
            onClick={closeNav}
          >
            Blog
          </Link>
          <Link
            to='contact'
            spy={true}
            smooth={true}
            duration={500}
            className='navlink'
            onClick={closeNav}
          >
            Contact
          </Link>
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