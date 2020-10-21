exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const docsTemplate = require.resolve(`./src/components/docs/page-formatter`);
  const blogTemplate = require.resolve(`./src/components/blog/page-formatter`);

  const formatters = {
    docs: docsTemplate,
    blog: blogTemplate
  }

  for (const type of Object.keys(formatters)) {
    const result = await graphql(`
    {
      allMarkdownRemark(
        filter: {frontmatter: {type: {eq: "${type}"}}}
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
  `);

    // Handle errors
    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`);
      return;
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: `/${type}/${node.frontmatter.slug}`,
        component: formatters[type],
        context: {
          // additional data can be passed via context
          slug: node.frontmatter.slug,
        },
      });
    });

  }

};
