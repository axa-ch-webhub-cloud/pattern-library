const Path = require('path');
const siteConfig = require('./siteConfig');

module.exports = {
  siteMetadata: {
    title: siteConfig.name,
    description: siteConfig.description,
    siteUrl: `${siteConfig.url}${siteConfig.prefix}`,
    social: {
      githubUrl: siteConfig.githubUrl,
      slackUrl: siteConfig.slackUrl,
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: siteConfig.url,
      },
    },
    `gatsby-plugin-favicon`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/Page.tsx'),
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: Path.resolve(__dirname, `../src/`),
        name: 'axadesignsystem',
      },
    },
    'gatsby-plugin-sitemap',
    'gatsby-transformer-react-docgen',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
    'gatsby-plugin-typescript',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `source sans pro\:300,400,400i,700`, // you can also specify font weights and styles
        ],
        display: 'swap',
      },
    },
  ],
};
