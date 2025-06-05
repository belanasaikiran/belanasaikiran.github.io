import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";

import NavBar from "./Components/NavBar/NavBar";

import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen my-[-20px] pt-[20px] bg-dark dark:bg-black dark:text-white transition-colors duration-300">
        <NavBar />
        <div className="px-4 md:px-8 lg:px-24 xl:px-48">
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
