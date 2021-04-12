let env = process.env.NODE_ENV || 'development';

// This adds dotenv (for storing environment variables) to gatsby
require('dotenv').config({path: `./.env.${env}`});

module.exports = {
  siteMetadata: {
    title: "Sandy Tian Portfolio",
    siteUrl: 'https://www.sandytian.ca/',
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: `${process.env.CONTENTFUL_SPACE_ID}`,
        accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
    },
    "gatsby-plugin-sass",
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
