import * as React from 'react'
import { Link } from 'gatsby'

const Pager = ({ pageContext }) => {
  const {
    previousPagePath,
    nextPagePath,
    humanPageNumber,
    numberOfPages,
  } = pageContext

  return (
    <nav>
    {previousPagePath ? (
      <Link to={previousPagePath}>
        <button>
          Prev
        </button>
      </Link>
    ) : null}
    {numberOfPages > 1 && (
      <span> Page {humanPageNumber} of {numberOfPages} </span>
    )}
    {nextPagePath && (
      <Link to={nextPagePath}>
        <button>
          Next
        </button>
      </Link>
    )}
    </nav>
  )
}

export default Pager
