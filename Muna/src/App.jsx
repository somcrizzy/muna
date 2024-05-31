import React,{useEffect} from "react";
import Header from './components/Header'
import Footer from './components/Footer'
import Homepage from './components/Homepage'
import Projects from './components/Projects'
import About from './components/About'
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init({
      duration:3000,
      once:true
    });
  }, [])

  return (
    <>
    <Header/>
  <Router>
    <Routes>
      <Route exact path='/' element={<Homepage/>} />
      <Route exact path='/projects' element={<Projects/>} />
      <Route exact path='/about' element={<About/>} />
    </Routes>
  </Router>
 <Footer/>

    </>
  )
}

export default App
