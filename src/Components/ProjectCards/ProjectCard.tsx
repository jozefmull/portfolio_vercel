import { Link, useNavigate, useLocation } from 'react-router-dom';
import styles from '../../Css/ProjectList.module.css'
import { animateElementsOut, animOutTl } from '../../Helpers/GsapHelpers';

import CardHeader from './CardHeader'
import CardContent from './CardContent';

type Props = {
  project: any
}

const ProjectCard = ({project}: Props) => {
  const navigate = useNavigate()
  const location = useLocation()

  const { name, technologies, imgs, mainTech, id:projectId } = project;
  let projectLink = `/portfolio/project/${projectId}`

  const handleLinkClickAnim = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    const target = e.target as HTMLAnchorElement;

    if (target.id === 'project-link-more' || target.id === 'project-card-link') {
      let tmp = target.href.split('/')
      animateElementsOut()
      
      setTimeout(() => {
        navigate(`/portfolio/${tmp[tmp.length - 2]}/${tmp[tmp.length - 1]}`, {replace: true})
      }, (animOutTl.duration() * 1000) + 300)
    }
  }

  return (
    <li id='quitFadeDown' className={styles.item_card} >
        <Link id='project-card-link' to={projectLink} onClick={(e) => handleLinkClickAnim(e)}>
            <CardHeader name={name} />
            <CardContent imgs={imgs} technologies={technologies} projectId={projectId} mainTech={mainTech}/>
        </Link>
    </li>
  )
}

export default ProjectCard