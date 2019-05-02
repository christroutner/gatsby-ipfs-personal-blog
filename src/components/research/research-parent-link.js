/* eslint-disable */
/*
  Creates list of links for research page.
*/

import React from 'react'

const ParentLink = ({ parent }) => {

  return (
    <li>
      <a href="#">{parent} </a>
      <a href="#" className="icon fa-chevron-left"></a>
    </li>
  )
}

export default ParentLink
