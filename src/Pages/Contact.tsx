import {useEffect, useRef} from 'react'
import { typewriterContact } from '../Helpers/Helpers'

import ContactForm from '../Components/ContactForm'
import Meta from '../Components/Meta'

import styles from '../Css/Contact.module.css'

const HEADING_TXT = 'CONTACT'
const PARAGRAPH_TXT = 'If you want to get in touch and talk please fill up this form or contact me via email at: '

const Contact = () => {
  const textRef = useRef<HTMLParagraphElement>(null);
  const refHeading = useRef<HTMLHeadingElement>(null)


  // TYPEWRITER EFFECT ON INITIAL RENDER
  useEffect(() => {
    typewriterContact(HEADING_TXT, refHeading.current, PARAGRAPH_TXT, textRef.current)
  }, [refHeading, textRef])
  
  return (
    <>
    <Meta title={'Contact - Jozef Müller - Front-End Web Developer, React JS, Javascript, UI/UX'}/>
      <main className={styles.contact}>
          <section>
            <h2 ref={refHeading} id='quitFadeRight' className={styles.contact_heading}> </h2>
            <p ref={textRef} id='quitFadeRight' className={styles.text}></p>
            <ContactForm />
          </section>
      </main>
     </>
  )
}

export default Contact