import { useEffect, useRef, useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'
import { typewriterPortfolio } from '../Helpers/Helpers'

import ProjectsList from '../Components/ProjectsList'
import Filter from '../Components/Filter'
import Meta from '../Components/Meta'
import Footer from '../Components/Footer'

import CircLoader from '../assets/circloader.svg'

import styles from '../Css/Portfolio.module.css'

const TXT = 'PORTFOLIO'
const PARTXT = 'Check out my latest Front-End Developer portfolio projects. HTML, CSS, Animations, UI / UX, Javascript, React JS.'

const Portfolio = () => {
  const { getProjects, myState } = useContext(GlobalContext)
  const { loading, projects, filteredProjects } = myState

  const headingRef = useRef<HTMLHeadingElement>(null)
  const parRef = useRef<HTMLParagraphElement>(null)

  // TYPEWRITER EFFECT ON INITIAL RENDER / GET PROJECTS IF THERE ARE NONE
  useEffect(() => {
    typewriterPortfolio(TXT, headingRef.current, PARTXT, parRef.current)
    if (projects.length === 0) {
      getProjects()
    }
    // eslint-disable-next-line
  }, [])
  
  return (
    <>
    <Meta 
      title={'React Developer Portfolio - Javascript and UI/UX - Web and Mobile'}
      />
      <main className={styles.portfolio}>
          <h2 ref={headingRef} id='quitFadeUp'> </h2>
          <p ref={parRef} className={styles.par} id='quitFadeUp'></p>
          {loading && <img style={{margin: '0 auto'}} src={CircLoader} alt="loader"/> }
          {!loading && (filteredProjects.length === 0 || projects.length > 0) && (
            <>
              <Filter projects={projects}/>
              <ProjectsList projects={filteredProjects.length > 0 ? filteredProjects : projects}/>
              <Footer/>
            </>
          )}
      </main>
    </>
  )
}
// 
export default Portfolio