import { Children, useRef }  from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { myRoutes } from '../assets/Routes'
import { animateElementsOut, animOutTl } from '../Helpers/GsapHelpers'
import { gsap, Power4 } from 'gsap'

import styles from '../Css/Arrows.module.css'

const ArrowNavigation = () => {
  const location = useLocation()
  const navigate = useNavigate()

  let arrowLeft = useRef<HTMLAnchorElement>(null)
  let arrowRight = useRef<HTMLAnchorElement>(null)
  let arrowLeftSpan = useRef<HTMLSpanElement>(null)
  let arrowRightSpan = useRef<HTMLSpanElement>(null)

  const getPreviousPage = (id:number) => {
    return myRoutes.find((x, i) => i === id) 
  }
  const getNextPage = (id:number) => {
    return myRoutes.find((x, i) => i === id)  
  }
  const findRouteIndex = () => {  
    const index = myRoutes.map(obj => obj.path).indexOf(location.pathname)
    const prevPage = getPreviousPage(index - 1)
    const nextPage = getNextPage(index + 1)
    
    return {prevPage, index, nextPage}
  }

  const currentRoutes = findRouteIndex()

  const arrowClickAnim = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    const target = e.target as HTMLAnchorElement;
    
    animateElementsOut()
    gsap.to(arrowLeft.current, {duration:0.2, left:'-100'})
    gsap.to(arrowRight.current, {duration:0.2, right:'-100'})

    setTimeout(() => {
      navigate(`/${target.href.split('/').pop()}`)
      gsap.to(arrowLeft.current, {duration:0.2, left:0})
      gsap.to(arrowRight.current, {duration:0.2, right:0})

    }, (animOutTl.duration() * 1000) + 300)
  }
  
  return (
    <>
      {currentRoutes.prevPage !== undefined && ( 
        <NavLink to={currentRoutes.prevPage.path}
          id="arrow_left"
          ref={arrowLeft}
          className={`${styles.arrows_link} ${styles.arrowLeft}`}
          onClick={(e) => arrowClickAnim(e)}
          >
          <span ref={arrowLeftSpan}>{currentRoutes.prevPage.title}</span>
          <em ></em>                    
        </NavLink>
      )}
      {currentRoutes.nextPage !== undefined && ( 
        <NavLink to={currentRoutes.nextPage.path}
          id="arrow_right"
          ref={arrowRight}
          className={`${styles.arrows_link} ${styles.arrowRight}`}
          onClick={(e) => arrowClickAnim(e)}
          >
          <span ref={arrowRightSpan}>{currentRoutes.nextPage.title}</span>
          <em></em>
        </NavLink>
      )}
    </>
  )
}

export default ArrowNavigation