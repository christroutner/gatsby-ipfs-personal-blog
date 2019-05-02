/* eslint-disable */
/*
  Creates list of links for research page.
*/

import React from 'react'
import PostLink from '../post-link'
import { StaticQuery, graphql } from 'gatsby'
import ParentLink from './research-parent-link'

// Query markdown
// Dev Note: This can not be moved into the component Class.
const componentQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            title
            date
            root
            path
            parent
          }
          fileAbsolutePath
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
    //console.log(`data: ${JSON.stringify(data,null,2)}`)

    const edges = data.allMarkdownRemark.edges

    // Filter Blog posts. Posts have dates. Research pages don't.
    const researchPosts = edges.filter(edge => !edge.node.frontmatter.date)
    //console.log(`researchPosts: ${JSON.stringify(researchPosts,null,2)}`)

    const parentItems = this.getResearchParents(researchPosts)
    //console.log(`parentItems: ${JSON.stringify(parentItems,null,2)}`)

    const Posts = parentItems
      .map(parent => <ParentLink key={parent} parent={parent} edges={researchPosts} />)

    return <div>{Posts}</div>
  }

  render() {
    return(
      <ul>
        <StaticQuery query={componentQuery} render={this.componentJSX} />
      </ul>
    )
  }

  // Given an array of research items, it returns an array of research topic
  // parents.
  getResearchParents(items) {
    const researchParents = []

    for(let i=0; i < items.length; i++) {
      const thisItem = items[i].node.frontmatter
      const thisParent = thisItem.parent

      if(researchParents.indexOf(thisParent) === -1)
        researchParents.push(thisParent)
    }

    return researchParents
  }
}

export default LinkList
