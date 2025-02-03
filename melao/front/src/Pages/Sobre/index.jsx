import Header from "../../Components/Header"
<<<<<<< HEAD
import SobreBackground from "../../Components/Backgrounds/BackgroundSobre"
import Footer from "../../Components/Footer"
=======
import BackgroundAbout from "../../Components/Background/BackgroundAbout"
import Footer from "../../Components/Footer/Geral"
>>>>>>> main

import "./index.css"

export default function Sobre() {
    return(
        <div className="sobre">
            <Header/>
            <BackgroundAbout/>
            <Footer/>
        </div>
    )
}