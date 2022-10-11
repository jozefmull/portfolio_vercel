import React, {useRef, useEffect} from 'react'
import { Link } from 'react-router-dom'

import {gsap, Power4} from 'gsap'

import styles from '../Css/Home.module.css'

const HomeButtons = () => {
  const refBtnWrap = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // @ts-ignore: Object is possibly 'null'
    gsap.to([...refBtnWrap.current.children], {duration:0.3,  y:0, scale:1, opacity:1, ease:Power4.easeInOut, stagger:0.25, delay:2.5})
  }, [])
  
  return (
    <div ref={refBtnWrap} className={styles.btnWrapper}>
        <button><Link to='/portfolio'>PORTFOLIO</Link></button> 
        <button><Link to='/contact'>CONTACT</Link></button> 
      </div>
  )
}

export default React.memo(HomeButtons)