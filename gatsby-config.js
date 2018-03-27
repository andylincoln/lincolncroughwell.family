const autoprefixer = require("autoprefixer");

module.exports = {
  siteMetadata: {
    title: 'Lincoln Croughwell Wedding',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "img",
        path: `${__dirname}/src/images`
      }
    },
    // {
		// 	resolve: "gatsby-source-filesystem",
		// 	options: {
		// 		name: "img",
		// 		path: `${__dirname}/static/assets`
		// 	}
		// },
    {
			resolve: `gatsby-plugin-postcss-sass`,
			options: {
				postCssPlugins: [autoprefixer()]
			}
		},
		"gatsby-transformer-sharp",
		"gatsby-plugin-sharp",
		// Netlify must be last
		{
			resolve: `gatsby-plugin-netlify`,
			options: {
				headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
				allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
				mergeSecurityHeaders: true, // boolean to turn off the default security headers
				mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
				mergeCachingHeaders: true, // boolean to turn off the default caching headers
				transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
				generateMatchPathRewrites: true // boolean to turn off automatic creation of redirect rules for client only paths
			}
		}
  ],
};
