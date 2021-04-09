import * as React from 'react';
import colorCircles from '../assets/images/colorCircles.png';
import PolygonWithPhoto from '../assets/images/PolygonWithPhoto.png';
import Particles from 'react-particles-js';

const Header = () => {
  return (
    <header id='home'>
      <Particles
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
        }}
        params={{
          "particles": {
              "number": {
                  "value": 100,
                  "density": {
                      "enable": true,
                      "value_area": 800
                  }
              },
              "color": {
                  "value": ["#892582", "#f86b18", "#0095c8", "#97ca85", "#872480"]
              },
              "shape": {
                  "type": "circle",
                  "stroke": {
                      "width": 10,
                      "color": "#000000"
                  },
                  "polygon": {
                      "nb_sides": 5
                  },
                  "image": {
                      "src": "img/github.svg",
                      "width": 100,
                      "height": 100
                  }
              },
              "opacity": {
                  "value": 0.5,
                  "random": false,
                  "anim": {
                      "enable": false,
                      "speed": 1,
                      "opacity_min": 0.1,
                      "sync": false
                  }
              },
              "size": {
                  "value": 10,
                  "random": true,
                  "anim": {
                      "enable": false,
                      "speed": 40,
                      "size_min": 0.1,
                      "sync": false
                  }
              },
              "line_linked": {
                  "enable": true,
                  "distance": 150,
                  "color": "#ffffff",
                  "opacity": 0.4,
                  "width": 1
              },
              "move": {
                  "enable": true,
                  "speed": 2,
                  "direction": "none",
                  "random": false,
                  "straight": false,
                  "out_mode": "out",
                  "attract": {
                      "enable": false,
                      "rotateX": 600,
                      "rotateY": 1200
                  }
              }
          },
          "interactivity": {
              "detect_on": "canvas",
              "events": {
                  "onhover": {
                      "enable": true,
                      "mode": "repulse"
                  },
                  "onclick": {
                      "enable": false,
                      "mode": "push"
                  },
                  "resize": true
              },
              "modes": {
                  "grab": {
                      "distance": 400,
                      "line_linked": {
                          "opacity": 1
                      }
                  },
                  "bubble": {
                      "distance": 400,
                      "size": 40,
                      "duration": 2,
                      "opacity": 8,
                      "speed": 3
                  },
                  "repulse": {
                      "distance": 50
                  },
                  "push": {
                      "particles_nb": 4
                  },
                  "remove": {
                      "particles_nb": 2
                  }
              }
          },
          "retina_detect": true,
          "config_demo": {
              "hide_card": false,
              "background_color": "#b61924",
              "background_image": "",
              "background_position": "50% 50%",
              "background_repeat": "no-repeat",
              "background_size": "cover"
          }
        }}
      />
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