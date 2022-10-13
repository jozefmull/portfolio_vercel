import styles from '../../Css/ProjectList.module.css'

import {MdArrowBack, MdArrowForward , MdReplay, MdOutlineStarBorderPurple500, MdOutlineMoreVert} from 'react-icons/md'

type Props = {
    name:string
}

const CardHeader = ({name}: Props) => {
  return (
    <div className={styles.item_card_header}>
        <div className={styles.arrows}>
          <MdArrowBack/>
          <MdArrowForward/> 
          <MdReplay/>
        </div>
        <div className={styles.adress}>
            <h4>{name}</h4>
        </div>
        <MdOutlineStarBorderPurple500 />
        <MdOutlineMoreVert className={styles.vertical_dots} />
    </div>
  )
}

export default CardHeader