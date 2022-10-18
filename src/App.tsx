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

const loader = document.getElementById('page-loader')
const hideLoader = () => loader.classList.add('loader-hide');

function App() {
  const location = useLocation()
  useEffect(hideLoader, []);

  return (
    <section className={styles.app}>
      <ParticlesComponent/>
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
