import { Project } from '../Context/interface'
import { useRef, useEffect } from 'react';
import { animateProjectList } from '../Helpers/GsapHelpers';

import ProjectCard from './ProjectCards/ProjectCard'

import styles from '../Css/ProjectList.module.css'

type Props = {
  projects: Project[]
}

const ProjectsList = ({projects}: Props) => {
  const projListRef = useRef<HTMLUListElement>(null)

  // ANIMATE PROJECT LIST ON INITIAL RENDER
  useEffect(() => {
    animateProjectList(projListRef.current)
  }, [])

  return (
    <section>
      <ul id='quitFadeDown' className={styles.projectList} ref={projListRef}>
        {projects.map((p,id) => (
          <ProjectCard key={`project-card-${id}`} project={p}/>
        ))}
      </ul>
    </section>
  )
}

export default ProjectsList