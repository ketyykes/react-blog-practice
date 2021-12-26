import React from 'react'
import Layout from '../components/Layout'

const About = ({data}) => {
    console.log(data)
    
    return (
        <>
            <Layout>
            <h1>
                About Page
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam corrupti expedita eum voluptatem reiciendis ullam accusamus fuga beatae quibusdam. Suscipit ea iusto facilis, debitis commodi voluptatem atque at vero aperiam!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam corrupti expedita eum voluptatem reiciendis ullam accusamus fuga beatae quibusdam. Suscipit ea iusto facilis, debitis commodi voluptatem atque at vero aperiam!
            </p>
            </Layout>
            
        </>
    )
}

export default About
