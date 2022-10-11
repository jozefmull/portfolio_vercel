import {useEffect, useRef} from 'react'
import { NavLink } from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router-dom';

import HeaderHomeLink from './HeaderLinks'

import { gsap } from 'gsap'
import { DeclareNavTimeline, toggleTimeline } from '../Helpers/GsapHelpers'

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

    let firstPolygonRef = useRef<HTMLDivElement>(null);
    let secondPolygonRef = useRef<HTMLDivElement>(null);
    let thirdPolygonRef = useRef<HTMLDivElement>(null);

    let tlnav = gsap.timeline({paused: true, reversed: true})

    useEffect(() => {
        // @ts-ignore: Object is possibly 'null'
        DeclareNavTimeline(tlnav, animNavRef.current, ulWrapRef.current, [...navUlRef.current.children],topArrRef.current, midArrRef.current,botArrRef.current, firstPolygonRef.current, secondPolygonRef.current, thirdPolygonRef.current)
    }, [tlnav])

    const handleLinkClickAnimation = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
        e.preventDefault()

        const target = e.target as HTMLAnchorElement;

        console.log(target.href);

        if (target.href && !tlnav.isActive()) {
            if(`/${target.href.split('/').pop()}` ===  location.pathname){
                toggleTimeline(tlnav)       
            }          
            else {
                // setTimeout(() => {

                    // animateElementsOut()

                    setTimeout(() => {
                        navigate(`/${target.href.split('/').pop()}`)
                    }, (tlnav.duration() * 1000));

                // }, (tlnav.duration() * 1000) + 300)
                toggleTimeline(tlnav)       
            }          
        }
    }

  return (
    <div className={styles.nav}>
        <div id="homelinkHeader"  className={styles.col}>
                <HeaderHomeLink/>
        </div>  
        <div className={styles.col}>
                <button id="burgerHeader" className={styles.special_con}
                 onClick={() => toggleTimeline(tlnav) }
                 >
                    <span className={`${styles.bar} ${styles.arrow_top_fall}`} ref={topArrRef} ></span>
                    <span className={`${styles.bar} ${styles.arrow_middle_fall}`} ref={midArrRef}></span>
                    <span className={`${styles.bar} ${styles.arrow_bottom_fall}`} ref={botArrRef} ></span>
                </button>
            </div>
            <nav ref={animNavRef} className={styles.navigation} >
                <div className={styles.ulNavWrapper} ref={ulWrapRef}>
                    <div className={styles.polygon} ref={firstPolygonRef}></div>
                    <div className={styles.polygon} ref={secondPolygonRef}></div>
                    <div className={styles.polygon} ref={thirdPolygonRef}></div>
                    <ul ref={navUlRef}>
                        <li><NavLink to="/" 
                        onClick={(e) => handleLinkClickAnimation(e)}
                        >HOME</NavLink></li>
                        <li><NavLink to="/portfolio" 
                        onClick={(e) => handleLinkClickAnimation(e)}
                        >PORTFOLIO</NavLink></li>
                        <li><NavLink to="/contact" 
                        onClick={(e) => handleLinkClickAnimation(e)}
                        >CONTACT</NavLink></li>
                    </ul>
                </div>
            </nav>
    </div>
  )
}

export default Nav