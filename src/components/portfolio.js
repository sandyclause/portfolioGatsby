import { useStaticQuery } from 'gatsby';
import * as React from 'react';
import CallMadeIcon from '@material-ui/icons/CallMade';
import { graphql } from 'gatsby';

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
            projectLink
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

  return (
    <section className='portfolioSection' id='work'>
      <div className='wrapper'>
        <div className='sectionTitleContainer'>
          <h1 className='sectionTitle'>Portfolio</h1>
        </div>
        <div className='workContainer'>
          {
            projectsData.allContentfulProjectPost.edges.map((edge, index) => {
              const projectDataNode = edge.node;
              const githubLink = projectDataNode.githubLink;
              const projectLink = projectDataNode.projectLink;
              const projectTitle = projectDataNode.projectTitle;
              const techStack = projectDataNode.techStack;
              const imageUrl = projectDataNode.projectImage.file.url;
              const imageTitle = projectDataNode.projectImage.title;

              return (
                <div className='work' key={index}>
                  <figure className='workImg'>
                    <img src={imageUrl} alt={imageTitle} />
                    <figcaption>
                      <a href={projectLink} target='_blank'>
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
                        <a href={githubLink} target='_blank'>View on GitHub</a>
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