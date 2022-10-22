import {useRef, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { animateFooter } from '../Helpers/GsapHelpers'

import styles from '../Css/Nav.module.css'

const Footer = () => {
    const footerRef = useRef<HTMLElement>(null)

    // ANIMATE FOOTER ON INITIAL RENDER
    useEffect(() => {
      animateFooter(footerRef.current)
    }, [])
    
  return (
    <footer id='quitFadeDown' className={styles.footer} ref={footerRef}>
        <h3>Want to get in touch?</h3>
        <p>Feel free to contact me via email at: <a href="mailto:dodkymull@gmail.com">dodkymull@gmail.com</a> or use the form at the <Link to='/contact'>contact page.</Link></p>
    </footer>
  )
}

export default Footer