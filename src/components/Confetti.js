import React, { useEffect, useState} from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import ReactConfetti from 'react-confetti';
import {cele} from './layout.module.css'
  


const Confetti = ({ pageTitle, children }) => {

    if (typeof window === `undefined`) {
        return(<></>);
    }
    

    
    

   const [windowDimension, setDimension] = useState({
       
    width: window.innerWidth , height:  window.innerHeight});
    
    const detectSize = () => {
        
        setDimension({width:  window.innerWidth, height: window.innerHeight});
        
    }    

    useEffect(() => {
        
        window.addEventListener('resize', detectSize);
        return () => {
         window.removeEventListener('resize', detectSize);
        
    }
    },[windowDimension]);


  return (    
    < >
    
      <ReactConfetti
        width={windowDimension.width}
        height = {windowDimension.height}
        tweenDuration={1000}
      />
    
    </>
  )
}

export default Confetti