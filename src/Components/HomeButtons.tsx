import React, {useRef, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { animateElementsOut, animOutTl } from '../Helpers/GsapHelpers'
import {gsap, Power4} from 'gsap'

import styles from '../Css/Home.module.css'

const HomeButtons = () => {
  const navigate = useNavigate()
  const refBtnWrap = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // @ts-ignore: Object is possibly 'null'
    gsap.to([...refBtnWrap.current.children], {duration:0.3,  y:0, scale:1, opacity:1, ease:Power4.easeInOut, stagger:0.25, delay:2.5})
  }, [])

  const handleBtnLinkClick = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    const target = e.target as HTMLAnchorElement;

    animateElementsOut()

    setTimeout(() => {
      navigate(`/${target.href.split('/').pop()}`)
    }, (animOutTl.duration() * 1000))
  }
  
  return (
    <div ref={refBtnWrap} className={styles.btnWrapper}>
        <button id='quitFadeLeft'><Link to='/portfolio' onClick={(e) => handleBtnLinkClick(e)}>PORTFOLIO</Link></button> 
        <button id='quitFadeLeft'><Link to='/contact' onClick={(e) => handleBtnLinkClick(e)}>CONTACT</Link></button> 
      </div>
  )
}

export default React.memo(HomeButtons)