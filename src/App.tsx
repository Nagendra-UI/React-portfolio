import { Route, Routes } from "react-router-dom";
import ResponsiveAppBar from "./components/appbar";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Skills from "./pages/skills";
import './App.css'


function App() {
  return (

    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
        <Route path="/about" element={<About />}></Route>
        {/* <Route path="/contact" element={<Contact />}></Route> */}
      </Routes>

    </div>

  );
}

export default App;
