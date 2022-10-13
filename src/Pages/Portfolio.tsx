import {useEffect, useRef, useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState'
import { typewriterPortfolio } from '../Helpers/Helpers'

import ProjectsList from '../Components/ProjectsList'
import Filter from '../Components/Filter'
import FilterAnim from '../Components/FilterAnim'

import styles from '../Css/Portfolio.module.css'

const Portfolio = () => {
  const {getProjects, myState} = useContext(GlobalContext)
  const {loading, projects} = myState

  const headingRef = useRef<HTMLHeadingElement>(null)

  const txt = 'PORTFOLIO'

  useEffect(() => {
    typewriterPortfolio(txt, headingRef.current)
    getProjects()
    // eslint-disable-next-line
  }, [])
  
  return (
    <main className={styles.portfolio}>
      <section className={styles.screenReaders}>
        <h1>PORTFOLIO</h1>
      </section>
        <h2 ref={headingRef} id='quitFadeUp'> </h2>
        {!loading && projects.length > 0 && (
          <>
            <Filter projects={projects}/>
            <ProjectsList projects={projects}/>
          </>
        )}
        {/* <FilterAnim/> */}
    </main>
  )
}

export default Portfolio