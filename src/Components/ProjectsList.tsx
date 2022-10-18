import { Project } from '../Context/interface'
import { useRef, useEffect } from 'react';

import ProjectCard from './ProjectCards/ProjectCard'
import {gsap, Power4} from 'gsap'

import styles from '../Css/ProjectList.module.css'

type Props = {
  projects: Project[]
}

const ProjectsList = ({projects}: Props) => {
  const projCardRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    gsap.to(projCardRef.current, {duration:1, y:0, opacity:1,ease:Power4.easeInOut, stagger:0.2, delay:0.5})
  }, [projCardRef])

  return (
    <section>
      <ul id='quitFadeDown' className={styles.projectList}  ref={projCardRef}>
        {projects.map((p,id) => (
          <ProjectCard key={`project-card-${id}`} project={p}/>
        ))}
      </ul>
    </section>
  )
}

export default ProjectsList