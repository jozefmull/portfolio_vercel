import {useRef, useEffect} from 'react'
import {Link} from 'react-router-dom'

import {gsap, Power4} from 'gsap'

import styles from '../Css/Nav.module.css'

type Props = {}

const Footer = (props: Props) => {
    const footerRef = useRef<HTMLElement>(null)

    useEffect(() => {
        gsap.to(footerRef.current, {duration:1, y:0, opacity:1,ease:Power4.easeInOut, stagger:0.2, delay:0.75})
    }, [])
    
  return (
    <footer id='quitFadeDown' className={styles.footer} ref={footerRef}>
        <h3>Want to get in touch?</h3>
        <p>Feel free to contact me via email at: <a href="mailto:dodkymull@gmail.com">dodkymull@gmail.com</a> or use the form at the <Link to='/contact'>contact page.</Link></p>
    </footer>
  )
}

export default Footer