import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMdx
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <Layout>
      <h1>{tagHeader}</h1>
      <ul>
        {edges.map(({ node }) => {
        const { slug } = node.frontmatter
        const { title } = node.frontmatter
        return (
        <li key={slug}>
          <Link to={`/blog/${slug}`}>
	    {title}
	  </Link>
        </li>
        )
        })}
      </ul>
      <Link to="/tags">All tags</Link>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($tag: String) {
    allMdx(
      limit: 1000
      sort: {frontmatter: {date: DESC}}
      filter: {frontmatter: {tags: {in: [$tag]}}}
    ) {
      edges {
	node {
          frontmatter {
	    title
	    date(formatString: "MMMM D, YYYY")
	    tags
            slug
          }
	  id
	  excerpt
	}
      }
      totalCount
    }
  }
`

export const Head = () => <Seo />

export default Tags
