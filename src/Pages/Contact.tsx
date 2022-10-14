import {useEffect, useRef} from 'react'

import { typewriterContact } from '../Helpers/Helpers'
import ContactForm from '../Components/ContactForm'

import styles from '../Css/Contact.module.css'
import Meta from '../Components/Meta'

const Contact = () => {
  let textRef = useRef<HTMLParagraphElement>(null);
  const refHeading = useRef<HTMLHeadingElement>(null)

  const heading = 'CONTACT'
  const paragraph = 'If you want to get in touch and talk please fill up this form or contact me via email at: '

  useEffect(() => {
    typewriterContact(heading, refHeading.current, paragraph, textRef.current)
  }, [refHeading, textRef])
  
  return (
    <>
    <Meta title={'Contact - Jozef Müller - Front-End Web Developer, React JS, Javascript, UI/UX'}/>
      <main className={styles.contact}>
          <section className={styles.screenReaders}>
            <h1>CONTACT</h1>
            <p>If you want to get in touch and talk please fill up this form or contact me via email at:</p>
            <address><a href='mailto:dodkymull@gmail.com'>dodkymull@gmail.com</a></address>
          </section>
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