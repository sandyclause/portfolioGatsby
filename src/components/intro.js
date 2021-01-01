import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare, faTwitterSquare, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

const Intro = () => {
  return (
    <section className='intro'>
      <div className='introContainer'>
        <h1>Hello, I'm Sandy Tian</h1>
        <h2>Front-End Developer</h2>
        <p>Hi, I am a Web Developer based in Toronto. I have a background in Digital Marketing and Healthcare. I love writing clean code and learning the latest technologies. I enjoy working in teams to create cool websites and Apps.</p>
        <br />
        <p>Some of my hobbies are snowboarding in the winter and camping in the summer/fall. I also like binge watching Netflix shows and rewatching all the episodes of the Simpsons for the 9th time.</p>
      </div>
    
      <div className='introSocial'>
          <p>keep connected:</p>
          <div className='social'>
            <a href='https://www.linkedin.com/in/sandy-tian-521b94a9/' target='_blank'>
              <FontAwesomeIcon icon={faLinkedin} size='3x' className='fab' />
            </a>
            <a href='https://github.com/sandyclause' target='_blank'>
              <FontAwesomeIcon icon={faGithubSquare} size='3x' className='fab' />
            </a>
            <a href='https://twitter.com/sandyclause_' target='_blank'>
              <FontAwesomeIcon icon={faTwitterSquare} size='3x' className='fab' />
            </a>
          </div>
      </div>
    </section>
  )
}

export default Intro;