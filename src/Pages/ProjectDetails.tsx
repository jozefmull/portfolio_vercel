import { useContext, useEffect, useRef } from 'react'
import { GlobalContext } from '../Context/GlobalState'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { typewriterProjectDetails } from '../Helpers/Helpers'

import styles from '../Css/ProjectDetails.module.css'

const ProjectDetails = () => {
    const {projID} = useParams()

    let headingRef = useRef<HTMLHeadingElement>(null)
    let shortDescRef = useRef<HTMLParagraphElement>(null)
    
    const {getProjectById, myState} = useContext(GlobalContext)
    const {loading, error, projectDetails} = myState
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
                    <h1 className={styles.single_item_heading} ref={headingRef}>{name}</h1>
                </div>
                <p id="quitFadeUp" ref={shortDescRef} className={styles.shortDesc}>{shortDesc}</p>
                <div  id="quitFadeUp" className={styles.single_item_buttons}>
                    <button className={styles.single_item_button}>
                        <Link to={url}>VISIT THE WEBSITE</Link>
                    </button>
                    {codeUrl === "-" ? ( <button className={styles.single_item_button_disabled} disabled>
                        CODE
                    </button>): (
                        <button className={styles.single_item_button}>
                            <Link to={codeUrl}>CODE</Link>
                        </button>
                    )} 
                </div>
                {/* <ImageSlider images={imgs} /> */}
                <h2 id="quitFadeDown" className={styles.single_item_about} >About</h2>
                
                <p id="quitFadeDown" dangerouslySetInnerHTML={{__html: description}}></p>
                <h2 id="quitFadeDown" className={styles.single_item_tech}>Technologies</h2>
                <h3 id="quitFadeDown">Technologies i was using while working on this project</h3>
                <ul className={styles.tech_list_items}>
                    {technologies.map((t, id) => {
                        return <li id="quitFadeLeft" key={id}>{t}</li>;
                    })}
                </ul>        
            </>
        )}
    </div>
  )
}

export default ProjectDetails