require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Wouter Landuydt`,
    email: `wouter.landuydt@gmail.com`,
    author: 'Wouter Landuydt <wouter.landuydt@gmail.com>',
    description:
      'Portfolio of Wouter Landuydt. Devine 2018 graduate. Front-end developer with eye for design.',
    coverImage:
      'https://images.ctfassets.net/9ivj8jmhqi2h/6BDeJkiPvimq4qoUqYAAOS/f201b9c16891cd6b971d977b8ce51e21/sos_01.jpg',
    url: 'https://www.wouterlanduydt.be',
    keywords: 'portfolio, devine, front-end, developer, designer, antwerp',
  },
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Wouter Landuydt',
        short_name: 'Wouter',
        start_url: '/',
        background_color: '#000000',
        theme_color: '#ffffff',
        display: 'minimal-ui',
        icon: 'src/assets/icon.png',
      },
    },
    'gatsby-plugin-offline',
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
