const ipfsPrefix = process.argv.find(val => val === '--prefix-paths')

const ipfsConfig = [
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
    resolve: 'gatsby-source-filesystem',
    options: {
      path: './src/data/',
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: './markdown',
      name: 'markdown-pages',
    },
  },
  'gatsby-transformer-json',
  'gatsby-transformer-remark',
  'gatsby-plugin-sharp',
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            // It's important to specify the maxWidth (in pixels) of
            // the content container as this plugin uses this as the
            // base for generating different widths of each image.
            maxWidth: 800,
            linkImagesToOriginal: true,
            // sizeByPixelDensity: true,
            showCaptions: true,
          },
        },
      ],
    },
  },
]

const normalConfig = [
  'gatsby-plugin-react-helmet',
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: 'gatsby-starter-default',
      short_name: 'starter',
      start_url: '/',
      background_color: '#663399',
      theme_color: '#663399',
      display: 'minimal-ui',
      icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
    },
  },
  'gatsby-plugin-sass',
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: './src/data/',
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: './markdown',
      name: 'markdown-pages',
    },
  },
  'gatsby-transformer-json',
  'gatsby-transformer-remark',
  'gatsby-plugin-sharp',
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            // It's important to specify the maxWidth (in pixels) of
            // the content container as this plugin uses this as the
            // base for generating different widths of each image.
            maxWidth: 800,
            linkImagesToOriginal: true,
            // sizeByPixelDensity: true,
            showCaptions: true,
          },
        },
      ],
    },
  },
]

const exportObj = {
  siteMetadata: {
    title: "Trout's Blog",
    author: 'Chris Troutner',
    description: 'An IPFS-based blog',
  },
}

// Build for IPFS
if (ipfsPrefix) {
  exportObj.pathPrefix = '__GATSBY_IPFS_PATH_PREFIX__'
  exportObj.plugins = ipfsConfig
} else {
  // Build for normal
  exportObj.plugins = normalConfig
}

module.exports = exportObj
