exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
  
    const docsTemplate = require.resolve(`./src/components/docs/page-formatter`)
  
    const result = await graphql(`
      {
        allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___slug] }
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `)
  
    // Handle errors
    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }
  
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: `/docs/${node.frontmatter.slug}`,
        component: docsTemplate,
        context: {
          // additional data can be passed via context
          slug: node.frontmatter.slug,
        },
      })
    });
  }