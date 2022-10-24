import {useEffect} from 'react'
import {Routes, Route ,useLocation} from 'react-router-dom'

import Home from './Pages/Home';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import ProjectDetails from './Pages/ProjectDetails';

import ParticlesComponent from './Components/ParticlesComponent';
import Nav from './Components/Nav';
import LoadingBar from './Components/LoadingBar';
import ArrowNavigation from './Components/ArrowNavigation';
import InitialLoader from './Components/InitialLoader';

import styles from './Css/App.module.css'

import {gsap, Power4} from 'gsap'

import ReactGA from 'react-ga';

const TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID; 
ReactGA.initialize(TRACKING_ID)

// const loader = document.getElementById('page-loader')
// const hideLoader = () => loader.classList.add('loader-hide');

let userAgent = navigator.userAgent;

function App() {
  const location = useLocation()
  
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    // hideLoader()
    setTimeout(() => {
      gsap.to('#page-loader', {duration:0.5, bottom:'unset', top: '-150vh', ease:Power4.easeInOut})
    }, 100);
  }, []);

  return (
    <>
    <InitialLoader/>
    <section id='portfolio' className={styles.app}>
      {!userAgent.match(/firefox|fxios/i) && (<ParticlesComponent/>)}
      <LoadingBar/>
      {!location.pathname.includes('project') &&  <ArrowNavigation/>}
      <Nav/>
      <div className={styles.container}>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/project/:projID' element={<ProjectDetails/>}/>
        </Routes>
      </div>
    </section>
    </>
  );
}

export default App;
