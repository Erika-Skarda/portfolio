import React from 'react';
import Header from "./Components/Header/Header";
import Home from "./Containers/Home";
import AboutMe from "./Containers/AboutMe";
import Tech from "./Containers/Techs";
import Education from './Containers/Education';
import Projects from "./Containers/Projects";

function App() {

  return (

    <div className="App">


    <Home />
    <AboutMe />
    <Tech />
    <Education />
    <Projects />
    
    </div>
  );
}

export default App;
