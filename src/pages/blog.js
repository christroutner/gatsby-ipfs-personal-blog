/*
  Markdown implementation:
  https://www.gatsbyjs.org/docs/adding-a-list-of-markdown-blog-posts/
*/

import React from "react"
import PostLink from "../components/post-link"
import { graphql } from 'gatsby'

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  console.log(`edges: ${JSON.stringify(edges,null,2)}`)

  const Posts = edges
    // Filter Blog posts. Posts have dates. Research pages don't.
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return <div>{Posts}</div>
}

export default IndexPage

export const pageQuery = graphql`
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
