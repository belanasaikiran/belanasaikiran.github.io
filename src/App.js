import "./App.css";

import NavBar from "./Components/NavBar/NavBar";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import Error404 from "./Components/Error404/Error404";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
