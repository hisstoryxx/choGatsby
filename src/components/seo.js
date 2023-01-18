import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Seo = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
  <>
    <meta name="google-site-verification" content="I98KUtLYiOTnB2wyujGfa-ua7YAS6Z5v5fFe_zQVgPo" />
    <title>{title} | {data.site.siteMetadata.title}</title>
    </>
  )
}

export default Seo