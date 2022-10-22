import React, {useEffect, useRef} from 'react'

import { SocialLinkAnim } from '../Helpers/GsapHelpers'

import styles from '../Css/Home.module.css'

const SocialLinks = () => {
    let socialLinksRef = useRef<HTMLUListElement>(null);

    //ANIMATE LINK IN ON INITIAL RENDER
    useEffect(() => {
        // @ts-ignore: Object is possibly 'null'
        SocialLinkAnim([...socialLinksRef.current.children])
    }, [socialLinksRef])

  return (
    <aside className={styles.social_links}>
        <ul ref={socialLinksRef}>
            <li id="quitFadeLeft"><small>Follow me</small></li>
            <li id="quitFadeLeft"><a href="https://github.com/jozefmull" target="_blank" rel="noopener noreferrer"  className={styles.github} title="Follow me on GitHub" ><span>Follow me on GitHub</span></a></li>
            <li id="quitFadeLeft"><a href="https://linkedin.com/in/jozef-müller" target="_blank" rel="noopener noreferrer" className={styles.linkedin} title="Follow me on LinkedIn" ><span>Follow me on LinkedIn</span></a></li>
            <li id="quitFadeLeft"><a href="\jozef_mueller_cv.pdf" target="_blank" rel="noopener noreferrer" className={styles.CV} title="My CV" ><span>CV</span></a></li>
        </ul>
    </aside>
  )
}

export default React.memo(SocialLinks)