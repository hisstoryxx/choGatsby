
// Step 1: Import React
import React, { useEffect, useState} from 'react'
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
  inputs,
} from '../styles/home.module.css'
import Confetti from '../components/Confetti'

// Step 2: Define your component
const IndexPage = ({data}) => {
  const [text,setText] = useState("");
  const [open, setOpen] = useState(false);
  const [check, setCheck] = useState(false);

  const isClick = () => {
    setOpen(!open)
  }

  const isSilver = () =>{
    if(text == "200325"){
      setCheck(true);
      setOpen(false);
    }
    console.log(check)
  }
  return (
    <Layout pageTitle="" check={check}>
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
            {!check && <p onClick={isClick}>안녕 은별아 생일축하해.
              
               </p>
            }
              {open && 
              <>
              <p>
               <input type="text" placeholder={"비밀번호를 입력해주세요"}
                   value={text}
                   onChange={(e) => {setText(e.target.value)}}/>
               </p>
               <p onClick={isSilver}>
                 확인하기
                 </p>
                 </>
              }
              {check && 
              <p>안녕 은별아 생일축하해, 우리 애기가 맨날 편지편지 노래 불렀는데 한번 새롭게 준비해봤어. 
              항상 우리 이쁜 은별이 주신 하나님에게도 감사하고 잘 키워주신 부모님들께도 감사한거 같아.
              벌써 은별이 생일을 세번째 축하해주는 동안 우리 이쁘게 만났다 그치? 한편으로는 ㅠㅠ 
              내가 잘 못 챙겨준거 같아서 미안한 마음도 있어.
              그래도 앞으로 특별한 날만 행복한게 아니구 평범한 날들까지 행복하게 해줄게. 
              가끔 서로 모진 말고 하고 아프게도 하지만 그런 시간들도 다 서로 사랑하기 때문에 그런것 같기도 한것 같아.
              정신없이 서로 살다보니 어느덧 벌써 3월이구 자기 생일이네. 곧 기대하던 우리 결혼식이 있는 11월도 얼마 안 남았어.  
              한걸음 한걸음 주와 같이 은혜 안에서 서로 사랑하면서 나아갈 날들이 기대되구 기다려져.
              항상 사랑하구 고마워.

               </p>
              }
              {/* <div  className={inputs} >
               <input type="text" placeholder={"비밀번호를 입력해주세요"}
                   value={text}
                   onChange={(e) => {setText(e.target.value)}}/>
              </div> */}
               

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

