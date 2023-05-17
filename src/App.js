import './App.css';
import Navbar from './Componet/Navbar/Navbar';
import Intro from './Componet/Intro/Intro';
import Services from './Componet/Services/Services';
import Experience from './Componet/Experience/Experience';
import Works from './Componet/Works/Works';
import Portfolio from './Componet/Portfolio/Portfolio';
import Testimonials from './Componet/Testimonials/Testimonials';
import Contact from './Componet/Contact/Contact';
import Footer from './Componet/Footer/Footer';
import { themeContext } from './Context';
import { useContext } from 'react';
import Skills from './Componet/Skills/Skills';

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
      style={{
        background : darkMode? 'black' : '',
        color : darkMode? 'white' : ''
      }}

      >
     <Navbar/>
     <Intro />
     <Services />
     <Skills />
     {/* <Experience /> */}
     <Works />
     <Portfolio />
     <Testimonials />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
