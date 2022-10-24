import { useRef, useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'
import { filterAnim } from '../Helpers/GsapHelpers'


import styles from '../Css/Portfolio.module.css'

const FilterAnim = () => {
    const {myState} = useContext(GlobalContext)
    const {filterValue} = myState

    let upperRow = useRef<HTMLElement>(null);
    let text = useRef<HTMLSpanElement>(null);
    let downRow = useRef<HTMLElement>(null);

    filterAnim(upperRow.current, downRow.current, text.current)

    return (
    <div className={styles.filterAnim} >
        <em ref={upperRow}></em>
        <div className={styles.filterTextWrap}>
            <span ref={text}>{
            `FILTERING ${filterValue} PROJECTS...`}</span>
        </div>
        <em ref={downRow}></em>
    </div>
  )
}

export default FilterAnim