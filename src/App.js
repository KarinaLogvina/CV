import './App.css';
import Contact from './components/Contact/Contact';
import Education from './components/Education/Education';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Portfolio from './components/Portfolio/Portfolio';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className='root'>
      <Header />
      <Main />
      <Skills />
      <Education />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
