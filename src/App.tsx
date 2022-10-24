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

import styles from './Css/App.module.css'

import ReactGA from 'react-ga';
const TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID; 
ReactGA.initialize(TRACKING_ID)

const loader = document.getElementById('page-loader')
const hideLoader = () => loader.classList.add('loader-hide');

let userAgent = navigator.userAgent;

function App() {
  const location = useLocation()
  useEffect(hideLoader, []);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
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
  );
}

export default App;
