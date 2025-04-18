import "./App.css";

import NavBar from "./Components/NavBar/NavBar";

import Home from "./Components/Home/Home";
import Error404 from "./Components/Error404/Error404";
import Resume from "./Components/Resume/Resume";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import UCONN from "./Components/UCONN/uconn.jsx";

const UCONNBG =
  "https://images.unsplash.com/photo-1733840161253-f934dbd464ec?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

function App() {
  return (
    <div className=" min-h-screen">
      <NavBar />
      <div className="px-48">
        <Home />
        {/* <Resume /> */}
        <Projects />
        <Skills />
        {/* <UCONN /> */}
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default App;
