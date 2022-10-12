import {useEffect, useRef, useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState'
import { typewriterPortfolio } from '../Helpers/Helpers'

import ProjectsList from '../Components/ProjectsList'

import styles from '../Css/Portfolio.module.css'

const Portfolio = () => {
  const {getProjects, myState} = useContext(GlobalContext)
  const {loading, error, projects} = myState

  const headingRef = useRef<HTMLHeadingElement>(null)

  const txt = 'PORTFOLIO'

  useEffect(() => {
    typewriterPortfolio(txt, headingRef.current)
    getProjects()
    // eslint-disable-next-line
  }, [])
  
  return (
    <div className={styles.portfolio}>
      <div className={styles.screenReaders}>
        <h1>PORTFOLIO</h1>
      </div>

      <h2 ref={headingRef} id='quitFadeUp'> </h2>
      <div id='quitFadeUp'>Filter</div>
      {!loading && projects.length > 0 && (<ProjectsList projects={projects}/>)}
    </div>
  )
}

export default Portfolio