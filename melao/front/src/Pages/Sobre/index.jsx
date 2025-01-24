import Header from "../../Components/Header"
import SobreBackground from "../../Components/Backgrounds/BackgroundSobre"
import Footer from "../../Components/Footer"

import "./index.css"

export default function Sobre() {
    return(
        <div className="sobre">
            <Header/>
            <SobreBackground/>
            <Footer/>
        </div>
    )
}