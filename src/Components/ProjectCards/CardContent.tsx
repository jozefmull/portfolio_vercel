import Ribbon from './Ribbon';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import styles from '../../Css/ProjectList.module.css'
import 'react-lazy-load-image-component/src/effects/blur.css';

type Props = {
    mainImg: string,
    backImg: string,
    technologies: string[],
    projectId: string,
    mainTech: string
}

const CardContent = ({mainImg, backImg, technologies, mainTech, projectId}: Props) => {

  return (
    <div className={styles.main_info} >
        <LazyLoadImage
            alt='project-image'
            width={'100%'} 
            src={mainImg} 
            height={'100%'}
            effect="blur" 
            placeholderSrc='circLoader.svg'
            />
        <div className={styles.back}>
            <LazyLoadImage
                alt='project-image'
                width={'100%'} 
                src={backImg} 
                height={'100%'}
                effect="blur" />
            <ul >
                {technologies.map((t:string, id:number) => (
                    <li key={`${t}-${id}`} style={{animationDelay: id + 1 + '00ms'}}>{t}</li>
                    )
                )}
                <li id='project-link-more' style={{animationDelay: 8 + '00ms'}}>more</li>
            </ul>
        </div>
        <Ribbon title={mainTech} />
    </div>
  )
}

export default CardContent