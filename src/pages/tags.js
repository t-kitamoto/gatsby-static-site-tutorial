import * as React from 'react'
import { Link, graphql } from 'gatsby'
import kebabCase from 'lodash/kebabCase'
import Layout from '../components/layout'
import Seo from '../components/seo'

const TagsPage = ({
  data: {
    allMdx: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <h1>Tags</h1>
    <ul>
      {group.map(tag => (
        <li key={tag.fieldValue}>
          <Link to={`/tag/${kebabCase(tag.fieldValue)}/`}>
            {tag.fieldValue} ({tag.totalCount})
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(limit: 1000) {
      group(field: { frontmatter: { tags: SELECT }}) {
        fieldValue
        totalCount
      }
    }
  }
`

export const Head = () => <Seo title="Tags" />

export default TagsPage
