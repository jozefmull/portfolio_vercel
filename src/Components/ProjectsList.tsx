import { Project } from '../Context/interface'

import ProjectCard from './ProjectCards/ProjectCard'

import styles from '../Css/ProjectList.module.css'

type Props = {
  projects: Project[]
}

const ProjectsList = ({projects}: Props) => {

  return (
    <ul className={styles.projectList}>
      {projects.map((p,id) => (
        <ProjectCard key={`project-card-${id}`} project={p}/>
      ))}
    </ul>
  )
}

export default ProjectsList