module.exports = {
  siteMetadata: {
    title: `Kinloch`,
    description: `Gatsby/Graphql Boilerplate for sourcing data from WP`,
    author: `Udig`,
    siteUrl: `https://kinloch.udigstudio.com`,
  },

  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `http://localhost:8888/kinloch/code/kinloch-wp-2021/graphql`,
        verbose: true,
        useACF: true,
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/media",
          "**/tags",
          "**/taxonomies",
          "**/users",
          "**/menus"
        ],
        schema: {
          queryDepth: 5,
          typePrefix: `Wp`,
          timeout: 30000,
        },

        develop: {
          nodeUpdateInterval: 3000,
          hardCacheMediaFiles: false,
        },

        production: {
          hardCacheMediaFiles: false,
        },

        debug: {
          // these settings are all the defaults,
          // remove them if you'd like
          graphql: {
            showQueryOnError: false,
            showQueryVarsOnError: true,
            copyQueryOnError: true,
            panicOnError: true,
            // a critical error is a WPGraphQL query that returns an error and no response data. Currently WPGQL will error if we try to access private posts so if this is false it returns a lot of irrelevant errors.
            onlyReportCriticalErrors: true,
          },
        },

        // fields can be excluded globally.
        // this example is for wp-graphql-gutenberg.
        // since we can get block data on the `block` field
        // we don't need these fields
        
        excludeFields: [`blocksJSON`, `saveContent`],
        type: {
          Post: {
            limit:
              process.env.NODE_ENV === `development`
                ? // Lets just pull 50 posts in development to make it easy on ourselves.
                  50
                : // and we don't actually need more than 5000 in production for this particular site
                  5000,
          },

          // this shows how to exclude entire types from the schema
          // these examples are for wp-graphql-gutenberg
          CoreParagraphBlockAttributes: {
            exclude: true,
          },

          CoreParagraphBlockAttributesV2: {
            exclude: true,
          },

          CorePullquoteBlockAttributes: {
            exclude: true,
          },
        },
      },
    },

    // Highlights
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-mdx`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    // Gatsby plugin s3
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: `kinloch.udigstudio.com`,
      },
    },

    // Gatsby Plugin Manifest
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },

    // Gatsby Souce Filesystem - Images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        // path: `./src/images/`,
        path: `${__dirname}/src/images`,
      },
      __key: `images`,
    },

    // Gatsby Souce Filesystem - Pages
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        // path: `./src/pages/`,
        path: `${__dirname}/src/pages`,
      },
      __key: `pages`,
    },
    
  ],
};
