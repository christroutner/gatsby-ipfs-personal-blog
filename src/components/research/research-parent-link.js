/* eslint-disable */
/*
  Creates list of links for the Research page.
*/

import React from 'react'

class ParentLink extends React.Component {
  constructor(props) {
    super(props)

    this.parent = props.parent
    this.edges = props.edges
  }

  async clickHandlerParent(event) {
    event.preventDefault()

    console.log(`${event.target.dataset.parent} clicked!`)
  }

  render() {
    return (
      <li>
        <a href="#" data-parent={this.parent} onClick={this.clickHandlerParent}>{this.parent} </a>
        <a href="#" className="icon fa-chevron-left" />
      </li>
    )
  }
}

/*
const ParentLink = ({ parent }) => {

  return (
    <li>
      <a href="#" >{parent} </a>
      <a href="#" className="icon fa-chevron-left"></a>
    </li>
  )
}
*/

export default ParentLink
