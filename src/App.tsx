import {Routes, Route} from 'react-router-dom'
import { useLocation } from 'react-router-dom';

import Home from './Pages/Home';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import ProjectDetails from './Pages/ProjectDetails';

import ParticlesComponent from './Components/ParticlesComponent';
import Nav from './Components/Nav';
import LoadingBar from './Components/LoadingBar';
import ArrowNavigation from './Components/ArrowNavigation';

import styles from './Css/App.module.css'

function App() {
  const location = useLocation()
  
  return (
    <div className={styles.app}>
      <ParticlesComponent/>
      <LoadingBar/>
      {!location.pathname.includes('project') &&  <ArrowNavigation/>}
      <Nav/>
      <div className={styles.container}>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/portfolio/project/:projID' element={<ProjectDetails/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
