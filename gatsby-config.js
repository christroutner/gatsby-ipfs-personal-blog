module.exports = {
  siteMetadata: {
    title: "Trout's Blog",
    author: "Chris Troutner",
    description: "An IPFS-based blog"
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
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "./markdown",
        name: "markdown-pages"
      },
    },
    "gatsby-transformer-json",
    "gatsby-transformer-remark"
  ],
}
