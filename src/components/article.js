import { useStaticQuery } from 'gatsby';
import * as React from 'react';
import colorCircles from '../assets/images/colorCircles.png';
import CallMadeIcon from '@material-ui/icons/CallMade';

const Article = () => {
  const articleData = useStaticQuery(graphql`
    query {
      allContentfulArticlePost (
        sort: {
          fields: publishedDate,
          order: ASC
        }
      ){
        edges {
          node {
            articleTitle
            articleDescription
            articleImage {
              title
              file {
                url
              }
            }
            publishedDate(formatString: "MMMM Do, YYYY")
            articleLink
          }
        }
      }
    }
  `);

  return (
    <section className='article' id='blog'>
      <div className='wrapper'>
        <div className='sectionTitleContainer'>
          <h1 className='sectionTitle'>My Articles</h1>
          <p className='sectionSubtitle'>Check out my most recent articles on Medium</p>
        </div>
        <div className='articleContainer'>
          {
            articleData.allContentfulArticlePost.edges.map((edge, index) => {
              const articleDataNode = edge.node;
              const articleTitle = articleDataNode.articleTitle;
              const articleDescription = articleDataNode.articleDescription;
              const articleImageData = articleDataNode.articleImage;
              const articleLink = articleDataNode.articleLink;
              const publishedDate = articleDataNode.publishedDate;

              const articleImageUrl = articleImageData.file.url;
              const articleImageTitle = articleImageData.title;

              return (
                <article className='articleCard' key={index}>
                  <div className='articleImg'>
                    <a href={articleLink} target='_blank'>
                      <img src={articleImageUrl} alt={articleImageTitle} />
                    </a>
                    <p className='articleDate'>{publishedDate ? publishedDate : 'Coming soon'}</p>
                  </div>
                  <div className='articleContentContainer'>
                    <p className='articleTitle'>{articleTitle}</p>
                    <p className='articleContent'>{articleDescription}</p>
                  </div>
                </article>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Article;