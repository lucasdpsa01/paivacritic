import Header from "../../Components/Header"
<<<<<<< HEAD
import BackgroundMain from "../../Components/Backgrounds/BackgroundMain"
import Footer from "../../Components/Footer"
=======
import BackgroundHome from "../../Components/Background/BackgroundHome"
import Footer from "../../Components/Footer/Geral"
>>>>>>> main

import "./index.css"

export default function Home() {
    return(
        <div className="Home">
            <Header className="header"/>
<<<<<<< HEAD
            <BackgroundMain/>
=======
            <BackgroundHome className="casabackground"/>
>>>>>>> main
            <Footer className="footer"/>
        </div>
    )
}