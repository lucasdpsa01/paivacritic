import Header from "../../Components/Header"
import BackgroundAbout from "../../Components/Background/BackgroundAbout"
import Footer from "../../Components/Footer"

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