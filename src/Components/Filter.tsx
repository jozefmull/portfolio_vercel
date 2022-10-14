import {useMemo, useRef, useEffect, useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState'

import FilterAnim from './FilterAnim'

import { Project } from '../Context/interface'
import { mergeArrays } from '../Helpers/Helpers'
import { gsap, Power4 } from 'gsap'

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
  const {filterProjects, myState} = useContext(GlobalContext)
  const {filterValue, filteredProjects} = myState

  const filterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.to(filterRef.current, {duration:1, y:0, opacity:1,ease:Power4.easeInOut, stagger:0.2, delay:0.25})
  }, [filterRef])

  let technologies = projects.map((item) => item.technologies)
  let filterValues = mergeArrays(...technologies).map(i => i.toUpperCase()).filter(i => !UNWANTED_OPTIONS.includes(i))
  filterValues.unshift('All')

  const filterRender = useMemo(() =>
    filterValues.map((v,i) => (
      <li key={`filter-value-${i}`} onClick={() => filterProjects(v)} className={filterValue === v ? styles.activeFilter : 'inactive'}>
        <span>
          {v.toUpperCase()}
        </span>
      </li>
    ))
  , [filterValues, filterProjects, filterValue])

  return (
    <>
      <section id='quitFadeUp' className={styles.filter} ref={filterRef}>
        <ul>
          {filterRender}
        </ul>
        {filteredProjects.length === 0 ? (
          <p>Showing <strong>All</strong> projects. Use the filter to filter them by technology.</p>
          ) : (
          <p>Showing <strong>{filterValue}</strong> projects: <strong>{filteredProjects.length}</strong></p>
        )}
      </section>
      <FilterAnim/>
    </>
  )
}

export default Filter