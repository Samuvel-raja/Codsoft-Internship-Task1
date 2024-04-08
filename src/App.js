
// import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
function App() {
  return (
    <>
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/projects" element={<Projects/>} />
      </Routes>
    </>

  );
}

export default App;
