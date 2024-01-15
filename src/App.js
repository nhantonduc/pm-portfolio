import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Navbar from './components/navbar.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Navbar/>
        <Home/>
        <Experience/>
        <Projects/>
        <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
