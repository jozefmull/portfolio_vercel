import {useMemo, useRef, useEffect} from 'react'
import { Project } from '../Context/interface'
import { mergeArrays } from '../Helpers/Helpers'
import {gsap, Power4} from 'gsap'

import styles from '../Css/Portfolio.module.css'

type Props = {
  projects: Project[]
}

const UNWANTED_OPTIONS = [
  "DARSKYAPI",
  "JSX",
  "OXYGEN",
  "PHP",
  "AVADA-THEME",
  "NAPOLI-THEME"
]

const Filter = ({projects}: Props) => {
  const filterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.to(filterRef.current, {duration:1, y:0, opacity:1,ease:Power4.easeInOut, stagger:0.2, delay:0.25})
  }, [filterRef])

  let technologies = projects.map((item) => item.technologies)
  let filterValues = mergeArrays(...technologies).map(i => i.toUpperCase()).filter(i => !UNWANTED_OPTIONS.includes(i))
  filterValues.unshift('All')

  const filterRender = useMemo(() => 
    filterValues.map((v,i) => (
      <li 
        key={`filter-value-${i}`}
        // className={v.toUpperCase() === selectedValue ? `${styles.portfolio_link} ${styles.activeFilter}` : styles.portfolio_link}
        // onClick={(e) => handleClick(e)}
        // style={{"--animation-order": 1 + id}}
      >
        <span>
          {v.toUpperCase()}
        </span>
      </li>
    ))
  , [filterValues])

  return (
    <section id='quitFadeUp' className={styles.filter} ref={filterRef}>
      <ul>
        {filterRender}
      </ul>
      <p>Showing <strong>All</strong> projects</p>
    </section>
  )
}

export default Filter