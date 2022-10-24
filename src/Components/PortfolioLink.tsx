import {useLocation, Link, useNavigate} from 'react-router-dom'

import { animateElementsOut, animOutTl } from '../Helpers/GsapHelpers'

import styles from '../Css/Nav.module.css'

const PortfolioLink = () => {
  let location = useLocation()
  let navigate = useNavigate()

  /**
   * ANIMATE ELEMENT OUT AND REDIRECT TO CLICKED LINK URL
   * @param e 
   */
  const clickHandle = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    
    animateElementsOut()

    setTimeout(() => {
      navigate(`/portfolio`)
    }, (animOutTl.duration() * 1000) + 300)
  }

  return (
    <>
      {/* DISPALY THIS ONLY ON PROJECT DETAILS PAGE */}
      {!location.pathname.includes('project') ? null : (
          <Link to='/portfolio' className={styles.header_portfolio_link} onClick={(e) => clickHandle(e)} id='quitFadeLeft' >
              <i style={{transform: 'translateY(-11px) translateX(-11px)'}}></i>
              <i style={{transform: 'translateY(-11px) translateX(11px)'}}></i>
              <i style={{transform: 'translateY(11px) translateX(-11px)'}}></i>
              <i style={{transform: 'translateY(0px) translateX(-11px)'}}></i>
              <i style={{transform: 'translateY(-11px) translateX(0px)'}}></i>
              <i style={{transform: 'translateY(11px) translateX(0px)'}}></i>
              <i style={{transform: 'translateY(0px) translateX(11px)'}}></i>
              <i style={{transform: 'translateY(0px) translateX(0px)'}}> </i>
              <i style={{transform: 'translateY(11px) translateX(11px)'}}></i>
          </Link>
      )}
    </>
  )
}

export default PortfolioLink