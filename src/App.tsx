import {useEffect, useState} from 'react'
import { Routes, Route ,useLocation } from 'react-router-dom'
import { hideLoader } from './Helpers/GsapHelpers';

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

import ReactGA from 'react-ga';

const TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID; 
ReactGA.initialize(TRACKING_ID)

function App() {
  const location = useLocation()
  const [loaderFinish, setloaderFinish] = useState(false)
  
  useEffect(() => {
    //init react google analytics
    ReactGA.pageview(window.location.pathname + window.location.search);
    // hide loader promise then dispaly content
    hideLoader.then(() => {
      setloaderFinish(true)
    })
  }, []);

  return (
    <>
      <InitialLoader/>
      <section id='portfolio' className={styles.app}>
        <ParticlesComponent/>
        <LoadingBar/>
        {/* IF we are on project page do not display arrow navigation */}
        {!location.pathname.includes('project') &&  <ArrowNavigation/>}
        <Nav/>
        {/* loader finished ? display content else null */}
        {loaderFinish ? (
          <div className={styles.container}>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/portfolio' element={<Portfolio/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/project/:projID' element={<ProjectDetails/>}/>
            </Routes>
          </div>
        ) : null}
      </section>
    </>
  );
}

export default App;
