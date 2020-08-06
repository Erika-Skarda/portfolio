import React from 'react';
import Header from "./Components/Header/Header";
import Home from "./Containers/Home";
import AboutMe from "./Containers/AboutMe";
import Tech from "./Containers/Techs";
import Education from './Containers/Education';
import Projects from "./Containers/Projects";
import HireMe from './Containers/HireMe';
import Footer from './Containers/Footer'

function App() {

  return (
    <>

      <Home />
      <AboutMe />
      <Tech />
      <Education />
      <Projects />
      <HireMe />
      <Footer />
    
    </>
  );
}

export default App;
