import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Project1 from "./components/Project1";
import Project2 from "./components/Project2";
import Project3 from "./components/Project3";
import Project4 from "./components/Project4";
import Project5 from "./components/Project5";
import Project6 from "./components/Project6";
import Family from "./components/Family";
import Certs from "./components/Certs";
import Future from "./components/Future";
import Challenges from './components/Challenges';
import Resume from './components/Resume';


import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className='body'>
      
      <BrowserRouter basename="/Portfolio">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Hero/>
                <About/>
                <Family/>
                <Certs/>
                <Work/>
                <Skills/>
                <Challenges/>
                <Future/>
                <Resume/>
                <Contact/>
                <Footer/>
              </div>
            }
          />
          <Route path="/project1" element={<Project1/>} />
          <Route path="/project2" element={<Project2/>} />
          <Route path="/project3" element={<Project3/>} />
          <Route path="/project4" element={<Project4/>} />
          <Route path="/project5" element={<Project5/>} />
          <Route path="/project6" element={<Project6/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;