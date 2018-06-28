require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Wouter Landuydt`,
    email: `wouter.landuydt@gmail.com`,
    author: 'Wouter Landuydt <wouter.landuydt@gmail.com>',
    description:
      'Portfolio of Wouter Landuydt. Devine 2018 alumni. Front-end developer with eye for design.',
    coverImage: '',
    url: 'https://www.wouterlanduydt.be',
    keywords: 'portfolio, devine, front-end, developer, designer, antwerp',
  },
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID || '',
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`merriweather`, `open sans`],
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/assets/favicon.png',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: true,
        },
      },
    },
  ],
}
