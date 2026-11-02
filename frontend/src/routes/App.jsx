import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Sugestion from "../Pages/Sugestion";
import Sobre from "../Pages/Sobre";
import Register from "../Components/Register";

export default function App() {
  return(
    <Router>
      <Routes>
        
        <Route path="/" element={<Home />} />
        
        <Route path="/sugestao" element={<Sugestion />} />
        
        <Route path="/sobre" element={<Sobre />} />

        <Route path="/register" element={<Register/>}/>
      </Routes>
    </Router>
  )
}