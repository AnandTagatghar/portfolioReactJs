import React from "react";
import "./styles.css";
import Header from "./components/header";
import Navbar from "./components/navbar";
import About from "./components/about";
import Education from "./components/education";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
const App = () => {
  return (
    <div classNameName="App">
      <Header />
      <Navbar />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
