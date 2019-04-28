module.exports = {
  siteMetadata: {
    title: "Gatsby IPFS Boilerplate Starter",
    author: "Chris Troutner",
    description: "A Gatsby.js V2 Starter based on Forty by HTML5 UP"
  },
  pathPrefix: '__GATSBY_IPFS_PATH_PREFIX__',
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-ipfs',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '__GATSBY_IPFS_PATH_PREFIX__',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "./src/data/",
      },
    },
    "gatsby-transformer-json",
  ],
}
