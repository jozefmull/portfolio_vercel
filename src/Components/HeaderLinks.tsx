import styles from '../Css/Nav.module.css'


const HeaderLinks = () => {
  return (
    <>
    {/* {location.pathname === '/' ? null : ( */}
        <div className={styles.headerHomeLink}  
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
        </div>
    {/* )} */}
    </>
  )
}

export default HeaderLinks