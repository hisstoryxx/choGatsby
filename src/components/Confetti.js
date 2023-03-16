import React, { useEffect, useState} from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import ReactConfetti from 'react-confetti';
import {cele} from './layout.module.css'
  


const Confetti = ({ pageTitle, children }) => {

    
    

   const [windowDimension, setDimension] = useState({
       
    width:  typeof window !== 'undefined' &&  window.innerWidth , height: typeof window !== 'undefined' &&  window.innerHeight});
    
    const detectSize = () => {
        if (typeof window !== 'undefined') {
        setDimension({width: window.innerWidth, height: window.innerHeight});
        }
    }    

    useEffect(() => {
        if (typeof window !== 'undefined') {
        window.addEventListener('resize', detectSize);
        return () => {
            window.removeEventListener('resize', detectSize);
        }
    }
    },[windowDimension]);


  return (

    
    <div >
      <ReactConfetti
        width={windowDimension.width}
        height = {windowDimension.height}
        tweenDuration={1000}
      />
    
    </div>
  )
}

export default Confetti