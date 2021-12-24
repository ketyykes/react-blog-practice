import {Link , graphql ,useStaticQuery} from 'gatsby'
import React from 'react'
import * as styles from '../styles/navbar.module.scss'
const Navbar = () => {
    const data = useStaticQuery(graphql`
        query HomePageQuery {
            site {
            siteMetadata {
                title
            }
        }
        }
        `
    )
    const {title} = data.site.siteMetadata
    return (
        <nav className={styles.navBar}>
            <h1>
                {title}<img src="/images/gitLogo.jpg" alt="gitLogo" />
            </h1>
            <div className="link">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
            </div>
        </nav>
    )
}

export default Navbar
