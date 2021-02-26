import * as React from "react"
//import Layout from "../components/Layout"
import { graphql } from "gatsby"
import SEO from "../components/SEO"

export default function Page({ data }) {
  const page = data.allWpPage.nodes[0]
  console.log(page)
  return (
      <>
        <SEO title={page.title} />
        <h1>{page.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: page.content }} />
        <p>{page.testacf.subheadTitle}</p>
      </>
    
  )
}
export const query = graphql`
  query($slug: String!) {
    allWpPage(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        content
        testacf {
        fieldGroupName
        subheadTitle
        }
      }
    }
  }
`