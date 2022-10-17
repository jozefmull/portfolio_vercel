import {useEffect, useRef} from 'react'
import { NavLink } from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router-dom';
import {BsFillHexagonFill} from 'react-icons/bs'

import { gsap } from 'gsap'
import { DeclareNavTimeline, toggleTimeline, animateElementsOut, animOutTl } from '../Helpers/GsapHelpers'

import styles from '../Css/Nav.module.css'

const Nav = () => {
    let location = useLocation()
    let navigate = useNavigate()

    let animNavRef = useRef<HTMLElement>(null);
    let ulWrapRef = useRef<HTMLDivElement>(null);
    let navUlRef = useRef<HTMLUListElement>(null);

    let topArrRef = useRef<HTMLSpanElement>(null);
    let botArrRef = useRef<HTMLSpanElement>(null);
    let midArrRef = useRef<HTMLSpanElement>(null);

    let firstPolygonRef = useRef<HTMLSpanElement>(null);
    let secondPolygonRef = useRef<HTMLSpanElement>(null);
    let thirdPolygonRef = useRef<HTMLSpanElement>(null);

    let tlnav = gsap.timeline({paused: true, reversed: true})

    useEffect(() => {
        // @ts-ignore: Object is possibly 'null'
        DeclareNavTimeline(tlnav, animNavRef.current, ulWrapRef.current, [...navUlRef.current.children],topArrRef.current, midArrRef.current,botArrRef.current, firstPolygonRef.current, secondPolygonRef.current, thirdPolygonRef.current)
    }, [tlnav])

    const handleLinkClickAnimation = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
        e.preventDefault()

        const target = e.target as HTMLAnchorElement;

        if (target.href && !tlnav.isActive()) {
            if(`/${target.href.split('/').pop()}` ===  location.pathname){
                toggleTimeline(tlnav)       
            }          
            else {
                setTimeout(() => {
                    animateElementsOut()

                    setTimeout(() => {
                        navigate(`/${target.href.split('/').pop()}`)
                    }, (tlnav.duration() * 1000));

                }, (animOutTl.duration() * 1000))

                toggleTimeline(tlnav)       
            }          
        }
    }

  return (
    <header className={styles.nav} >
        {/* <div id="homelinkHeader"  className={styles.col}>
                <HeaderHomeLink/>
        </div>   */}
        <div className={styles.col}>
                <button id="burger_button" className={styles.special_con}
                 onClick={() => toggleTimeline(tlnav) }
                 >
                    <span className={`${styles.bar} ${styles.arrow_top_fall}`} ref={topArrRef} ></span>
                    <span className={`${styles.bar} ${styles.arrow_middle_fall}`} ref={midArrRef}></span>
                    <span className={`${styles.bar} ${styles.arrow_bottom_fall}`} ref={botArrRef} ></span>
                </button>
            </div>
            <nav ref={animNavRef} className={styles.navigation} id='navigation'>
                <div className={styles.ulNavWrapper} ref={ulWrapRef}>
                    <span ref={firstPolygonRef} className={styles.polygon} ><BsFillHexagonFill /></span>
                    <span ref={secondPolygonRef} className={styles.polygon} ><BsFillHexagonFill /></span>
                    <span ref={thirdPolygonRef} className={styles.polygon} ><BsFillHexagonFill /></span>
                    <ul ref={navUlRef}>
                        <li><NavLink to="/" onClick={(e) => handleLinkClickAnimation(e)} >HOME</NavLink></li>
                        <li><NavLink to="/portfolio" onClick={(e) => handleLinkClickAnimation(e)} >PORTFOLIO</NavLink></li>
                        <li><NavLink to="/contact"  onClick={(e) => handleLinkClickAnimation(e)} >CONTACT</NavLink></li>
                    </ul>
                </div>
            </nav>
    </header>
  )
}

export default Nav