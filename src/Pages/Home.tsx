import SocialLinks from '../Components/SocialLinks'
import HomeButtons from '../Components/HomeButtons'
import HomeContent from '../Components/HomeContent'

import styles from '../Css/Home.module.css'

const Home = () => {

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