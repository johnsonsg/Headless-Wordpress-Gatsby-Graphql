import * as React from "react"
// import Layout from "../components/Layout"
import { graphql } from "gatsby"
import SEO from "../components/SEO"

export default function Post({ data }) {
  const post = data.allWpPost.nodes[0]
  console.log(post)
  return (
      <>
        <SEO title={post.title} />
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </>
   
  )
}
export const query = graphql`
  query($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        content
      }
    }
  }
`