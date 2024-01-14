import './App.css';
import {React,  useRef } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Navbar from './components/navbar.js';
import Footer from './components/Footer.js';

function App() {
  const homeRef = useRef();
  const experienceRef = useRef();
  const projectsRef = useRef();

  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} onClick={() => scrollToRef(homeRef)}/>
          <Route path="/experience" element={<Experience/>} onClick={() => scrollToRef(experienceRef)}/>
          <Route path="/projects" element={<Projects/>} onClick={() => scrollToRef(projectsRef)}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
