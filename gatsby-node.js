const path = require(`path`)
const { paginate } = require(`gatsby-awesome-pagination`)
const _ = require(`lodash`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  
  const result = await graphql(`
{
indexRemark: allMdx(
sort: {frontmatter: {date: DESC}},
limit: 1000
) {
    edges {
      node {
        frontmatter {
          slug
          tags
        }
      }
    }
  }
tagsGroup: allMdx(limit: 1000) {
    group(field: {frontmatter: {tags: SELECT}}) {
      fieldValue
    }
  }
}
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
     return
  }

  const indexTemplate = path.resolve("src/templates/blog.js")
  const index = result.data.indexRemark.edges

  paginate({
    createPage,
    items: index, 
    itemsPerPage: 2,
    pathPrefix: "/blog",
    component: indexTemplate,
  })

  const tagTemplate = path.resolve("src/templates/tags.js")
  const tags = result.data.tagsGroup.group

  if (tags.length > 0) {
    tags.forEach(tag => {
      createPage({
	path: `/tag/${_.kebabCase(tag.fieldValue)}/`,
	component: tagTemplate,
	context: {
          tag: tag.fieldValue,
	},
      })
    })
  }
}
