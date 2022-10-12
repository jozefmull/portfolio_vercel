import { Project } from '../Context/interface'

import ProjectCard from './ProjectCard'

import styles from '../Css/ProjectList.module.css'

type Props = {
  projects: Project[]
}

const ProjectsList = ({projects}: Props) => {

  return (
    <div className={styles.projectList}>
      {projects.map((p,id) => (
        <ProjectCard key={id} project={p}/>
      ))}
    </div>
  )
}

export default ProjectsList