import React from "react"
import { graphql } from "gatsby"
//import Image from "gatsby-image"

export const query = graphql`
  query($slug: String!) {
    productsJson(slug: { eq: $slug }) {
      title
      description
      price
    }
  }
`

const Product = ({ data }) => {
  const product = data.productsJson

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.price}</p>
      <div dangerouslySetInnerHTML={{ __html: product.description }} />
    </div>
  )
}

export default Product
