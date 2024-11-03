import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Project1 from "./components/Project1";
import Project2 from "./components/Project2";
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className='body'>
      
      <HashRouter basename="/Portfolio">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Hero/>
                <Skills/>
                <About/>
                <Work/>
                <Contact/>
                <Footer/>
              </div>
            }
          />
          <Route path="/project1" element={<Project1/>} />
          <Route path="/project2" element={<Project2/>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;