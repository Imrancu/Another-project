import { Route, Routes } from "react-router-dom";
import About from "./Components/Pages/About/About";
import Home from "./Components/Pages/Home/Home";
import Login from "./Components/Pages/Login/Login";
import Navbar from "./Components/Pages/Shared/Navbar";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </div>
  );
}

export default App;
