import Header from "../../components/Geral/Header"
import Home_Background from "../../components/Home/home-background"
import Footer from "../../components/Geral/Footer"

export default function Main() {
    return(
        <div className="page-main">
            <Header/>
            <Home_Background/>
            <Footer/>
        </div>
    )
}