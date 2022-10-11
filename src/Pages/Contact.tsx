import {useEffect, useRef} from 'react'

import { typewriterContact } from '../Helpers/Helpers'
import ContactForm from '../Components/ContactForm'

import styles from '../Css/Contact.module.css'

const Contact = () => {
  let textRef = useRef<HTMLParagraphElement>(null);
  const refHeading = useRef<HTMLHeadingElement>(null)

  const heading = 'CONTACT'
  const paragraph = 'If you want to get in touch and talk please fill up this form or contact me via email at: '

  useEffect(() => {
    typewriterContact(heading, refHeading.current, paragraph, textRef.current)
  }, [refHeading, textRef])

  return (
    <div className={styles.contact}>
        <div className={styles.screenReaders}>
          <h1>CONTACT</h1>
          <p>If you want to get in touch and talk please fill up this form or contact me via email at:</p>
          <address><a href='mailto:dodkymull@gmail.com'>dodkymull@gmail.com</a></address>
        </div>
          {/* <div id="quitFadeUp" className={styles.headingWrap}> */}
          <h2 ref={refHeading} id="quitFadeUp" className={styles.contact_heading}> </h2>
          {/* </div> */}
          {/* <Separator /> */}
          <p ref={textRef} id="quitFadeUp" className={styles.text}></p>
          <ContactForm />
      </div>
  )
}

export default Contact