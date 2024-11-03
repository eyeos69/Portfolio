import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className='body'>
      <BrowserRouter basename="/portfolio">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
