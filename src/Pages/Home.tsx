import { getAge } from '../Helpers/Helpers'

import SocialLinks from '../Components/SocialLinks'
import HomeButtons from '../Components/HomeButtons'
import DesktopHomeContent from '../Components/DesktopHomeContent'

import styles from '../Css/Home.module.css'

const Home = () => {
  // const [screenWidth, setscreenWidth] = useState(window.innerWidth)

  // useEffect(() => {
  //   // https://stackoverflow.com/questions/70031088/why-does-useeffect-run-once-the-window-innerwidth-changes-even-though-the-second
  //   let cb = () => setscreenWidth(window.innerWidth)
  //   window.addEventListener("resize", cb)

  //   return () => window.removeEventListener("resize", cb)
  // }, [])

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
      <DesktopHomeContent/>
      {/* {screenWidth > 480 ? <DesktopHomeContent/> : <MobileHomeContent/>} */}
      <HomeButtons />
    </div>
    </>
  )
}

export default Home