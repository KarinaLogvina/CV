import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <div className='root'>
      <Header />
      <Main />
      <About />
      <Experience />
      <Education />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
