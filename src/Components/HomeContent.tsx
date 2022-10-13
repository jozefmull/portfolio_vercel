import {useRef, useEffect} from 'react'
import { getAge } from '../Helpers/Helpers'
import { typewriterDesktop } from '../Helpers/DesktopTypewriter'
import { animateElementsOut, animOutTl } from '../Helpers/GsapHelpers'
import { useNavigate } from 'react-router-dom'

import styles from '../Css/Home.module.css'

const DesktopHomeContent = () => {
    const navigate = useNavigate()

    const refHeading = useRef<HTMLHeadingElement>(null)
    const refPar1 = useRef<HTMLParagraphElement>(null)
    const refPar2 = useRef<HTMLParagraphElement>(null)
    const refPar3 = useRef<HTMLParagraphElement>(null)

    const heading = 'Hello, my name is Jozef Müller'
    const par1 = `I am ${getAge('1997/05/08')} years old graduate aspiring to become a `
    const par2 = `If you would like to see my work feel free to visit my ` 
    const par3 = `You can contact me via email at: `

    useEffect(() => {
        // @ts-ignore: Object is possibly 'null'
        typewriterDesktop(heading, refHeading.current, par1, refPar1.current, par2, refPar2.current, par3, refPar3.current)
    }, [par1, par2, par3])

    useEffect(() => {
        setTimeout(() => {
            document.getElementById('homepage-portfolio-link').addEventListener('click', (e) => handleHomePortfolioLinkClick(e))
        }, 2500);
        // eslint-disable-next-line
    }, [])
    
    const handleHomePortfolioLinkClick = (e:any) => {
        e.preventDefault()
        const target = e.target as HTMLAnchorElement;

        animateElementsOut()

        setTimeout(() => {
        navigate(`/${target.href.split('/').pop()}`)
        }, (animOutTl.duration() * 1000) + 300)
    }

  return (
    <section>
        <div className={styles.headingWrapper}>
            <h2 id='quitFadeLeft' ref={refHeading}> </h2>
        </div>
        <div className={styles.par1Wrapper}>
            <p id='quitFadeLeft' ref={refPar1}></p>
        </div>
        <div className={styles.par2Wrapper}>
            <p id='quitFadeLeft' ref={refPar2}></p>
        </div>
        <div className={styles.par3Wrapper}>
            <p id='quitFadeLeft' ref={refPar3}></p>
        </div>
    </section>
  )
}

export default DesktopHomeContent