import {useState, useEffect} from 'react'
import styles from '../Css/Home.module.css'
import { getAge } from '../Helpers/Helpers'

const MobileHomeContent = () => {
  return (
    <>
      <div className={styles.headingWrapper}>
        <h2>Hello, my name is</h2>
      </div>
      <div className={styles.headingWrapper_h3}>
        <h3>Jozef Müller</h3>
      </div>
      <div className={styles.par1Wrapper}>
        <p>I am {getAge('1997/05/08')} years old graduate aspiring</p>  
      </div>
      <div className={styles.par2Wrapper}>
        <p>to become a Frontend Developer.</p>
      </div>
      <div className={styles.par3Wrapper}>
        <p>If you would like to see my work </p>
      </div>
      <div className={styles.par4Wrapper}>
        <p>feel free to visit my portfolio page.</p>
      </div>
      <div className={styles.par5Wrapper}>
        <p>You can contact me via email at:</p>
      </div>
      <div className={styles.par6Wrapper}>
        <p>dodkymull@gmail.com</p>
      </div>
    </>
  )
}

export default MobileHomeContent