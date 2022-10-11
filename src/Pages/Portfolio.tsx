import {useEffect, useRef} from 'react'

import { typewriterPortfolio } from '../Helpers/Helpers'

import styles from '../Css/Portfolio.module.css'

const Portfolio = () => {
  const headingRef = useRef<HTMLHeadingElement>(null)

  const txt = 'PORTFOLIO'

  useEffect(() => {
    typewriterPortfolio(txt, headingRef.current)
  }, [])
  
  return (
    <div className={styles.portfolio}>
      <div className={styles.screenReaders}>
        <h1>PORTFOLIO</h1>
      </div>

      <h2 ref={headingRef}> </h2>
      <div>Filter</div>
      <div>Projects</div>
    </div>
  )
}

export default Portfolio