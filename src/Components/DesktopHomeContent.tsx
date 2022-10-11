import {useRef, useEffect} from 'react'
import { typewriterDesktop, getAge } from '../Helpers/Helpers'

import styles from '../Css/Home.module.css'

const DesktopHomeContent = () => {
    const refHeading = useRef<HTMLHeadingElement>(null)
    const refPar1 = useRef<HTMLParagraphElement>(null)
    const refPar2 = useRef<HTMLParagraphElement>(null)
    const refPar3 = useRef<HTMLParagraphElement>(null)

    const heading = 'Hello, my name is Jozef Müller'
    const par1 = `I am ${getAge('1997/05/08')} years old graduate aspiring to become a Frontend Developer.`
    const par2 = `If you would like to see my work feel free to visit my ` 
    const par3 = `You can contact me via email at: `

    useEffect(() => {
        // @ts-ignore: Object is possibly 'null'
        typewriterDesktop(heading, refHeading.current, par1, refPar1.current, par2, refPar2.current, par3, refPar3.current)
    }, [par1, par2, par3])

  return (
    <>
        <div className={styles.headingWrapper}>
            <h2 ref={refHeading}> </h2>
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
    </>
  )
}

export default DesktopHomeContent