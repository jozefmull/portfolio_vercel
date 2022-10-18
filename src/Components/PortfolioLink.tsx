import {useLocation, Link, useNavigate} from 'react-router-dom'

import { animateElementsOut, animOutTl } from '../Helpers/GsapHelpers'

import styles from '../Css/Nav.module.css'

type Props = {}

const PortfolioLink = (props: Props) => {
  let location = useLocation()
  let navigate = useNavigate()

  const clickHandle = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    
    animateElementsOut()

    setTimeout(() => {
      navigate(`/portfolio`)
    }, (animOutTl.duration() * 1000) + 300)
  }

  return (
    <>
    {!location.pathname.includes('project') ? null : (
        <Link to='/portfolio' className={styles.header_portfolio_link} onClick={(e) => clickHandle(e)}>
            <i style={{transform: 'translateY(-11px) translateX(-11px)'}}></i>
            <i style={{transform: 'translateY(-11px) translateX(11px)'}}></i>
            <i style={{transform: 'translateY(11px) translateX(-11px)'}}></i>
            <i style={{transform: 'translateY(0px) translateX(-11px)'}}></i>
            <i style={{transform: 'translateY(-11px) translateX(0px)'}}></i>
            <i style={{transform: 'translateY(11px) translateX(0px)'}}></i>
            <i style={{transform: 'translateY(0px) translateX(11px)'}}></i>
            <i style={{transform: 'translateY(0px) translateX(0px)'}}> </i>
            <i style={{transform: 'translateY(11px) translateX(11px)'}}></i>
        </Link>
    )}
    </>
  )
}

export default PortfolioLink