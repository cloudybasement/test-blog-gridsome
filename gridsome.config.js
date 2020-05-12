// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Gridsome Netlify CMS Starter",
  siteDescription: "A sample project using Gridsome Netlify CMS & Tailwind CSS",
  siteUrl: `${process.env.SITE_URL}`,
  pathPrefix: "",
  transformers: {
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link",
      plugins: [
        // ...global plugins
      ],
    },
  },

  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/posts/**/*.md",
        typeName: "Post",
        route: "/blog/:slug",
        remark: {
          plugins: [],
        },
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: "Tag",
            route: "/tag/:id",
            create: true,
          },
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/faq/**/*.md",
        typeName: "Faq",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/pages/**/*.md",
        typeName: "SitePage",
        remark: {
          plugins: [],
        },
      },
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`,
      },
    },
    {
      use: "gridsome-plugin-tailwindcss",
      options: {
        tailwindConfig: "./tailwind.config.js",
        purgeConfig: {},
        presetEnvConfig: {},
        shouldPurge: true,
        shouldImport: true,
        shouldTimeTravel: true,
      },
    },
    {
      use: "gridsome-plugin-rss",
      options: {
        contentTypeName: "Post",
        feedOptions: {
          title: `Gridsome Netlify CMS Starter > ${process.env.SITE_URL}`,
          feed_url: `${process.env.SITE_URL}/rss.xml`,
          site_url: `${process.env.SITE_URL}`,
        },
        feedItemOptions: (node) => ({
          title: node.title,
          description: node.summary,
          url: `${process.env.SITE_URL}/${node.path}`,
          author: "Fullstack Rocket",
          date: node.date,
        }),
        output: {
          dir: "./static",
          name: "rss.xml",
        },
      },
    },
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        cacheTime: 600000, // default
      },
    },
  ],
};
