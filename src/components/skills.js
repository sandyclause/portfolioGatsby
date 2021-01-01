import * as React from 'react';

const Skills = () => {
  return (
    <section className='skillsSection' id='skills'>
      <div className='wrapper'>
        <div className='sectionTitleContainer'>
          <h1 className='sectionTitle'>My Skills</h1>
        </div>

        <div className='skillsContainer'>
          <div className='skillCard'>
            <p className='skillsTitle'>React</p>
          </div>
          <div className='skillCard'>
            <p className='skillsTitle'>Redux</p>
          </div>
          <div className='skillCard'>
            <p className='skillsTitle'>Typscript</p>
          </div>
          <div className='skillCard'>
            <p className='skillsTitle'>ImmutableJS</p>
          </div>
          <div className='skillCard'>
            <p className='skillsTitle'>NodeJS</p>
          </div>
          <div className='skillCard'>
            <p className='skillsTitle'>Express</p>
          </div>
          <div className='skillCard'>
            <p className='skillsTitle'>Mongoose</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills;