import Header from "../../Components/Header"
import BackgroundMain from "../../Components/Backgrounds/BackgroundMain"
import Footer from "../../Components/Footer"

import "./index.css"

export default function Home() {
    return(
        <div className="Home">
            <Header className="header"/>
            <BackgroundMain/>
            <Footer className="footer"/>
        </div>
    )
}