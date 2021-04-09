import * as React from 'react';
import colorCircles from '../assets/images/colorCircles.png';
import PolygonWithPhoto from '../assets/images/PolygonWithPhoto.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {

  return (
    <section className="contact" id="contact">
      <div className="wrapper">
        <div className="contactForm">
          <div className="contactContent">
            <div className="sectionTitleContainer">
              <h1 className="sectionTitle">Contact me</h1>
            </div>
          </div>
          
          <form action="http://www.focuspocus.io/magic/328c8ab775bf3e4ebcc702f29ad4e948" method="POST"
          enctype="multipart/form-data">
            <div className="group">
              <input type="text" name="name" required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Full name</label>
            </div>
            <div className="group">
              <input type="email" name="email" required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Email Address</label>
            </div>
            <div className="group">
              <input type="text" name="phone" required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Phone No</label>
            </div>
            <div className="group">
              <textarea name="message" name="message" id="message" rows="1" className="autoExpand" placeholder="Message"></textarea>
              <span className="highlight"></span>
              <span className="bar"></span>
            </div>
            <button className="button">contact now</button>
          </form>

          <div className="info">
            <div className="infoLeft">
              <p>E-mail: </p>
            </div>
            <div className="infoRight">
              <p>contact@sandytian.ca</p>
            </div>
          </div>
          
        </div>
        <div className="aboutImgSection">
          <div className="aboutImgContainer">
            <img id='colorCircles' src={colorCircles} alt='colorful circles' />
            <img id='headshot' src={PolygonWithPhoto} alt='picture of sandy tian' />
          </div>
          <div className="aboutName">
            <p className="name">Sandy Tian</p>
            <div className="title">
              <p>Front-End Developer</p>
            </div>
            <div className="aboutSocial">
              <div className="aboutSocialContainer">
                <div className="aboutSocialTitle">
                  <p>Follow me!</p>
                </div>
                <div className="socialIcons">
                  <div className='icon linkedin'>
                    <a href='https://www.linkedin.com/in/sandy-tian-521b94a9/' target='_blank'>
                      <FontAwesomeIcon icon={faLinkedin} size='1x' className='fab' />
                    </a>
                  </div>
                  <div className='icon github'>
                    <a href='https://github.com/sandyclause' target='_blank'>
                      <FontAwesomeIcon icon={faGithub} size='1x' className='fab' />
                    </a>
                  </div>
                  <div className='icon twitter'>
                    <a href='https://twitter.com/sandyclause_' target='_blank'>
                      <FontAwesomeIcon icon={faTwitter} size='1x' className='fab' />
                    </a>
                  </div>
                  <div className='icon twitter'>
                    <a href='https://twitter.com/sandyclause_' target='_blank'>
                      <FontAwesomeIcon icon={faFacebook} size='1x' className='fab' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    )
}

export default Contact;