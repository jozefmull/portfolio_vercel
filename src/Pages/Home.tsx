import {useEffect} from 'react'

import SocialLinks from '../Components/SocialLinks'
import HomeButtons from '../Components/HomeButtons'
import HomeContent from '../Components/HomeContent'
import { animateArrowsIn } from '../Helpers/GsapHelpers'

import styles from '../Css/Home.module.css'

const Home = () => {

  useEffect(() => {
    animateArrowsIn()
    // eslint-disable-next-line
  }, [])
  
  return (
    <>
      <SocialLinks />
      <main className={styles.home}>
        <HomeContent/>
        <HomeButtons />
      </main>
    </>
  )
}

export default Home