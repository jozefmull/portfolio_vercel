import {useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'

import Home from './Pages/Home';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';

import ParticlesComponent from './Components/ParticlesComponent';
import Nav from './Components/Nav';

import styles from './Css/App.module.css'
// import { } from 'gsap'
import { gsap, CSSPlugin } from 'gsap/all'

function App() {
  useEffect(() => {
    gsap.registerPlugin( CSSPlugin )
  }, [])

  return (
    <div className={styles.app}>
      <ParticlesComponent/>
      <Nav/>
      <div className={styles.container}>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
