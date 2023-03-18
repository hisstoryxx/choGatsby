
// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import {
  title,
  titleContainer,
  heart,
  card, 
  outside,
  inside, 
  front, 
  back, 
  cake, 
  topLayer, 
  middleLayer, 
  bottomLayer, 
  candle,
  imageH,
  imageU,
  lastContainer,
} from '../styles/home.module.css'
import Confetti from '../components/Confetti'

// Step 2: Define your component
const IndexPage = ({data}) => {

  
  return (
    <Layout pageTitle="">
      <h1></h1>
      <div className={titleContainer}>
        
      <p className={title}>사랑하는 우리 또따에게</p>
      <p className={heart}>❤️&#127873;</p>
      </div>
      {/* <p>안녕하세요 최초로 입니다</p>

      <StaticImage
        alt="ditto"
        src="../images/love.jpeg"
      /> */}
      
     
      
      <div className={card}>
        <div className={outside}>
          
          <div className={front}>
            <p>Happy birthday</p>
            <div className={cake}>
              <div className={topLayer}>
              </div>
              <div className={middleLayer}>
              </div>
              <div className={bottomLayer}>
              </div>
              <div className={candle}>
                </div>
            </div>
          </div>
          <div className={back}>
            <div className={imageU}>
          <StaticImage
        alt="ditto"
        src="../images/love.jpeg"
        width="100%"
        height="100%"
        objectFit="contain"
        
        
      /> 
      </div>
          </div>
        </div>
          <div className={inside}>
          <div className={imageH}>
          <StaticImage
          alt="ditto"
          src="../images/silver1.jpeg"
          
          objectFit="cover"
          />
          </div> 
            <p>안녕 은별아 생일축하해.
              
               </p>

               <div className={lastContainer}>

               <p>
                 2023년 3월 18일
               </p>
               <p>
                 초로가
               </p>
               </div>
            
            </div>

       
      </div>
      
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
export const Head = () => <Seo title="귀욤뽀짝 또따"/>


// Step 3: Export your component
export default IndexPage

