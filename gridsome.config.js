// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Strapi Gridsome Blog",
  siteDescription: "A blog site made using Gridsome and Strapi",
  plugins: [
    {
      use: "@travisreynolds/gridsome-source-strapi",
      options: {
        apiURL: "http://localhost:1337",
        contentTypes: ["article", "category", "writer"],
        images: {
          paths: ["article.author.picture", "article.image", "writer.picture"],
          dir: "./src/assets/strapi",
          cache: true,
          key: "downloaded",
        },
      },
    },
  ],
};
