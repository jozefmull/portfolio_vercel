import { Link } from 'react-router-dom';
import styles from '../Css/ProjectList.module.css'
import Ribbon from './Ribbon';

type Props = {
  project: any
}

const ProjectCard = ({project}: Props) => {
    const { name, technologies, imgs, mainTech, id:projectId } = project;
    
  return (
    <div className={styles.item_card} 
    // style={{"--animation-order": 1 + animationOrder}}
    >
            <div className={styles.item_card_header}>
                <div className={styles.arrows}>
                <span>&#60;</span>
                <span>&#62;</span>
                <span>&#8634;</span>
                </div>
                <div className={styles.adress}>
                <div>
                    <h4>{name}</h4>
                </div>
                <span>&#9734;</span>
                </div>
                <span className={styles.vertical_dots}>⋮</span>
            </div>

            <div className={styles.main_info} >
                <img src={imgs[0]} alt="project" width={'100%'} height={'100%'}/>
                {/* <LazzyLoadImage imageUrl={imgs[0]} /> */}
                <div className={styles.item_image_shadow}></div>
                <div
                className={styles.hover_info}
                style={{
                    backgroundImage: `url("${imgs[1]}")`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundColor: "rgba(0, 0, 0,0.45)",
                    backgroundBlendMode: "multiply",
                }}
                >
                    <div className={styles.ullinkwrap}>
                        <ul >
                            {technologies.map((t:string, id:number) => {
                                return <li key={`${t}-${id}`}
                                // style={{"--animation-order": 8 + index}}
                                 >{t}</li>
                            })}
                        </ul>
                        <Link to={`/project/${projectId}`} 
                        // onClick={(e) => handleClick(e)}
                        >...more</Link> 
                    </div>
                </div>
                <Ribbon title={mainTech} />
            </div>
        </div>
  )
}

export default ProjectCard