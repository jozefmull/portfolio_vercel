import React, {useRef, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { animateElementsOut, animOutTl, animateHomeButtons} from '../Helpers/GsapHelpers'

import styles from '../Css/Home.module.css'

const HomeButtons = () => {
  const navigate = useNavigate()
  const refBtnWrap = useRef<HTMLDivElement>(null)

  // ANIMATE BTNS IN ON INITIAL RENDER
  useEffect(() => {
    // @ts-ignore: Object is possibly 'null'
    animateHomeButtons([...refBtnWrap.current.children])
  }, [])

  /**
   * HANDLE ANIMATION ON CLICK OF A BUTTON THEN REDIRECT TO CLICKED LINK URL
   * @param e 
   */
  const handleBtnLinkClick = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    const target = e.target as HTMLAnchorElement;

    animateElementsOut()

    setTimeout(() => {
      navigate(`/${target.href.split('/').pop()}`)
    }, (animOutTl.duration() * 1000) + 300)
  }
  
  return (
    <div ref={refBtnWrap} className={styles.btnWrapper}>
        <button id='quitFadeLeft'><Link to='/portfolio' onClick={(e) => handleBtnLinkClick(e)}>PORTFOLIO</Link></button> 
        <button id='quitFadeLeft'><Link to='/contact' onClick={(e) => handleBtnLinkClick(e)}>CONTACT</Link></button> 
      </div>
  )
}

export default React.memo(HomeButtons)