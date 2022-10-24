import { useRef, useEffect }  from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { myRoutes } from '../assets/Routes'
import { getPreviousPage, getNextPage } from '../Helpers/Helpers'
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

  useEffect(() => {
    gsap.to('#arrow_right', {duration:0.2, right:0, ease:Power4.easeInOut, delay:2})
    gsap.to('#arrow_left', {duration:0.2, left:0, ease:Power4.easeInOut, delay:2})
  }, [])
  
  /**
   * FIND CURRENT / PREVIOUS / NEXT ROUTE INDEX 
   * @returns 
   */
  const findRouteIndex = () => {  
    // find index of current route
    const index = myRoutes.map(obj => obj.path).indexOf(location.pathname)
    // get previous page
    const prevPage = getPreviousPage(index - 1)
    // get next page
    const nextPage = getNextPage(index + 1)
    
    return {prevPage, index, nextPage}
  }

  const currentRoutes = findRouteIndex()

  /**
   * ANIMATE ARROWS ON CLICK AND REDIRECT TO GIVEN URL
   * @param e 
   */
  const arrowClickAnim = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    const target = e.target as HTMLAnchorElement;
    
    animateElementsOut()
    
    setTimeout(() => {
      navigate(`/${target.href.split('/').pop()}`)
    }, (animOutTl.duration() * 1000))
  }

  return (
    <>
      {/* IF WE HAVE PREVIOUS PAGE SHOW PREVIOUS ARROW */}
      {currentRoutes.prevPage !== undefined && ( 
        <NavLink to={currentRoutes.prevPage.path}
          id="arrow_left"
          ref={arrowLeft}
          className={`${styles.arrows_link} ${styles.arrowLeft}`}
          onClick={(e) => arrowClickAnim(e)}
          >
          <span ref={arrowLeftSpan}>{currentRoutes.prevPage.title}</span>
          <em></em>
        </NavLink>
      )}
      {/* IF WE HAVE NEXT PAGE SHOW PREVIOUS ARROW */}
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