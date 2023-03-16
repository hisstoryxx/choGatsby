import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle,
    horizontalunderLine
  } from './layout.module.css'
  
import Confetti from './Confetti'

const Layout = ({ pageTitle, children }) => {

    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }`

    )

    


  return (

    
    <div className = {container}>
       <Confetti/>
        <header className = {siteTitle}>{data.site.siteMetadata.title}</header>
      {/* <nav>
        <ul className={navLinks}>
          <div id = {horizontalunderLine}> </div>
          <li className={navLinkItem}>
            
              <Link 
                
                to="/" 
                className = {navLinkText}>
                Home
                </Link>
              
            </li>
          <li className={navLinkItem}>
              <Link 
              
              to="/about" 
                className= {navLinkText}>
                  About
                  </Link></li>
          <li className={navLinkItem}>
            <Link 
            
            to="/blog" className={navLinkText}>
              Blog
            </Link>
          </li>
          
        </ul>
      </nav> */}
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        
        {children}
      </main>
    </div>
  )
}

export default Layout