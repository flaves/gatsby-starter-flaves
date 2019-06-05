require('dotenv').config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Opeah`,
    description: `Gatsby starter for personal project.`,
    author: `@opeah`,
    siteUrl: `https://www.example.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-opeah`,
        short_name: `opeah`,
        start_url: `/`,
        background_color: `#0F111A`,
        theme_color: `#0F111A`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    // {
    //   resolve: `gatsby-source-contentful`,
    //   options: {
    //     spaceId: ``,
    //     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    //   },
    // },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: ``,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify`,
  ],
};
