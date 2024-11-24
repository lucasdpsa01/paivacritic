import Header from "../../Components/Header"
import CasaBackground from "../../Components/CasaBackground"
import Footer from "../../Components/Footer"

import "./index.css"

export default function Home() {
    return(
        <div className="Home">
            <Header className="header"/>
            <CasaBackground className="casabackground"/>
            <Footer className="footer"/>
        </div>
    )
}