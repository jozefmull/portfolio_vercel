import {useEffect, useRef} from 'react'
import styles from '../Css/Home.module.css'
import {  getAge } from '../Helpers/Helpers'
import { typewriterMobile } from '../Helpers/MobileTypewriter'

const MobileHomeContent = () => {
  const refHeadingH2 = useRef<HTMLHeadingElement>(null)
  const refHeadingH3 = useRef<HTMLHeadingElement>(null)
  const refPar1 = useRef<HTMLParagraphElement>(null)
  const refPar2 = useRef<HTMLParagraphElement>(null)
  const refPar3 = useRef<HTMLParagraphElement>(null)
  const refPar4 = useRef<HTMLParagraphElement>(null)
  const refPar5 = useRef<HTMLParagraphElement>(null)
  const refPar6 = useRef<HTMLParagraphElement>(null)

  const headingH2 = 'Hello, my name is'
  const headingH3 = 'Jozef Müller'
  const par1 = `I am ${getAge('1997/05/08')} years old graduate aspiring`
  const par2 = `to become a Frontend Developer. If ` 
  const par3 = `you would like to see my work feel`
  const par4 = `free to visit my `
  const par5 = `You can contact me via email`
  const par6 = `at: `

  useEffect(() => {
    // @ts-ignore: Object is possibly 'null'
    typewriterMobile(headingH2, refHeadingH2.current, headingH3, refHeadingH3.current, par1, refPar1.current, par2, refPar2.current, par3, refPar3.current, par4, refPar4.current, par5, refPar5.current, par6, refPar6.current)
}, [par1, par2, par3, par4, par5, par6])

  return (
    <>
      <div className={styles.headingWrapper}>
        <h2 ref={refHeadingH2}> </h2>
      </div>
      <div className={styles.headingWrapper_h3}>
        <h3 ref={refHeadingH3}> </h3>
      </div>
      <div className={styles.par1Wrapper}>
        <p ref={refPar1}></p>  
      </div>
      <div className={styles.par2Wrapper}>
        <p ref={refPar2}></p>
      </div>
      <div className={styles.par3Wrapper}>
        <p ref={refPar3}></p>
      </div>
      <div className={styles.par4Wrapper}>
        <p ref={refPar4}></p>
      </div>
      <div className={styles.par5Wrapper}>
        <p ref={refPar5}></p>
      </div>
      <div className={styles.par6Wrapper}>
        <p ref={refPar6}></p>
      </div>
    </>
  )
}

export default MobileHomeContent