import { useContext, useEffect, useRef } from 'react'
import { GlobalContext } from '../Context/GlobalState'
import { useParams } from 'react-router-dom'
import { typewriterProjectDetails } from '../Helpers/Helpers'

import ImageSlider from '../Components/ImageSlider'

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
    <div className={styles.projectDetailsContainer}>
        {!loading && Object.keys(projectDetails).length !== 0 && (
            <>
                <div className={styles.single_item_head_wrap}>
                    <h1 id="quitFadeUp" className={styles.single_item_heading} ref={headingRef}>{name}</h1>
                </div>
                <p id="quitFadeUp" ref={shortDescRef} className={styles.shortDesc}>{shortDesc}</p>
                <div  id="quitFadeUp" className={styles.single_item_buttons} >
                    <button className={styles.single_item_button}>
                        <a href={url} target='_blank' rel='noreferrer'>VISIT THE WEBSITE</a>
                    </button>
                    {codeUrl === "-" ? ( <button className={styles.single_item_button_disabled} disabled>
                        CODE
                    </button>): (
                        <button className={styles.single_item_button}>
                            <a href={codeUrl} target='_blank' rel='noreferrer'>CODE</a>
                        </button>
                    )} 
                </div>
                <ImageSlider imgs={imgs}/>
                <div id="quitFadeDown" className={styles.singleContent}>
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
            </>
        )}
    </div>
  )
}

export default ProjectDetails