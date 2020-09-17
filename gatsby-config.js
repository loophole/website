require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `loophole`,
    description: `Create secure tunnel to anything in your local network so people can see it`,
    author: `main.dev`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID || "none",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `product`,
        path: `${__dirname}/src/images/product`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content`,
        name: `markdown-pages`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/product/icon.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: "gatsby-theme-auth0",
      options: {
        domain: "owlsome.eu.auth0.com",
        clientID: "H24uj9EdQd5ud65qQYqAKFc3wVkB3qiH",
        redirectUri: "https://loophole.cloud",
        audience: "https://api.loophole.cloud", // Optional
        // responseType: process.env.AUTH0_RESPONSE_TYPE, // Optional
        // scope: process.env.AUTH0_SCOPE, // Optional
        callbackPath: "/auth/callback", // Optional
      },
    },
    `gatsby-plugin-client-side-redirect` // keep it in last in list
  ],
}
