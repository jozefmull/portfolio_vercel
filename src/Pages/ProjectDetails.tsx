import { useContext, useEffect, useRef } from 'react'
import { GlobalContext } from '../Context/GlobalState'
import { useParams } from 'react-router-dom'
import { typewriterProjectDetails } from '../Helpers/Helpers'

import ImageSlider from '../Components/ImageSlider'
import Meta from '../Components/Meta'
import Footer from '../Components/Footer'

import CircLoader from '../assets/circloader.svg'

import styles from '../Css/ProjectDetails.module.css'

const ProjectDetails = () => {
    const {projID} = useParams()

    let headingRef = useRef<HTMLHeadingElement>(null)
    let shortDescRef = useRef<HTMLParagraphElement>(null)
    
    const {getProjectById, myState} = useContext(GlobalContext)
    const {loading, projectDetails} = myState
    const {shortDesc, name, description, technologies, codeUrl, url, imgs} = projectDetails

    let heading = name
    let shortDescTxt = shortDesc

    useEffect(() => {
      getProjectById(projID)
      // eslint-disable-next-line
    }, [projID])

    useEffect(() => {
      if(heading !== undefined && shortDescTxt !== undefined && shortDescRef.current){
        typewriterProjectDetails(heading, headingRef.current, shortDescTxt, shortDescRef.current)
      }
    }, [heading, shortDescTxt])
    
  return (
    <>
        <Meta title={`${name} - Web Developer - Javascript, React JS, UI/UX - Jozef Müller`}/>
        <main className={styles.projectDetailsContainer}>
            {/* IF WE ARE LOADING ITEMS SHOW LOADER */}
            {loading && <img style={{margin: '0 auto'}} src={CircLoader} alt="loader"/> }
            {/* IF WE ARE NOT LOADING AND PROJECT DETAILS ARENT EMPTY SHOW CONTENT */}
            {!loading && Object.keys(projectDetails).length !== 0 && (
                <section>
                    <div className={styles.single_item_head_wrap}>
                        <h1 id="quitFadeUp" className={styles.single_item_heading} ref={headingRef}>{name}</h1>
                    </div>
                    <p id="quitFadeUp" ref={shortDescRef} className={styles.shortDesc}>{shortDesc}</p>
                    <section  className={styles.single_item_buttons} >
                        <button  id="quitFadeUp" className={styles.single_item_button}>
                            <a href={url} target='_blank' rel='noreferrer'>VISIT THE WEBSITE</a>
                        </button>
                        {codeUrl === "-" ? ( <button  id="quitFadeUp" className={styles.single_item_button_disabled} disabled>
                            CODE
                        </button>): (
                            <button  id="quitFadeUp" className={styles.single_item_button}>
                                <a href={codeUrl} target='_blank' rel='noreferrer'>CODE</a>
                            </button>
                        )} 
                    </section>
                    <div id='quitFadeDown'>
                        <ImageSlider imgs={imgs}/>
                    </div>
                    <section  className={styles.singleContent}>
                        <div id="quitFadeDown">
                            <h2  className={styles.single_item_about} >About</h2>
                            <p dangerouslySetInnerHTML={{__html: description}}></p>
                            <h2 className={styles.single_item_tech}>Technologies</h2>
                            <h3>Technologies i was using while working on this project</h3>
                            <ul className={styles.tech_list_items}>
                                {technologies.map((t, id) => {
                                    return <li id="quitFadeLeft" key={id}>{t}</li>;
                                })}
                            </ul> 
                        </div>        
                    </section>
                </section>
            )}
        </main>
        <Footer/>
    </>
  )
}

export default ProjectDetails