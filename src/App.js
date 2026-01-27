import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

import NavBar from "./Components/NavBar/NavBar";

import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";

function App() {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      smooth: true,
      // ...other options
    });
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <ThemeProvider>
      <div className="font-[Quantico] min-h-screen my-[-20px] pt-[20px] bg-dark dark:bg-darkBrownBG dark:text-white transition-colors duration-300">
        <NavBar />
        <div className="px-4 md:px-8 lg:px-[16%]">
          <Home />
          {/* <Resume /> */}
          <Projects />
          <Skills />
          {/* <UCONN /> */}
          <Contact />
        </div>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
