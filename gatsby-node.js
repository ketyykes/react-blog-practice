const path = require('path')
const util = require('util')

exports.createPages = async({graphql,actions})=>{
    const { data } = await graphql(`
        query ProjectsPage {
            allMarkdownRemark {
            nodes {
                frontmatter {
                slug
                }
            }
            }
        } 
    `)
    // console.log(util.inspect(data, false, null, true))
    data.allMarkdownRemark.nodes.forEach(node=>{
          console.log(util.inspect(node, false, null, true))
        actions.createPage({
            path: '/projects/' + node.frontmatter.slug,
            component : path.resolve('./src/templates/project-templates.js'),
            context: {slug :node.frontmatter.slug}
        })
    })
}