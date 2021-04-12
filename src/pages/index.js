import * as React from 'react';
import Article from '../components/article';
import Header from '../components/header';
import Intro from '../components/intro';
import Portfolio from '../components/portfolio';
import Skills from '../components/skills';
import Contact from '../components/contact';
import Footer from '../components/footer';
import '../styles/styles.scss';
import { Helmet } from 'react-helmet';

// markup
const IndexPage = () => {
  return (
    <div>
      <Header />
      <Intro />
      <Skills />
      <Portfolio />
      <Article />
      <Contact />
      <Footer />
      <Helmet>
        {/* <script type='text/javascript'>
          {
            console.log('test')
          }
        </script> */}
        <script src='../navScript.js' type='text/javascript' />
      </Helmet>
    </div>
  )
}

export default IndexPage
