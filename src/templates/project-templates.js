import React from "react"
import Layout from "../components/Layout"
import {graphql} from 'gatsby'

export default function ProjectTemplate({data}) {
    const {html} = data.markdownRemark
    const {title,stack} =  data.markdownRemark.frontmatter
  return (
    <Layout>
      <div>
        <h1>{title}</h1>
        <h3>{stack}</h3>
        <div dangerouslySetInnerHTML = {{__html: html}} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectTemplate($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
      }
    }
  }
`
