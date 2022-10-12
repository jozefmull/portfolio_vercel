import { useNavigate } from 'react-router-dom'
import styles from '../Css/Nav.module.css'

const HeaderLinks = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.headerArrWrap}>
      <button onClick={() => navigate(-1)}>{'<'}</button>
      <button onClick={() => navigate(1)}>{'>'}</button>

    {/* {location.pathname === '/' ? null : ( */}
        {/* <div className={styles.headerHomeLink}  
        // onClick={goBack}
        >
            <i style={{transform: 'translateY(-11px) translateX(-11px)'}}></i>
            <i style={{transform: 'translateY(-11px) translateX(11px)'}}></i>
            <i style={{transform: 'translateY(11px) translateX(-11px)'}}></i>
            <i style={{transform: 'translateY(0px) translateX(-11px)'}}></i>
            <i style={{transform: 'translateY(-11px) translateX(0px)'}}></i>
            <i style={{transform: 'translateY(11px) translateX(0px)'}}></i>
            <i style={{transform: 'translateY(0px) translateX(11px)'}}></i>
            <i style={{transform: 'translateY(0px) translateX(0px)'}}> </i>
            <i style={{transform: 'translateY(11px) translateX(11px)'}}></i>
        </div> */}
    {/* )} */}
    </div>
  )
}

export default HeaderLinks