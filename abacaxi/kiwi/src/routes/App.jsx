import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import Games from "../pages/Games";
import Sugestion from "../pages/Sugestoes";

export default function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" 
        element={<Games/>}/>
        
        <Route path="/about"
        element={<AboutUs/>}/>

        <Route path="/sugestion" 
        element={<Sugestion/>}/>
      </Routes>
    </Router>
  );
}