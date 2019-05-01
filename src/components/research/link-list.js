/* eslint-disable */
/*
  Creates list of links for research page.
*/

import React from 'react'
import PostLink from '../post-link'
import { StaticQuery, graphql } from 'gatsby'

// Query markdown
const componentQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`


class LinkList extends React.Component {
  constructor(props) {
    super(props)
  }

  // This actually renders the component.
  componentJSX = (data) => {
    console.log(`data: ${JSON.stringify(data,null,2)}`)

    const edges = data.allMarkdownRemark.edges

    const Posts = edges
      // Filter Blog posts. Posts have dates. Research pages don't.
      .filter(edge => !edge.node.frontmatter.date)
      .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

    return <div>{Posts}</div>
  }

  render() {
    return(
      <StaticQuery query={componentQuery} render={this.componentJSX} />
    )
  }
}
/*
const LinkList = ({ data }) => {
  console.log(`data: ${JSON.stringify(data,null,2)}`)
  //console.log(`edges: ${JSON.stringify(edges,null,2)}`)

  const Posts = edges
    // Filter Blog posts. Posts have dates. Research pages don't.
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return <div>{Posts}</div>
}
*/

export default LinkList
