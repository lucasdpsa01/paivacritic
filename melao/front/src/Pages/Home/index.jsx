import Header from "../../Components/Header"
import BackgroundHome from "../../Components/Background/BackgroundHome"
import Footer from "../../Components/Footer"

import "./index.css"

export default function Home() {
    return(
        <div className="Home">
            <Header className="header"/>
            <BackgroundHome className="casabackground"/>
            <Footer className="footer"/>
        </div>
    )
}