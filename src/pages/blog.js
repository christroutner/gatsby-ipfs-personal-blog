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
  const Posts = edges
    // You can filter your posts based on some criteria
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
