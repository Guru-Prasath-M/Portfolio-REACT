import { BrowserRouter, Routes , Route } from "react-router";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import Skills from "./Components/Skills";
import Home from "./Components/Home";
import About from "./Components/About";
import Project from "./Components/Project";
import Contact from "./Components/Contact";

let App = ()=>{
  return <div>
    <BrowserRouter>
      <Navbar/>
      <div className="home-bg">
      <Section/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/index" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      </div>
    </BrowserRouter>
  </div>
}

export default App;
