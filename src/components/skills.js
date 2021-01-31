import * as React from 'react';
import reactIcon from '../assets/images/reactIcon.png';
import reduxIcon from '../assets/images/reduxIcon.png';
import typescriptIcon from '../assets/images/typescriptIcon.png';
import immutableJSIcon from '../assets/images/immutableJSIcon.png';
import nodejsIcon from '../assets/images/nodejsIcon.png';
import expressIcon from '../assets/images/expressIcon.png';
import mongodbIcon from '../assets/images/mongodbIcon.png';

const Skills = () => {
  return (
    <section className='skillsSection' id='skills'>
      <div className='wrapper'>
        <div className='sectionTitleContainer'>
          <h1 className='sectionTitle'>My Skills</h1>
        </div>

        <div className='skillsContainer'>
          <div className='skillCard'>
            <div className='skillsCardImageContainer'>
              <img src={reactIcon} alt='colorful circles' />
            </div>
            <p className='skillsTitle'>React</p>
          </div>
          <div className='skillCard'>
            <div className='skillsCardImageContainer'>
              <img src={reduxIcon} alt='colorful circles' />
            </div>
            <p className='skillsTitle'>Redux</p>
          </div>
          <div className='skillCard'>
            <div className='skillsCardImageContainer'>
              <img src={typescriptIcon} alt='colorful circles' />
            </div>
            <p className='skillsTitle'>Typscript</p>
          </div>
          <div className='skillCard'>
            <div className='skillsCardImageContainer'>
              <img src={immutableJSIcon} alt='colorful circles' />
            </div>
            <p className='skillsTitle'>ImmutableJS</p>
          </div>
          <div className='skillCard'>
            <div className='skillsCardImageContainer'>
              <img src={nodejsIcon} alt='colorful circles' />
            </div>
            <p className='skillsTitle'>NodeJS</p>
          </div>
          <div className='skillCard'>
            <div className='skillsCardImageContainer'>
              <img src={expressIcon} alt='colorful circles' />
            </div>
            <p className='skillsTitle'>Express</p>
          </div>
          <div className='skillCard'>
            <div className='skillsCardImageContainer'>
              <img src={mongodbIcon} alt='colorful circles' />
            </div>
            <p className='skillsTitle'>MongoDB</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills;