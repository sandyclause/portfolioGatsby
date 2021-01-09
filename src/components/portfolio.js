import { useStaticQuery } from 'gatsby';
import * as React from 'react';
import colorCircles from '../assets/images/colorCircles.png';
import CallMadeIcon from '@material-ui/icons/CallMade';

const Portfolio = () => {
  const projectsData = useStaticQuery(graphql`
    query {
      allContentfulProjectPost (
        sort: {
          fields: publishedDate,
          order: DESC
        }
      ){
        edges {
          node {
            projectTitle
            slug
            techStack
            githubLink
            publishedDate(fromNow:true)
            projectImage {
              title
              file {
                url
              }
            }
          }
        }
      }
    }
  `);

  // <div className='work'>
  //   <figure className='workImg'>
  //     <img src='./public/assets/comicCloud.png' />
  //     <figcaption>
  //       <a href='https://comicproject-b8126.firebaseapp.com/' target='_blank'>
  //         <i className='fas fa-external-link-square-alt'></i>
  //         <p>View Live</p>
  //       </a>
  //     </figcaption>
  //   </figure>
  //   <div className='workDescription'>
  //     <h1>Comic Cloud</h1>
  //     <ul>
  //       <li>React</li>
  //       <li>Firebase</li>
  //       <li>Sass</li>
  //       <li>
  //         <a href='http://github.com/sandyclause/comicVine' target='_blank'>View on GitHub</a>
  //       </li>
  //     </ul>
  //   </div>
  // </div>
  return (
    <section className='portfolioSection' id='work'>
      <div className='wrapper'>
        <div className='sectionTitleContainer'>
          <h1 className='sectionTitle'>Portfolio</h1>
        </div>
        <div className='workContainer'>
          {
            projectsData.allContentfulProjectPost.edges.map((edge, index) => {
              const projectData = edge.node;
              const githubLink = projectData.githubLink;
              const projectTitle = projectData.projectTitle;
              const techStack = projectData.techStack;
              const imageUrl = projectData.projectImage.file.url;
              const imageTitle = projectData.projectImage.title;

              return (
                <div className='work' key={index}>
                  <figure className='workImg'>
                    <img src={imageUrl} alt={imageTitle} />
                    <figcaption>
                      <a href={githubLink} target='_blank'>
                        <CallMadeIcon className='icon' />
                        <p>View Live</p>
                      </a>
                    </figcaption>
                  </figure>
                  <div className='workDescription'>
                    <h1>{projectTitle}</h1>
                    <ul>
                      <li>
                        {techStack}
                      </li>
                      <li>
                        <a href='http://github.com/sandyclause/comicVine' target='_blank'>View on GitHub</a>
                      </li>
                    </ul>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Portfolio;