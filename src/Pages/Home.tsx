import { getAge } from '../Helpers/Helpers'

import SocialLinks from '../Components/SocialLinks'
import HomeButtons from '../Components/HomeButtons'
import HomeContent from '../Components/HomeContent'

import styles from '../Css/Home.module.css'

const Home = () => {

  return (
    <>
    <SocialLinks />
    <div className={styles.home}>
      {/* CONTENT FOR SCREEN READERS */}
      <div className={styles.screenReaders}>
        <h1>Hello, my name is Jozef Müller</h1>
        <p>I am {getAge('1997/05/08')} years old graduate aspiring to become a Frontend Developer<br/>
        If you would like to see my work feel free to visit my portfolio page<br/>
        You can contact me via email at: dodkymull@gmail.com</p>
      </div>
      {/* HOMEPAGE content based on width of screen */}
      <HomeContent/>
      <HomeButtons />
    </div>
    </>
  )
}

export default Home