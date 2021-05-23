import { useState, useEffect } from 'react';
import './App.css';
import Burger from './components/Burger/Burger';
import Contact from './components/Contact/Contact';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Portfolio from './components/Portfolio/Portfolio';
import Skills from './components/Skills/Skills';

function App() {
  const [burger, setBurger] = useState(false);
  const [header, setHeader] = useState(true);

  useEffect(() => {
    function handleResize() {
      let width = window.innerWidth;
      if (width < 1020) {
        setBurger(true)
        setHeader(false)
      } else {
        setHeader(true)
        setBurger(false)
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);



  return (
    <div className='root'>
      {burger && <Burger />}
      {header && <Header />}
      <Main />
      <Skills />
      <Education />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
