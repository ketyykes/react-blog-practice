import React from "react"
import Layout from "../components/Layout"
import {graphql} from 'gatsby'

export default function ProjectTemplate({data}) {
    // console.log(data);
    const {html} = data.markdownRemark
    const {title,stack} =  data.markdownRemark.frontmatter
    const {originalImg} = data.markdownRemark.frontmatter.ImageHD.childImageSharp.fluid;
  return (
    <Layout>
      <div>
        <h1>{title}</h1>
        <h3>{stack}</h3>
        <div dangerouslySetInnerHTML = {{__html: html}} />
        <img src={originalImg} alt="" />
      </div>
    </Layout>
  )
}

export const query = graphql`
query ProjectTemplate($slug: String) {
  markdownRemark(frontmatter: {slug: {eq: $slug}}) {
    html
    frontmatter {
      stack
      title
      ImageHD {
        childImageSharp {
          fluid (maxWidth:590){
            originalImg
          }
        }
      }
    }
  }
}
`


