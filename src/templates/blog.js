import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Pager from '../components/pager'
import kebabCase from 'lodash/kebabCase'

const BlogPage = ({ data, pageContext }) => {
  return (
    <Layout pageTitle="Blog">
      {
	data.allMdx.nodes.map((node) => (
	  <article key={node.id}>
            <h2>
	      <Link to={`/blog/${node.frontmatter.slug}`}>{node.frontmatter.title}</Link>
	    </h2>
	    <Link to={`/blog/${node.frontmatter.slug}`}>
	      <GatsbyImage
		image={getImage(node.frontmatter.hero_image)}
		      alt={node.frontmatter.hero_image_alt}
	      />
	    </Link>
	    <span>Posted: {node.frontmatter.date} </span>
	    <span>
	      Tags:
	      {node.frontmatter.tags.map(
		(tag) => tag && (
		  <Link
		    to={`/tag/${kebabCase(tag)}`}>#{tag}
		  </Link>
		)
	      )}
	    </span>
	    <p>{node.excerpt}</p>
	  </article>
	))
      }
      <Pager pageContext={pageContext} />
    </Layout>
  )
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { frontmatter: { date: DESC } }
      skip: $skip
      limit: $limit
    ) {
      nodes {
        frontmatter {
	  title
          date(formatString: "MMMM D, YYYY")
	  slug
	  tags
	  hero_image_alt
	  hero_image {
	    childImageSharp {
	      gatsbyImageData
	    }
	  }
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => <Seo title="Blog" />

export default BlogPage
