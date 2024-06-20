module.exports = {
  siteMetadata: {
    title: `Gatsby Static Site Tutorial`,
    description: `This is a sample site for learning Gatsby.js.`,
    image: `/gatsby-icon.png`,
    siteUrl: `https://www.xxxxxxxxxxx.com`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    `gatsby-plugin-mdx`,
    `gatsby-transformer-sharp`,
  ],
};
