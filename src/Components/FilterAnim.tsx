import {useRef} from 'react'
import styles from '../Css/Portfolio.module.css'
import { toggleTimeline } from '../Helpers/GsapHelpers'
import {gsap,Power4} from 'gsap'

type Props = {}

const FilterAnim = (props: Props) => {
    let upperRow = useRef<HTMLElement>(null);
    let text = useRef<HTMLSpanElement>(null);
    let downRow = useRef<HTMLElement>(null);

    let tlfilter = gsap.timeline({paused: true, reversed: true})

    tlfilter.to(upperRow.current, {duration:0.1, x: 0, ease:Power4.easeInOut})
        .to(downRow.current, {duration:0.1, x: 0, ease:Power4.easeInOut}, '-=0.1')
        .to(text.current, {duration:0.25 , top: 0,  ease:Power4.easeInOut}  )
        .to(text.current, {duration:0.5 , top: '-25',  ease:Power4.easeInOut, delay:0.5})
        .to(upperRow.current, {duration:0.5, x: '-100%' , ease:Power4.easeInOut})
        .to(downRow.current, {duration:0.5, x: '100%' , ease:Power4.easeInOut}, '-=0.5')

    toggleTimeline(tlfilter)
    
    return (
    <div className={styles.filterAnim} >
        <em ref={upperRow}></em>
        <div className={styles.filterTextWrap}>
            <span ref={text}>{
            `FILTERING PROJECTS...`}</span>
        </div>
        <em ref={downRow}></em>
    </div>
  )
}

export default FilterAnim