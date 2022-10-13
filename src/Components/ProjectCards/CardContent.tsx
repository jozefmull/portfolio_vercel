import { Link } from 'react-router-dom'

import Ribbon from './Ribbon';

import styles from '../../Css/ProjectList.module.css'

type Props = {
    imgs: string[],
    technologies: string[],
    projectId: string,
    mainTech: string
}

const CardContent = ({imgs, technologies, projectId, mainTech}: Props) => {

  return (
    <div className={styles.main_info}>
        <img src={imgs[0]} alt="project" width={'100%'} height={'100%'} className={styles.front}/>
        <div className={styles.back} 
            style={{
                backgroundImage: `url("${imgs[1]}")`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundColor: "rgba(0, 0, 0,0.15)",
                backgroundBlendMode: "multiply",
            }}
            >
            <ul>
                {technologies.map((t:string, id:number) => (
                    <li key={`${t}-${id}`}>{t}</li>
                    )
                )}
                <li id='project-link-more'>more</li>
            </ul>
        </div>
        <Ribbon title={mainTech} />
    </div>
  )
}

export default CardContent