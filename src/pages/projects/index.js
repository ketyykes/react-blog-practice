import React from 'react'
import Layout from '../../components/Layout'
import {graphql, Link} from 'gatsby'
const index = ({data}) => {
    console.log(data);
    const projects = data.allMarkdownRemark.nodes
    console.log(projects)
   
    return (
        <>
            <Layout>
                <h1>
                這裡假設有很多project
                </h1>
                <h1>
                這裡假設有很多project
                </h1>
                <h1>
                這裡假設有很多project
                </h1>
                <div>
                    <Link to="/project/"></Link>
                    {projects.map(el =>(
                        <Link to={"/projects/" + el.frontmatter.slug} key={el.id}>
                            <div>
                                <h3>{el.frontmatter.title}</h3>
                                <p>{el.frontmatter.stack}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </Layout>
        </>
    )
}

export default index

export const query = graphql
`query Hd {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          stack
          slug
        }
        id
      }
    }
  }
`
