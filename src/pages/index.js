import * as React from 'react'
import Header from '../components/header'
import Intro from '../components/intro'
import Skills from '../components/skills'
import '../styles/styles.scss'

// markup
const IndexPage = () => {
  return (
    <div>
      <Header />
      <Intro />
      <Skills />
    </div>
  )
}

export default IndexPage
