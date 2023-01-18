
// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

// Step 2: Define your component
const IndexPage = ({data}) => {
  return (
    <Layout pageTitle="Home Page">

      <p>안녕하세요 최초로 입니다</p>
      <p>은별이를 사랑하죠</p>

      <StaticImage
        alt="ditto"
        src="../images/love.jpeg"
      />
      {/* <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      /> */}
      
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`
// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="Home page"/>


// Step 3: Export your component
export default IndexPage

